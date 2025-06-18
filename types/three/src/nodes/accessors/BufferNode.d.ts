import UniformNode from "../core/UniformNode.js";
import { NodeOrType, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class BufferNode<TValue> extends UniformNode<TValue> {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;

    constructor(value: TValue, bufferType: string, bufferCount?: number);
}

export const buffer: <TValue>(
    value: unknown,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<BufferNode<TValue>>;
