import * as THREE from 'three';

import * as CameraUtils from 'three/examples/jsm/utils/CameraUtils';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshBasicMaterial } from 'three/src/Three';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

let cameraControls: OrbitControls;

let smallSphereOne: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshPhongMaterial>;
let smallSphereTwo: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshPhongMaterial>;

let portalCamera: THREE.PerspectiveCamera;
let leftPortal: THREE.Mesh<THREE.PlaneGeometry, MeshBasicMaterial>;
let rightPortal: THREE.Mesh<THREE.PlaneGeometry, MeshBasicMaterial>;
let leftPortalTexture: THREE.WebGLRenderTarget;
let reflectedPosition: THREE.Vector3;
let rightPortalTexture: THREE.WebGLRenderTarget;
let bottomLeftCorner: THREE.Vector3;
let bottomRightCorner: THREE.Vector3;
let topLeftCorner: THREE.Vector3;

init();
animate();

function init() {
    const container = document.getElementById('container')!;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    renderer.localClippingEnabled = true;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(0, 75, 160);

    cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.target.set(0, 40, 0);
    cameraControls.maxDistance = 400;
    cameraControls.minDistance = 10;
    cameraControls.update();

    const planeGeo = new THREE.PlaneGeometry(100.1, 100.1);

    let geometry;
    let material;
    geometry = new THREE.CylinderGeometry(0.1, 15 * Math.cos((Math.PI / 180) * 30), 0.1, 24, 1);
    material = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x444444 });

    const portalPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0.0);
    geometry = new THREE.IcosahedronGeometry(5, 0);
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        emissive: 0x333333,
        flatShading: true,
        clippingPlanes: [portalPlane],
        clipShadows: true,
    });
    smallSphereOne = new THREE.Mesh(geometry, material);
    scene.add(smallSphereOne);
    smallSphereTwo = new THREE.Mesh(geometry, material);
    scene.add(smallSphereTwo);

    portalCamera = new THREE.PerspectiveCamera(45, 1.0, 0.1, 500.0);
    scene.add(portalCamera);
    bottomLeftCorner = new THREE.Vector3();
    bottomRightCorner = new THREE.Vector3();
    topLeftCorner = new THREE.Vector3();
    reflectedPosition = new THREE.Vector3();

    leftPortalTexture = new THREE.WebGLRenderTarget(256, 256, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
    });
    leftPortal = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: leftPortalTexture.texture }));
    leftPortal.position.x = -30;
    leftPortal.position.y = 20;
    leftPortal.scale.set(0.35, 0.35, 0.35);
    scene.add(leftPortal);

    rightPortalTexture = new THREE.WebGLRenderTarget(256, 256, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
    });
    rightPortal = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: rightPortalTexture.texture }));
    rightPortal.position.x = 30;
    rightPortal.position.y = 20;
    rightPortal.scale.set(0.35, 0.35, 0.35);
    scene.add(rightPortal);

    const planeTop = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xffffff }));
    planeTop.position.y = 100;
    planeTop.rotateX(Math.PI / 2);
    scene.add(planeTop);

    const planeBottom = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xffffff }));
    planeBottom.rotateX(-Math.PI / 2);
    scene.add(planeBottom);

    const planeFront = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0x7f7fff }));
    planeFront.position.z = 50;
    planeFront.position.y = 50;
    planeFront.rotateY(Math.PI);
    scene.add(planeFront);

    const planeBack = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xff7fff }));
    planeBack.position.z = -50;
    planeBack.position.y = 50;
    scene.add(planeBack);

    const planeRight = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0x00ff00 }));
    planeRight.position.x = 50;
    planeRight.position.y = 50;
    planeRight.rotateY(-Math.PI / 2);
    scene.add(planeRight);

    const planeLeft = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xff0000 }));
    planeLeft.position.x = -50;
    planeLeft.position.y = 50;
    planeLeft.rotateY(Math.PI / 2);
    scene.add(planeLeft);

    const mainLight = new THREE.PointLight(0xcccccc, 1.5, 250);
    mainLight.position.y = 60;
    scene.add(mainLight);

    const greenLight = new THREE.PointLight(0x00ff00, 0.25, 1000);
    greenLight.position.set(550, 50, 0);
    scene.add(greenLight);

    const redLight = new THREE.PointLight(0xff0000, 0.25, 1000);
    redLight.position.set(-550, 50, 0);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x7f7fff, 0.25, 1000);
    blueLight.position.set(0, 50, 550);
    scene.add(blueLight);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function renderPortal(
    thisPortalMesh: THREE.Mesh,
    otherPortalMesh: THREE.Mesh,
    thisPortalTexture: THREE.WebGLRenderTarget,
) {
    thisPortalMesh.worldToLocal(reflectedPosition.copy(camera.position));
    reflectedPosition.x *= -1.0;
    reflectedPosition.z *= -1.0;
    otherPortalMesh.localToWorld(reflectedPosition);
    portalCamera.position.copy(reflectedPosition);

    otherPortalMesh.localToWorld(bottomLeftCorner.set(50.05, -50.05, 0.0));
    otherPortalMesh.localToWorld(bottomRightCorner.set(-50.05, -50.05, 0.0));
    otherPortalMesh.localToWorld(topLeftCorner.set(50.05, 50.05, 0.0));

    CameraUtils.frameCorners(portalCamera, bottomLeftCorner, bottomRightCorner, topLeftCorner, false);

    thisPortalTexture.texture.encoding = renderer.outputEncoding;
    renderer.setRenderTarget(thisPortalTexture);
    renderer.state.buffers.depth.setMask(true); // make sure the depth buffer is writable so it can be properly cleared, see #18897
    if (!renderer.autoClear) {
        renderer.clear();
    }
    renderer.render(scene, portalCamera);
}

function animate() {
    requestAnimationFrame(animate);

    const timerOne = Date.now() * 0.01;
    const timerTwo = timerOne + Math.PI * 10.0;

    smallSphereOne.position.set(
        Math.cos(timerOne * 0.1) * 30,
        Math.abs(Math.cos(timerOne * 0.2)) * 20 + 5,
        Math.sin(timerOne * 0.1) * 30,
    );
    smallSphereOne.rotation.y = Math.PI / 2 - timerOne * 0.1;
    smallSphereOne.rotation.z = timerOne * 0.8;

    smallSphereTwo.position.set(
        Math.cos(timerTwo * 0.1) * 30,
        Math.abs(Math.cos(timerTwo * 0.2)) * 20 + 5,
        Math.sin(timerTwo * 0.1) * 30,
    );
    smallSphereTwo.rotation.y = Math.PI / 2 - timerTwo * 0.1;
    smallSphereTwo.rotation.z = timerTwo * 0.8;

    const currentRenderTarget = renderer.getRenderTarget();
    const currentXrEnabled = renderer.xr.enabled;
    const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;
    renderer.xr.enabled = false;
    renderer.shadowMap.autoUpdate = false;

    renderPortal(leftPortal, rightPortal, leftPortalTexture);
    renderPortal(rightPortal, leftPortal, rightPortalTexture);

    renderer.xr.enabled = currentXrEnabled;
    renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
    renderer.setRenderTarget(currentRenderTarget);

    renderer.render(scene, camera);
}
