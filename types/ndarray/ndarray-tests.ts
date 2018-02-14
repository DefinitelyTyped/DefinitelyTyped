import ndarray = require('ndarray');

const data = new Int32Array(2 * 2 * 2 + 10);
const a = ndarray(data, [2, 2, 2], [1, 2, 4], 5);

console.log(a.data === data);
console.log(a.shape[0] === 2);
console.log(a.shape[1] === 2);
console.log(a.shape[2] === 2);
console.log(a.stride[0] === 1);
console.log(a.stride[1] === 2);
console.log(a.stride[2] === 4);
console.log(a.offset === 5);
console.log(a.dtype === 'int32');
console.log(a.size === 8);
console.log(a.order[0] === 0);
console.log(a.order[1] === 1);
console.log(a.order[2] === 2);
console.log(a.dimension === 3);
console.log(a.set(0, 0, 0, 1) === 1);
console.log(a.get(0, 0, 0) === 1);
console.log(a.index(1, 1, 1) === 12);

const b = a.lo(0, 0, 0).hi(1, 1, 1);
