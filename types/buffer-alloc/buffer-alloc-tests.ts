import bufferAlloc = require("buffer-alloc");

// Allocate with size only
const buf1: Buffer = bufferAlloc(10);

// Allocate with fill value
const buf2: Buffer = bufferAlloc(10, 0);

// Allocate with string fill
const buf3: Buffer = bufferAlloc(10, "a");

// Allocate with string fill and encoding
const buf4: Buffer = bufferAlloc(10, "ab", "utf8");

// Allocate with buffer fill
const buf5: Buffer = bufferAlloc(10, Buffer.from("hello"));

// @ts-expect-error - size must be a number
bufferAlloc("10");
