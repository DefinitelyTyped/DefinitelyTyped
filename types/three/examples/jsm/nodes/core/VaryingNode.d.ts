import Node from './Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class VaryingNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);
}

export const varying: (node: NodeRepresentation, name?: string) => ShaderNodeObject<VaryingNode>;
