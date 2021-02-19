import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);

const spotLight = new THREE.SpotLight(0xffffff, 1);
const lightHelper = new THREE.SpotLightHelper(spotLight);
const shadowCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);

function init() {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;

    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;

    camera.position.set(160, 40, 10);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.minDistance = 20;
    controls.maxDistance = 500;
    controls.enablePan = false;

    const ambient = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambient);

    spotLight.position.set(15, 40, 35);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 200;

    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 512;
    spotLight.shadow.mapSize.height = 512;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 200;
    spotLight.shadow.focus = 1;
    scene.add(spotLight);

    scene.add(lightHelper);

    scene.add(shadowCameraHelper);

    //

    let material = new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true });

    const geometry = new THREE.PlaneGeometry(2000, 2000);

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, -1, 0);
    mesh.rotation.x = -Math.PI * 0.5;
    mesh.receiveShadow = true;
    scene.add(mesh);

    //

    material = new THREE.MeshPhongMaterial({ color: 0x4080ff, dithering: true });

    const clyGeometry = new THREE.CylinderGeometry(5, 5, 2, 32, 1, false);

    const clyMesh = new THREE.Mesh(clyGeometry, material);
    clyMesh.position.set(0, 5, 0);
    clyMesh.castShadow = true;
    scene.add(clyMesh);

    render();

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    lightHelper.update();

    shadowCameraHelper.update();

    renderer.render(scene, camera);
}

init();
