import crc32 = require("buffer-crc32");

const buf = Buffer.alloc(10);
crc32(buf); // $ExpectType Buffer
crc32(buf, buf); // $ExpectType Buffer
crc32(buf, 1); // $ExpectType Buffer
crc32("foo"); // $ExpectType Buffer
crc32("foo", buf); // $ExpectType Buffer
crc32("foo", 1); // $ExpectType Buffer

crc32.signed(buf); // $ExpectType number
crc32.signed(buf, buf); // $ExpectType number
crc32.signed(buf, 1); // $ExpectType number
crc32.signed("foo"); // $ExpectType number
crc32.signed("foo", buf); // $ExpectType number
crc32.signed("foo", 1); // $ExpectType number

crc32.unsigned(buf); // $ExpectType number
crc32.unsigned(buf, buf); // $ExpectType number
crc32.unsigned(buf, 1); // $ExpectType number
crc32.unsigned("foo"); // $ExpectType number
crc32.unsigned("foo", buf); // $ExpectType number
crc32.unsigned("foo", 1); // $ExpectType number
