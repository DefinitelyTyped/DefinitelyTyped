import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { SSRPass } from 'three/examples/jsm/postprocessing/SSRPass';
import { Reflector } from 'three/examples/jsm/objects/ReflectorForSSRPass';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const params = {
    enableSSR: true,
    autoRotate: true,
    otherMeshes: true,
    groundReflector: true,
};
let composer: EffectComposer;
let ssrPass: SSRPass;
const isPerspectiveCamera = true;
let controls: OrbitControls;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
const otherMeshes: THREE.Mesh[] = [];
let groundReflector: Reflector;
const selects: THREE.Mesh[] = [];

const container = document.querySelector('#container') as Element;

// Configure and create Draco decoder.
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('js/libs/draco/');
dracoLoader.setDecoderConfig({ type: 'js' });

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 15);
    camera.position.set(0.13271600513224902, 0.3489546826045913, 0.43921296427927076);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x443333);
    scene.fog = new THREE.Fog(0x443333, 1, 4);

    // Ground
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 8),
        new THREE.MeshPhongMaterial({ color: 0x999999, specular: 0x101010 }),
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0.0365;
    // plane.receiveShadow = true;
    scene.add(plane);

    // Lights
    const hemiLight = new THREE.HemisphereLight(0x443333, 0x111122);
    scene.add(hemiLight);

    const spotLight = new THREE.SpotLight();
    spotLight.angle = Math.PI / 16;
    spotLight.penumbra = 0.5;
    // spotLight.castShadow = true;
    spotLight.position.set(-1, 1, 1);
    scene.add(spotLight);

    dracoLoader.load('models/draco/bunny.drc', geometry => {
        geometry.computeVertexNormals();

        const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
        const mesh = new THREE.Mesh(geometry, material);
        // mesh.castShadow = true;
        // mesh.receiveShadow = true;
        scene.add(mesh);
        selects.push(mesh);

        // Release decoder resources.
        dracoLoader.dispose();
    });

    {
        const geometry = new THREE.BoxBufferGeometry(0.05, 0.05, 0.05);
        const material = new THREE.MeshStandardMaterial({ color: 'green' });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-0.12, plane.position.y + 0.025, 0.015);
        scene.add(mesh);
        otherMeshes.push(mesh);
        selects.push(mesh);
    }
    {
        const geometry = new THREE.IcosahedronBufferGeometry(0.025, 4);
        const material = new THREE.MeshStandardMaterial({ color: 'cyan' });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-0.05, plane.position.y + 0.025, 0.08);
        scene.add(mesh);
        otherMeshes.push(mesh);
        selects.push(mesh);
    }
    {
        const geometry = new THREE.ConeBufferGeometry(0.025, 0.05, 64);
        const material = new THREE.MeshStandardMaterial({ color: 'yellow' });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-0.05, plane.position.y + 0.025, -0.055);
        scene.add(mesh);
        otherMeshes.push(mesh);
        selects.push(mesh);
    }
    {
        const geometry = new THREE.PlaneBufferGeometry(8, 8);
        groundReflector = new Reflector(geometry, {
            clipBias: 0.003,
            textureWidth: window.innerWidth,
            textureHeight: window.innerHeight,
            color: 0x888888,
            useDepthTexture: true,
        });
        groundReflector.material.depthWrite = false;
        groundReflector.position.y = plane.position.y + 0.0001;
        groundReflector.rotation.x = -Math.PI / 2;
        groundReflector.visible = false;
        scene.add(groundReflector);
    }

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: false });
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    //

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0.1, 0);
    controls.update();
    controls.enabled = !params.autoRotate;

    // STATS

    window.addEventListener('resize', onWindowResize, false);

    // composer

    composer = new EffectComposer(renderer);
    ssrPass = new SSRPass({
        renderer,
        scene,
        camera,
        width: innerWidth,
        height: innerHeight,
        encoding: THREE.sRGBEncoding,
        isPerspectiveCamera,
        groundReflector: params.groundReflector ? groundReflector : null,
        selects: params.groundReflector ? selects : null,
        // morphTargets: true,
    });
    // window.ssrPass = ssrPass
    composer.addPass(ssrPass);

    ssrPass.maxDistance = 0.1;
    groundReflector.maxDistance = ssrPass.maxDistance;
    ssrPass.opacity = 1;
    groundReflector.opacity = ssrPass.opacity;
    ssrPass.thickness = 0.0015;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    groundReflector.getRenderTarget().setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    if (params.autoRotate) {
        const timer = Date.now() * 0.0003;

        camera.position.x = Math.sin(timer) * 0.5;
        camera.position.y = 0.25;
        camera.position.z = Math.cos(timer) * 0.5;
        camera.lookAt(0, 0.1, 0);
    } else {
        controls.update();
    }

    if (params.enableSSR) {
        composer.render();
    } else {
        renderer.render(scene, camera);
    }
}
