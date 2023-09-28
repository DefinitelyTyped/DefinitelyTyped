import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect';
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader';
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper';
import { MMDPhysicsHelper } from 'three/examples/jsm/animation/MMDPhysics';
import { CCDIKHelper } from 'three/examples/jsm/animation/CCDIKSolver';

let mesh: THREE.SkinnedMesh;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let effect: OutlineEffect;
let helper: MMDAnimationHelper;
let ikHelper: CCDIKHelper;
let physicsHelper: MMDPhysicsHelper;

const clock = new THREE.Clock();

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 30;

    // scene

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const gridHelper = new THREE.PolarGridHelper(30, 10);
    gridHelper.position.y = -10;
    scene.add(gridHelper);

    const ambient = new THREE.AmbientLight(0x666666);
    scene.add(ambient);

    const directionalLight = new THREE.DirectionalLight(0x887766);
    directionalLight.position.set(-1, 1, 1).normalize();
    scene.add(directionalLight);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    effect = new OutlineEffect(renderer);

    // model

    const modelFile = 'models/mmd/miku/miku_v2.pmd';
    const vmdFiles = ['models/mmd/vmds/wavefile_v2.vmd'];

    helper = new MMDAnimationHelper({
        afterglow: 2.0,
    });

    const loader = new MMDLoader();

    loader.loadWithAnimation(
        modelFile,
        vmdFiles,
        mmd => {
            mesh = mmd.mesh;
            mesh.position.y = -10;
            scene.add(mesh);

            helper.add(mesh, {
                animation: mmd.animation,
                physics: true,
            });

            const object = helper.objects.get(mesh);

            ikHelper = object!.ikSolver.createHelper();
            ikHelper.visible = false;
            scene.add(ikHelper);

            physicsHelper = object!.physics!.createHelper();
            physicsHelper.visible = false;
            scene.add(physicsHelper);
        },
        xhr => {
            if (xhr.lengthComputable) {
                const percentComplete = (xhr.loaded / xhr.total) * 100;
                console.log(Math.round(percentComplete) + '% downloaded');
            }
        },
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 100;

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    effect.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    helper.update(clock.getDelta());
    effect.render(scene, camera);
}

init();
animate();
