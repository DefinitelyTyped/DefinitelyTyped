import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let clock: THREE.Clock;
let dirLight: THREE.DirectionalLight;
let spotLight: THREE.SpotLight;
let torusKnot: THREE.Mesh;
let dirGroup: THREE.Group;

init();
animate();

function init() {
    initScene();
    initMisc();

    const config = {
        spotlightRadius: 4,
        spotlightSamples: 8,
        dirlightRadius: 4,
        dirlightSamples: 8,
    };

    spotLight.shadow.radius = config.spotlightRadius;
    spotLight.shadow.blurSamples = config.spotlightSamples;

    dirLight.shadow.radius = config.dirlightRadius;
    dirLight.shadow.blurSamples = config.dirlightSamples;

    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
}

function initScene() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 10, 30);

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xcccccc, 50, 100);

    // Lights

    scene.add(new THREE.AmbientLight(0x444444));

    spotLight = new THREE.SpotLight(0x888888);
    spotLight.name = 'Spot Light';
    spotLight.angle = Math.PI / 5;
    spotLight.penumbra = 0.3;
    spotLight.position.set(8, 10, 5);
    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 8;
    spotLight.shadow.camera.far = 200;
    spotLight.shadow.mapSize.width = 256;
    spotLight.shadow.mapSize.height = 256;
    spotLight.shadow.bias = -0.002;
    spotLight.shadow.radius = 4;
    scene.add(spotLight);

    dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.name = 'Dir. Light';
    dirLight.position.set(3, 12, 17);
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 500;
    dirLight.shadow.camera.right = 17;
    dirLight.shadow.camera.left = -17;
    dirLight.shadow.camera.top = 17;
    dirLight.shadow.camera.bottom = -17;
    dirLight.shadow.mapSize.width = 512;
    dirLight.shadow.mapSize.height = 512;
    dirLight.shadow.radius = 4;
    dirLight.shadow.bias = -0.0005;

    dirGroup = new THREE.Group();
    dirGroup.add(dirLight);
    scene.add(dirGroup);

    // Geometry

    const geometry = new THREE.TorusKnotGeometry(25, 8, 75, 20);
    const material = new THREE.MeshPhongMaterial({
        color: 0x999999,
        shininess: 0,
        specular: 0x222222,
    });

    torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.scale.multiplyScalar(1 / 18);
    torusKnot.position.y = 3;
    torusKnot.castShadow = true;
    torusKnot.receiveShadow = true;
    scene.add(torusKnot);

    const cylinderGeometry = new THREE.CylinderGeometry(0.75, 0.75, 7, 32);

    const pillar1 = new THREE.Mesh(cylinderGeometry, material);
    pillar1.position.set(10, 3.5, 10);
    pillar1.castShadow = true;
    pillar1.receiveShadow = true;

    const pillar2 = pillar1.clone();
    pillar2.position.set(10, 3.5, -10);
    const pillar3 = pillar1.clone();
    pillar3.position.set(-10, 3.5, 10);
    const pillar4 = pillar1.clone();
    pillar4.position.set(-10, 3.5, -10);

    scene.add(pillar1);
    scene.add(pillar2);
    scene.add(pillar3);
    scene.add(pillar4);

    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.MeshPhongMaterial({
        color: 0x999999,
        shininess: 0,
        specular: 0x111111,
    });

    const ground = new THREE.Mesh(planeGeometry, planeMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.scale.multiplyScalar(3);
    ground.castShadow = true;
    ground.receiveShadow = true;
    scene.add(ground);
}

function initMisc() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;

    renderer.setClearColor(0xcccccc, 1);

    // Mouse control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 2, 0);
    controls.update();

    clock = new THREE.Clock();
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

function renderScene() {
    renderer.render(scene, camera);
}

function render() {
    const delta = clock.getDelta();
    const time = clock.elapsedTime;

    renderScene();

    torusKnot.rotation.x += 0.25 * delta;
    torusKnot.rotation.y += 2 * delta;
    torusKnot.rotation.z += 1 * delta;

    dirGroup.rotation.y += 0.7 * delta;
    dirLight.position.z = 17 + Math.sin(time * 0.001) * 5;
}
