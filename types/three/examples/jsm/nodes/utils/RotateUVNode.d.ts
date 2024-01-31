import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class RotateUVNode extends TempNode {
    uvNode: Node;
    rotationNode: Node;
    centerNode: Node;

    constructor(uvNode: Node, rotationNode: Node, centerNode?: Node);
}

export const rotateUV: (uvNode: Node, rotationNode: Node, centerNode?: Node) => ShaderNodeObject<RotateUVNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        rotateUV: typeof rotateUV;
    }
}
