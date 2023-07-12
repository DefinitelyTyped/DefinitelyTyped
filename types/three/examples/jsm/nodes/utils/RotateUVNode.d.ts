import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';

export default class RotateUVNode extends TempNode {
    uvNode: Node;
    rotationNode: Node;
    centerNode: Node;

    constructor(uvNode: Node, rotationNode: Node, centerNode?: Node);
}
