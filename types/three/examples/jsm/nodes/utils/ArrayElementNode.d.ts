import Node from '../core/Node.js';
import { TempNode } from '../Nodes.js';

export default class ArrayElementNode extends TempNode {
    node: Node;
    indexNode: Node;

    constructor(node: Node, indexNode: Node);
}
