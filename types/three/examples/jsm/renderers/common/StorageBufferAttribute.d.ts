import { BufferAttribute, TypedArray } from "three";

export default class StorageBufferAttribute extends BufferAttribute {
    readonly isStorageBufferAttribute: true;

    constructor(array: TypedArray, itemSize: number);
}
