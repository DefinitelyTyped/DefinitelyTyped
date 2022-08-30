import { NodeTypeOption } from '../Nodes';
import BufferNode from './BufferNode';

export default class StorageBufferNode extends BufferNode {
    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}
