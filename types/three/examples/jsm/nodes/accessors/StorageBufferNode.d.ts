import { NodeTypeOption } from '../Nodes.js';
import BufferNode from './BufferNode.js';

export default class StorageBufferNode extends BufferNode {
    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);
}
