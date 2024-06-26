import UniformNode from "../core/UniformNode.js";
import { NodeOrType, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class BufferNode extends UniformNode<unknown> {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;

    constructor(value: unknown, bufferType: string, bufferCount?: number);
}

export const buffer: (
    value: unknown,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<BufferNode>;
