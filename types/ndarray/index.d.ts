// Type definitions for ndarray 1.0
// Project: https://github.com/scijs/ndarray, https://github.com/mikolalysenko/ndarray
// Definitions by: Giff Song <https://github.com/pawsong>,
//                 taoqf <https://github.com/taoqf>
//                 Axel Bocciarelli <https://github.com/axelboc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function ndarray<T = number>(
    data: ndarray.Data<T>,
    shape?: number[],
    stride?: number[],
    offset?: number,
): ndarray.NdArray<T>;

declare namespace ndarray {
    interface NdArray<T = number> {
        data: Data<T>;
        shape: number[];
        stride: number[];
        offset: number;
        dtype: DataType;
        size: number;
        order: number[];
        dimension: number;
        get(...args: number[]): T;
        set(...args: number[]): T;
        index(...args: number[]): T;
        lo(...args: number[]): NdArray<T>;
        hi(...args: number[]): NdArray<T>;
        step(...args: number[]): NdArray<T>;
        transpose(...args: number[]): NdArray<T>;
        pick(...args: Array<number | null>): NdArray<T>;
        reshape(...shapes: number[]): NdArray<T>;
        T: NdArray<T>;
    }

    type Data<T> =
        | T[]
        | Int8Array
        | Int16Array
        | Int32Array
        | Uint8Array
        | Uint16Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | Uint8ClampedArray;

    type DataType =
        | "int8"
        | "int16"
        | "int32"
        | "uint8"
        | "uint16"
        | "uint32"
        | "float32"
        | "float64"
        | "array"
        | "uint8_clamped"
        | "buffer"
        | "generic";
}

export = ndarray;
