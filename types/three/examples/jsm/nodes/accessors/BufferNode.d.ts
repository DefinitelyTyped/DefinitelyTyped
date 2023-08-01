import { NodeTypeOption } from '../core/constants.js';
import UniformNode from '../core/UniformNode.js';

export default class BufferNode extends UniformNode {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;

    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}
