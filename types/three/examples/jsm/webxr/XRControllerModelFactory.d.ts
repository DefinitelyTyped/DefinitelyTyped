import { Group, Loader, Object3D, Texture } from "../../../src/Three.js";
import { GLTF } from "../loaders/GLTFLoader.js";

export class XRControllerModel extends Object3D {
    constructor();

    motionController: any;

    envMap: Texture;

    setEnvironmentMap(envMap: Texture): XRControllerModel;
}

export class XRControllerModelFactory {
    gltfLoader: Loader<GLTF> | null;
    path: string;
    onLoad: ((scene: Group) => void) | null;

    constructor(gltfLoader?: Loader<GLTF> | null, onLoad?: ((scene: Group) => void) | null);

    createControllerModel(controller: Group): XRControllerModel;
}
