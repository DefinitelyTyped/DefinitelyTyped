import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

init();
animate();

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 50, 250);

    scene = new THREE.Scene();

    //

    const loader = new TGALoader();
    const geometry = new THREE.BoxGeometry(50, 50, 50);

    // add box 1 - grey8 texture

    const texture1 = loader.load('textures/crate_grey8.tga');
    const material1 = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture1 });

    const mesh1 = new THREE.Mesh(geometry, material1);
    mesh1.position.x = -50;

    scene.add(mesh1);

    // add box 2 - tga texture

    const texture2 = loader.load('textures/crate_color8.tga');
    const material2 = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture2 });

    const mesh2 = new THREE.Mesh(geometry, material2);
    mesh2.position.x = 50;

    scene.add(mesh2);

    //

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    //

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    renderer.render(scene, camera);
}
