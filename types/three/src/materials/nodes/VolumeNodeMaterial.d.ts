import FunctionNode from "../../nodes/code/FunctionNode.js";
import Node from "../../nodes/core/Node.js";
import { ShaderNodeObject } from "../../nodes/tsl/TSLCore.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface VolumeNodeMaterialParameters extends NodeMaterialParameters {
    steps?: number | undefined;

    scatteringNode?: Node | null | undefined;
}

export default class VolumeNodeMaterial extends NodeMaterial {
    readonly isVolumeNodeMaterial: true;

    steps: number;

    scatteringNode: (params: { positionRay: ShaderNodeObject<Node> }) => Node | null;

    offsetNode?: Node | undefined;

    constructor(parameters?: NodeMaterialParameters);
}
