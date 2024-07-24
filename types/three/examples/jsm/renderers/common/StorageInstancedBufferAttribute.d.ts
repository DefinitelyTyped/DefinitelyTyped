import { InstancedBufferAttribute, TypedArray } from "three";

export default class StorageInstancedBufferAttribute extends InstancedBufferAttribute {
    readonly isStorageInstancedBufferAttribute: true;

    constructor(array: TypedArray | number, itemSize: number);
}
