import { Color } from "../../math/Color.js";
import Node from "../../nodes/core/Node.js";
import { Texture } from "../../textures/Texture.js";
import { PointsMaterialParameters } from "../PointsMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface InstancedPointsNodeMaterialParameters extends NodeMaterialParameters, PointsMaterialParameters {
    useAlphaToCoverage?: boolean | undefined;
    useColor?: boolean | undefined;
    pointWidth?: number | undefined;
    pointColorNode?: Node | null | undefined;
    pointWidthNode?: Node | null | undefined;
}

declare class InstancedPointsNodeMaterial extends NodeMaterial {
    useAlphaToCoverage: boolean;
    useColor: boolean | undefined;
    pointWidth: number;
    pointColorNode: Node | null;
    pointWidthNode: Node | null;

    // Properties from LineDashedMaterial
    readonly isPointsMaterial: true;
    color: Color;
    map: Texture | null;
    alphaMap: Texture | null;
    size: number;
    sizeAttenuation: boolean;

    constructor(params?: InstancedPointsNodeMaterialParameters);
}

export default InstancedPointsNodeMaterial;
