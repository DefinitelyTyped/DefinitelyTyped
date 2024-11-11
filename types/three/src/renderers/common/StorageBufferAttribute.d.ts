import { BufferAttribute, TypedArray } from "../../core/BufferAttribute.js";

export default class StorageBufferAttribute extends BufferAttribute {
    readonly isStorageBufferAttribute: true;

    constructor(array: TypedArray, itemSize: number);
}
