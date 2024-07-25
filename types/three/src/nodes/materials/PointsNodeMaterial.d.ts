import { PointsMaterialParameters } from "../../materials/PointsMaterial.js";
import { Color } from "../../math/Color.js";
import { Texture } from "../../textures/Texture.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface PointsNodeMaterialParameters extends NodeMaterialParameters, PointsMaterialParameters {
}

export default class PointsNodeMaterial extends NodeMaterial {
    readonly isPointsNodeMaterial: true;

    // Properties from PointsMaterial
    readonly isPointsMaterial: true;
    color: Color;
    map: Texture | null;
    alphaMap: Texture | null;
    size: number;
    sizeAttenuation: boolean;
    fog: boolean;

    constructor(parameters?: PointsNodeMaterialParameters);
}
