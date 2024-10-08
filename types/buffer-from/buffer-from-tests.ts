import bufferFrom = require("buffer-from");

bufferFrom([1, 2, 3, 4]); // $ExpectType Buffer || Buffer<ArrayBufferLike>
bufferFrom(new Uint8Array([1, 2, 3, 4]).buffer, 1, 2); // $ExpectType Buffer || Buffer<ArrayBufferLike>
bufferFrom("test", "utf8"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
bufferFrom(bufferFrom("test")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
