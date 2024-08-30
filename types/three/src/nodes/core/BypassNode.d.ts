import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export default class BypassNode extends Node {
    isBypassNode: true;
    outputNode: Node;
    callNode: Node;

    constructor(returnNode: Node, callNode: Node);
}

export const bypass: (returnNode: NodeRepresentation, callNode: NodeRepresentation) => ShaderNodeObject<BypassNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        bypass: typeof bypass;
    }
}
