import { decode, encode, encodingLength } from "buffer-json-encoding";

encode(Buffer.of(1)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
encode(Buffer.of(1), 5); // $ExpectType Buffer || Buffer<ArrayBufferLike>
encode(Buffer.of(1), Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
encode(Buffer.of(1), Buffer.alloc(10), 5); // $ExpectType Buffer || Buffer<ArrayBufferLike>
encode.bytes; // $ExpectType number | undefined

decode(Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decode(Buffer.alloc(10), 2); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decode(Buffer.alloc(10), 2, 5); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decode.bytes; // $ExpectType number | undefined

encodingLength(Buffer.alloc(10)); // $ExpectType number
