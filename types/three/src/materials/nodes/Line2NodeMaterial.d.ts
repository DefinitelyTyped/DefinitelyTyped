import { Color } from "../../math/Color.js";
import Node from "../../nodes/core/Node.js";
import { Texture } from "../../textures/Texture.js";
import { LineDashedMaterialParameters } from "../LineDashedMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface Line2NodeMaterialParameters extends NodeMaterialParameters, LineDashedMaterialParameters {
    worldUnits?: boolean | undefined;
    dashed?: boolean | undefined;
}

export default class Line2NodeMaterial extends NodeMaterial {
    lights: boolean;

    // Properties from LineDashedMaterial
    readonly isLineDashedMaterial: true;
    scale: number;
    dashSize: number;
    gapSize: number;

    // Properties from LineBasicMaterial
    readonly isLineBasicMaterial: true;
    color: Color;
    fog: boolean;
    linewidth: number;
    linecap: string;
    linejoin: string;
    map: Texture | null;

    useAlphaToCoverage: boolean;
    useColor: boolean;
    useDash: boolean;
    useWorldUnits: boolean;

    dashOffset: number;
    lineWidth: number;

    lineColorNode: Node | null;

    offsetNode: Node | null;
    dashScaleNode: Node | null;
    dashSizeNode: Node | null;
    gapSizeNode: Node | null;

    constructor(parameters?: Line2NodeMaterialParameters);

    setupShaders(): void;

    get worldUnits(): boolean;
    set worldUnits(value: boolean);

    get dashed(): boolean;
    set dashed(value: boolean);
}
