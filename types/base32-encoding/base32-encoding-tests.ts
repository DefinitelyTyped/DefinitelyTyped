import { decode, encode, encodingLength, parse, stringify } from "base32-encoding";

const toEncode = new Uint8Array(Buffer.from("foo"));

encodingLength(toEncode); // $ExpectType number

encode(toEncode); // $ExpectType Buffer || Buffer<ArrayBufferLike>
encode(toEncode, Buffer.alloc(encodingLength(toEncode))); // $ExpectType Buffer || Buffer<ArrayBuffer>
encode(toEncode, new Uint8Array(encodingLength(toEncode))); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
encode(toEncode, Buffer.alloc(encodingLength(toEncode)), 0); // $ExpectType Buffer || Buffer<ArrayBuffer>
encode(toEncode, new Uint8Array(encodingLength(toEncode)), 0); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

encode.bytes; // $ExpectType number | undefined

const toDecode = new Uint8Array(Buffer.from("3iejg7iy"));
decode(toEncode); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decode(toEncode, Buffer.alloc(encodingLength(toEncode))); // $ExpectType Buffer || Buffer<ArrayBuffer>
decode(toEncode, new Uint8Array(encodingLength(toEncode))); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
decode(toEncode, Buffer.alloc(encodingLength(toEncode)), 0); // $ExpectType Buffer || Buffer<ArrayBuffer>
decode(toEncode, new Uint8Array(encodingLength(toEncode)), 0); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

decode.bytes; // $ExpectType number | undefined

stringify(toDecode); // $ExpectType string
stringify(toDecode, "123"); // $ExpectType string

parse("3iejg7iy"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
parse("3iejg7iy", "123"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
