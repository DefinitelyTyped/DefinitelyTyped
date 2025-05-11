// Interface declaration for Float16Array, required in @types/node v24+.
// TODO: remove once this package no longer supports TS 5.7, and replace
// with a reference to the TypeScript float16 library.

// This needs all of the "common" properties/methods of the TypedArrays,
// otherwise the type unions `TypedArray` and `ArrayBufferView` will be
// empty objects.
interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike>
    extends Omit<Float32Array<TArrayBuffer>, typeof Symbol.toStringTag | "filter" | "map" | "slice" | "subarray">
{
    filter(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    map(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array<ArrayBuffer>;
    slice(start?: number, end?: number): Float16Array<ArrayBuffer>;
    subarray(begin?: number, end?: number): Float16Array<TArrayBuffer>;
    readonly [Symbol.toStringTag]: "Float16Array";
}
