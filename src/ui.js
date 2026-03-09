import * as THREE from "three";

function roundedPanel(w, h, color = 0x141b24) {
  const geo = new THREE.PlaneGeometry(w, h);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

function labelSprite(text, scale = 0.12) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold 58px system-ui, sans-serif";
  ctx.fillStyle = "#EAF2FF";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(scale * 2.2, scale), mat);
  return mesh;
}

function makeButton({ text, w = 0.42, h = 0.14, color = 0x2563eb, tag = "", labelScale = 0.11 }) {
  const g = new THREE.Group();
  const panel = roundedPanel(w, h, color);
  panel.userData.isUIButton = true;
  panel.userData.tag = tag;
  g.add(panel);

  const lab = labelSprite(text, labelScale);
  lab.position.set(0, 0, 0.01);
  g.add(lab);

  // add invisible “hitbox” slightly bigger
  const hit = new THREE.Mesh(
    new THREE.PlaneGeometry(w * 1.1, h * 1.3),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );
  hit.userData.isUIButton = true;
  hit.userData.tag = tag;
  g.add(hit);

  return g;
}

function makeMissionBanner(text) {
  const g = new THREE.Group();

  const bg = roundedPanel(2.25, 0.22, 0x1a2638);
  bg.position.set(0, 0, -0.002);
  g.add(bg);

  const canvas = document.createElement("canvas");
  canvas.width = 3072;
  canvas.height = 384;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 142px system-ui, sans-serif";
  ctx.fillStyle = "#f8fafc";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const txt = new THREE.Mesh(
    new THREE.PlaneGeometry(2.12, 0.17),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, depthWrite: false })
  );
  txt.position.set(0, 0, 0.002);
  g.add(txt);

  return g;
}

function makeBlock({ name, kind, color }) {
  const g = new THREE.Group();
  g.userData.isBlockRoot = true;
  g.userData.blockKind = kind;
  g.userData.blockName = name;

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.34, 0.08, 0.12),
    new THREE.MeshStandardMaterial({ color, roughness: 0.65 })
  );
  body.userData.isBlock = true;
  body.userData.blockKind = kind;
  body.userData.blockName = name;
  g.add(body);

  const lab = labelSprite(name, 0.22);
  lab.position.set(0, 0.01, 0.09);
  g.add(lab);

  // easy grab hitbox
  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.14, 0.16),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );
  hit.userData.isBlock = true;
  hit.userData.blockKind = kind;
  hit.userData.blockName = name;
  g.add(hit);

  return g;
}

