import { Loader, Object3D } from "three";
import { GLTF } from "../loaders/GLTFLoader.js";

export class XRHandMeshModel {
    controller: Object3D;
    handModel: Object3D;
    bones: Object3D[];

    constructor(
        handModel: Object3D,
        controller: Object3D,
        path: string,
        handedness: string,
        loader?: Loader<GLTF> | null,
        onLoad?: ((object: Object3D) => void) | null,
    );

    updateMesh(): void;
}
