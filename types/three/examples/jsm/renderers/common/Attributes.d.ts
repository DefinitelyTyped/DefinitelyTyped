import { BufferAttribute, InterleavedBuffer, InterleavedBufferAttribute } from "three";
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
    _getBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute): InterleavedBuffer | BufferAttribute;
}
export default Attributes;
