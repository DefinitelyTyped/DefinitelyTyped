// Type definitions for distributions-poisson-quantile 0.0
// Project: https://github.com/distributions-io/poisson-quantile#readme
// Definitions by: Daniel McNally <https://github.com/sangaman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare function quantile(p: number, options?: Options): number;
declare function quantile(p: number[], options?: Options & { dtype?: undefined }): number[];
declare function quantile(p: Data, options?: Options & { dtype?: 'float64' }): Float64Array;
declare function quantile(p: Data, options: Options & { dtype: 'int8' }): Int8Array;
declare function quantile(p: Data, options: Options & { dtype: 'uint8' }): Uint8Array;
declare function quantile(p: Data, options: Options & { dtype: 'uint8_clamped' }): Uint8ClampedArray;
declare function quantile(p: Data, options: Options & { dtype: 'int16' }): Int16Array;
declare function quantile(p: Data, options: Options & { dtype: 'uint16' }): Uint16Array;
declare function quantile(p: Data, options: Options & { dtype: 'int32' }): Int32Array;
declare function quantile(p: Data, options: Options & { dtype: 'uint32' }): Uint32Array;
declare function quantile(p: Data, options: Options & { dtype: 'float32' }): Float32Array;
declare function quantile(p: MatrixLike, options?: Options): Matrix;

/**
 * Evaluates the quantile function for a Poisson distribution.
 * @param p input value
 * @param options function options
 * @returns quantile function value(s)
 */
declare function quantile(p: number | Data | MatrixLike, options?: Options): number | Data | Matrix;

type Data = number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array;

type DataType = 'int8' | 'uint8' | 'uint8_clamped' | 'int16' | 'uint16' | 'int32' | 'uint32' | 'float32' | 'float64';

type MatrixCallback = (d: number, i: number, j: number, idx: number) => number;

// derived from https://github.com/dstructs/matrix
interface Matrix {
    readonly dtype: DataType;
    readonly ndims: number;
    readonly shape: number[];
    offset: number;
    strides: number[];
    readonly length: number;
    readonly nbytes: number;
    readonly data: Data;
    set: (i: number, j: number, value: number) => Matrix;
    iset: (idx: number, value: number) => Matrix;
    mset: (idx: number[], colsOrValue: number[] | Matrix, value?: number | Matrix | MatrixCallback) => Matrix;
    sset: (subsequence: string, value: number | Matrix | MatrixCallback) => Matrix;
    get: (i: number, j: number) => Matrix;
    iget: (index: number) => Matrix;
    mget: (idx: number[], cols?: number[]) => Matrix[];
    sget: (subsequence: string) => Matrix;
    toString: () => string;
    toJSON: () => string;
}

// derived from https://github.com/validate-io/matrix-like
interface MatrixLike {
    data: object;
    shape: object;
    offset: number;
    strides: object;
    dtype: string;
    length: number;
}

interface Options {
    /** mean parameter, default=1 */
    lambda?: number;
    /** boolean indicating if the function should return a new data structure, default=true */
    copy?: boolean;
    /** accessor function for accessing array values */
    accessor?: (d: Data, i: number) => any;
    /** deep get/set key path */
    path?: string;
    /** deep get/set key path separator, default="." */
    sep?: string;
    /** output data type, default="float64" */
    dtype?: DataType;
}

export = quantile;
