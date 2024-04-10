import { Color, PointsMaterialParameters, Texture } from "three";
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

    constructor(parameters?: PointsNodeMaterialParameters);
}
