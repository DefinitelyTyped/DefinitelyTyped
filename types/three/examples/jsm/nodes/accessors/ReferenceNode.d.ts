import Node from '../core/Node.js';
import { NodeTypeOption } from '../Nodes.js';

export default class ReferenceNode<T> extends Node {
    object: T;
    property: string;
    uniformType: string;
    node: Node | null;

    constructor(property: string, uniformType: NodeTypeOption, object?: T | null);

    setNodeType(uniformType: NodeTypeOption): void;
}
