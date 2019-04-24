import byteRange = require('byte-range');

byteRange(1); // $ExpectType [number, number]
byteRange(1, { signed: false }); // $ExpectType [number, number]
byteRange.uint8; // $ExpectType [number, number]
byteRange.uint16; // $ExpectType [number, number]
byteRange.uint32; // $ExpectType [number, number]
byteRange.int8; // $ExpectType [number, number]
byteRange.int16; // $ExpectType [number, number]
byteRange.int32; // $ExpectType [number, number]
