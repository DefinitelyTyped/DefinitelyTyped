import Node from "../core/Node.js";

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
) => RemapNode;
export const remapClamp: (
    node: Node,
    inLowNode: Node | number,
    inHighNode: Node | number,
    outLowNode?: Node | number,
    outHighNode?: Node | number,
) => RemapNode;

declare module "../Nodes.js" {
    interface Node {
        remap: (
            inLowNode: Node | number,
            inHighNode: Node | number,
            outLowNode?: Node | number,
            outHighNode?: Node | number,
        ) => RemapNode;
        remapAssign: (
            inLowNode: Node | number,
            inHighNode: Node | number,
            outLowNode?: Node | number,
            outHighNode?: Node | number,
        ) => this;

        remapClamp: (
            inLowNode: Node | number,
            inHighNode: Node | number,
            outLowNode?: Node | number,
            outHighNode?: Node | number,
        ) => RemapNode;
        remapClampAssign: (
            inLowNode: Node | number,
            inHighNode: Node | number,
            outLowNode?: Node | number,
            outHighNode?: Node | number,
        ) => this;
    }
}
