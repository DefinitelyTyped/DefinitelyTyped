import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ConditionalNode extends Node {
    condNode: Node;
    ifNode: Node;
    elseNode: Node | null;

    constructor(condNode: Node, ifNode: Node, elseNode?: Node | null);
}

export default ConditionalNode;

export const select: (
    condNode: Node,
    ifNode: Node | number,
    elseNode?: Node | number | null,
) => ShaderNodeObject<Node>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        select: typeof select;
    }
}
