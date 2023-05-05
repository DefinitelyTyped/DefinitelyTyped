import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory';

interface Hand extends THREE.Group {
    joints: { [key: string]: any };
}

const container = document.createElement('div');
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let hand1: Hand;
let hand2: Hand;
let controller1: THREE.Group;
let controller2: THREE.Group;
let controllerGrip1: THREE.Group;
let controllerGrip2: THREE.Group;

const tmpVector1 = new THREE.Vector3();
const tmpVector2 = new THREE.Vector3();

let controls;

let grabbing = false;

interface Scaling {
    active: boolean;
    initialDistance: number;
    object: THREE.Mesh | null;
    initialScale: number;
}
const scaling: Scaling = {
    active: false,
    initialDistance: 0,
    object: null,
    initialScale: 1,
};

const spheres: THREE.Mesh[] = [];

init();
animate();

function init() {
    document.body.appendChild(container);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x444444);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.set(0, 1.6, 3);

    controls = new OrbitControls(camera, container);
    controls.target.set(0, 1.6, 0);
    controls.update();

    const floorGeometry = new THREE.PlaneGeometry(4, 4);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    scene.add(new THREE.HemisphereLight(0x808080, 0x606060));

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 6, 0);
    light.castShadow = true;
    light.shadow.camera.top = 2;
    light.shadow.camera.bottom = -2;
    light.shadow.camera.right = 2;
    light.shadow.camera.left = -2;
    light.shadow.mapSize.set(4096, 4096);
    scene.add(light);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.xr.enabled = true;

    container.appendChild(renderer.domElement);

    document.body.appendChild(VRButton.createButton(renderer));

    // controllers

    controller1 = renderer.xr.getController(0);
    scene.add(controller1);

    controller2 = renderer.xr.getController(1);
    scene.add(controller2);

    const controllerModelFactory = new XRControllerModelFactory();
    const handModelFactory = new XRHandModelFactory().setPath('./models/fbx/');

    // Hand 1
    controllerGrip1 = renderer.xr.getControllerGrip(0);
    controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
    scene.add(controllerGrip1);

    hand1 = renderer.xr.getHand(0) as Hand;
    hand1.addEventListener('pinchstart', onPinchStartLeft);
    hand1.addEventListener('pinchend', () => {
        scaling.active = false;
    });
    hand1.add(handModelFactory.createHandModel(hand1));

    scene.add(hand1);

    // Hand 2
    controllerGrip2 = renderer.xr.getControllerGrip(1);
    controllerGrip2.add(controllerModelFactory.createControllerModel(controllerGrip2));
    scene.add(controllerGrip2);

    hand2 = renderer.xr.getHand(1) as Hand;
    hand2.addEventListener('pinchstart', onPinchStartRight);
    hand2.addEventListener('pinchend', onPinchEndRight);
    hand2.add(handModelFactory.createHandModel(hand2));
    scene.add(hand2);

    //

    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -1),
    ]);

    const line = new THREE.Line(geometry);
    line.name = 'line';
    line.scale.z = 5;

    controller1.add(line.clone());
    controller2.add(line.clone());

    //

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

const SphereRadius = 0.05;
function onPinchStartLeft(event: THREE.Event) {
    const controller = event.target;

    if (grabbing) {
        const indexTip = controller.joints['index-finger-tip'];
        const sphere = collideObject(indexTip);

        if (sphere) {
            const sphere2 = hand2.userData.selected;
            console.log('sphere1', sphere, 'sphere2', sphere2);
            if (sphere === sphere2) {
                scaling.active = true;
                scaling.object = sphere;
                scaling.initialScale = sphere.scale.x;
                scaling.initialDistance = indexTip.position.distanceTo(hand2.joints['index-finger-tip'].position);
                return;
            }
        }
    }

    const geometry = new THREE.BoxGeometry(SphereRadius, SphereRadius, SphereRadius);
    const material = new THREE.MeshStandardMaterial({
        color: Math.random() * 0xffffff,
        roughness: 1.0,
        metalness: 0.0,
    });
    const spawn = new THREE.Mesh(geometry, material);
    spawn.geometry.computeBoundingSphere();

    const indexTip = controller.joints['index-finger-tip'];
    spawn.position.copy(indexTip.position);
    spawn.quaternion.copy(indexTip.quaternion);

    spheres.push(spawn);

    scene.add(spawn);
}

function collideObject(indexTip: THREE.Group) {
    for (const sphere of spheres) {
        const distance = indexTip.getWorldPosition(tmpVector1).distanceTo(sphere.getWorldPosition(tmpVector2));

        if (sphere.geometry.boundingSphere && distance < sphere.geometry.boundingSphere.radius * sphere.scale.x) {
            return sphere;
        }
    }

    return null;
}

function onPinchStartRight(event: THREE.Event) {
    const controller = event.target as Hand;
    const indexTip = controller.joints['index-finger-tip'];
    const object = collideObject(indexTip);
    if (object) {
        grabbing = true;
        indexTip.attach(object);
        controller.userData.selected = object;
        console.log('Selected', object);
    }
}

function onPinchEndRight(event: THREE.Event) {
    const controller = event.target;

    if (controller.userData.selected !== undefined) {
        const object = controller.userData.selected;
        object.material.emissive.b = 0;
        scene.attach(object);

        controller.userData.selected = undefined;
        grabbing = false;
    }

    scaling.active = false;
}

//

function animate() {
    renderer.setAnimationLoop(render);
}

function render() {
    if (scaling.active && scaling.object) {
        const indexTip1Pos = hand1.joints['index-finger-tip'].position;
        const indexTip2Pos = hand2.joints['index-finger-tip'].position;
        const distance = indexTip1Pos.distanceTo(indexTip2Pos);
        const newScale = scaling.initialScale + distance / scaling.initialDistance - 1;
        scaling.object.scale.setScalar(newScale);
    }

    renderer.render(scene, camera);
}
