import * as THREE from "three";

export function setupXRInput(renderer, scene, camera, ui, playerRig) {
  const raycaster = new THREE.Raycaster();
  const tempMatrix = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  const _forward = new THREE.Vector3();
  const _right = new THREE.Vector3();
  const _move = new THREE.Vector3();
  const _up = new THREE.Vector3(0, 1, 0);
  const MOVE_SPEED = 1.6;
  const TURN_SPEED = 1.8;
  const DEADZONE = 0.18;

  // Controllers
  const controller1 = renderer.xr.getController(0);
  const controller2 = renderer.xr.getController(1);
  playerRig.add(controller1, controller2);

  const controllerGrip1 = renderer.xr.getControllerGrip(0);
  const controllerGrip2 = renderer.xr.getControllerGrip(1);
  playerRig.add(controllerGrip1, controllerGrip2);

  function makeRay() {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1)
    ]);
    const mat = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geo, mat);
    line.name = "ray";
    line.scale.z = 3;
    return line;
  }

  controller1.add(makeRay());
  controller2.add(makeRay());

  const state = {
    grabbing: new Map(), // controller -> grabbedObjectRoot
    input: {
      leftX: 0,
      leftY: 0,
      rightX: 0
    }
  };

  function onControllerConnected(event) {
    event.target.userData.gamepad = event.data?.gamepad || null;
  }

  function onControllerDisconnected(event) {
    event.target.userData.gamepad = null;
  }

  function getIntersections(controller) {
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

    // Gather hit targets:
    const hits = [];

    // slots + buttons + palette blocks + placed instances live in these groups
    ui.interactables.rig.traverse((obj) => {
      if (obj.userData.isUIButton || obj.userData.isBlock || obj.userData.isSlot) hits.push(obj);
    });

    return raycaster.intersectObjects(hits, false);
  }

  function rootOfBlock(hitObj) {
    // We tagged block roots with isBlockRoot on Group.
    // Hit may be the body mesh or hitbox inside a group.
    let o = hitObj;
    while (o && !o.userData.isBlockRoot && o.parent) o = o.parent;
    return o?.userData.isBlockRoot ? o : null;
  }

  function onSelectStart(e) {
    const controller = e.target;

    const intersections = getIntersections(controller);
    if (!intersections.length) return;

    const picked = intersections[0];
    const hit = picked.object;

    // UI button?
    if (hit.userData.isUIButton) {
      ui.interactables.onUIButton(hit.userData.tag);
      return;
    }

    // Block?
    if (hit.userData.isBlock) {
      const blockRoot = rootOfBlock(hit);
      if (!blockRoot) return;

      // If this is a palette block (not placed instance), create a new instance
      let grabObj = blockRoot;
      if (!blockRoot.userData.isPlacedInstance) {
        grabObj = ui.interactables.createGrabInstanceFromPalette(hit);
        scene.add(grabObj);
        grabObj.position.copy(blockRoot.getWorldPosition(new THREE.Vector3()));
      } else {
        // If it was already snapped in a slot, free that slot before moving it.
        ui.interactables.detachPlacedBlock(blockRoot);
      }

      controller.attach(grabObj);
      // Keep the grab point close to where the kid touched, avoiding big jumps.
      const localGrabPoint = controller.worldToLocal(picked.point.clone());
      grabObj.position.copy(localGrabPoint);
      grabObj.position.z -= 0.04;
      grabObj.rotation.set(0, 0, 0);
      state.grabbing.set(controller, grabObj);
      return;
    }
  }

  function onSelectEnd(e) {
    const controller = e.target;
    const grabbed = state.grabbing.get(controller);
    if (!grabbed) return;

    // detach to scene preserving world transform
    scene.attach(grabbed);

    // try snap to a slot
    const snapped = ui.interactables.trySnapBlock(grabbed);

    if (!snapped) {
      // if it was a placed instance and not snapped, remove it
      if (grabbed.userData.isPlacedInstance) {
        grabbed.parent?.remove(grabbed);
      }
    }

    state.grabbing.delete(controller);
  }

  controller1.addEventListener("selectstart", onSelectStart);
  controller1.addEventListener("selectend", onSelectEnd);
  controller2.addEventListener("selectstart", onSelectStart);
  controller2.addEventListener("selectend", onSelectEnd);
  controller1.addEventListener("connected", onControllerConnected);
  controller1.addEventListener("disconnected", onControllerDisconnected);
  controller2.addEventListener("connected", onControllerConnected);
  controller2.addEventListener("disconnected", onControllerDisconnected);

  function readControllersAxes() {
    const readPad = (controller) => {
      const gp = controller.userData.gamepad;
      if (!gp || !gp.axes || gp.axes.length < 2) return [0, 0];
      const n = gp.axes.length;
      return [gp.axes[n - 2] || 0, gp.axes[n - 1] || 0];
    };

    const [lx, ly] = readPad(controller1);
    const [rx] = readPad(controller2);
    state.input.leftX = lx;
    state.input.leftY = ly;
    state.input.rightX = rx;
  }

  function updateLocomotion(dt) {
    if (!renderer.xr.isPresenting) return;

    const lx = Math.abs(state.input.leftX) > DEADZONE ? state.input.leftX : 0;
    const ly = Math.abs(state.input.leftY) > DEADZONE ? state.input.leftY : 0;
    const rx = Math.abs(state.input.rightX) > DEADZONE ? state.input.rightX : 0;

    if (lx === 0 && ly === 0 && rx === 0) return;

    _forward.set(0, 0, -1).applyQuaternion(camera.quaternion);
    _forward.y = 0;
    if (_forward.lengthSq() < 1e-6) return;
    _forward.normalize();

    _right.crossVectors(_forward, _up).normalize();
    _move.set(0, 0, 0);
    _move.addScaledVector(_forward, -ly * MOVE_SPEED * dt);
    _move.addScaledVector(_right, lx * MOVE_SPEED * dt);
    playerRig.position.add(_move);
    playerRig.rotation.y -= rx * TURN_SPEED * dt;
  }

  function update(dt) {
    readControllersAxes();
    updateLocomotion(dt);

    // Keep grabbed blocks orientation stable while following controller position.
    // This avoids strong wrist-rotation artifacts on Quest.
    for (const [controller, grabbed] of state.grabbing.entries()) {
      controller.getWorldQuaternion(_q);
      _q.invert();
      grabbed.quaternion.copy(_q);
    }
  }

  return { update };
}
