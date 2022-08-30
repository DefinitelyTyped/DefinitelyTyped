import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes';
import { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted } from 'three/examples/jsm/shaders/ToonShader';

let container: HTMLElement;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

let materials: {
    shiny: THREE.MeshStandardMaterial;
    chrome: THREE.MeshLambertMaterial;
    liquid: THREE.MeshLambertMaterial;
    matte: THREE.MeshPhongMaterial;
    flat: THREE.MeshLambertMaterial;
    textured: THREE.MeshPhongMaterial;
    colors: THREE.MeshPhongMaterial;
    multiColors: THREE.MeshPhongMaterial;
    plastic: THREE.MeshPhongMaterial;
    toon1: THREE.ShaderMaterial;
    toon2: THREE.ShaderMaterial;
    hatching: THREE.ShaderMaterial;
    dotted: THREE.ShaderMaterial;
};
let current_material: keyof typeof materials;

let light: THREE.DirectionalLight;
let pointLight: THREE.PointLight;
let ambientLight: THREE.AmbientLight;

let effect: MarchingCubes;
let resolution: number;

let time = 0;

const clock = new THREE.Clock();

init();
animate();

function init() {
    container = document.getElementById('container')!;

    // CAMERA

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(-500, 500, 1500);

    // SCENE

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    // LIGHTS

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0.5, 0.5, 1);
    scene.add(light);

    pointLight = new THREE.PointLight(0xff3300);
    pointLight.position.set(0, 0, 100);
    scene.add(pointLight);

    ambientLight = new THREE.AmbientLight(0x080808);
    scene.add(ambientLight);

    // MATERIALS

    materials = generateMaterials();
    current_material = 'shiny';

    // MARCHING CUBES

    resolution = 28;

    effect = new MarchingCubes(resolution, materials[current_material], true, true, 100000);
    effect.position.set(0, 0, 0);
    effect.scale.set(700, 700, 700);

    effect.enableUvs = false;
    effect.enableColors = false;

    scene.add(effect);

    // RENDERER

    renderer = new THREE.WebGLRenderer();
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // CONTROLS

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 5000;

    // EVENTS

    window.addEventListener('resize', onWindowResize);
}

//

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function generateMaterials() {
    // environment map

    const path = 'textures/cube/SwedishRoyalCastle/';
    const format = '.jpg';
    const urls = [
        `${path}px${format}`,
        `${path}nx${format}`,
        `${path}py${format}`,
        `${path}ny${format}`,
        `${path}pz${format}`,
        `${path}nz${format}`,
    ];

    const cubeTextureLoader = new THREE.CubeTextureLoader();

    const reflectionCube = cubeTextureLoader.load(urls);
    const refractionCube = cubeTextureLoader.load(urls);
    refractionCube.mapping = THREE.CubeRefractionMapping;

    // toons

    const toonMaterial1 = createShaderMaterial(ToonShader1, light, ambientLight);
    const toonMaterial2 = createShaderMaterial(ToonShader2, light, ambientLight);
    const hatchingMaterial = createShaderMaterial(ToonShaderHatching, light, ambientLight);
    const dottedMaterial = createShaderMaterial(ToonShaderDotted, light, ambientLight);

    const texture = new THREE.TextureLoader().load('textures/uv_grid_opengl.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const materials = {
        shiny: new THREE.MeshStandardMaterial({
            color: 0x550000,
            envMap: reflectionCube,
            roughness: 0.1,
            metalness: 1.0,
        }),
        chrome: new THREE.MeshLambertMaterial({ color: 0xffffff, envMap: reflectionCube }),
        liquid: new THREE.MeshLambertMaterial({ color: 0xffffff, envMap: refractionCube, refractionRatio: 0.85 }),
        matte: new THREE.MeshPhongMaterial({ specular: 0x111111, shininess: 1 }),
        flat: new THREE.MeshLambertMaterial({
            /*TODO flatShading: true */
        }),
        textured: new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 1, map: texture }),
        colors: new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, shininess: 2, vertexColors: true }),
        multiColors: new THREE.MeshPhongMaterial({ shininess: 2, vertexColors: true }),
        plastic: new THREE.MeshPhongMaterial({ specular: 0x888888, shininess: 250 }),
        toon1: toonMaterial1,
        toon2: toonMaterial2,
        hatching: hatchingMaterial,
        dotted: dottedMaterial,
    };

    return materials;
}

interface ShaderObject {
    uniforms: Record<string, THREE.IUniform>;
    vertexShader: string;
    fragmentShader: string;
}

function createShaderMaterial(shader: ShaderObject, light: THREE.DirectionalLight, ambientLight: THREE.AmbientLight) {
    const u = THREE.UniformsUtils.clone(shader.uniforms);

    const vs = shader.vertexShader;
    const fs = shader.fragmentShader;

    const material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: vs, fragmentShader: fs });

    material.uniforms['uDirLightPos'].value = light.position;
    material.uniforms['uDirLightColor'].value = light.color;

    material.uniforms['uAmbientLightColor'].value = ambientLight.color;

    return material;
}

// this controls content of marching cubes voxel field

function updateCubes(
    object: MarchingCubes,
    time: number,
    numblobs: number,
    floor: boolean,
    wallx: boolean,
    wallz: boolean,
) {
    object.reset();

    // fill the field with some metaballs

    const rainbow = [
        new THREE.Color(0xff0000),
        new THREE.Color(0xff7f00),
        new THREE.Color(0xffff00),
        new THREE.Color(0x00ff00),
        new THREE.Color(0x0000ff),
        new THREE.Color(0x4b0082),
        new THREE.Color(0x9400d3),
    ];
    const subtract = 12;
    const strength = 1.2 / ((Math.sqrt(numblobs) - 1) / 4 + 1);

    for (let i = 0; i < numblobs; i++) {
        const ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
        const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77; // dip into the floor
        const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5;

        if (current_material === 'multiColors') {
            object.addBall(ballx, bally, ballz, strength, subtract, rainbow[i % 7]);
        } else {
            object.addBall(ballx, bally, ballz, strength, subtract);
        }
    }

    if (floor) object.addPlaneY(2, 12);
    if (wallz) object.addPlaneZ(2, 12);
    if (wallx) object.addPlaneX(2, 12);
}

//

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    const delta = clock.getDelta();

    time += delta * 1.0 * 0.5;

    // marching cubes

    if (28 !== resolution) {
        resolution = 28;
        effect.init(Math.floor(resolution));
    }

    if (80 !== effect.isolation) {
        effect.isolation = 80;
    }

    updateCubes(effect, time, 10, true, false, false);

    // render

    renderer.render(scene, camera);
}
