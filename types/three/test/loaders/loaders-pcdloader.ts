import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

init();
render();

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 40);
    camera.position.set(0, 0, 1);
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // use if there is no animation loop
    controls.minDistance = 0.5;
    controls.maxDistance = 10;

    // scene.add( new THREE.AxesHelper( 1 ) );

    const loader = new PCDLoader();
    loader.load('./models/pcd/binary/Zaghetto.pcd', points => {
        points.geometry.center();
        points.geometry.rotateX(Math.PI);
        points.name = 'Zaghetto.pcd';
        scene.add(points);

        render();
    });
    pcdLoaderLoad(loader, './models/pcd/binary/Zaghetto.pcd', points => {
        points.geometry.center();
        points.geometry.rotateX(Math.PI);
        points.name = 'Zaghetto.pcd';
        scene.add(points);

        render();
    });

    const file = './models/pcd/binary/Zaghetto.pcd';
    const reader = new FileReader();

    window.addEventListener('resize', onWindowResize);
}

// Mostly copied from PCDLoader.js to exercise the parse() function
function pcdLoaderLoad(
    pcdLoader: PCDLoader,
    url: string,
    onLoad: (points: THREE.Points) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
) {
    const scope = pcdLoader;

    const loader = new THREE.FileLoader(scope.manager);
    loader.setPath(scope.path);
    loader.setResponseType('arraybuffer');
    loader.setRequestHeader(scope.requestHeader);
    loader.setWithCredentials(scope.withCredentials);
    loader.load(
        url,
        data => {
            try {
                onLoad(scope.parse(data));
            } catch (e) {
                if (onError) {
                    onError(e);
                } else {
                    console.error(e);
                }

                scope.manager.itemError(url);
            }
        },
        onProgress,
        onError,
    );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    renderer.render(scene, camera);
}
