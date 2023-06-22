import Node from '../core/Node';
import { TempNode } from '../Nodes';

export default class ArrayElementNode extends TempNode {
    node: Node;
    indexNode: Node;

    constructor(node: Node, indexNode: Node);
}
