import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { ProgressiveLightMap } from 'three/examples/jsm/misc/ProgressiveLightMap';

// ShadowMap + LightMap Res and Number of Directional Lights
const shadowMapRes = 512;
const lightMapRes = 1024;
const lightCount = 8;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
const dirLights: THREE.DirectionalLight[] = [];
let controls: OrbitControls;
let control: TransformControls;
let control2: TransformControls;
let object = new THREE.Mesh();
let lightOrigin: THREE.Group | null = null;
let progressiveSurfacemap: ProgressiveLightMap;
const lightmapObjects: THREE.Object3D[] = [];
const params = {
    Enable: true,
    'Blur Edges': true,
    'Blend Window': 200,
    'Light Radius': 50,
    'Ambient Weight': 0.5,
    'Debug Lightmap': false,
};
init();
animate();

function init() {
    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 100, 200);
    camera.name = 'Camera';

    // scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x949494);
    scene.fog = new THREE.Fog(0x949494, 1000, 3000);

    // progressive lightmap
    progressiveSurfacemap = new ProgressiveLightMap(renderer, lightMapRes);

    // directional lighting "origin"
    lightOrigin = new THREE.Group();
    lightOrigin.position.set(60, 150, 100);
    scene.add(lightOrigin);

    // transform gizmo
    control = new TransformControls(camera, renderer.domElement);
    control.addEventListener('dragging-changed', event => {
        controls.enabled = !event.value;
    });
    control.attach(lightOrigin);
    scene.add(control);

    // create 8 directional lights to speed up the convergence
    for (let l = 0; l < lightCount; l++) {
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.0 / lightCount);
        dirLight.name = 'Dir. Light ' + l;
        dirLight.position.set(200, 200, 200);
        dirLight.castShadow = true;
        dirLight.shadow.camera.near = 100;
        dirLight.shadow.camera.far = 5000;
        dirLight.shadow.camera.right = 150;
        dirLight.shadow.camera.left = -150;
        dirLight.shadow.camera.top = 150;
        dirLight.shadow.camera.bottom = -150;
        dirLight.shadow.mapSize.width = shadowMapRes;
        dirLight.shadow.mapSize.height = shadowMapRes;
        lightmapObjects.push(dirLight);
        dirLights.push(dirLight);
    }

    // ground
    const groundMesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(600, 600),
        new THREE.MeshPhongMaterial({ color: 0xffffff, depthWrite: true }),
    );
    groundMesh.position.y = -0.1;
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.name = 'Ground Mesh';
    lightmapObjects.push(groundMesh);
    scene.add(groundMesh);

    // model
    function loadModel() {
        object.traverse(child => {
            if ((child as THREE.Mesh).isMesh) {
                child.name = 'Loaded Mesh';
                child.castShadow = true;
                child.receiveShadow = true;
                (child as THREE.Mesh).material = new THREE.MeshPhongMaterial();

                // This adds the model to the lightmap
                lightmapObjects.push(child);
                progressiveSurfacemap.addObjectsToLightMap(lightmapObjects);
            } else {
                child.layers.disableAll(); // Disable Rendering for this
            }
        });
        scene.add(object);
        object.scale.set(2, 2, 2);
        object.position.set(0, -16, 0);
        control2 = new TransformControls(camera, renderer.domElement);
        control2.addEventListener('dragging-changed', event => {
            controls.enabled = !event.value;
        });
        control2.attach(object);
        scene.add(control2);
        const lightTarget = new THREE.Group();
        lightTarget.position.set(0, 20, 0);

        dirLights.forEach(light => {
            light.target = lightTarget;
        });

        object.add(lightTarget);

        for (let i = 0; i < 300; i++) {
            render();
        }
    }

    const manager = new THREE.LoadingManager(loadModel);
    const loader = new GLTFLoader(manager);
    loader.load('models/gltf/ShadowmappableMesh.glb', obj => {
        object = obj.scene.children[0] as THREE.Mesh;
    });

    // controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.target.set(0, 100, 0);
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    // Update the inertia on the orbit controls
    controls.update();

    // Accumulate Surface Maps
    if (params['Enable']) {
        progressiveSurfacemap.update(camera, params['Blend Window'], params['Blur Edges']);
        if (!progressiveSurfacemap.firstUpdate) {
            progressiveSurfacemap.showDebugLightmap(params['Debug Lightmap']);
        }
    }

    dirLights.forEach(light => {
        if (Math.random() > params['Ambient Weight']) {
            if (lightOrigin) {
                light.position.set(
                    lightOrigin.position.x + Math.random() * params['Light Radius'],
                    lightOrigin.position.y + Math.random() * params['Light Radius'],
                    lightOrigin.position.z + Math.random() * params['Light Radius'],
                );
            }
        } else {
            // Uniform Hemispherical Surface Distribution for Ambient Occlusion
            const lambda = Math.acos(2 * Math.random() - 1) - 3.14159 / 2.0;
            const phi = 2 * 3.14159 * Math.random();
            light.position.set(
                Math.cos(lambda) * Math.cos(phi) * 300 + object.position.x,
                Math.abs(Math.cos(lambda) * Math.sin(phi) * 300) + object.position.y + 20,
                Math.sin(lambda) * 300 + object.position.z,
            );
        }
    });

    // Render Scene
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}
