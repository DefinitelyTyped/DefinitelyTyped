import { NodeTypeOption } from "../core/constants.js";
import UniformNode from "../core/UniformNode.js";
import { NodeOrType, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class BufferNode extends UniformNode<ArrayLike<number> | null> {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;

    constructor(value: ArrayLike<number> | null, bufferType: NodeTypeOption, bufferCount?: number);
}

export const buffer: (
    value: ArrayLike<number> | null,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<BufferNode>;
