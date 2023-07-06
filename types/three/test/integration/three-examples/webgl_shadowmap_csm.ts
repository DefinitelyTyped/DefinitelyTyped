import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CMSMode, CSM } from 'three/examples/jsm/csm/CSM';
import { CSMHelper } from 'three/examples/jsm/csm/CSMHelper';

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let orthoCamera: THREE.OrthographicCamera;
let controls: OrbitControls;
let csm: CSM;
let csmHelper: CSMHelper;

const params = {
    orthographic: false,
    fade: false,
    far: 1000,
    mode: CMSMode.practical,
    lightX: -1,
    lightY: -1,
    lightZ: -1,
    margin: 100,
    lightFar: 5000,
    lightNear: 1,
    autoUpdateHelper: true,
    updateHelper: () => {
        csmHelper.update();
    },
};

init();
animate();

function updateOrthoCamera() {
    const size = controls.target.distanceTo(camera.position);
    const aspect = camera.aspect;

    orthoCamera.left = (size * aspect) / -2;
    orthoCamera.right = (size * aspect) / 2;

    orthoCamera.top = size / 2;
    orthoCamera.bottom = size / -2;
    orthoCamera.position.copy(camera.position);
    orthoCamera.rotation.copy(camera.rotation);
    orthoCamera.updateProjectionMatrix();
}

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#454e61');
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 5000);
    orthoCamera = new THREE.OrthographicCamera();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI / 2;
    camera.position.set(60, 60, 0);
    controls.target = new THREE.Vector3(-100, 10, 0);
    controls.update();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    csm = new CSM({
        maxFar: params.far,
        cascades: 4,
        mode: params.mode,
        parent: scene,
        shadowMapSize: 1024,
        lightDirection: new THREE.Vector3(params.lightX, params.lightY, params.lightZ).normalize(),
        camera,
    });

    csmHelper = new CSMHelper(csm);
    csmHelper.visible = false;
    scene.add(csmHelper);

    const floorMaterial = new THREE.MeshPhongMaterial({ color: '#252a34' });
    csm.setupMaterial(floorMaterial);

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(10000, 10000, 8, 8), floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.castShadow = true;
    floor.receiveShadow = true;
    scene.add(floor);

    const material1 = new THREE.MeshPhongMaterial({ color: '#08d9d6' });
    csm.setupMaterial(material1);

    const material2 = new THREE.MeshPhongMaterial({ color: '#ff2e63' });
    csm.setupMaterial(material2);

    const geometry = new THREE.BoxGeometry(10, 10, 10);

    for (let i = 0; i < 40; i++) {
        const cube1 = new THREE.Mesh(geometry, i % 2 === 0 ? material1 : material2);
        cube1.castShadow = true;
        cube1.receiveShadow = true;
        scene.add(cube1);
        cube1.position.set(-i * 25, 20, 30);
        cube1.scale.y = Math.random() * 2 + 6;

        const cube2 = new THREE.Mesh(geometry, i % 2 === 0 ? material2 : material1);
        cube2.castShadow = true;
        cube2.receiveShadow = true;
        scene.add(cube2);
        cube2.position.set(-i * 25, 20, -30);
        cube2.scale.y = Math.random() * 2 + 6;
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        updateOrthoCamera();
        csm.updateFrustums();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function animate() {
    requestAnimationFrame(animate);

    camera.updateMatrixWorld();
    csm.update();
    controls.update();

    if (params.orthographic) {
        updateOrthoCamera();
        csm.updateFrustums();

        if (params.autoUpdateHelper) {
            csmHelper.update();
        }

        renderer.render(scene, orthoCamera);
    } else {
        if (params.autoUpdateHelper) {
            csmHelper.update();
        }

        renderer.render(scene, camera);
    }
}
