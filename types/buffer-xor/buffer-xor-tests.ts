import xor = require("buffer-xor");

// $ExpectType Buffer || Buffer<ArrayBufferLike>
xor(Buffer.from("a"), Buffer.from("b"));
