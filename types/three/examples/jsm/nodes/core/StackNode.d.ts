import Node from './Node';

export default class StackNode extends Node {
    isStackNode: true;
    nodes: Node[];
    outputNode: Node | null;

    constructor();

    assign(targetNode: Node, sourceValue: Node): this;
}
