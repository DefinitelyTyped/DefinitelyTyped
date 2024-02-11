import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";

export default class BypassNode extends Node {
    isBypassNode: true;
    outputNode: Node;
    callNode: Node;

    constructor(returnNode: Node, callNode: Node);
}

export const bypass: (returnNode: NodeRepresentation, callNode: NodeRepresentation) => ShaderNodeObject<BypassNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        bypass: typeof bypass;
    }
}
