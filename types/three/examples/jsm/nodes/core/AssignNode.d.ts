import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";
import TempNode from "./TempNode.js";

export default class AssignNode extends TempNode {
    constructor(targetNode: Node, sourceNode: Node);

    hasDependencies(): false;
}

export const assign: (targetNode: NodeRepresentation, sourceNode: NodeRepresentation) => ShaderNodeObject<AssignNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        assign: typeof assign;
    }
}
