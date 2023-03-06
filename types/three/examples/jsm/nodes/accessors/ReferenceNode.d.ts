import Node from '../core/Node';
import { NodeTypeOption } from '../Nodes';

export default class ReferenceNode<T> extends Node {
    object: T;
    property: string;
    uniformType: string;
    node: Node | null;

    constructor(property: string, uniformType: NodeTypeOption, object?: T | null);

    setNodeType(uniformType: NodeTypeOption): void;
}
