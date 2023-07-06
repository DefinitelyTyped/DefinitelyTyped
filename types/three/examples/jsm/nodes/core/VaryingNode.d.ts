import Node from './Node';

export default class VaryingNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);
}
