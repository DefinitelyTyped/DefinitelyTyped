import { LineBasicMaterialParameters } from "../../materials/LineBasicMaterial.js";
import { Color } from "../../math/Color.js";
import { Texture } from "../../textures/Texture.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface LineBasicNodeMaterialParameters extends NodeMaterialParameters, LineBasicMaterialParameters {
}

export default class LineBasicNodeMaterial extends NodeMaterial {
    readonly isLineBasicNodeMaterial: true;

    // Properties from LineBasicMaterial
    readonly isLineBasicMaterial: true;
    color: Color;
    fog: boolean;
    linewidth: number;
    linecap: string;
    linejoin: string;
    map: Texture | null;

    constructor(parameters?: LineBasicNodeMaterialParameters);
}
