import { NodeTypeOption } from './constants.js';
import InputNode from './InputNode.js';
import NodeBuilder from './NodeBuilder.js';
import Node from './Node.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class UniformNode<Value> extends InputNode<Value> {
    readonly isUniformNode: true;

    constructor(value: Value, nodeType?: NodeTypeOption | null);

    getUniformHash(builder: NodeBuilder): string;
}

export const uniform: <Value>(
    arg1: InputNode<Value> | Value,
    arg2?: Node | string,
) => ShaderNodeObject<UniformNode<Value>>;
