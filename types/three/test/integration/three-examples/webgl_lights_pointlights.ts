import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const light1 = new THREE.PointLight(0xff0040, 2, 50);
const light2 = new THREE.PointLight(0x0040ff, 2, 50);
const light3 = new THREE.PointLight(0x80ff80, 2, 50);
const light4 = new THREE.PointLight(0xffaa00, 2, 50);
let object: THREE.Group;

const clock = new THREE.Clock();

init();
animate();

function init() {
    camera.position.z = 100;

    const loader = new OBJLoader();
    loader.load('models/obj/walt/WaltHead.obj', (obj: THREE.Group) => {
        object = obj;
        object.scale.multiplyScalar(0.8);
        object.position.y = -30;
        scene.add(object);
    });

    const sphere = new THREE.SphereGeometry(0.5, 16, 8);

    light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
    scene.add(light1);

    light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff })));
    scene.add(light2);

    light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 })));
    scene.add(light3);

    light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 })));
    scene.add(light4);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

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
    const time = Date.now() * 0.0005;
    const delta = clock.getDelta();

    if (object) object.rotation.y -= 0.5 * delta;

    light1.position.x = Math.sin(time * 0.7) * 30;
    light1.position.y = Math.cos(time * 0.5) * 40;
    light1.position.z = Math.cos(time * 0.3) * 30;

    light2.position.x = Math.cos(time * 0.3) * 30;
    light2.position.y = Math.sin(time * 0.5) * 40;
    light2.position.z = Math.sin(time * 0.7) * 30;

    light3.position.x = Math.sin(time * 0.7) * 30;
    light3.position.y = Math.cos(time * 0.3) * 40;
    light3.position.z = Math.sin(time * 0.5) * 30;

    light4.position.x = Math.sin(time * 0.3) * 30;
    light4.position.y = Math.cos(time * 0.7) * 40;
    light4.position.z = Math.sin(time * 0.5) * 30;

    renderer.render(scene, camera);
}
