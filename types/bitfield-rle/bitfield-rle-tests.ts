import * as rle from "bitfield-rle";

rle.encode(Buffer.of(1)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
rle.encode(Buffer.of(1), Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
rle.encode(Buffer.of(1), Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

rle.encode.bytes; // $ExpectType number

rle.decode(Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
rle.decode(Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

rle.decode.bytes; // $ExpectType number

rle.encodingLength(Buffer.alloc(10)); // $ExpectType number

rle.decodingLength(Buffer.alloc(10)); // $ExpectType number
rle.decodingLength(Buffer.alloc(10), 1); // $ExpectType number

const aligned = rle.align(8);
aligned.encode(Buffer.of(1)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
aligned.encode(Buffer.of(1), Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
aligned.encode(Buffer.of(1), Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

aligned.encode.bytes; // $ExpectType number

aligned.decode(Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
aligned.decode(Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

aligned.decode.bytes; // $ExpectType number

aligned.encodingLength(Buffer.alloc(10)); // $ExpectType number

aligned.decodingLength(Buffer.alloc(10)); // $ExpectType number
aligned.decodingLength(Buffer.alloc(10), 1); // $ExpectType number
