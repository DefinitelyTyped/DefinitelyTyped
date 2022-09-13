/// <reference lib="esnext.bigint" />
import ndarray = require('ndarray');

const data1 = new Int32Array(2 * 2 * 2 + 10);
const typedArr = ndarray(data1, [2, 2, 2], [1, 2, 4], 5);
console.log(typedArr.data === data1);
console.log(typedArr.data.buffer.byteLength);
console.log(typedArr.shape[0] === 2);
console.log(typedArr.shape[1] === 2);
console.log(typedArr.shape[2] === 2);
console.log(typedArr.stride[0] === 1);
console.log(typedArr.stride[1] === 2);
console.log(typedArr.stride[2] === 4);
console.log(typedArr.offset === 5);
console.log(typedArr.dtype === 'int32');
console.log(typedArr.size === 8);
console.log(typedArr.order[0] === 0);
console.log(typedArr.order[1] === 1);
console.log(typedArr.order[2] === 2);
console.log(typedArr.dimension === 3);
console.log(typedArr.set(0, 0, 0, 1) >= 1);
console.log(typedArr.get(0, 0, 0) >= 1);
console.log(typedArr.index(1, 1, 1) >= 12);

const typedView = typedArr.lo(0, 0, 0).hi(1, 1, 1).step(0, 1).transpose(0, 1).pick(null, null, 1);
console.log(typedView.data === data1);
console.log(typedView.data.buffer.byteLength);

const data2 = [0, 1, 2, 3];
const numArr = ndarray(data2);
console.log(numArr.data.concat([]).length);
console.log(numArr.shape[0] === 4);
console.log(numArr.data === data2);
console.log(numArr.get(0) >= 0);
console.log(numArr.lo(0).data === data2);

const data3 = [true, false];
const boolArr = ndarray(data3);
console.log(boolArr.data[0] ? 1 : 0);

function generic1<D extends ndarray.TypedArray>(data: D): ndarray.NdArray<D> {
    return ndarray(data);
}

const gen1 = generic1(Float32Array.from([0, 1]));
console.log(gen1.get(0) === 0);
console.log(gen1.data.buffer.byteLength);

function generic2<T>(...values: T[]): ndarray.NdArray<T[]> {
    return ndarray(values);
}

const gen2 = generic2<string | boolean>('test', 'blah', true);
const firstVal = gen2.get(0);
console.log(typeof firstVal === 'string' ? firstVal.length : firstVal.valueOf());

function getFirstValue(arr: ndarray.NdArray): number {
    return arr.get(0);
}

function getTypedArrayOrNumberArray(arr: ndarray.NdArray<ndarray.Data<number>>): {
    data: ndarray.GenericArray<number> | ndarray.TypedArray | number[];
    scalar: number;
} {
    return { data: arr.data, scalar: arr.get(0) };
}

function getBigIntTypedArrayOrBigIntArray(arr: ndarray.NdArray<ndarray.Data<bigint>>): {
    data: ndarray.GenericArray<bigint> | BigUint64Array | BigInt64Array | Array<bigint>;
    scalar: bigint;
} {
    return { data: arr.data, scalar: arr.get(0) };
}

function getBigIntOrNumeric(arr: ndarray.NdArray<ndarray.Data<number | bigint>>): {
    data: ndarray.GenericArray<number> | ndarray.GenericArray<bigint> | number[] | ndarray.TypedArray | BigUint64Array | BigInt64Array | Array<bigint>;
    scalar: number | bigint;
} {
    return { data: arr.data, scalar: arr.get(0) };
}

function infersStringOnly(arr: ndarray.NdArray<ndarray.Data<string>>): { data: ndarray.GenericArray<string> | string[]; scalar: string } {
    return { data: arr.data, scalar: arr.get(0) };
}

function genericDtype(arr: ndarray.NdArray<ndarray.GenericArray<any>>): 'generic' {
    return arr.dtype;
}

function bigintDtype(arr: ndarray.NdArray<ndarray.Data<bigint>>): 'generic' | 'array' | 'bigint64' | 'biguint64' {
    return arr.dtype;
}

function stringDtype(arr: ndarray.NdArray<ndarray.Data<string>>): 'generic' | 'array' {
    return arr.dtype;
}
