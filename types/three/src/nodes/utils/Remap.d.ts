import Node from "../core/Node.js";

export const remap: (
    node: Node<"float">,
    inLowNode: Node<"float"> | number,
    inHighNode: Node<"float"> | number,
    outLowNode?: Node<"float"> | number,
    outHighNode?: Node<"float"> | number,
    doClamp?: Node<"bool"> | boolean,
) => Node<"float">;
export const remapClamp: (
    node: Node<"float">,
    inLowNode: Node<"float"> | number,
    inHighNode: Node<"float"> | number,
    outLowNode?: Node<"float"> | number,
    outHighNode?: Node<"float"> | number,
) => Node<"float">;

declare module "../core/Node.js" {
    interface FloatExtensions {
        remap: (
            inLowNode: Node<"float"> | number,
            inHighNode: Node<"float"> | number,
            outLowNode?: Node<"float"> | number,
            outHighNode?: Node<"float"> | number,
            doClamp?: Node<"bool"> | boolean,
        ) => Node<"float">;

        remapClamp: (
            inLowNode: Node<"float"> | number,
            inHighNode: Node<"float"> | number,
            outLowNode?: Node<"float"> | number,
            outHighNode?: Node<"float"> | number,
        ) => Node<"float">;
    }
}
