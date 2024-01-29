import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class CondNode extends Node {
    condNode: Node;
    ifNode: Node;
    elseNode: Node;

    constructor(condNode: Node, ifNode: Node, elseNode: Node);
}

export function cond(
    condNode: NodeRepresentation,
    ifNode: NodeRepresentation,
    elseNode: NodeRepresentation,
): ShaderNodeObject<Node>;
