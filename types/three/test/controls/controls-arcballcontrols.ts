import * as THREE from 'three';

import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const perspectiveDistance = 2.5;
let camera: THREE.Camera;
let controls: ArcballControls;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

const arcballGui = {
    gizmoVisible: true,

    setArcballControls: () => {
        controls = new ArcballControls(camera, renderer.domElement, scene);
        controls.addEventListener('change', render);

        arcballGui.gizmoVisible = true;
    },
};

init();

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 3;
    renderer.domElement.style.background = 'linear-gradient( 180deg, rgba( 0,0,0,1 ) 0%, rgba( 128,128,255,1 ) 100% )';
    container.appendChild(renderer.domElement);

    //

    scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0x443333, 0x222233, 4));

    camera = makePerspectiveCamera();
    camera.position.set(0, 0, perspectiveDistance);

    const material = new THREE.MeshStandardMaterial();

    new OBJLoader().setPath('models/obj/cerberus/').load('Cerberus.obj', group => {
        const textureLoader = new THREE.TextureLoader().setPath('models/obj/cerberus/');

        material.roughness = 1;
        material.metalness = 1;

        const diffuseMap = textureLoader.load('Cerberus_A.jpg', render);
        diffuseMap.encoding = THREE.sRGBEncoding;
        material.map = diffuseMap;

        material.metalnessMap = material.roughnessMap = textureLoader.load('Cerberus_RM.jpg', render);
        material.normalMap = textureLoader.load('Cerberus_N.jpg', render);

        material.map.wrapS = THREE.RepeatWrapping;
        material.roughnessMap.wrapS = THREE.RepeatWrapping;
        material.metalnessMap.wrapS = THREE.RepeatWrapping;
        material.normalMap.wrapS = THREE.RepeatWrapping;

        group.traverse(child => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = material;
            }
        });

        group.rotation.y = Math.PI / 2;
        group.position.x += 0.25;
        scene.add(group);
        render();

        new RGBELoader()
            .setDataType(THREE.UnsignedByteType)
            .setPath('textures/equirectangular/')
            .load('venice_sunset_1k.hdr', hdrEquirect => {
                hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;

                scene.environment = hdrEquirect;

                render();
            });

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('resize', onWindowResize);

        arcballGui.setArcballControls();

        render();
    });
}

function makePerspectiveCamera() {
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.01;
    const far = 2000;
    const newCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    return newCamera;
}

function onWindowResize() {
    if (camera instanceof THREE.OrthographicCamera) {
        const halfFovV = THREE.MathUtils.DEG2RAD * 45 * 0.5;
        const halfFovH = Math.atan((window.innerWidth / window.innerHeight) * Math.tan(halfFovV));

        const halfW = perspectiveDistance * Math.tan(halfFovH);
        const halfH = perspectiveDistance * Math.tan(halfFovV);
        camera.left = -halfW;
        camera.right = halfW;
        camera.top = halfH;
        camera.bottom = -halfH;
    } else if (camera instanceof THREE.PerspectiveCamera) {
        camera.aspect = window.innerWidth / window.innerHeight;
    }

    (camera as THREE.OrthographicCamera).updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
}

function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'c') {
        if (event.ctrlKey || event.metaKey) {
            controls.copyState();
        }
    } else if (event.key === 'v') {
        if (event.ctrlKey || event.metaKey) {
            controls.pasteState();
        }
    }
}

function render() {
    renderer.render(scene, camera);
}
