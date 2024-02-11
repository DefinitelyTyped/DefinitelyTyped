import { ToneMapping } from "../../../../src/Three.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

// exposure only
export const LinearToneMappingNode: Node;

export default class ToneMappingNode extends TempNode {
    toneMapping: ToneMapping;
    exposureNode: Node;
    colorNode: Node | null;

    constructor(toneMapping: ToneMapping, exposureNode?: Node, colorNode?: Node | null);
}

export const toneMapping: (
    mapping: ToneMapping,
    exposure: NodeRepresentation,
    color?: NodeRepresentation,
) => ShaderNodeObject<ToneMappingNode>;
