// Type definitions for ndarray 1.0
// Project: https://github.com/scijs/ndarray, https://github.com/mikolalysenko/ndarray
// Definitions by: Giff Song <https://github.com/pawsong>, taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function ndarray<T = number>(
    data: ndarray.Data<T>, shape?: number[], stride?: number[], offset?: number
): ndarray<T>;

interface ndarray<T = number> {
    data: ndarray.Data<T>;
    shape: number[];
    stride: number[];
    offset: number;
    dtype: ndarray.DataType;
    size: number;
    order: number[];
    dimension: number;
    get(...args: number[]): T;
    set(...args: number[]): T;
    index(...args: number[]): T;
    lo(...args: number[]): ndarray<T>;
    hi(...args: number[]): ndarray<T>;
    step(...args: number[]): ndarray<T>;
    transpose(...args: number[]): ndarray<T>;
    pick(...args: Array<number | null>): ndarray<T>;
    reshape(...shapes: number[]): ndarray<T>;
    T: ndarray<T>;
}

declare namespace ndarray {
    type DataType = 'int8' | 'int16' | 'int32' | 'uint8' | 'uint16' | 'uint32' |
        'float32' | 'float64' | 'array' | 'uint8_clamped' | 'buffer' | 'generic';
    type Data<T> = T[] | Int8Array | Int16Array | Int32Array |
        Uint8Array | Uint16Array | Uint32Array |
        Float32Array | Float64Array | Uint8ClampedArray;
}

export = ndarray;
