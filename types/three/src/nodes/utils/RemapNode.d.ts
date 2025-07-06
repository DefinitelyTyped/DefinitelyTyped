import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

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
    inLowNode: Node | number,
    inHighNode: Node | number,
    outLowNode?: Node | number,
    outHighNode?: Node | number,
) => ShaderNodeObject<RemapNode>;
export const remapClamp: (
    node: Node,
    inLowNode: Node | number,
    inHighNode: Node | number,
    outLowNode?: Node | number,
    outHighNode?: Node | number,
) => ShaderNodeObject<RemapNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        remap: typeof remap;
        remapClamp: typeof remapClamp;
    }
}
