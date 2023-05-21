// An example that uses plugin system in GLTFLoader.

import * as THREE from 'three';
import { GLTF, GLTFLoader, GLTFLoaderPlugin, GLTFParser } from 'three/examples/jsm/loaders/GLTFLoader';

// Assuming we are using duck.gltf
// https://github.com/KhronosGroup/glTF-Sample-Models/blob/master/2.0/Duck/glTF-Binary/Duck.glb
const modelUrl = 'models/duck.gltf';

const container = document.createElement('div');

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(50, 2, 0.1, 10);
const scene = new THREE.Scene();

init().then(() => {
    animate();
});

class ExamplePlugin implements GLTFLoaderPlugin {
    parser: GLTFParser;

    constructor(parser: GLTFParser) {
        this.parser = parser;
    }

    async beforeRoot(): Promise<void> {
        console.info('beforeRoot');
    }

    async afterRoot(result: GLTF): Promise<void> {
        console.info('afterRoot', result);
    }

    async loadMesh(meshIndex: number): Promise<THREE.Group | THREE.Mesh | THREE.SkinnedMesh> {
        console.info('loadMesh', meshIndex);
        return this.parser.loadMesh(meshIndex);
    }

    async loadBufferView(bufferViewIndex: number): Promise<ArrayBuffer> {
        console.info('loadBufferView', bufferViewIndex);
        return this.parser.loadBufferView(bufferViewIndex);
    }

    async loadMaterial(materialIndex: number): Promise<THREE.Material> {
        console.info('loadMaterial', materialIndex);
        return this.parser.loadMaterial(materialIndex);
    }

    async loadTexture(textureIndex: number): Promise<THREE.Texture> {
        console.info('loadTexture', textureIndex);
        return this.parser.loadTexture(textureIndex);
    }

    getMaterialType(materialIndex: number): typeof THREE.Material {
        console.info('getMaterialType', materialIndex);
        return THREE.MeshStandardMaterial;
    }

    async extendMaterialParams(materialIndex: number, materialParams: { [key: string]: any }): Promise<void> {
        console.info('extendMaterialParams', materialIndex, materialParams);
    }

    async createNodeAttachment(nodeIndex: number): Promise<THREE.Object3D> {
        console.info('createNodeAttachment', nodeIndex);
        return new THREE.Object3D();
    }
}

async function init(): Promise<void> {
    document.body.appendChild(container);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(300, 150);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    camera.position.set(0, 0, 5);
    scene.add(camera);

    const loader = new GLTFLoader();
    loader.register(parser => new ExamplePlugin(parser));
    const gltf = await loader.loadAsync(modelUrl);
    scene.add(gltf.scene);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
}

function animate(): void {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
