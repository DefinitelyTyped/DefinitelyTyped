import * as THREE from 'three';

let container: HTMLElement;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let mesh: THREE.InstancedMesh;

const instances = 5000;
let lastTime = 0;

const moveQ = new THREE.Quaternion(0.5, 0.5, 0.5, 0.0).normalize();
const tmpQ = new THREE.Quaternion();
const tmpM = new THREE.Matrix4();
const currentM = new THREE.Matrix4();

init();
animate();

function init() {
    container = document.getElementById('container')!;

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);

    // geometry

    const geometry = new THREE.InstancedBufferGeometry();

    // per mesh data x,y,z,w,u,v,s,t for 4-element alignment
    // only use x,y,z and u,v; but x, y, z, nx, ny, nz, u, v would be a good layout
    const vertexBuffer = new THREE.InterleavedBuffer(
        new Float32Array([
            // Front
            -1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            -1,
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            -1,
            1,
            0,
            1,
            1,
            0,
            0,
            // Back
            1,
            1,
            -1,
            0,
            1,
            0,
            0,
            0,
            -1,
            1,
            -1,
            0,
            0,
            0,
            0,
            0,
            1,
            -1,
            -1,
            0,
            1,
            1,
            0,
            0,
            -1,
            -1,
            -1,
            0,
            0,
            1,
            0,
            0,
            // Left
            -1,
            1,
            -1,
            0,
            1,
            1,
            0,
            0,
            -1,
            1,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            -1,
            -1,
            0,
            0,
            1,
            0,
            0,
            -1,
            -1,
            1,
            0,
            0,
            0,
            0,
            0,
            // Right
            1,
            1,
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            1,
            -1,
            0,
            1,
            1,
            0,
            0,
            1,
            -1,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            -1,
            -1,
            0,
            0,
            1,
            0,
            0,
            // Top
            -1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            1,
            -1,
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            -1,
            0,
            1,
            1,
            0,
            0,
            // Bottom
            1,
            -1,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            -1,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            -1,
            -1,
            0,
            1,
            1,
            0,
            0,
            -1,
            -1,
            -1,
            0,
            0,
            1,
            0,
            0,
        ]),
        8,
    );

    // Use vertexBuffer, starting at offset 0, 3 items in position attribute
    const positions = new THREE.InterleavedBufferAttribute(vertexBuffer, 3, 0);
    geometry.setAttribute('position', positions);
    // Use vertexBuffer, starting at offset 4, 2 items in uv attribute
    const uvs = new THREE.InterleavedBufferAttribute(vertexBuffer, 2, 4);
    geometry.setAttribute('uv', uvs);

    const indices = new Uint16Array([
        0,
        2,
        1,
        2,
        3,
        1,
        4,
        6,
        5,
        6,
        7,
        5,
        8,
        10,
        9,
        10,
        11,
        9,
        12,
        14,
        13,
        14,
        15,
        13,
        16,
        17,
        18,
        18,
        17,
        19,
        20,
        21,
        22,
        22,
        21,
        23,
    ]);

    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    // material

    const material = new THREE.MeshBasicMaterial();
    material.map = new THREE.TextureLoader().load('textures/crate.gif');
    material.map.flipY = false;

    // per instance data

    const matrix = new THREE.Matrix4();
    const offset = new THREE.Vector3();
    const orientation = new THREE.Quaternion();
    const scale = new THREE.Vector3(1, 1, 1);
    let x;
    let y;
    let z;
    let w;

    mesh = new THREE.InstancedMesh(geometry, material, instances);

    for (let i = 0; i < instances; i++) {
        // offsets

        x = Math.random() * 100 - 50;
        y = Math.random() * 100 - 50;
        z = Math.random() * 100 - 50;

        offset.set(x, y, z).normalize();
        offset.multiplyScalar(5); // move out at least 5 units from center in current direction
        offset.set(x + offset.x, y + offset.y, z + offset.z);

        // orientations

        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        w = Math.random() * 2 - 1;

        orientation.set(x, y, z, w).normalize();

        matrix.compose(offset, orientation, scale);

        mesh.setMatrixAt(i, matrix);
    }

    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    const time = performance.now();

    mesh.rotation.y = time * 0.00005;

    const delta = (time - lastTime) / 5000;
    tmpQ.set(moveQ.x * delta, moveQ.y * delta, moveQ.z * delta, 1).normalize();
    tmpM.makeRotationFromQuaternion(tmpQ);

    for (let i = 0, il = instances; i < il; i++) {
        mesh.getMatrixAt(i, currentM);
        currentM.multiply(tmpM);
        mesh.setMatrixAt(i, currentM);
    }

    mesh.instanceMatrix.needsUpdate = true;

    lastTime = time;

    renderer.render(scene, camera);
}
