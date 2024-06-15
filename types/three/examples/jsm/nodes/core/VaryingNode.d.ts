import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeVarying from "./NodeVarying.js";

export default class VaryingNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);

    setupVarying(builder: NodeBuilder): NodeVarying;
}

export const varying: (node: NodeRepresentation, name?: string) => ShaderNodeObject<VaryingNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        varying: typeof varying;
    }
}
