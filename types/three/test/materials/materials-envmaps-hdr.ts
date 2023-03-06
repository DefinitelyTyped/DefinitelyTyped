import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader';

const params = {
    envMap: 'HDR',
    roughness: 0.0,
    metalness: 0.0,
    exposure: 1.0,
    debug: false,
};

const container = document.createElement('div');
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let torusMesh: THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>;
let planeMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
let generatedCubeRenderTarget: THREE.WebGLRenderTarget;
let ldrCubeRenderTarget: THREE.WebGLRenderTarget;
let hdrCubeRenderTarget: THREE.WebGLRenderTarget;
let rgbmCubeRenderTarget: THREE.WebGLRenderTarget;
let ldrCubeMap: THREE.CubeTexture;
let hdrCubeMap: THREE.CubeTexture;
let rgbmCubeMap: THREE.CubeTexture;

init();
animate();

function getEnvScene() {
    const envScene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry();
    geometry.deleteAttribute('uv');
    const roomMaterial = new THREE.MeshStandardMaterial({ metalness: 0, side: THREE.BackSide });
    const room = new THREE.Mesh(geometry, roomMaterial);
    room.scale.setScalar(10);
    envScene.add(room);

    const mainLight = new THREE.PointLight(0xffffff, 50, 0, 2);
    envScene.add(mainLight);

    const lightMaterial = new THREE.MeshLambertMaterial({ color: 0x000000, emissive: 0xffffff, emissiveIntensity: 10 });

    const light1 = new THREE.Mesh(geometry, lightMaterial);
    light1.material.color.setHex(0xff0000);
    light1.position.set(-5, 2, 0);
    light1.scale.set(0.1, 1, 1);
    envScene.add(light1);

    const light2 = new THREE.Mesh(geometry, lightMaterial.clone());
    light2.material.color.setHex(0x00ff00);
    light2.position.set(0, 5, 0);
    light2.scale.set(1, 0.1, 1);
    envScene.add(light2);

    const light3 = new THREE.Mesh(geometry, lightMaterial.clone());
    light3.material.color.setHex(0x0000ff);
    light3.position.set(2, 1, 5);
    light3.scale.set(1.5, 2, 0.1);
    envScene.add(light3);

    return envScene;
}

function init() {
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 120);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    renderer = new THREE.WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    //

    let geometry: THREE.TorusKnotGeometry | THREE.PlaneGeometry = new THREE.TorusKnotGeometry(18, 8, 150, 20);
    // let geometry = new THREE.SphereGeometry( 26, 64, 32 );
    let material: THREE.MeshStandardMaterial | THREE.MeshBasicMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: params.metalness,
        roughness: params.roughness,
    });

    torusMesh = new THREE.Mesh(geometry, material);
    scene.add(torusMesh);

    geometry = new THREE.PlaneGeometry(200, 200);
    material = new THREE.MeshBasicMaterial();

    planeMesh = new THREE.Mesh(geometry, material);
    planeMesh.position.y = -50;
    planeMesh.rotation.x = -Math.PI * 0.5;
    scene.add(planeMesh);

    THREE.DefaultLoadingManager.onLoad = () => {
        pmremGenerator.dispose();
    };

    const hdrUrls = ['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr'];
    hdrCubeMap = new HDRCubeTextureLoader()
        .setPath('./textures/cube/pisaHDR/')
        .setDataType(THREE.UnsignedByteType)
        .load(hdrUrls, () => {
            hdrCubeRenderTarget = pmremGenerator.fromCubemap(hdrCubeMap);

            hdrCubeMap.magFilter = THREE.LinearFilter;
            hdrCubeMap.needsUpdate = true;
        });

    const ldrUrls = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'];
    ldrCubeMap = new THREE.CubeTextureLoader().setPath('./textures/cube/pisa/').load(ldrUrls, () => {
        ldrCubeMap.encoding = THREE.sRGBEncoding;

        ldrCubeRenderTarget = pmremGenerator.fromCubemap(ldrCubeMap);
    });

    const rgbmUrls = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'];
    rgbmCubeMap = new RGBMLoader()
        .setMaxRange(16)
        .setPath('./textures/cube/pisaRGBM16/')
        .loadCubemap(rgbmUrls, () => {
            rgbmCubeRenderTarget = pmremGenerator.fromCubemap(rgbmCubeMap);
        });

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileCubemapShader();

    const envScene = getEnvScene();
    generatedCubeRenderTarget = pmremGenerator.fromScene(envScene, 0.04);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.outputEncoding = THREE.sRGBEncoding;

    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 50;
    controls.maxDistance = 300;

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    torusMesh.material.roughness = params.roughness;
    torusMesh.material.metalness = params.metalness;

    let renderTarget;
    let cubeMap;

    switch (params.envMap) {
        case 'Generated':
            renderTarget = generatedCubeRenderTarget;
            cubeMap = generatedCubeRenderTarget.texture;
            break;
        case 'LDR':
            renderTarget = ldrCubeRenderTarget;
            cubeMap = ldrCubeMap;
            break;
        case 'HDR':
            renderTarget = hdrCubeRenderTarget;
            cubeMap = hdrCubeMap;
            break;
        case 'RGBM16':
            renderTarget = rgbmCubeRenderTarget;
            cubeMap = rgbmCubeMap;
            break;
    }

    const newEnvMap = renderTarget ? renderTarget.texture : null;

    if (newEnvMap && newEnvMap !== torusMesh.material.envMap) {
        torusMesh.material.envMap = newEnvMap;
        torusMesh.material.needsUpdate = true;

        planeMesh.material.map = newEnvMap;
        planeMesh.material.needsUpdate = true;
    }

    torusMesh.rotation.y += 0.005;
    planeMesh.visible = params.debug;

    scene.background = cubeMap as THREE.Texture;
    renderer.toneMappingExposure = params.exposure;

    renderer.render(scene, camera);
}
