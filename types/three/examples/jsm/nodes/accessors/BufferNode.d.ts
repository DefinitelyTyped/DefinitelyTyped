import { NodeTypeOption } from '../core/constants';
import UniformNode from '../core/UniformNode';

export default class BufferNode extends UniformNode {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;

    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}
