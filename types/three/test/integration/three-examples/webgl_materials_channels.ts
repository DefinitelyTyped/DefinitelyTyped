import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { VelocityShader } from "three/examples/jsm/shaders/VelocityShader";

let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

const params: {
    material: string;
    camera: string;
    side: keyof typeof sides;
} = {
    material: "normal",
    camera: "perspective",
    side: "double",
};

const sides = {
    front: THREE.FrontSide,
    back: THREE.BackSide,
    double: THREE.DoubleSide,
};

let cameraOrtho: THREE.OrthographicCamera;
let cameraPerspective: THREE.PerspectiveCamera;
let controlsOrtho: OrbitControls;
let controlsPerspective: OrbitControls;

let mesh: THREE.Mesh<
    THREE.BufferGeometry,
    THREE.MeshNormalMaterial | THREE.MeshStandardMaterial | THREE.MeshDepthMaterial | THREE.ShaderMaterial
>;
let materialStandard: THREE.MeshStandardMaterial;
let materialDepthBasic: THREE.MeshDepthMaterial;
let materialDepthRGBA: THREE.MeshDepthMaterial;
let materialNormal: THREE.MeshNormalMaterial;
let materialVelocity: THREE.ShaderMaterial;

const SCALE = 2.436143; // from original model
const BIAS = -0.428408; // from original model

init();
animate();

function init() {
    const container = document.createElement("div");
    document.body.appendChild(container);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //

    scene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight;
    cameraPerspective = new THREE.PerspectiveCamera(45, aspect, 500, 3000);
    cameraPerspective.position.z = 1500;
    scene.add(cameraPerspective);

    const height = 500;
    cameraOrtho = new THREE.OrthographicCamera(-height * aspect, height * aspect, height, -height, 1000, 2500);
    cameraOrtho.position.z = 1500;
    scene.add(cameraOrtho);

    camera = cameraPerspective;

    controlsPerspective = new OrbitControls(cameraPerspective, renderer.domElement);
    controlsPerspective.minDistance = 1000;
    controlsPerspective.maxDistance = 2400;
    controlsPerspective.enablePan = false;
    controlsPerspective.enableDamping = true;

    controlsOrtho = new OrbitControls(cameraOrtho, renderer.domElement);
    controlsOrtho.minZoom = 0.5;
    controlsOrtho.maxZoom = 1.5;
    controlsOrtho.enablePan = false;
    controlsOrtho.enableDamping = true;

    // lights

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff0000, 0.5);
    pointLight.position.z = 2500;
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff6666, 1);
    camera.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x0000ff, 0.5);
    pointLight3.position.x = -1000;
    pointLight3.position.z = 1000;
    scene.add(pointLight3);

    // textures

    const textureLoader = new THREE.TextureLoader();
    const normalMap = textureLoader.load("models/obj/ninja/normal.png");
    const aoMap = textureLoader.load("models/obj/ninja/ao.jpg");
    const displacementMap = textureLoader.load("models/obj/ninja/displacement.jpg");

    // material

    materialStandard = new THREE.MeshStandardMaterial({
        color: 0xffffff,

        metalness: 0.5,
        roughness: 0.6,

        displacementMap,
        displacementScale: SCALE,
        displacementBias: BIAS,

        aoMap,

        normalMap,
        normalScale: new THREE.Vector2(1, -1),

        side: THREE.DoubleSide,
    });

    materialDepthBasic = new THREE.MeshDepthMaterial({
        depthPacking: THREE.BasicDepthPacking,

        displacementMap,
        displacementScale: SCALE,
        displacementBias: BIAS,

        side: THREE.DoubleSide,
    });

    materialDepthRGBA = new THREE.MeshDepthMaterial({
        depthPacking: THREE.RGBADepthPacking,

        displacementMap,
        displacementScale: SCALE,
        displacementBias: BIAS,

        side: THREE.DoubleSide,
    });

    materialNormal = new THREE.MeshNormalMaterial({
        displacementMap,
        displacementScale: SCALE,
        displacementBias: BIAS,

        normalMap,
        normalScale: new THREE.Vector2(1, -1),

        side: THREE.DoubleSide,
    });

    materialVelocity = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(VelocityShader.uniforms),
        vertexShader: VelocityShader.vertexShader,
        fragmentShader: VelocityShader.fragmentShader,
        side: THREE.DoubleSide,
    });
    materialVelocity.uniforms.displacementMap.value = displacementMap;
    materialVelocity.uniforms.displacementScale.value = SCALE;
    materialVelocity.uniforms.displacementBias.value = BIAS;
    materialVelocity.extensions.derivatives = true;

    //

    const loader = new OBJLoader();
    loader.load("models/obj/ninja/ninjaHead_Low.obj", group => {
        const geometry = (group.children[0] as THREE.Mesh).geometry;
        geometry.attributes.uv2 = geometry.attributes.uv;
        geometry.center();

        mesh = new THREE.Mesh(geometry, materialNormal);
        mesh.scale.multiplyScalar(25);
        mesh.userData.matrixWorldPrevious = new THREE.Matrix4(); // for velocity
        scene.add(mesh);
    });

    //

    window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = window.innerWidth / window.innerHeight;

    (camera as THREE.PerspectiveCamera).aspect = aspect;

    (camera as THREE.OrthographicCamera).left = -height * aspect;
    (camera as THREE.OrthographicCamera).right = height * aspect;
    (camera as THREE.OrthographicCamera).top = height;
    (camera as THREE.OrthographicCamera).bottom = -height;

    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}

//

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    if (mesh) {
        let material = mesh.material;

        switch (params.material) {
            case "standard":
                material = materialStandard;
                break;
            case "depthBasic":
                material = materialDepthBasic;
                break;
            case "depthRGBA":
                material = materialDepthRGBA;
                break;
            case "normal":
                material = materialNormal;
                break;
            case "velocity":
                material = materialVelocity;
                break;
        }

        if (sides[params.side] !== material.side) {
            switch (params.side) {
                case "front":
                    material.side = THREE.FrontSide;
                    break;
                case "back":
                    material.side = THREE.BackSide;
                    break;
                case "double":
                    material.side = THREE.DoubleSide;
                    break;
            }

            material.needsUpdate = true;
        }

        mesh.material = material;
    }

    switch (params.camera) {
        case "perspective":
            camera = cameraPerspective;
            break;
        case "ortho":
            camera = cameraOrtho;
            break;
    }

    controlsPerspective.update();
    controlsOrtho.update(); // must update both controls for damping to complete

    // remember camera projection changes

    materialVelocity.uniforms.previousProjectionViewMatrix.value.copy(
        materialVelocity.uniforms.currentProjectionViewMatrix.value,
    );
    materialVelocity.uniforms.currentProjectionViewMatrix.value.multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse,
    );

    if (mesh && mesh.userData.matrixWorldPrevious) {
        materialVelocity.uniforms.modelMatrixPrev.value.copy(mesh.userData.matrixWorldPrevious);
    }

    renderer.render(scene, camera);

    scene.traverse(object => {
        if ((object as THREE.Mesh).isMesh) {
            object.userData.matrixWorldPrevious.copy(object.matrixWorld);
        }
    });
}
