import * as THREE from 'three';

import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { Font } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

let camera: THREE.PerspectiveCamera;
let cameraTarget: THREE.Vector3;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let group: THREE.Group;
let textMesh1: THREE.Mesh<TextGeometry, THREE.MeshPhongMaterial>;
let textMesh2: THREE.Mesh<TextGeometry, THREE.MeshPhongMaterial>;
let textGeo: TextGeometry;
let material: THREE.MeshPhongMaterial;
let firstLetter = true;

let text = 'three';
const height = 20;
const size = 70;
const hover = 30;
const curveSegments = 4;
const bevelThickness = 2;
const bevelSize = 1.5;

let font: Font | null = null;
const mirror = true;

const targetRotation = 0;

init();
animate();

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    // CAMERA

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1500);
    camera.position.set(0, 400, 700);

    cameraTarget = new THREE.Vector3(0, 150, 0);

    // SCENE

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 250, 1400);

    // LIGHTS

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
    dirLight.position.set(0, 0, 1).normalize();
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(0, 100, 90);
    pointLight.color.setHSL(Math.random(), 1, 0.5);
    scene.add(pointLight);

    material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });

    group = new THREE.Group();
    group.position.y = 100;

    scene.add(group);

    const loader = new TTFLoader();

    loader.load('fonts/ttf/kenpixel.ttf', json => {
        font = new Font(json);
        createText();
    });

    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(10000, 10000),
        new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true }),
    );
    plane.position.y = 100;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // RENDERER

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // EVENTS

    container.style.touchAction = 'none';

    document.addEventListener('keypress', onDocumentKeyPress);
    document.addEventListener('keydown', onDocumentKeyDown);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentKeyDown(event: KeyboardEvent) {
    if (firstLetter) {
        firstLetter = false;
        text = '';
    }

    const keyCode = event.keyCode;

    // backspace

    if (keyCode === 8) {
        event.preventDefault();

        text = text.substring(0, text.length - 1);
        refreshText();

        return false;
    }
}

function onDocumentKeyPress(event: KeyboardEvent) {
    const keyCode = event.which;

    // backspace

    if (keyCode === 8) {
        event.preventDefault();
    } else {
        const ch = String.fromCharCode(keyCode);
        text += ch;

        refreshText();
    }
}

function createText() {
    textGeo = new TextGeometry(text, {
        font: font!,
        size,
        height,
        curveSegments,
        bevelThickness,
        bevelSize,
        bevelEnabled: true,
    });

    textGeo.computeBoundingBox();
    textGeo.computeVertexNormals();

    const centerOffset = -0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);

    textMesh1 = new THREE.Mesh(textGeo, material);

    textMesh1.position.x = centerOffset;
    textMesh1.position.y = hover;
    textMesh1.position.z = 0;

    textMesh1.rotation.x = 0;
    textMesh1.rotation.y = Math.PI * 2;

    group.add(textMesh1);

    if (mirror) {
        textMesh2 = new THREE.Mesh(textGeo, material);

        textMesh2.position.x = centerOffset;
        textMesh2.position.y = -hover;
        textMesh2.position.z = height;

        textMesh2.rotation.x = Math.PI;
        textMesh2.rotation.y = Math.PI * 2;

        group.add(textMesh2);
    }
}

function refreshText() {
    group.remove(textMesh1);
    if (mirror) group.remove(textMesh2);

    if (!text) return;

    createText();
}

//

function animate() {
    requestAnimationFrame(animate);

    group.rotation.y += (targetRotation - group.rotation.y) * 0.05;

    camera.lookAt(cameraTarget);

    renderer.render(scene, camera);
}
