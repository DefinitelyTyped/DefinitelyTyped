import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

let orbitControls: OrbitControls;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let loader: GLTFLoader;
let gltf: GLTF;
let background: THREE.Texture;
let envMap: THREE.Texture;
let mixer: THREE.AnimationMixer;

const clock = new THREE.Clock();

interface SceneInfo {
    name: string;
    url: string;
    author: string;
    authorURL: string;
    cameraPos: THREE.Vector3;
    extensions: string[];
    addEnvMap?: boolean;
    objectRotation?: THREE.Euler;
    objectScale?: THREE.Vector3;
    objectPosition?: THREE.Vector3;
    center?: THREE.Vector3;
    addLights?: boolean;
    addGround?: boolean;
    shadows?: boolean;
    animationTime?: number;
}

const scenes: Record<string, SceneInfo> = {
    Boombox: {
        name: 'BoomBox (PBR)',
        url: './models/gltf/BoomBox/%s/BoomBox.gltf',
        author: 'Microsoft',
        authorURL: 'https://www.microsoft.com/',
        cameraPos: new THREE.Vector3(0.02, 0.01, 0.03),
        objectRotation: new THREE.Euler(0, Math.PI, 0),
        extensions: ['glTF', 'glTF-pbrSpecularGlossiness', 'glTF-Binary'],
        addEnvMap: true,
    },
    'Bot Skinned': {
        name: 'Bot Skinned',
        url: './models/gltf/BotSkinned/%s/Bot_Skinned.gltf',
        author: 'MozillaVR',
        authorURL: 'https://vr.mozilla.org/',
        cameraPos: new THREE.Vector3(0.5, 2, 2),
        center: new THREE.Vector3(0, 1.2, 0),
        objectRotation: new THREE.Euler(0, 0, 0),
        addLights: true,
        addGround: true,
        shadows: true,
        extensions: ['glTF-MaterialsUnlit'],
    },
    MetalRoughSpheres: {
        name: 'MetalRoughSpheres (PBR)',
        url: './models/gltf/MetalRoughSpheres/%s/MetalRoughSpheres.gltf',
        author: '@emackey',
        authorURL: 'https://twitter.com/emackey',
        cameraPos: new THREE.Vector3(2, 1, 15),
        objectRotation: new THREE.Euler(0, 0, 0),
        extensions: ['glTF', 'glTF-Embedded'],
        addEnvMap: true,
    },
    'Clearcoat Test': {
        name: 'Clearcoat Test',
        url: './models/gltf/ClearcoatTest/ClearcoatTest.glb',
        author: 'Ed Mackey (Analytical Graphics, Inc.)',
        authorURL: 'https://www.agi.com/',
        cameraPos: new THREE.Vector3(0, 0, 20),
        extensions: ['glTF'],
        addEnvMap: true,
    },
    Duck: {
        name: 'Duck',
        url: './models/gltf/Duck/%s/Duck.gltf',
        author: 'Sony',
        authorURL: 'https://www.playstation.com/en-us/corporate/about/',
        cameraPos: new THREE.Vector3(0, 3, 5),
        addLights: true,
        addGround: true,
        shadows: true,
        extensions: ['glTF', 'glTF-Embedded', 'glTF-pbrSpecularGlossiness', 'glTF-Binary', 'glTF-Draco'],
    },
    Monster: {
        name: 'Monster',
        url: './models/gltf/Monster/%s/Monster.gltf',
        author: '3drt.com',
        authorURL: 'http://www.3drt.com/downloads.htm',
        cameraPos: new THREE.Vector3(3, 1, 7),
        objectScale: new THREE.Vector3(0.04, 0.04, 0.04),
        objectPosition: new THREE.Vector3(0.2, 0.1, 0),
        objectRotation: new THREE.Euler(0, (-3 * Math.PI) / 4, 0),
        animationTime: 3,
        addLights: true,
        shadows: true,
        addGround: true,
        extensions: ['glTF', 'glTF-Embedded', 'glTF-Binary', 'glTF-Draco', 'glTF-lights'],
    },
    'Cesium Man': {
        name: 'Cesium Man',
        url: './models/gltf/CesiumMan/%s/CesiumMan.gltf',
        author: 'Cesium',
        authorURL: 'https://cesiumjs.org/',
        cameraPos: new THREE.Vector3(0, 3, 10),
        objectRotation: new THREE.Euler(0, 0, 0),
        addLights: true,
        addGround: true,
        shadows: true,
        extensions: ['glTF', 'glTF-Embedded', 'glTF-Binary', 'glTF-Draco'],
    },
    'Cesium Milk Truck': {
        name: 'Cesium Milk Truck',
        url: './models/gltf/CesiumMilkTruck/%s/CesiumMilkTruck.gltf',
        author: 'Cesium',
        authorURL: 'https://cesiumjs.org/',
        cameraPos: new THREE.Vector3(0, 3, 10),
        addLights: true,
        addGround: true,
        shadows: true,
        extensions: ['glTF', 'glTF-Embedded', 'glTF-Binary', 'glTF-Draco'],
    },
    'Outlined Box': {
        name: 'Outlined Box',
        url: './models/gltf/OutlinedBox/OutlinedBox.gltf',
        author: '@twittmann',
        authorURL: 'https://github.com/twittmann',
        cameraPos: new THREE.Vector3(0, 5, 15),
        objectScale: new THREE.Vector3(0.01, 0.01, 0.01),
        objectRotation: new THREE.Euler(0, 90, 0),
        addLights: true,
        shadows: true,
        extensions: ['glTF'],
    },
};

