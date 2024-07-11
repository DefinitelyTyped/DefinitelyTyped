import { Color, LineBasicMaterialParameters, Texture } from "three";
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
