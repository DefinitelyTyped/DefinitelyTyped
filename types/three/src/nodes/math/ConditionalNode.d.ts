import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ConditionalNode extends Node {
    condNode: Node;
    ifNode: Node;
    elseNode: Node | null;

    constructor(condNode: Node, ifNode: Node, elseNode?: Node | null);
}

export default ConditionalNode;

export const select: (
    condNode: NodeRepresentation,
    ifNode: NodeRepresentation,
    elseNode?: NodeRepresentation | null,
) => ShaderNodeObject<Node>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        select: typeof select;
    }
}

/**
 * @deprecated cond() has been renamed to select()
 */
export const cond: (
    condNode: NodeRepresentation,
    ifNode: NodeRepresentation,
    elseNode?: NodeRepresentation | null,
) => ShaderNodeObject<Node>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        cond: typeof cond;
    }
}
