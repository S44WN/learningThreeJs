//get canvas
const canvas = document.querySelector("canvas.webgl");

//scene
const scene = new THREE.Scene();

//object = mesh - geometry+material
const geometry = new THREE.BoxGeometry(1, 1, 1); //geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //material
const mesh = new THREE.Mesh(geometry, material); //mesh

scene.add(mesh);

//sizes
const sizes = {
  width: 800,
  height: 600,
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
