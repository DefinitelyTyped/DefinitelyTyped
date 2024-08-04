import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class RotateNode extends TempNode {
    positionNode: Node;
    rotationNode: Node;

    constructor(positionNode: Node, rotationNode: Node);
}

export const rotate: (
    positionNode: NodeRepresentation,
    rotationNode: NodeRepresentation,
) => ShaderNodeObject<RotateNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        rotate: typeof rotate;
    }
}