const state = {
    scene: Object.keys(scenes)[0],
    extension: scenes[Object.keys(scenes)[0]].extensions[0],
    playAnimation: true,
};

function onload() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);

    // Load background and generate envMap

    new RGBELoader()
        .setDataType(THREE.UnsignedByteType)
        .setPath('textures/equirectangular/')
        .load('venice_sunset_1k.hdr', texture => {
            envMap = pmremGenerator.fromEquirectangular(texture).texture;
            pmremGenerator.dispose();

            background = envMap;

            //
            initScene(scenes[state.scene]);
            animate();
        });

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
}

function initScene(sceneInfo: SceneInfo) {
    const descriptionEl = document.getElementById('description');

    if (descriptionEl && sceneInfo.author && sceneInfo.authorURL) {
        descriptionEl.innerHTML = `${sceneInfo.name} by <a href="${sceneInfo.authorURL}" target="_blank" rel="noopener">${sceneInfo.author}</a>`;
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000);
    scene.add(camera);

    let spot1: THREE.SpotLight;

    if (sceneInfo.addLights) {
        const ambient = new THREE.AmbientLight(0x222222);
        scene.add(ambient);

        const directionalLight = new THREE.DirectionalLight(0xdddddd, 4);
        directionalLight.position.set(0, 0, 1).normalize();
        scene.add(directionalLight);

        spot1 = new THREE.SpotLight(0xffffff, 1);
        spot1.position.set(5, 10, 5);
        spot1.angle = 0.5;
        spot1.penumbra = 0.75;
        spot1.intensity = 100;
        spot1.decay = 2;

        if (sceneInfo.shadows) {
            spot1.castShadow = true;
            spot1.shadow.bias = 0.0001;
            spot1.shadow.mapSize.width = 2048;
            spot1.shadow.mapSize.height = 2048;
        }

        scene.add(spot1);
    }

    if (sceneInfo.shadows) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    // TODO: Reuse existing OrbitControls, GLTFLoaders, and so on

    orbitControls = new OrbitControls(camera, renderer.domElement);

    if (sceneInfo.addGround) {
        const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(512, 512), groundMaterial);
        ground.receiveShadow = !!sceneInfo.shadows;

        ground.position.z = -70;

        ground.rotation.x = -Math.PI / 2;

        scene.add(ground);
    }

    loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('js/libs/draco/gltf/');
    loader.setDRACOLoader(dracoLoader);

    let url = sceneInfo.url.replace(/%s/g, state.extension);

    if (state.extension === 'glTF-Binary') {
        url = url.replace('.gltf', '.glb');
    }

    const loadStartTime = performance.now();

    loader.load(
        url,
        data => {
            gltf = data;

            const object = gltf.scene;

            console.info(`Load time: ${(performance.now() - loadStartTime).toFixed(2)}ms.`);

            if (sceneInfo.cameraPos) {
                camera.position.copy(sceneInfo.cameraPos);
            }

            if (sceneInfo.center) {
                orbitControls.target.copy(sceneInfo.center);
            }

            if (sceneInfo.objectPosition) {
                object.position.copy(sceneInfo.objectPosition);

                if (spot1) {
                    spot1.target.position.copy(sceneInfo.objectPosition);
                }
            }

            if (sceneInfo.objectRotation) {
                object.rotation.copy(sceneInfo.objectRotation);
            }

            if (sceneInfo.objectScale) {
                object.scale.copy(sceneInfo.objectScale);
            }

            if (sceneInfo.addEnvMap) {
                object.traverse(node => {
                    const mesh = node as THREE.Mesh;
                    if (
                        mesh.material &&
                        ((mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial ||
                            (mesh.material as THREE.ShaderMaterial).isShaderMaterial)
                    ) {
                        (mesh.material as THREE.MeshStandardMaterial).envMap = envMap;
                        (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.5; // boombox seems too dark otherwise
                    }
                });

                scene.background = background;
            }

            object.traverse(node => {
                if ((node as THREE.Mesh).isMesh || (node as THREE.Light).isLight) node.castShadow = true;
            });

            const animations = gltf.animations;

            if (animations && animations.length) {
                mixer = new THREE.AnimationMixer(object);

                animations.forEach(anim => {
                    if (sceneInfo.animationTime) {
                        anim.duration = sceneInfo.animationTime;
                    }

                    const action = mixer.clipAction(anim);

                    if (state.playAnimation) action.play();
                });
            }

            scene.add(object);
            onWindowResize();
        },
        undefined,
        error => {
            console.error(error);
        },
    );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (mixer) mixer.update(clock.getDelta());

    orbitControls.update();

    render();
}

function render() {
    renderer.render(scene, camera);
}

onload();
