// A simple WebXR VR example that just shows a cube.

import * as THREE from "three";
import { XRButton } from "three/examples/jsm/webxr/XRButton";

const container = document.createElement("div");

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(50, 2, 0.1, 10);
const scene = new THREE.Scene();

let currentSession: XRSession | null = null;
let mesh: THREE.Mesh;

init();

async function onSessionStarted(session: XRSession): Promise<void> {
    session.addEventListener("end", onSessionEnded);

    await renderer.xr.setSession(session);
    currentSession = session;
}

async function onSessionEnded(): Promise<void> {
    if (currentSession == null) {
        return;
    }
    currentSession.removeEventListener("end", onSessionEnded);
    await renderer.xr.setSession(null);
    currentSession = null;
}

async function checkVRSupport(): Promise<XRSystem | null> {
    if ("xr" in navigator && navigator.xr) {
        const isSupported = await navigator.xr.isSessionSupported("immersive-vr").catch(() => false);
        if (isSupported) {
            return navigator.xr;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

function init(): void {
    document.body.appendChild(container);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(300, 150);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    camera.position.set(0, 1.6, 0);
    scene.add(camera);

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 1.6, -3);
    scene.add(mesh);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    renderer.setAnimationLoop(() => {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);
    });
}
