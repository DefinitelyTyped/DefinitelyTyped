import BufferNode from './BufferNode.js';
import { NodeTypeOption } from '../core/constants.js';
import { NodeOrType, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class StorageBufferNode extends BufferNode {
    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}

export const storage: (
    value: ArrayLike<number>,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
