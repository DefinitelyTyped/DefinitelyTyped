import { Group, Loader, Object3D } from "three";

import { GLTF } from "../loaders/GLTFLoader.js";
import { XRHandMeshModel } from "./XRHandMeshModel.js";
import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from "./XRHandPrimitiveModel.js";

export type XRHandModelHandedness = "left" | "right";

export class XRHandModel extends Object3D {
    motionController: XRHandPrimitiveModel | XRHandMeshModel;

    constructor();
}

export class XRHandModelFactory {
    gltfLoader: Loader<GLTF> | null;
    path: string | null;
    onLoad?: ((object: Object3D) => void) | null;

    constructor(
        gltfLoader?: Loader<GLTF> | null,
        onLoad?: ((object: Object3D) => void) | null,
    );

    setPath(path: string | null): this;

    createHandModel(
        controller: Group,
        profile?: "spheres" | "boxes" | "mesh",
        options?: XRHandPrimitiveModelOptions,
    ): XRHandModel;
}
