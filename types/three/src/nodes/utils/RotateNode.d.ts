import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export default class RotateNode extends TempNode {
    positionNode: Node;
    rotationNode: Node;

    constructor(positionNode: Node, rotationNode: Node);
}

export const rotate: (
    positionNode: Node,
    rotationNode: Node | number,
) => RotateNode;
