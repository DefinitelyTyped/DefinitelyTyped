import Node from "../core/Node.js";

export default class RemapNode extends Node<"float"> {
    node: Node<"float">;
    inLowNode: Node<"float">;
    inHighNode: Node<"float">;
    outLowNode: Node<"float">;
    outHighNode: Node<"float">;

    doClamp: boolean;

    constructor(
        node: Node<"float">,
        inLowNode: Node<"float">,
        inHighNode: Node<"float">,
        outLowNode?: Node<"float">,
        outHighNode?: Node<"float">,
    );
}

export const remap: (
    node: Node<"float">,
    inLowNode: Node<"float"> | number,
    inHighNode: Node<"float"> | number,
    outLowNode?: Node<"float"> | number,
    outHighNode?: Node<"float"> | number,
) => RemapNode;
export const remapClamp: (
    node: Node<"float">,
    inLowNode: Node<"float"> | number,
    inHighNode: Node<"float"> | number,
    outLowNode?: Node<"float"> | number,
    outHighNode?: Node<"float"> | number,
) => RemapNode;

declare module "../core/Node.js" {
    interface FloatExtensions {
        remap: (
            inLowNode: Node<"float"> | number,
            inHighNode: Node<"float"> | number,
            outLowNode?: Node<"float"> | number,
            outHighNode?: Node<"float"> | number,
        ) => RemapNode;

        remapClamp: (
            inLowNode: Node<"float"> | number,
            inHighNode: Node<"float"> | number,
            outLowNode?: Node<"float"> | number,
            outHighNode?: Node<"float"> | number,
        ) => RemapNode;
    }
}
