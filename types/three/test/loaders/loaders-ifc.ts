import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8cc7de);

// Renderer
const container = document.querySelector('#container')!;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setAnimationLoop(animation);
container.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -70;
camera.position.y = 25;
camera.position.x = 90;
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);

// Initial cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lights
const directionalLight1 = new THREE.DirectionalLight(0xffeeff, 0.8);
directionalLight1.position.set(1, 1, 1);
scene.add(directionalLight1);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight2.position.set(-1, 0.5, -1);
scene.add(directionalLight2);
const ambientLight = new THREE.AmbientLight(0xffffee, 0.25);
scene.add(ambientLight);

// Window resize support
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Setup IFC Loader
const ifcLoader = new IFCLoader();

// Load IFC file
ifcLoader.load('models/ifc/rac_advanced_sample_project.ifc', geometry => scene.add(geometry));

// Animation
function animation() {
    controls.update();
    renderer.render(scene, camera);
}
