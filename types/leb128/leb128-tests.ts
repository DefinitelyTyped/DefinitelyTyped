import Stream = require("leb128/stream.js");
import leb128 = require("leb128");

declare const buffer: Buffer;
const stream = new Stream(buffer);
stream.write(buffer);

// $ExpectType Buffer
stream.read(1024);

// $ExpectType Buffer
leb128.signed.encode(42);
// $ExpectType Buffer
leb128.signed.encode("42");

// $ExpectType string
leb128.signed.decode(buffer);

leb128.signed.write(42, stream);
leb128.signed.write("42", stream);

// $ExpectType string
leb128.signed.read(stream);

// $ExpectType BN
leb128.signed.readBn(stream);

// $ExpectType Buffer
leb128.unsigned.encode(42);
// $ExpectType Buffer
leb128.unsigned.encode("42");

// $ExpectType string
leb128.unsigned.decode(buffer);

leb128.unsigned.write(42, stream);
leb128.unsigned.write("42", stream);

// $ExpectType string
leb128.unsigned.read(stream);

// $ExpectType BN
leb128.unsigned.readBn(stream);
