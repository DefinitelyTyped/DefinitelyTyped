import * as codec from "passthrough-encoding";

codec.encode("hello"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.encode(Buffer.from("hello")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.encode(null); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.encode(undefined); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.encode("hello", Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.encode("hello", Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

codec.encode.bytes; // $ExpectType number

codec.decode(Buffer.from("hello")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.decode(Buffer.from("hello"), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>
codec.decode(Buffer.from("hello"), 1, 5); // $ExpectType Buffer || Buffer<ArrayBufferLike>

codec.decode.bytes; // $ExpectType number

codec.encodingLength("hello"); // $ExpectType number
codec.encodingLength(Buffer.from("hello")); // $ExpectType number
codec.encodingLength(null); // $ExpectType number
codec.encodingLength(undefined); // $ExpectType number
