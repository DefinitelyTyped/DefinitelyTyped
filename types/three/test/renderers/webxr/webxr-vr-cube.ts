// A simple WebXR VR example that just shows a cube.

import * as THREE from 'three';

const container = document.createElement('div');

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(50, 2, 0.1, 10);
const scene = new THREE.Scene();

const vrButton = document.createElement('button');
let currentSession: XRSession | null = null;
let mesh: THREE.Mesh;

init();

async function onSessionStarted(session: XRSession): Promise<void> {
    session.addEventListener('end', onSessionEnded);

    await renderer.xr.setSession(session);
    vrButton.innerText = 'Exit VR';

    currentSession = session;
}

function onSessionEnded(): void {
    if (currentSession == null) {
        return;
    }

    currentSession.removeEventListener('end', onSessionEnded);
    vrButton.innerText = 'Enter VR';

    currentSession = null;
}

async function checkVRSupport(): Promise<XRSystem | null> {
    if ('xr' in navigator && navigator.xr) {
        const isSupported = await navigator.xr.isSessionSupported('immersive-vr').catch(() => false);
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
    renderer.outputEncoding = THREE.sRGBEncoding;
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

    checkVRSupport().then(xr => {
        if (xr) {
            vrButton.innerText = 'Enter VR';

            vrButton.addEventListener('click', async () => {
                if (currentSession == null) {
                    const sessionInit = { optionalFeatures: ['local-floor', 'bounded-floor'] };
                    const session = await xr.requestSession('immersive-vr', sessionInit);
                    await onSessionStarted(session);
                }
            });
        } else {
            vrButton.innerText = 'VR Not Supported';
        }

        container.appendChild(vrButton);
    });

    renderer.setAnimationLoop(() => {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);
    });
}
