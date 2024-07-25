import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class RemapNode extends Node {
    node: Node;
    inLowNode: Node;
    inHighNode: Node;
    outLowNode: Node;
    outHighNode: Node;

    doClamp: boolean;

    constructor(node: Node, inLowNode: Node, inHighNode: Node, outLowNode?: Node, outHighNode?: Node);
}

export const remap: (
    node: Node,
    inLowNode: NodeRepresentation,
    inHighNode: NodeRepresentation,
    outLowNode?: NodeRepresentation,
    outHighNode?: NodeRepresentation,
) => ShaderNodeObject<RemapNode>;
export const remapClamp: (
    node: Node,
    inLowNode: NodeRepresentation,
    inHighNode: NodeRepresentation,
    outLowNode?: NodeRepresentation,
    outHighNode?: NodeRepresentation,
) => ShaderNodeObject<RemapNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        remap: typeof remap;
        remapClamp: typeof remapClamp;
    }
}
