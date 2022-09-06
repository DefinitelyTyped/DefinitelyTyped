import TempNode from '../core/TempNode';
import Node from '../core/Node';

export default class RotateUVNode extends TempNode {
    uvNode: Node;
    rotationNode: Node;
    centerNode: Node;

    constructor(uvNode: Node, rotationNode: Node, centerNode?: Node);
}
