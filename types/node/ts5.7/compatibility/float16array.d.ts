// Interface declaration for Float16Array, required in @types/node v24+.
// These definitions are specific to TS 5.7.

// This needs all of the "common" properties/methods of the TypedArrays,
// otherwise the type unions `TypedArray` and `ArrayBufferView` will be
// empty objects.
interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> extends
    Omit<
        Float32Array<TArrayBuffer>,
        "filter" | "map" | "slice" | "subarray" | "toReversed" | "toSorted" | "with" | typeof Symbol.toStringTag
    >
{
    filter(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    map(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array<ArrayBuffer>;
    slice(start?: number, end?: number): Float16Array<ArrayBuffer>;
    subarray(begin?: number, end?: number): Float16Array<TArrayBuffer>;
    toReversed(): Float16Array<ArrayBuffer>;
    toSorted(compareFn?: (a: number, b: number) => number): Float16Array<ArrayBuffer>;
    with(index: number, value: number): Float16Array<ArrayBuffer>;
    readonly [Symbol.toStringTag]: "Float16Array";
}
