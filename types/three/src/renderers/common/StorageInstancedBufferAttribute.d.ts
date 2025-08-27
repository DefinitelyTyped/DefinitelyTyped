import { TypedArray } from "../../core/BufferAttribute.js";
import { InstancedBufferAttribute } from "../../core/InstancedBufferAttribute.js";

export default class StorageInstancedBufferAttribute extends InstancedBufferAttribute {
    readonly isStorageInstancedBufferAttribute: true;

    constructor(array: TypedArray | number, itemSize: number);
}
