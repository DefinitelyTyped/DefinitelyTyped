import * as THREE from 'three';

import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 300);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
let controls: TrackballControls;
let light1: THREE.PointLight;
let light2: THREE.PointLight;
let light3: THREE.PointLight;
let light4: THREE.PointLight;
let light5: THREE.PointLight;
let light6: THREE.PointLight;

const clock = new THREE.Clock();

init();
animate();

function init() {
    const container = document.getElementById('container');

    // CAMERA

    camera.position.set(0, 15, 150);
    camera.lookAt(0, 0, 0);

    // SCENE

    scene.background = new THREE.Color(0x040306);
    scene.fog = new THREE.Fog(0x040306, 10, 300);

    // TEXTURES

    const textureLoader = new THREE.TextureLoader();

    const texture = textureLoader.load('textures/disturb.jpg');
    texture.repeat.set(20, 10);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.encoding = THREE.sRGBEncoding;

    // MATERIALS

    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
    const objectMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 1.0 });

    // GROUND

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(800, 400, 2, 2), groundMaterial);
    mesh.position.y = -5;
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);

    // OBJECTS

    const objectGeometry = new THREE.TorusGeometry(1.5, 0.4, 8, 16);

    for (let i = 0; i < 5000; i++) {
        const mesh = new THREE.Mesh(objectGeometry, objectMaterial);

        mesh.position.x = 400 * (0.5 - Math.random());
        mesh.position.y = 50 * (0.5 - Math.random()) + 25;
        mesh.position.z = 200 * (0.5 - Math.random());

        mesh.rotation.y = 3.14 * (0.5 - Math.random());
        mesh.rotation.x = 3.14 * (0.5 - Math.random());

        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        scene.add(mesh);
    }

    // LIGHTS

    const intensity = 2.5;
    const distance = 100;
    const decay = 2.0;

    const c1 = 0xff0040;
    const c2 = 0x0040ff;
    const c3 = 0x80ff80;
    const c4 = 0xffaa00;
    const c5 = 0x00ffaa;
    const c6 = 0xff1100;

    const sphere = new THREE.SphereGeometry(0.25, 16, 8);

    light1 = new THREE.PointLight(c1, intensity, distance, decay);
    light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: c1 })));
    scene.add(light1);

    light2 = new THREE.PointLight(c2, intensity, distance, decay);
    light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: c2 })));
    scene.add(light2);

    light3 = new THREE.PointLight(c3, intensity, distance, decay);
    light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: c3 })));
    scene.add(light3);

    light4 = new THREE.PointLight(c4, intensity, distance, decay);
    light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: c4 })));
    scene.add(light4);

    light5 = new THREE.PointLight(c5, intensity, distance, decay);
    light5.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: c5 })));
    scene.add(light5);

    light6 = new THREE.PointLight(c6, intensity, distance, decay);
    light6.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: c6 })));
    scene.add(light6);

    const dlight = new THREE.DirectionalLight(0xffffff, 0.05);
    dlight.position.set(0.5, 1, 0).normalize();
    scene.add(dlight);

    // RENDERER

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (container) {
        container.appendChild(renderer.domElement);
    }
    renderer.outputEncoding = THREE.sRGBEncoding;

    // CONTROLS

    controls = new TrackballControls(camera, renderer.domElement);

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.dynamicDampingFactor = 0.15;

    controls.keys = ['KeyA', 'KeyS', 'KeyD'];

    //

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    controls.handleResize();
}

//

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    const time = Date.now() * 0.00025;
    const d = 150;

    light1.position.x = Math.sin(time * 0.7) * d;
    light1.position.z = Math.cos(time * 0.3) * d;

    light2.position.x = Math.cos(time * 0.3) * d;
    light2.position.z = Math.sin(time * 0.7) * d;

    light3.position.x = Math.sin(time * 0.7) * d;
    light3.position.z = Math.sin(time * 0.5) * d;

    light4.position.x = Math.sin(time * 0.3) * d;
    light4.position.z = Math.sin(time * 0.5) * d;

    light5.position.x = Math.cos(time * 0.3) * d;
    light5.position.z = Math.sin(time * 0.5) * d;

    light6.position.x = Math.cos(time * 0.7) * d;
    light6.position.z = Math.cos(time * 0.5) * d;

    controls.update();

    renderer.render(scene, camera);
}
