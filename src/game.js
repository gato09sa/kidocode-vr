import * as THREE from "three";

function makeGrid(size = 6, divisions = 6) {
  const grid = new THREE.GridHelper(size, divisions, 0x2f3b4a, 0x1d2630);
  grid.position.y = 0;
  return grid;
}

function yawFromDir(dir) {
  // dir 0: -Z, 1: +X, 2: +Z, 3: -X
  // Negative yaw for right turn keeps visual rotation consistent with movement mapping.
  if (dir === 0) return 0;
  if (dir === 1) return -Math.PI / 2;
  if (dir === 2) return Math.PI;
  return Math.PI / 2;
}

function createKidRobot() {
  const robot = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.09, 0.12, 6, 12),
    new THREE.MeshStandardMaterial({ color: 0x4cc9f0, roughness: 0.28, metalness: 0.08 })
  );
  body.position.y = 0.17;
  robot.add(body);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 20, 16),
    new THREE.MeshStandardMaterial({ color: 0xbfe8ff, roughness: 0.2, metalness: 0.05 })
  );
  head.position.y = 0.31;
  robot.add(head);

  const leftEye = new THREE.Mesh(
    new THREE.SphereGeometry(0.014, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x0f172a })
  );
  leftEye.position.set(-0.026, 0.325, -0.077);
  robot.add(leftEye);

  const rightEye = leftEye.clone();
  rightEye.position.x = 0.026;
  robot.add(rightEye);

  // Nariz/flecha frontal para que se note claramente el giro.
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.026, 0.09, 10),
    new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 })
  );
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.26, -0.12);
  robot.add(nose);

  const feet = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 0.04, 12),
    new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.65 })
  );
  feet.position.y = 0.02;
  robot.add(feet);

  return robot;
}

function createTargetCrystal() {
  const target = new THREE.Group();

  const core = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.095, 0),
    new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0x7c2d12,
      emissiveIntensity: 0.75,
      roughness: 0.2,
      metalness: 0.1
    })
  );
  core.position.y = 0.2;
  target.add(core);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.14, 0.014, 10, 24),
    new THREE.MeshStandardMaterial({ color: 0xfcd34d, emissive: 0x92400e, emissiveIntensity: 0.5 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.12;
  target.add(ring);

  return { target, core, ring };
}

export function createGameWorld(scene, callbacks = {}) {
  const root = new THREE.Group();
  scene.add(root);

  // Floor + grid area (left side)
  const grid = makeGrid(6, 6);
  grid.position.set(-1.2, 0, -1.2);
  root.add(grid);

  const floorGeo = new THREE.PlaneGeometry(6, 6);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x101722, roughness: 1 });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(-1.2, 0, -1.2);
  floor.receiveShadow = true;
  root.add(floor);

  const robot = createKidRobot();
  robot.position.set(-1.2, 0, -1.2);
  root.add(robot);

  const crystal = createTargetCrystal();
  const target = crystal.target;
  target.position.set(-1.2 + 0.6, 0, -1.2 - 0.6);
  root.add(target);

  // Direction: 0=N,1=E,2=S,3=W (we’ll use +Z as “south” visually)
  const state = {
    robot,
    target,
    targetCore: crystal.core,
    targetRing: crystal.ring,
    gridOrigin: new THREE.Vector3(-1.2, 0, -1.2),
    tile: 1.0,
    dir: 0,
    busy: false,
    queue: [],
    caught: false,
    // animation internals
    _anim: null
  };

  function resetWorld() {
    state.robot.position.set(state.gridOrigin.x, 0, state.gridOrigin.z);
    state.dir = 0;
    state.robot.rotation.set(0, yawFromDir(state.dir), 0);
    state.target.visible = true;
    state.caught = false;
    state.busy = false;
    state.queue = [];
    state._anim = null;
  }

  function enqueue(actions) {
    state.queue.push(...actions);
  }

  function turn(delta) {
    // delta is +1 right, -1 left
    state.dir = (state.dir + (delta === 1 ? 1 : 3)) % 4;
    const y = yawFromDir(state.dir);
    state._anim = { type: "turn", t: 0, dur: 0.35, from: state.robot.rotation.y, to: y };
  }

  function moveForward() {
    const d = state.dir;
    const step = new THREE.Vector3(0, 0, 0);
    // Define dir mapping to grid plane (x,z)
    // dir 0: up (-z), 1: right (+x), 2: down (+z), 3: left (-x)
    if (d === 0) step.z = -1;
    if (d === 1) step.x = 1;
    if (d === 2) step.z = 1;
    if (d === 3) step.x = -1;

    const from = state.robot.position.clone();
    const to = from.clone().add(step.multiplyScalar(state.tile * 0.5)); // smaller steps look nicer
    // keep inside a 3x3 playable area around origin
    const minX = state.gridOrigin.x - 1.5, maxX = state.gridOrigin.x + 1.5;
    const minZ = state.gridOrigin.z - 1.5, maxZ = state.gridOrigin.z + 1.5;
    to.x = THREE.MathUtils.clamp(to.x, minX, maxX);
    to.z = THREE.MathUtils.clamp(to.z, minZ, maxZ);

    state._anim = { type: "move", t: 0, dur: 0.45, from, to };
  }

  function catchTarget() {
  const rp = state.robot.position;
  const tp = state.target.position;
  const dist = Math.hypot(rp.x - tp.x, rp.z - tp.z);

  if (!state.caught && dist < 0.28) {
    state.caught = true;
    state.target.visible = false;
    callbacks.onCatchSuccess?.();
  }
}

  function step() {
  if (state._anim) return;

  const a = state.queue.shift();

  if (!a) {
    state.busy = false;
    if (!state.caught) {
      callbacks.onRunFinishedWithoutSuccess?.();
    }
    return;
  }

  if (a.type === "move") moveForward();
  if (a.type === "turn") turn(a.dir);
  if (a.type === "catch") {
    catchTarget();
    state._anim = { type: "wait", t: 0, dur: 0.22 };
  }
}

  function update(dt) {
    if (state.busy) step();

    if (state._anim) {
      state._anim.t += dt;
      const k = Math.min(1, state._anim.t / state._anim.dur);

      if (state._anim.type === "move") {
        state.robot.position.lerpVectors(state._anim.from, state._anim.to, k);
      } else if (state._anim.type === "turn") {
        state.robot.rotation.y = THREE.MathUtils.lerp(state._anim.from, state._anim.to, k);
      }

      if (k >= 1) state._anim = null;
    }

    if (state.target.visible) {
      state.targetCore.rotation.y += dt * 2.4;
      state.targetRing.rotation.z += dt * 1.8;
      state.target.position.y = 0.02 + Math.sin(performance.now() * 0.004) * 0.02;
    }
  }

  return {
    root,
    state,
    resetWorld,
    enqueue,
    run(actions) {
      if (state.busy) return;
      state.busy = true;
      state.queue = [];
      enqueue(actions);
    },
    update
  };
}
