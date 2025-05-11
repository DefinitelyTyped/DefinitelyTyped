// Interface declaration for Float16Array, required in @types/node v24+.

// This needs all of the "common" properties/methods of the TypedArrays,
// otherwise the type unions `TypedArray` and `ArrayBufferView` will be
// empty objects.
interface Float16Array extends Omit<Float32Array, typeof Symbol.toStringTag | "filter" | "map" | "slice" | "subarray"> {
    filter(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array;
    map(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array;
    slice(start?: number, end?: number): Float16Array;
    subarray(begin?: number, end?: number): Float16Array;
    readonly [Symbol.toStringTag]: "Float16Array";
}
