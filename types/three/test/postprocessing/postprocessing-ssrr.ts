import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { SSRrPass } from 'three/examples/jsm/postprocessing/SSRrPass';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const params = {
    enableSSRr: true,
    autoRotate: true,
};
let composer: EffectComposer;
let ssrrPass: SSRrPass;
let controls: OrbitControls;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
const objects: THREE.Object3D[] = [];
const selects: THREE.Mesh[] = [];
const raycaster = new THREE.Raycaster();
const mouseDown = new THREE.Vector2();
const mouse = new THREE.Vector2();

const container = document.querySelector('#container')!;

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
    const map = new THREE.TextureLoader().load('./textures/uv_grid_opengl.jpg');
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(20, 20);
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 8),
        new THREE.MeshPhongMaterial({
            color: 0x999999,
            specular: 0x101010,
            map,
        }),
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.0001;
    // plane.receiveShadow = true;
    scene.add(plane);
    plane.name = 'plane';

    // Lights
    const hemiLight = new THREE.HemisphereLight(0x443333, 0x111122);
    hemiLight.name = 'hemiLight';
    scene.add(hemiLight);

    const spotLight = new THREE.SpotLight();
    spotLight.name = 'spotLight';
    spotLight.angle = Math.PI / 16;
    spotLight.penumbra = 0.5;
    // spotLight.castShadow = true;
    spotLight.position.set(-1, 1, 1);
    scene.add(spotLight);

    dracoLoader.load('models/draco/bunny.drc', geometry => {
        geometry.computeVertexNormals();

        const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = -0.0365;
        mesh.name = 'bunny';
        scene.add(mesh);
        objects.push(mesh);
        selects.push(mesh);

        // Release decoder resources.
        dracoLoader.dispose();
    });

    let geometry;
    let material;
    let mesh;

    geometry = new THREE.BoxBufferGeometry(0.05, 0.05, 0.05);
    material = new THREE.MeshStandardMaterial({ color: 'green' });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-0.12, 0.025, 0.015);
    mesh.name = 'box';
    scene.add(mesh);
    objects.push(mesh);
    selects.push(mesh);

    geometry = new THREE.IcosahedronBufferGeometry(0.025, 4);
    material = new THREE.MeshStandardMaterial({ color: 'cyan' });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-0.05, 0.025, 0.08);
    mesh.name = 'sphere';
    scene.add(mesh);
    objects.push(mesh);
    // selects.push( mesh );

    geometry = new THREE.ConeBufferGeometry(0.025, 0.05, 64);
    material = new THREE.MeshStandardMaterial({ color: 'yellow' });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-0.05, 0.025, -0.055);
    mesh.name = 'cone';
    scene.add(mesh);
    objects.push(mesh);
    // selects.push( mesh );

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.autoClear = false;
    container.appendChild(renderer.domElement);

    //

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0.0635, 0);
    controls.update();
    controls.enabled = !params.autoRotate;

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('pointerdown', onPointerDown, false);
    window.addEventListener('pointerup', onPointerUp, false);

    // composer

    composer = new EffectComposer(renderer);
    ssrrPass = new SSRrPass({
        renderer,
        scene,
        camera,
        width: innerWidth,
        height: innerHeight,
        encoding: THREE.sRGBEncoding,
        selects,
    });

    composer.addPass(ssrrPass);

    ssrrPass.ior = 1.1;
    ssrrPass.surfDist = 0.0015;
    ssrrPass.maxDistance = 50;
}

function onPointerDown(event: PointerEvent) {
    mouseDown.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseDown.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
function onPointerUp(event: PointerEvent) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    if (mouseDown.sub(mouse).length() > 0) return;

    raycaster.setFromCamera(mouse, camera);
    const intersect = raycaster.intersectObjects(objects)[0];
    if (intersect) {
        const index = selects.indexOf(intersect.object as THREE.Mesh);
        if (index >= 0) {
            selects.splice(index, 1);
        } else {
            selects.push(intersect.object as THREE.Mesh);
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    if (params.autoRotate) {
        const timer = Date.now() * 0.0003;

        camera.position.x = Math.sin(timer) * 0.5;
        camera.position.y = 0.2135;
        camera.position.z = Math.cos(timer) * 0.5;
        camera.lookAt(0, 0.0635, 0);
    } else {
        controls.update();
    }

    if (params.enableSSRr) {
        composer.render();
    } else {
        renderer.render(scene, camera);
    }
}
