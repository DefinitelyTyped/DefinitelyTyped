import bytewise = require("bytewise");

// $ExpectType Buffer || Buffer<ArrayBufferLike>
bytewise.encode([1, 2, 3]);

// $ExpectType any
bytewise.decode(bytewise.encode([1, 2, 3]));

// $ExpectType Buffer || Buffer<ArrayBufferLike>
bytewise.encode(bytewise.sorts.array.bound.lower(["123", -1, 0x123, Buffer.from("test")]));
