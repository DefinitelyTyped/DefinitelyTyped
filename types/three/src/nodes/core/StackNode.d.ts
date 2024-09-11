import Node from "./Node.js";

export default class StackNode extends Node {
    isStackNode: true;
    nodes: Node[];
    outputNode: Node | null;

    constructor();

    add(node: Node): this;

    If(boolNode: Node, method: () => void): this;

    ElseIf(node: Node, method: () => void): this;

    Else(node: Node, method: () => void): this;

    /**
     * @deprecated Use {@link StackNode#ElseIf Else()} instead.
     */
    elseif(node: Node, method: () => void): this;

    /**
     * @deprecated Use {@link StackNode#Else Else()} instead.
     */
    else(node: Node, method: () => void): this;
}
