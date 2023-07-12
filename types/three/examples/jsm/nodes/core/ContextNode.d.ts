import Node from './Node.js';
import { NodeBuilderContext } from './NodeBuilder.js';

export default class ContextNode extends Node {
    isContextNode: true;
    node: Node;
    context: NodeBuilderContext;

    constructor(node: Node, context: NodeBuilderContext);
}
