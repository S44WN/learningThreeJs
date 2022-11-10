import "./style.css";
import * as THREE from "three";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
//adding the other two parameters ; near & far
const camera = new THREE.PerspectiveCamera(
  75, //fov - vertical
  sizes.width / sizes.height, //aspect ratio
  1, //near
  100 //far
);
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
// camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const cursor = {
  x: 0,
  y: 0,
};
//cursor
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.x, cursor.y);
});
// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  //   mesh.rotation.y = elapsedTime;

  //mrsh moves with cursor
  //   mesh.position.y = cursor.y * 5;
  //   mesh.position.x = cursor.x * 5;

  //camera moves with cursor
  //   camera.position.y = cursor.y * 5;
  //   camera.position.x = cursor.x * 5;
  //   camera.lookAt(mesh.position);

  // a full rotation of the camera around the mesh by using Math.sin(...) and Math.cos(...).
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  camera.position.y = cursor.y * 3;
  camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
