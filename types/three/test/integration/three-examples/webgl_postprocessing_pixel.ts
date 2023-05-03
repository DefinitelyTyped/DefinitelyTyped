import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';

let camera: THREE.OrthographicCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let composer: EffectComposer;
let crystalMesh: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshPhongMaterial>;
let clock: THREE.Clock;

init();
animate();

function init() {
    const aspectRatio = window.innerWidth / window.innerHeight;

    camera = new THREE.OrthographicCamera(-aspectRatio, aspectRatio, 1, -1, 0.1, 10);
    camera.position.y = 2 * Math.tan(Math.PI / 6);
    camera.position.z = 2;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x151729);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    composer = new EffectComposer(renderer);
    const renderPixelatedPass = new RenderPixelatedPass(6, scene, camera);
    composer.addPass(renderPixelatedPass);

    window.addEventListener('resize', onWindowResize);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxZoom = 2;

    // textures

    const loader = new THREE.TextureLoader();
    const texChecker = pixelTexture(loader.load('textures/checker.png'));
    const texChecker2 = pixelTexture(loader.load('textures/checker.png'));
    texChecker.repeat.set(3, 3);
    texChecker2.repeat.set(1.5, 1.5);

    // meshes

    const boxMaterial = new THREE.MeshPhongMaterial({ map: texChecker2 });

    function addBox(boxSideLength: number, x: number, z: number, rotation: number) {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(boxSideLength, boxSideLength, boxSideLength), boxMaterial);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.rotation.y = rotation;
        mesh.position.y = boxSideLength / 2;
        mesh.position.set(x, boxSideLength / 2 + 0.0001, z);
        scene.add(mesh);
        return mesh;
    }

    addBox(0.4, 0, 0, Math.PI / 4);
    addBox(0.5, -0.5, -0.5, Math.PI / 4);

    const planeSideLength = 2;
    const planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(planeSideLength, planeSideLength),
        new THREE.MeshPhongMaterial({ map: texChecker }),
    );
    planeMesh.receiveShadow = true;
    planeMesh.rotation.x = -Math.PI / 2;
    scene.add(planeMesh);

    const radius = 0.2;
    const geometry = new THREE.IcosahedronGeometry(radius);
    crystalMesh = new THREE.Mesh(
        geometry,
        new THREE.MeshPhongMaterial({
            color: 0x2379cf,
            emissive: 0x143542,
            shininess: 10,
            specular: 0xffffff,
        }),
    );
    crystalMesh.receiveShadow = true;
    crystalMesh.castShadow = true;
    scene.add(crystalMesh);

    // lights

    scene.add(new THREE.AmbientLight(0x2d3645, 1.5));

    const directionalLight = new THREE.DirectionalLight(0xfffc9c, 0.5);
    directionalLight.position.set(100, 100, 100);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(2048, 2048);
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xff8800, 1, 10, Math.PI / 16, 0.02, 2);
    spotLight.position.set(2, 2, 0);
    const target = spotLight.target;
    scene.add(target);
    target.position.set(0, 0, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
}

function onWindowResize() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera.left = -aspectRatio;
    camera.right = aspectRatio;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    crystalMesh.material.emissiveIntensity = Math.sin(t * 3) * 0.5 + 0.5;
    crystalMesh.position.y = 0.7 + Math.sin(t * 2) * 0.05;
    crystalMesh.rotation.y = stopGoEased(t, 2, 4) * 2 * Math.PI;

    const rendererSize = renderer.getSize(new THREE.Vector2());
    const aspectRatio = rendererSize.x / rendererSize.y;
    if (camera.left !== -aspectRatio || camera.top !== 1.0) {
        // Reset the Camera Frustum if it has been modified
        camera.left = -aspectRatio;
        camera.right = aspectRatio;
        camera.top = 1.0;
        camera.bottom = -1.0;
        camera.updateProjectionMatrix();
    }

    composer.render();
}

// Helper functions

function pixelTexture(texture: THREE.Texture) {
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

function easeInOutCubic(x: number) {
    return x ** 2 * 3 - x ** 3 * 2;
}

function linearStep(x: number, edge0: number, edge1: number) {
    const w = edge1 - edge0;
    const m = 1 / w;
    const y0 = -m * edge0;
    return THREE.MathUtils.clamp(y0 + m * x, 0, 1);
}

function stopGoEased(x: number, downtime: number, period: number) {
    const cycle = (x / period) | 0;
    const tween = x - cycle * period;
    const linStep = easeInOutCubic(linearStep(tween, downtime, period));
    return cycle + linStep;
}
