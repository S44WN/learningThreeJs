import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  camera.position.x = Math.cos(elapsedTime);
  camera.position.y = Math.sin(elapsedTime);
  camera.lookAt(mesh.position);

  // ...
};

tick();

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// let time = Date.now();
// const clock = new THREE.Clock();

// const tick = () => {
//   console.log("tick");
//   //   const currentTime = Date.now();
//   //   const deltaTime = (currentTime - time) * 0.1;
//   //   time = currentTime;
//   //   mesh.rotation.y += 0.01 * deltaTime;
//   //   mesh.rotation.x += 0.01 * deltaTime;
//   //   mesh.rotation.z += 0.01 * deltaTime;

//   const elapsedTime = clock.getElapsedTime();
//   console.log(elapsedTime);
//   mesh.rotation.y = elapsedTime;
//   mesh.position.x = Math.cos(elapsedTime);
//   mesh.position.y = Math.sin(elapsedTime);
//   console.log(Math.cos(elapsedTime));
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };

// tick();
