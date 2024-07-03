import * as THREE from "three";

let scene, camera, renderer, ring;
const imageContainers = [];

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 5;

  createRing();
  animate();
}

function createRing() {
  ring = new THREE.Group();
  const numContainers = 5;
  const radius = 2;

  for (let i = 0; i < numContainers; i++) {
    const angle = (i / numContainers) * Math.PI * 2;
    const container = createImageContainer();
    container.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      0
    );
    container.lookAt(scene.position);
    ring.add(container);
    imageContainers.push(container);
  }

  scene.add(ring);
}

function createImageContainer() {
  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  return new THREE.Mesh(geometry, material);
}

function animate() {
  requestAnimationFrame(animate);
  ring.rotation.z -= 0.005; // Slow rotation around Z-axis for vertical flow
  renderer.render(scene, camera);
}

init();

// Mouse dragging functionality will be added here
