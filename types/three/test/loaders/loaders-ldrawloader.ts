import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';

import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader';
import { LDrawUtils } from 'three/examples/jsm/utils/LDrawUtils';

let container: HTMLDivElement;
let progressBarDiv: HTMLDivElement;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

let model: THREE.Group | null;

const ldrawPath = 'models/ldraw/officialLibrary/';

const modelFileList = {
    Car: 'models/car.ldr_Packed.mpd',
    'Lunar Vehicle': 'models/1621-1-LunarMPVVehicle.mpd_Packed.mpd',
    'Radar Truck': 'models/889-1-RadarTruck.mpd_Packed.mpd',
    Trailer: 'models/4838-1-MiniVehicles.mpd_Packed.mpd',
    Bulldozer: 'models/4915-1-MiniConstruction.mpd_Packed.mpd',
    Helicopter: 'models/4918-1-MiniFlyers.mpd_Packed.mpd',
    Plane: 'models/5935-1-IslandHopper.mpd_Packed.mpd',
    Lighthouse: 'models/30023-1-Lighthouse.ldr_Packed.mpd',
    'X-Wing mini': 'models/30051-1-X-wingFighter-Mini.mpd_Packed.mpd',
    'AT-ST mini': 'models/30054-1-AT-ST-Mini.mpd_Packed.mpd',
    'AT-AT mini': 'models/4489-1-AT-AT-Mini.mpd_Packed.mpd',
    Shuttle: 'models/4494-1-Imperial Shuttle-Mini.mpd_Packed.mpd',
    'TIE Interceptor': 'models/6965-1-TIEIntercep_4h4MXk5.mpd_Packed.mpd',
    'Star fighter': 'models/6966-1-JediStarfighter-Mini.mpd_Packed.mpd',
    'X-Wing': 'models/7140-1-X-wingFighter.mpd_Packed.mpd',
    'AT-ST': 'models/10174-1-ImperialAT-ST-UCS.mpd_Packed.mpd',
};

init();
animate();

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(150, 200, 250);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // scene

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdeebed);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;

    controls = new OrbitControls(camera, renderer.domElement);

    //

    window.addEventListener('resize', onWindowResize);

    progressBarDiv = document.createElement('div');
    progressBarDiv.innerText = 'Loading...';
    progressBarDiv.style.fontSize = '3em';
    progressBarDiv.style.color = '#888';
    progressBarDiv.style.display = 'block';
    progressBarDiv.style.position = 'absolute';
    progressBarDiv.style.top = '50%';
    progressBarDiv.style.width = '100%';
    progressBarDiv.style.textAlign = 'center';

    // load materials and then the model

    reloadObject(true);
}

function reloadObject(resetCamera: boolean) {
    if (model) {
        scene.remove(model);
    }

    model = null;

    updateProgressBar(0);
    showProgressBar();

    // only smooth when not rendering with flat colors to improve processing time
    const lDrawLoader = new LDrawLoader();
    lDrawLoader.setPath(ldrawPath).load(
        '',
        group2 => {
            if (model) {
                scene.remove(model);
            }

            model = group2;

            // Convert from LDraw coordinates: rotate 180 degrees around OX
            model.rotation.x = Math.PI;

            scene.add(model);

            // Adjust camera and light

            const bbox = new THREE.Box3().setFromObject(model);
            const size = bbox.getSize(new THREE.Vector3());
            const radius = Math.max(size.x, Math.max(size.y, size.z)) * 0.5;

            if (resetCamera) {
                controls.target0.copy(bbox.getCenter(new THREE.Vector3()));
                controls.position0.set(-2.3, 1, 2).multiplyScalar(radius).add(controls.target0);
                controls.reset();
            }

            hideProgressBar();
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

//

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera);
}

function onProgress(xhr: ProgressEvent) {
    if (xhr.lengthComputable) {
        updateProgressBar(xhr.loaded / xhr.total);

        console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% downloaded`);
    }
}

function onError(error: unknown) {
    const message = 'Error loading model';
    progressBarDiv.innerText = message;
    console.log(message);
    console.error(error);
}

function showProgressBar() {
    document.body.appendChild(progressBarDiv);
}

function hideProgressBar() {
    document.body.removeChild(progressBarDiv);
}

function updateProgressBar(fraction: number) {
    progressBarDiv.innerText = `Loading... ${Math.round(fraction * 100)}%`;
}