export function createUIRig(scene, world, analytics) {
  const rig = new THREE.Group();
  scene.add(rig);

  // Place all UI comfortably in front of user in VR
  // Center UI at about 1.3m height, ~1.2m away
  rig.position.set(0.0, 1.35, -1.2);

  // ===== Panels (delimitados) =====
  // Left: World is already in scene (we keep UI separate)
  // Center: Program
  const programPanel = new THREE.Group();
  programPanel.position.set(0.0, 0.0, 0.0);
  rig.add(programPanel);

  const pBg = roundedPanel(0.85, 0.75, 0x0f1620);
  pBg.position.set(0, 0, -0.01);
  programPanel.add(pBg);

  const pTitle = labelSprite("PASOS DEL ROBOT", 0.24);
  pTitle.position.set(0, 0.34, 0.02);
  programPanel.add(pTitle);

  // Right: Blocks
  const blocksPanel = new THREE.Group();
  blocksPanel.position.set(1.25, 0.0, 0.0);
  rig.add(blocksPanel);

  const bBg = roundedPanel(1.12, 0.75, 0x0f1620);
  bBg.position.set(0, 0, -0.01);
  blocksPanel.add(bBg);

  const bTitle = labelSprite("INSTRUCCIONES PARA MOVERLO", 0.47);
  bTitle.position.set(0, 0.34, 0.02);
  blocksPanel.add(bTitle);

  // Top buttons row (Run / Reset)
  const topPanel = new THREE.Group();
  topPanel.position.set(0.28, 0.48, 0);
  rig.add(topPanel);

  const missionBanner = makeMissionBanner("RETO: Ayuda al robot a atrapar el cristal dorado");
  missionBanner.position.set(-0.52, 0.22, 0.02);
  topPanel.add(missionBanner);

  const runBtn = makeButton({
    text: "PROBAR RUTA",
    w: 0.66,
    color: 0x16a34a,
    tag: "run",
    labelScale: 0.19
  });
  runBtn.position.set(0.0, 0, 0.01);
  topPanel.add(runBtn);

  const resetBtn = makeButton({
    text: "EMPEZAR DE NUEVO",
    w: 0.98,
    color: 0x2563eb,
    tag: "reset",
    labelScale: 0.19
  });
  resetBtn.position.set(-0.92, 0, 0.01);
  topPanel.add(resetBtn);

  // ===== Program slots =====
  const slots = [];
  const slotCount = 8;

  for (let i = 0; i < slotCount; i++) {
    const y = 0.22 - i * 0.07;

    const slot = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.055, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x162132, roughness: 1 })
    );
    slot.position.set(0, y, 0.0);
    slot.userData.isSlot = true;
    slot.userData.slotIndex = i;
    programPanel.add(slot);

    const idx = labelSprite(String(i + 1), 0.08);
    idx.position.set(-0.38, y, 0.03);
    programPanel.add(idx);

    slots.push(slot);
  }

  // ===== Blocks list =====
  const blockDefs = [
    { name: "Avanzar", kind: "move", color: 0x22c55e },
    { name: "Girar Izq", kind: "turnLeft", color: 0x60a5fa },
    { name: "Girar Der", kind: "turnRight", color: 0x60a5fa },
    { name: "Atrapar", kind: "catch", color: 0xf97316 }
  ];

  const blockSpawns = [];
  const blocks = [];
  blockDefs.forEach((d, i) => {
    const blk = makeBlock(d);
    blk.position.set(0, 0.22 - i * 0.12, 0.02);
    blocksPanel.add(blk);
    blocks.push(blk);
    blockSpawns.push(blk.position.clone());
  });

  // ===== Program model =====
  const program = new Array(slotCount).fill(null); // { kind, mesh }

  function clearProgram() {
    for (let i = 0; i < program.length; i++) {
      if (program[i]?.mesh) {
        // remove placed block mesh
        program[i].mesh.parent?.remove(program[i].mesh);
      }
      program[i] = null;
    }
  }

  function detachPlacedBlock(blockMesh) {
    for (let i = 0; i < program.length; i++) {
      if (program[i]?.mesh === blockMesh) {
        program[i] = null;
      }
    }
  }

  function compileActions() {
    const actions = [];
    for (const item of program) {
      if (!item) continue;
      if (item.kind === "move") actions.push({ type: "move" });
      if (item.kind === "turnLeft") actions.push({ type: "turn", dir: -1 });
      if (item.kind === "turnRight") actions.push({ type: "turn", dir: 1 });
      if (item.kind === "catch") actions.push({ type: "catch" });
    }
    return actions;
  }

  // Helper: create a NEW block instance to place in slots (so palette stays)
  function spawnBlockInstance(kind) {
    const def = blockDefs.find(x => x.kind === kind);
    const inst = makeBlock(def);
    inst.userData.isPlacedInstance = true;
    return inst;
  }

  // called by XR interaction: attempt snap on release
  function trySnapBlock(blockRoot) {
    // blockRoot is a Group. We'll snap based on world position distance to slot centers.
    const p = blockRoot.getWorldPosition(new THREE.Vector3());

    let best = { i: -1, d: Infinity };
    for (let i = 0; i < slots.length; i++) {
      const slotWorld = slots[i].getWorldPosition(new THREE.Vector3());
      const d = p.distanceTo(slotWorld);
      if (d < best.d) best = { i, d };
    }

    // snap threshold: forgiving for kids
    if (best.d < 0.32) {
      const i = best.i;

      // if slot already occupied: replace it
      if (program[i]?.mesh) {
        program[i].mesh.parent?.remove(program[i].mesh);
        program[i] = null;
      }

      // attach to programPanel and position at slot local coords
      programPanel.add(blockRoot);
      const slotLocal = slots[i].position.clone();
      blockRoot.position.set(slotLocal.x + 0.08, slotLocal.y, 0.06);
      blockRoot.rotation.set(0, 0, 0);

      program[i] = { kind: blockRoot.userData.blockKind, mesh: blockRoot };
      return true;
    }

    return false;
  }

  // Palette blocks should never be removed; when you “grab” from palette,
  // we create a placed instance to follow the controller.
  function createGrabInstanceFromPalette(paletteHit) {
    const kind = paletteHit.userData.blockKind;
    return spawnBlockInstance(kind);
  }

  const interactables = {
    rig,
    programPanel,
    blocksPanel,
    topPanel,
    slots,
    blocks, // palette blocks
    runBtn,
    resetBtn,
    trySnapBlock,
    createGrabInstanceFromPalette,
    detachPlacedBlock,
    clearProgram,
    compileActions,
    onUIButton(tag) {
      if (tag === "reset") {
        analytics?.log("reset_pressed");
        clearProgram();
        world.resetWorld();
      }
      if (tag === "run") {
        const actions = compileActions();

          analytics?.addAttempt(actions);
          analytics?.log("run_pressed", { actions });

          world.resetWorld();
          world.run(actions);
}
    }
  };

  function update() {
    // could add hover highlights here later
  }

  return { rig, interactables, update };
}
