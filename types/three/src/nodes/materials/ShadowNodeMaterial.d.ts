import { ShadowMaterialParameters } from "../../materials/ShadowMaterial.js";
import { Color } from "../../math/Color.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface ShadowNodeMaterialParameters extends NodeMaterialParameters, ShadowMaterialParameters {
}

export default class ShadowNodeMaterial extends NodeMaterial {
    readonly isShadowNodeMaterial: true;

    // Properties from ShadowMaterial
    readonly isShadowMaterial: true;
    color: Color;
    fog: boolean;

    constructor(parameters?: ShadowNodeMaterialParameters);
}
