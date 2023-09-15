import * as bigUintBE from "biguintbe";

const bigUint = BigInt(1);

bigUintBE.encodingLength(bigUint); // $ExpectType number
bigUintBE.encode(bigUint); // $ExpectType Buffer
bigUintBE.encode(bigUint, Buffer.alloc(10)); // $ExpectType Buffer
bigUintBE.encode(bigUint, new Uint8Array(10)); // $ExpectType Uint8Array
bigUintBE.encode(bigUint, Buffer.alloc(10), 1); // $ExpectType Buffer
bigUintBE.encode(bigUint, new Uint8Array(10), 1); // $ExpectType Uint8Array

bigUintBE.encode.bytes; // $ExpectType number

bigUintBE.decode(Buffer.alloc(10)); // $ExpectType bigint
bigUintBE.decode(new Uint8Array(10)); // $ExpectType bigint
bigUintBE.decode(Buffer.alloc(10), 1); // $ExpectType bigint
bigUintBE.decode(new Uint8Array(10), 1); // $ExpectType bigint
bigUintBE.decode(Buffer.alloc(10), 1, 10); // $ExpectType bigint
bigUintBE.decode(new Uint8Array(10), 1, 10); // $ExpectType bigint

bigUintBE.decode.bytes; // $ExpectType number
