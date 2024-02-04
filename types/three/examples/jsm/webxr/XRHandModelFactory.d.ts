import { Group, Object3D } from "../../../src/Three.js";

import { XRHandMeshModel } from "./XRHandMeshModel.js";
import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from "./XRHandPrimitiveModel.js";

export type XRHandModelHandedness = "left" | "right";

export class XRHandModel extends Object3D {
    constructor();

    motionController: XRHandPrimitiveModel | XRHandMeshModel;
}

export class XRHandModelFactory {
    constructor();
    path: string;

    setPath(path: string): XRHandModelFactory;

    createHandModel(
        controller: Group,
        profile?: "spheres" | "boxes" | "mesh",
        options?: XRHandPrimitiveModelOptions,
    ): XRHandModel;
}
