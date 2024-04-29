import * as uint48be from "uint48be";

uint48be.encode(42); // $ExpectType Buffer
uint48be.encode(42, Buffer.alloc(10)); // $ExpectType Buffer
uint48be.encode(42, Buffer.alloc(10), 1); // $ExpectType Buffer

uint48be.encode.bytes; // $ExpectType 6

uint48be.decode(Buffer.alloc(10)); // $ExpectType number
uint48be.decode(Buffer.alloc(10), 1); // $ExpectType number

uint48be.decode.bytes; // $ExpectType 6

uint48be.encodingLength(42); // $ExpectType 6
