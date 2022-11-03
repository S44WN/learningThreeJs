import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//axes-helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Objects
 */
// group
const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.2;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// position stuff
// mesh.position.x = 0.5;
// mesh.position.y = 0.3;
// mesh.position.z = 0.7;
// console.log(mesh.position.length());
// mesh.position.set(0.7, -0.6, 1);
// console.log(mesh.position.normalize());

// mesh scaling stuff
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.8;

// const p = Math.PI;

// mesh.rotation.x = p * 0.25;
// mesh.rotation.y = p * 0.25;
// mesh.rotation.z = p * 0.25;

// all transformation together
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 0.5;
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// console.log(mesh.position.distanceTo(camera.position));

// camera.lookAt(new THREE.Vector3(0, -1, 0));
// camera.lookAt(mesh.position)
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
