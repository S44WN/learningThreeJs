import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const particleTexture = textureLoader.load("/textures/particles/2.png");

/**
 * particles
 */

// const particleGeometry = new THREE.SphereGeometry(1, 32, 32);
const particleGeometry = new THREE.BufferGeometry();
const count = 5000;

const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
  colors[i] = Math.random();
}

particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const particleMaterial = new THREE.PointsMaterial();
particleMaterial.size = 0.15;
particleMaterial.sizeAttenuation = true;
// particleMaterial.color = new THREE.Color("#ff88cc");

particleMaterial.vertexColors = true; // to use the colors of the vertices

// to make the particles transparent but still the edges are slighly visible
particleMaterial.transparent = true;
particleMaterial.alphaMap = particleTexture;

//fixing
// particleMaterial.alphaTest = 0.001; // if the alpha is less than 0.001 then it will be discarded

/* 
to make the particles glow and not be hidden by other objects
but it might create bugs for other objects and colors
*/
// particleMaterial.depthTest = false;

/* 
depthWrite is used to make the particles glow and not be hidden by other objects
it tells the gpu to not write the depth of the particles in depth buffer 
depth buffer is used to know which object is in front of the other
*/
particleMaterial.depthWrite = false;

// adds the color of the particles to the color of the object behind it
particleMaterial.blending = THREE.AdditiveBlending;

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

gui
  .add(particleMaterial, "size")
  .min(0)
  .max(1)
  .step(0.001)
  .name("particleSize");

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const x = particleGeometry.attributes.position.array[i3];
    particleGeometry.attributes.position.array[i3 + 1] = Math.sin(
      elapsedTime + x
    );
  }

  particleGeometry.attributes.position.needsUpdate = true;
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
