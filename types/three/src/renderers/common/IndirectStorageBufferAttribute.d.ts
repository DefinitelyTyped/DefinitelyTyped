import { TypedArray } from "../../core/BufferAttribute.js";
import StorageBufferAttribute from "./StorageBufferAttribute.js";

declare class IndirectStorageBufferAttribute extends StorageBufferAttribute {
    readonly isIndirectStorageBufferAttribute: true;

    constructor(array: TypedArray, itemSize: number);
}

export default IndirectStorageBufferAttribute;
