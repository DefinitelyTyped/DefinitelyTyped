import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GroundProjectedEnv } from 'three/examples/jsm/objects/GroundProjectedEnv';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';

const params = {
    height: 34,
    radius: 440,
    toneMappingExposure: 1,
};

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let env: GroundProjectedEnv;
let dirLight: THREE.DirectionalLight;

init();
animate();

function init() {
    initScene();
    initMisc();

    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
}

function initScene() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(-1, 0.3, 1).multiplyScalar(25);

    scene = new THREE.Scene();

    dirLight = new THREE.DirectionalLight(0xffffff, 0.2);
    dirLight.position.set(10, 8, 10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 100;
    dirLight.shadow.camera.right = 150;
    dirLight.shadow.camera.left = -150;
    dirLight.shadow.camera.top = 150;
    dirLight.shadow.camera.bottom = -150;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShadowMaterial({ opacity: 0.3 });

    const ground = new THREE.Mesh(geometry, material);
    ground.scale.setScalar(1000);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.001;
    ground.castShadow = false;
    ground.receiveShadow = true;
    scene.add(ground);

    const cubeLoader = new THREE.CubeTextureLoader();
    cubeLoader.setPath('textures/cube/lake/');

    const textureCube = cubeLoader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);

    env = new GroundProjectedEnv(textureCube);
    env.scale.setScalar(100);
    scene.add(env);

    scene.background = textureCube;
    scene.environment = textureCube;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('js/libs/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    const normalMap3 = new THREE.CanvasTexture(new FlakesTexture());
    normalMap3.wrapS = THREE.RepeatWrapping;
    normalMap3.wrapT = THREE.RepeatWrapping;
    normalMap3.repeat.x = 10;
    normalMap3.repeat.y = 6;
    normalMap3.anisotropy = 16;

    const shadow = new THREE.TextureLoader().load('models/gltf/ferrari_ao.png');

    loader.load('models/gltf/ferrari.glb', gltf => {
        gltf.scene.scale.setScalar(6);

        const box = new THREE.Box3().setFromObject(gltf.scene);
        gltf.scene.position.y = -box.min.y;
        gltf.scene.rotation.y = THREE.MathUtils.degToRad(180);

        gltf.scene.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh) {
                obj.castShadow = obj.receiveShadow = true;
            }
        });

        // shadow
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4),
            new THREE.MeshBasicMaterial({
                map: shadow,
                blending: THREE.MultiplyBlending,
                toneMapped: false,
                transparent: true,
            }),
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.renderOrder = 2;
        gltf.scene.add(mesh);

        scene.add(gltf.scene);
    });
}

function initMisc() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    // Mouse control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.maxPolarAngle = THREE.MathUtils.degToRad(80);
    controls.maxDistance = 100;
    controls.minDistance = 30;
    controls.enablePan = false;
    controls.update();
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
    renderScene();

    env.radius = params.radius;
    env.height = params.height;
}
