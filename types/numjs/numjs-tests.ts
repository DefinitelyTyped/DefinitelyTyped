import nj = require("numjs");

const a = nj.abs(2);

const arr = nj.arange(6);
arr.reshape(1, 2, 3);
// array([[[ 0, 1, 2],
//         [ 3, 4, 5]]])
arr.T;
// array([[[ 0],
//         [ 3]],
//        [[ 1],
//         [ 4]],
//        [[ 2],
//         [ 5]]])
arr.transpose(1, 0, 2);
// array([[[ 0, 1, 2]],
//        [[ 3, 4, 5]]])

const b = nj.array([2, 3, 4] as number[]);

const c = nj.uint8([1, 2, 3] as number[]);

const d = nj.array<number[]>([[2], [3, 4]]);

nj.mod(nj.arange(7), nj.arange(8)); // $ExpectType NdArray<number>

const e = nj.arange(5);
e.slice(null, [null]);
e.slice(1);
e.slice([1, 2, 3]);
e.slice(1, [2], 3);

const f = nj.arange(3);
const g = nj.arange(2);

nj.subtract(f, 1); // $ExpectType NdArray<number>
nj.subtract(f, g); // $ExpectType NdArray<number>
nj.subtract(1, 1); // $ExpectType NdArray<number>
