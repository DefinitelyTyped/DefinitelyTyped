import { BufferAttribute } from "../../core/BufferAttribute.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import Backend from "./Backend.js";
import { AttributeType } from "./Constants.js";
import DataMap from "./DataMap.js";
interface Data {
    version?: number | undefined;
}
declare class Attributes extends DataMap<{
    attribute: {
        key: BufferAttribute | InterleavedBufferAttribute;
        value: Data;
    };
}> {
    backend: Backend;
    constructor(backend: Backend);
    delete(attribute: BufferAttribute | InterleavedBufferAttribute): Data;
    update(attribute: BufferAttribute | InterleavedBufferAttribute, type: AttributeType): void;
    _getBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute): BufferAttribute | InterleavedBuffer;
}
export default Attributes;
