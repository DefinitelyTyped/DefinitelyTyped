import { Group, Object3D } from "three";

import { XRHandMeshModel } from "./XRHandMeshModel.js";
import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from "./XRHandPrimitiveModel.js";

export type XRHandModelHandedness = "left" | "right";

export class XRHandModel extends Object3D {
    motionController: XRHandPrimitiveModel | XRHandMeshModel;

    constructor();
}

export class XRHandModelFactory {
    path: string | null;

    constructor();

    setPath(path: string | null): this;

    createHandModel(
        controller: Group,
        profile?: "spheres" | "boxes" | "mesh",
        options?: XRHandPrimitiveModelOptions,
    ): XRHandModel;
}
