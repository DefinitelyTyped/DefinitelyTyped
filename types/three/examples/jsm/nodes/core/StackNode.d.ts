import Node from "./Node.js";

export default class StackNode extends Node {
    isStackNode: true;
    nodes: Node[];
    outputNode: Node | null;

    constructor();

    add(node: Node): this;

    if(boolNode: Node, method: () => void): this;

    elseIf(node: Node, method: () => void): this;

    else(node: Node, method: () => void): this;
}
