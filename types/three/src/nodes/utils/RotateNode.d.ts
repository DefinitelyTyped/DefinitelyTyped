import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class RotateNode extends TempNode {
    positionNode: Node;
    rotationNode: Node;

    constructor(positionNode: Node, rotationNode: Node);
}

export const rotate: (
    positionNode: NodeRepresentation,
    rotationNode: NodeRepresentation,
) => ShaderNodeObject<RotateNode>;
