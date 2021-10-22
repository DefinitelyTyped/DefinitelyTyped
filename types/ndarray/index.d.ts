// Type definitions for ndarray 1.0
// Project: https://github.com/scijs/ndarray, https://github.com/mikolalysenko/ndarray
// Definitions by: Giff Song <https://github.com/pawsong>,
//                 taoqf <https://github.com/taoqf>
//                 Axel Bocciarelli <https://github.com/axelboc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function ndarray<D extends ndarray.Data = ndarray.Data<number>>(
    data: D,
    shape?: number[],
    stride?: number[],
    offset?: number,
): ndarray.NdArray<D>;

declare namespace ndarray {
    interface NdArray<D extends Data = Data<number>> {
        data: D;
        shape: number[];
        stride: number[];
        offset: number;
        dtype: DataType<D>;
        size: number;
        order: number[];
        dimension: number;
        get(...args: number[]): Value<D>;
        set(...args: number[]): Value<D>;
        index(...args: number[]): Value<D>;
        lo(...args: number[]): NdArray<D>;
        hi(...args: number[]): NdArray<D>;
        step(...args: number[]): NdArray<D>;
        transpose(...args: number[]): NdArray<D>;
        pick(...args: Array<number | null>): NdArray<D>;
        T: NdArray<D>;
    }

    type Data<T = any> = T[] | TypedArray;
    type TypedArray =
        | Int8Array
        | Int16Array
        | Int32Array
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Float32Array
        | Float64Array;

    type Value<D extends Data> = D extends Array<infer T> ? T : number;

    type DataType<D extends Data = Data> = D extends Int8Array
        ? 'int8'
        : D extends Int16Array
        ? 'int16'
        : D extends Int32Array
        ? 'int32'
        : D extends Uint8Array
        ? 'uint8'
        : D extends Uint8ClampedArray
        ? 'uint8_clamped'
        : D extends Uint16Array
        ? 'uint16'
        : D extends Uint32Array
        ? 'uint32'
        : D extends Float32Array
        ? 'float32'
        : D extends Float64Array
        ? 'float64'
        : 'array';
}

export = ndarray;
