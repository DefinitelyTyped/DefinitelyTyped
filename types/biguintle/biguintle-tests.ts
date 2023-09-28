import * as bigUintLE from "biguintle";

const bigUint = BigInt(1);

bigUintLE.encodingLength(bigUint); // $ExpectType number
bigUintLE.encode(bigUint); // $ExpectType Buffer
bigUintLE.encode(bigUint, Buffer.alloc(10)); // $ExpectType Buffer
bigUintLE.encode(bigUint, new Uint8Array(10)); // $ExpectType Uint8Array
bigUintLE.encode(bigUint, Buffer.alloc(10), 1); // $ExpectType Buffer
bigUintLE.encode(bigUint, new Uint8Array(10), 1); // $ExpectType Uint8Array

bigUintLE.encode.bytes; // $ExpectType number

bigUintLE.decode(Buffer.alloc(10)); // $ExpectType bigint
bigUintLE.decode(new Uint8Array(10)); // $ExpectType bigint
bigUintLE.decode(Buffer.alloc(10), 1); // $ExpectType bigint
bigUintLE.decode(new Uint8Array(10), 1); // $ExpectType bigint
bigUintLE.decode(Buffer.alloc(10), 1, 10); // $ExpectType bigint
bigUintLE.decode(new Uint8Array(10), 1, 10); // $ExpectType bigint

bigUintLE.decode.bytes; // $ExpectType number
