import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

let cameraPersp: THREE.PerspectiveCamera;
let cameraOrtho: THREE.OrthographicCamera;
let currentCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera;

let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let control: TransformControls;
let orbit: OrbitControls;

init();
render();

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const aspect = window.innerWidth / window.innerHeight;

    cameraPersp = new THREE.PerspectiveCamera(50, aspect, 0.01, 30000);
    cameraOrtho = new THREE.OrthographicCamera(-600 * aspect, 600 * aspect, 600, -600, 0.01, 30000);
    currentCamera = cameraPersp;

    currentCamera.position.set(1000, 500, 1000);
    currentCamera.lookAt(0, 200, 0);

    scene = new THREE.Scene();
    scene.add(new THREE.GridHelper(1000, 10, 0x888888, 0x444444));

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(1, 1, 1);
    scene.add(light);

    const texture = new THREE.TextureLoader().load('textures/crate.gif', render);
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshLambertMaterial({ map: texture, transparent: true });

    orbit = new OrbitControls(currentCamera, renderer.domElement);
    orbit.update();
    orbit.addEventListener('change', render);

    control = new TransformControls(currentCamera, renderer.domElement);
    control.addEventListener('change', render);

    control.addEventListener('dragging-changed', event => {
        orbit.enabled = !event.value;
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    control.attach(mesh);
    scene.add(control);

    window.addEventListener('resize', onWindowResize);

    window.addEventListener('keydown', event => {
        switch (event.keyCode) {
            case 81: // Q
                control.setSpace(control.space === 'local' ? 'world' : 'local');
                break;

            case 16: // Shift
                control.setTranslationSnap(100);
                control.setRotationSnap(THREE.MathUtils.degToRad(15));
                control.setScaleSnap(0.25);
                break;

            case 87: // W
                control.setMode('translate');
                break;

            case 69: // E
                control.setMode('rotate');
                break;

            case 82: // R
                control.setMode('scale');
                break;

            case 67: // C
                const position = currentCamera.position.clone();

                currentCamera = (currentCamera as THREE.PerspectiveCamera).isPerspectiveCamera
                    ? cameraOrtho
                    : cameraPersp;
                currentCamera.position.copy(position);

                orbit.object = currentCamera;
                control.camera = currentCamera;

                currentCamera.lookAt(orbit.target.x, orbit.target.y, orbit.target.z);
                onWindowResize();
                break;

            case 86: // V
                const randomFoV = Math.random() + 0.1;
                const randomZoom = Math.random() + 0.1;

                cameraPersp.fov = randomFoV * 160;
                cameraOrtho.bottom = -randomFoV * 500;
                cameraOrtho.top = randomFoV * 500;

                cameraPersp.zoom = randomZoom * 5;
                cameraOrtho.zoom = randomZoom * 5;
                onWindowResize();
                break;

            case 187:
            case 107: // +, =, num+
                control.setSize(control.size + 0.1);
                break;

            case 189:
            case 109: // -, _, num-
                control.setSize(Math.max(control.size - 0.1, 0.1));
                break;

            case 88: // X
                control.showX = !control.showX;
                break;

            case 89: // Y
                control.showY = !control.showY;
                break;

            case 90: // Z
                control.showZ = !control.showZ;
                break;

            case 32: // Spacebar
                control.enabled = !control.enabled;
                break;
        }
    });

    window.addEventListener('keyup', event => {
        switch (event.keyCode) {
            case 16: // Shift
                control.setTranslationSnap(null);
                control.setRotationSnap(null);
                control.setScaleSnap(null);
                break;
        }
    });
}

function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;

    cameraPersp.aspect = aspect;
    cameraPersp.updateProjectionMatrix();

    cameraOrtho.left = cameraOrtho.bottom * aspect;
    cameraOrtho.right = cameraOrtho.top * aspect;
    cameraOrtho.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
}

function render() {
    renderer.render(scene, currentCamera);
}
