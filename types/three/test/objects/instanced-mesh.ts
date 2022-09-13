import {
    Color,
    HemisphereLight,
    InstancedMesh,
    MathUtils,
    Matrix4,
    MeshLambertMaterial,
    PerspectiveCamera,
    Scene,
    SphereGeometry,
    WebGLRenderer,
} from 'three';

const { randFloatSpread } = MathUtils;

const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer();
const scene = new Scene();

function init() {
    const color = new Color();
    const matrix = new Matrix4();

    const count = 1000;

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(new HemisphereLight(0x45af23, 0x0000af, 0.7));

    const spheres = new InstancedMesh(undefined, undefined, count);
    spheres.geometry = new SphereGeometry(0.1, 32, 32);
    spheres.material = new MeshLambertMaterial();

    scene.add(spheres);

    for (let index = 0; index < count; index += 1) {
        matrix.setPosition(randFloatSpread(10), randFloatSpread(10), randFloatSpread(10));
        spheres.setMatrixAt(index, matrix);

        color.setHex(0xffffff * Math.random());
        spheres.setColorAt(index, color);
    }

    return spheres;
}

init();

function render() {
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

animate();
