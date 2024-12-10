import * as THREE from "three";

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light source
const light = new THREE.AmbientLight(0x404040); // Ambient light
scene.add(light);

// Add a point light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Load your spline model (assuming it's in GLTF format)
const loader = new THREE.GLTFLoader();
loader.load(
  "path/to/your/spline_model.gltf",
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(1, 1, 1); // Adjust scale if necessary
  },
  undefined,
  (error) => {
    console.error(error);
  }
);

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the model (optional)
  scene.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
