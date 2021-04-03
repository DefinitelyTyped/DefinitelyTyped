import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
let mesh: THREE.Mesh;

init();
animate();

function init() {
    camera.position.z = 5;

    const geometry = new THREE.BufferGeometry();

    const verticles = new Float32Array([
        ...[-1.0, -1.0, 1.0], //
        ...[1.0, -1.0, 1.0], //
        ...[0.0, 1.0, 1.0], //
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(verticles, 3));
    const posAtt = geometry.getAttribute('position');

    if (posAtt.name === 'position') {
        geometry.deleteAttribute('position');
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(verticles, 3));

    geometry.setAttribute('customAttribute', new THREE.BufferAttribute(new Float32Array([0]), 1));
    const customAtt = geometry.getAttribute('customAttribute');

    if (customAtt.name === 'customAttribute') {
        geometry.deleteAttribute('customAttribute');
    }

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}
