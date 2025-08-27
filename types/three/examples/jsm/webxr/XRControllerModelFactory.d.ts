import { Group, Loader, Object3D, Texture } from "three";
import { GLTF } from "../loaders/GLTFLoader.js";

export class XRControllerModel extends Object3D {
    motionController: unknown;
    envMap: Texture | null;

    constructor();

    setEnvironmentMap(envMap: Texture): XRControllerModel;
}

export class XRControllerModelFactory {
    gltfLoader: Loader<GLTF> | null;
    path: string;
    onLoad: ((scene: Group) => void) | null;

    constructor(gltfLoader?: Loader<GLTF> | null, onLoad?: ((scene: Group) => void) | null);

    setPath(path: string): this;

    createControllerModel(controller: Group): XRControllerModel;
}
