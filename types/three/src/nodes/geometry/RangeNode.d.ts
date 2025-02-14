import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class RangeNode extends Node {
    minNode: Node;
    maxNode: Node;

    constructor(minNode: Node, maxNode: Node);

    getVectorLength(builder: NodeBuilder): number;
}

export const range: (minNode: NodeRepresentation, maxNode: NodeRepresentation) => ShaderNodeObject<RangeNode>;
