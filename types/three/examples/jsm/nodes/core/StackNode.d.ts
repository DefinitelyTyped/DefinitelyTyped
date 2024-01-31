import Node from "./Node.js";

export default class StackNode extends Node {
    isStackNode: true;
    nodes: Node[];
    outputNode: Node | null;

    constructor();

    assign(targetNode: Node, sourceValue: Node): this;
}
