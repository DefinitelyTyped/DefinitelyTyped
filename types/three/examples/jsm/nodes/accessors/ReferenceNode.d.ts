import Node from '../core/Node.js';
import { NodeTypeOption } from '../core/constants.js';
import { NodeOrType, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class ReferenceNode<T> extends Node {
    object: T;
    property: string;
    uniformType: string;
    node: Node | null;

    constructor(property: string, uniformType: NodeTypeOption, object?: T | null);

    setNodeType(uniformType: NodeTypeOption): void;
}

export const reference: <T>(name: string, nodeOrType: NodeOrType, object: T) => ShaderNodeObject<ReferenceNode<T>>;
