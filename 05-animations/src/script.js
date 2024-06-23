import * as THREE from "three";
import gsap from "gsap";

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

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//animations

/*
making the cube rotate by time set by us

let time = Date.now(); //current time in milliseconds

const tick = () => {
  //time

  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  //update objects
  mesh.rotation.y += 0.001 * deltaTime; //rotates 1 degree per second

  //render
  renderer.render(scene, camera);

  // call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick(); 
*/

/* 
Using clock to make the cube rotate by time set by us ( more accurate than using Date.now() )
provided by three.js

*/

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime(); //time in seconds

  //update objects
  //   mesh.rotation.y = elapsedTime;

  //   console.log(Math.sin(elapsedTime));

  //make it move in a circle
  //   mesh.position.x = Math.cos(elapsedTime);
  //   mesh.position.y = Math.sin(elapsedTime);

  //make the camera move in a circle
  //   camera.position.x = Math.sin(elapsedTime);
  //   camera.position.y = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);

  //render
  renderer.render(scene, camera);

  // call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
