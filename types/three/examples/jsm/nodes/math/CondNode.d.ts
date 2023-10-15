import Node from '../core/Node.js';

export default class CondNode extends Node {
    condNode: Node;
    ifNode: Node;
    elseNode: Node;

    constructor(condNode: Node, ifNode: Node, elseNode: Node);
}
