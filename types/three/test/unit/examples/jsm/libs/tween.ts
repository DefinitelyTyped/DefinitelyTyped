import * as THREE from "three";
import TWEEN from "three/examples/jsm/libs/tween.module";
import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";

declare const camera: THREE.PerspectiveCamera;
declare const scene: THREE.Scene;
declare const renderer: CSS3DRenderer;

const objects: CSS3DObject[] = [];

function transform(targets: THREE.Object3D[], duration: number) {
    TWEEN.removeAll();

    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const target = targets[i];

        new TWEEN.Tween(object.position)
            .to(
                { x: target.position.x, y: target.position.y, z: target.position.z },
                Math.random() * duration + duration,
            )
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to(
                { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
                Math.random() * duration + duration,
            )
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween({})
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
}

function render() {
    renderer.render(scene, camera);
}
