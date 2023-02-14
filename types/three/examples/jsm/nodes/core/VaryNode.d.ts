import Node from './Node';

export default class VaryNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);
}
