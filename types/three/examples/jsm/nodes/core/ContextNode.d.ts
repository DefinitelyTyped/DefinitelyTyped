import Node from './Node.js';
import { NodeBuilderContext } from './NodeBuilder.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class ContextNode extends Node {
    isContextNode: true;
    node: Node;
    context: NodeBuilderContext;

    constructor(node: Node, context: NodeBuilderContext);
}

export const context: (node: NodeRepresentation, context: NodeBuilderContext) => ShaderNodeObject<ContextNode>;
