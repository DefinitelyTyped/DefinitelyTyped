import byteRange = require('byte-range');

byteRange(1); // $ExpectType [number, number] || ByteRange
byteRange(1, { signed: false }); // $ExpectType [number, number] || ByteRange
byteRange.uint8; // $ExpectType [number, number] || ByteRange
byteRange.uint16; // $ExpectType [number, number] || ByteRange
byteRange.uint32; // $ExpectType [number, number] || ByteRange
byteRange.int8; // $ExpectType [number, number] || ByteRange
byteRange.int16; // $ExpectType [number, number] || ByteRange
byteRange.int32; // $ExpectType [number, number] || ByteRange
