/**
 * Typescript version of an example with some changes
 *
 * color is stored in userdata
 * we create the correct material manually
 */

import * as THREE from 'three';
import * as Nodes from 'three/examples/jsm/nodes/Nodes';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { nodeFrame } from 'three/examples/jsm/renderers/webgl/nodes/WebGLNodes';
import { WebGLNodeBuilder } from 'three/examples/jsm/renderers/webgl/nodes/WebGLNodeBuilder';
const { add, mul } = Nodes;
class InstanceUniformNode extends Nodes.Node {
    uniformNode: Nodes.UniformNode;
    constructor() {
        super('vec3');
        this.updateType = Nodes.NodeUpdateType.Object;
        this.uniformNode = new Nodes.UniformNode(new THREE.Color());
    }

    update(frame: Nodes.NodeFrame) {
        (this.uniformNode.value as THREE.Color).copy(frame.object!.userData.color);
    }

    generate(builder: WebGLNodeBuilder, output: string | null) {
        return this.uniformNode.build(builder, output);
    }
}

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let pointLight: THREE.PointLight;

const objects: THREE.Mesh[] = [];

init();
animate();

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
    camera.position.set(0, 200, 1200);

    scene = new THREE.Scene();

    // Grid

    const helper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
    helper.position.y = -75;
    scene.add(helper);

    // CubeMap

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

    const cubeTexture = new THREE.CubeTextureLoader().load(urls);

    // Material

    const instanceUniform = new InstanceUniformNode();
    const cubeTextureNode = new Nodes.CubeTextureNode(cubeTexture);

    // this a a major change from the actual example
    const material = new Nodes.MeshStandardNodeMaterial();
    material.colorNode = add(instanceUniform, cubeTextureNode);
    material.emissiveNode = mul(instanceUniform, cubeTextureNode);

    // Spheres geometry

    const geometry = new THREE.SphereGeometry(70, 32, 16);

    for (let i = 0, l = 12; i < l; i++) {
        addMesh(geometry, material);
    }

    // Lights

    scene.add(new THREE.AmbientLight(0x111111));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.125);

    directionalLight.position.x = Math.random() - 0.5;
    directionalLight.position.y = Math.random() - 0.5;
    directionalLight.position.z = Math.random() - 0.5;
    directionalLight.position.normalize();

    scene.add(directionalLight);

    pointLight = new THREE.PointLight(0xffffff, 1);
    scene.add(pointLight);

    pointLight.add(new THREE.Mesh(new THREE.SphereGeometry(4, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff })));

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //

    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 400;
    controls.maxDistance = 2000;

    //

    window.addEventListener('resize', onWindowResize);
}

function addMesh(geometry: THREE.SphereGeometry, material: THREE.Material) {
    const mesh = new THREE.Mesh(geometry, material);

    mesh.userData.color = new THREE.Color(Math.random() * 0xffffff);

    mesh.position.x = (objects.length % 4) * 200 - 300;
    mesh.position.z = Math.floor(objects.length / 4) * 200 - 200;

    mesh.rotation.x = Math.random() * 200 - 100;
    mesh.rotation.y = Math.random() * 200 - 100;
    mesh.rotation.z = Math.random() * 200 - 100;

    objects.push(mesh);

    scene.add(mesh);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
    requestAnimationFrame(animate);

    nodeFrame.update();

    render();
}

function render() {
    const timer = 0.0001 * Date.now();

    for (let i = 0, l = objects.length; i < l; i++) {
        const object = objects[i];

        object.rotation.x += 0.01;
        object.rotation.y += 0.005;
    }

    pointLight.position.x = Math.sin(timer * 7) * 300;
    pointLight.position.y = Math.cos(timer * 5) * 400;
    pointLight.position.z = Math.cos(timer * 3) * 300;

    renderer.render(scene, camera);
}
