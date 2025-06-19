import toBuffer = require("typedarray-to-buffer");

let arr = new Uint8Array([1, 2, 3]);
toBuffer(arr); // $ExpectType Buffer || Buffer<ArrayBufferLike>
