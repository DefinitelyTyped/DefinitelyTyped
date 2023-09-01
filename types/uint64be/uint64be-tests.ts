import * as uint64be from "uint64be";

uint64be.encode(42); // $ExpectType Buffer
uint64be.encode(42, Buffer.alloc(10)); // $ExpectType Buffer
uint64be.encode(42, Buffer.alloc(10), 1); // $ExpectType Buffer

uint64be.encode.bytes; // $ExpectType 8

uint64be.decode(Buffer.alloc(10)); // $ExpectType number
uint64be.decode(Buffer.alloc(10), 1); // $ExpectType number

uint64be.decode.bytes; // $ExpectType 8

uint64be.encodingLength(42); // $ExpectType 8
