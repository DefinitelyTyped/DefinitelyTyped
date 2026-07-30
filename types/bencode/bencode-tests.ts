import bencode from "bencode";

bencode.byteLength("abcde"); // $ExpectType number
bencode.encodingLength("abcde"); // $ExpectType number

bencode.encode([1, 2, 3, 4]); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
bencode.encode([1, 2, 3, 4], new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
bencode.encode([1, 2, 3, 4], new Uint8Array(100), 0); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

bencode.encode.bytes; // $ExpectType number
bencode.encode._floatConversionDetected; // $ExpectType boolean

bencode.decode(new Uint8Array([100, 51, 58, 97, 98, 99, 101])); // $ExpectType any
bencode.decode(new Uint8Array([100, 51, 58, 97, 98, 99, 101]), "utf-8"); // $ExpectType any
bencode.decode(new Uint8Array([100, 51, 58, 97, 98, 99, 101]), 1, 3); // $ExpectType any
bencode.decode(new Uint8Array([100, 51, 58, 97, 98, 99, 101]), 1, 3, "utf-8"); // $ExpectType any
bencode.decode(new Uint8Array([100, 51, 58, 97, 98, 99, 101]), 1, "utf-8"); // $ExpectType any

bencode.decode.bytes; // $ExpectType number
