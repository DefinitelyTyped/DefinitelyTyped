import * as THREE from 'three';

import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera';
import { BokehShaderUniforms } from 'three/examples/jsm/shaders/BokehShader2';

const camera = new CinematicCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
const scene = new THREE.Scene();
const raycaster = new THREE.Raycaster();
const renderer = new THREE.WebGLRenderer({ antialias: true });

const mouse = new THREE.Vector2();
let INTERSECTED: THREE.Mesh | null;
const radius = 100;
let theta = 0;

init();
animate();

function init() {
    camera.setLens(5);
    camera.position.set(2, 1, 500);

    scene.background = new THREE.Color(0xf0f0f0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    const light = new THREE.DirectionalLight(0xffffff, 0.35);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const geometry = new THREE.BoxGeometry(20, 20, 20);

    for (let i = 0; i < 1500; i++) {
        const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));

        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;

        scene.add(object);
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove);

    window.addEventListener('resize', onWindowResize);

    const effectController: { [key: string]: any } = {
        focalLength: 15,
        fstop: 2.8,
        showFocus: false,
        focalDepth: 3,
    };

    const matChanger = () => {
        for (const e in effectController) {
            if (e in camera.postprocessing.bokeh_uniforms) {
                camera.postprocessing.bokeh_uniforms[e as keyof BokehShaderUniforms].value = effectController[e];
            }
        }

        camera.postprocessing.bokeh_uniforms['znear'].value = camera.near;
        camera.postprocessing.bokeh_uniforms['zfar'].value = camera.far;
        camera.setLens(effectController.focalLength, undefined, effectController.fstop, camera.coc);
        effectController['focalDepth'] = camera.postprocessing.bokeh_uniforms['focalDepth'].value;
    };

    //

    matChanger();

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event: MouseEvent) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    theta += 0.1;

    camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta));
    camera.position.y = radius * Math.sin(THREE.MathUtils.degToRad(theta));
    camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta));
    camera.lookAt(scene.position);

    camera.updateMatrixWorld();

    // find intersections

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects<THREE.Mesh>(scene.children);

    if (intersects.length > 0) {
        const targetDistance = intersects[0].distance;

        camera.focusAt(targetDistance); // using Cinematic camera focusAt method

        if (INTERSECTED && INTERSECTED.uuid !== intersects[0].object.uuid) {
            if (INTERSECTED) {
                (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(INTERSECTED.userData.currentHex);
            }

            INTERSECTED = intersects[0].object;
            if (INTERSECTED) {
                INTERSECTED.userData.currentHex = (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.getHex();
                (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(0xff0000);
            }
        }
    } else {
        if (INTERSECTED) {
            (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(INTERSECTED.userData.currentHex);
        }

        INTERSECTED = null;
    }

    //

    if (camera.postprocessing.enabled) {
        camera.renderCinematic(scene, renderer);
    } else {
        scene.overrideMaterial = null;

        renderer.clear();
        renderer.render(scene, camera);
    }
}
