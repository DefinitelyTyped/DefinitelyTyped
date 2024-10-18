import BufferBuilder = require("buffer-builder");

const builderNoArgs = new BufferBuilder();
const builderWithBuffer = new BufferBuilder(Buffer.alloc(10));
const builder = new BufferBuilder(10);

const buffer = builder
    .appendBuffer(Buffer.alloc(10))
    .appendUInt8(10)
    .appendString("foo")
    .appendString("foo", "utf8")
    .appendStringZero("foo")
    .appendStringZero("foo", "utf8")
    .appendFill(0, 1)
    .get();

builder.copy(buffer);
builder.copy(buffer, 0);
builder.copy(buffer, 0, 1);
builder.copy(buffer, 0, 1, 2) + 1;
