import Node from './Node';
import { NodeBuilderContext } from './NodeBuilder';

export default class ContextNode extends Node {
    isContextNode: true;
    node: Node;
    context: NodeBuilderContext;

    constructor(node: Node, context: NodeBuilderContext);
}
