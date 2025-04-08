import Node from "../../nodes/core/Node.js";
import SpriteNodeMaterial, { SpriteNodeMaterialParameters } from "./SpriteNodeMaterial.js";

export interface PointsNodeMaterialParameters extends SpriteNodeMaterialParameters {
    sizeNode?: Node | null | undefined;
}

export default class PointsNodeMaterial extends SpriteNodeMaterial {
    sizeNode: Node | null;

    readonly isPointsNodeMaterial: true;

    constructor(parameters?: PointsNodeMaterialParameters);
}
