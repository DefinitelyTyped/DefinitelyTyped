import bufferFill = require("buffer-fill");

const buf = Buffer.alloc(10);

// Fill with number
const r1: Buffer = bufferFill(buf, 0);

// Fill with string
const r2: Buffer = bufferFill(buf, "a");

// Fill with offset and end
const r3: Buffer = bufferFill(buf, 0, 2, 5);

// Fill with string, offset, end, and encoding
const r4: Buffer = bufferFill(buf, "ab", 0, 10, "utf8");

// Fill with buffer
const r5: Buffer = bufferFill(buf, Buffer.from("hello"));

// @ts-expect-error - first argument must be a Buffer
bufferFill("not a buffer", 0);
