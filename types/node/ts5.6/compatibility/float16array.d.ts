// Interface declaration for Float16Array, required in @types/node v24+.
// These definitions are specific to TS <=5.6.

// This needs all of the "common" properties/methods of the TypedArrays,
// otherwise the type unions `TypedArray` and `ArrayBufferView` will be
// empty objects.
interface Float16Array extends
    Omit<
        Float32Array,
        "filter" | "map" | "slice" | "subarray" | "toReversed" | "toSorted" | "with" | typeof Symbol.toStringTag
    >
{
    filter(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array;
    map(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array;
    slice(start?: number, end?: number): Float16Array;
    subarray(begin?: number, end?: number): Float16Array;
    toReversed(): Float16Array;
    toSorted(compareFn?: (a: number, b: number) => number): Float16Array;
    with(index: number, value: number): Float16Array;
    readonly [Symbol.toStringTag]: "Float16Array";
}
