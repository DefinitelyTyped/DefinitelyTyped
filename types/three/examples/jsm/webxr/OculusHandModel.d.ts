import { Loader, Mesh, Object3D, Texture, Vector3 } from "three";
import { GLTF } from "../loaders/GLTFLoader.js";
import { XRHandMeshModel } from "./XRHandMeshModel.js";

export class OculusHandModel extends Object3D {
    controller: Object3D;
    motionController: XRHandMeshModel | null;
    envMap: Texture | null;
    loader: Loader<GLTF> | null;
    onLoad?: ((object: Object3D) => void) | null;

    mesh: Mesh | null;

    constructor(controller: Object3D, loader?: Loader<GLTF> | null, onLoad?: ((object: Object3D) => void) | null);

    updateMatrixWorld(force?: boolean): void;

    getPointerPosition(): Vector3 | null;

    intersectBoxObject(boxObject: Object3D): boolean;

    checkButton(button: Object3D): void;
}
