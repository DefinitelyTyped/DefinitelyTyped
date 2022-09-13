import { Reflector } from 'three/examples/jsm/objects/Reflector';
import {
    DirectionalLight,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    SphereGeometry,
    sRGBEncoding,
    WebGLRenderer,
} from 'three';

const renderer = new WebGLRenderer();
renderer.outputEncoding = sRGBEncoding;

const camera = new PerspectiveCamera();
camera.position.set(0.0, 0.0, 5.0);

const scene = new Scene();

const geometry = new PlaneGeometry(10.0, 10.0);
const mirror = new Reflector(geometry, {
    color: 0x4f4f4f,
});
mirror.position.y = -1.0;
mirror.rotation.x = -0.5 * Math.PI;
scene.add(mirror);

const light = new DirectionalLight(0xffffff);
light.position.set(5.0, 5.0, 5.0);
scene.add(light);

const sphere = new Mesh(new SphereGeometry(1.0), new MeshStandardMaterial({ color: 0x77ff55 }));
scene.add(sphere);

function update() {
    renderer.render(scene, camera);

    requestAnimationFrame(update);
}
requestAnimationFrame(update);
