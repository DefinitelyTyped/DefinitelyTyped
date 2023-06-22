import toBuffer = require('typedarray-to-buffer');

let arr = new Uint8Array([1, 2, 3]);
arr = toBuffer(arr); // $ExpectType Buffer
