import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { createUIRig } from "./ui.js";
import { createGameWorld } from "./game.js";
import { setupXRInput } from "./xr-input.js";
import { loginAnonymous } from "./firebase.js";
import { createAnalytics } from "./analytics.js";

const user = await loginAnonymous();
console.log("Usuario conectado:", user.uid);
const analytics = createAnalytics(user);
analytics.startSession();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer));

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0f14);

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 100);
const playerRig = new THREE.Group();
playerRig.position.set(0, 0, 0);
playerRig.add(camera);
scene.add(playerRig);
camera.position.set(0, 1.6, 2.4);

const hemi = new THREE.HemisphereLight(0xffffff, 0x223344, 1.0);
scene.add(hemi);

const dir = new THREE.DirectionalLight(0xffffff, 1.1);
dir.position.set(2, 6, 3);
scene.add(dir);

const world = createGameWorld(scene, {
  onCatchSuccess: async () => {
    analytics.log("target_caught");
    await analytics.finishSession(true);
  },
  onRunFinishedWithoutSuccess: () => {
    analytics.log("run_finished_without_success");
  }
});
const ui = createUIRig(scene, world, analytics);

const xr = setupXRInput(renderer, scene, camera, ui, playerRig);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let lastT = 0;
renderer.setAnimationLoop((t) => {
  const dt = Math.min(0.05, (t - lastT) / 1000);
  lastT = t;

  world.update(dt);
  ui.update(dt);
  xr.update(dt);

  renderer.render(scene, camera);
});
