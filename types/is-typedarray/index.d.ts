// Type definitions for is-typedarray 1.0
// Project: https://github.com/hughsk/is-typedarray
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export = isTypedArray;

declare function isTypedArray(candidate: any): candidate is isTypedArray.TypedArray;

declare namespace isTypedArray {
    function strict(candidate: any): candidate is TypedArray;
    function loose(candidate: any): candidate is TypedArray;

    type TypedArray =
        | Int8Array
        | Int16Array
        | Int32Array
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | Buffer;
}
