import * as codec from "passthrough-encoding";

codec.encode("hello"); // $ExpectType Buffer
codec.encode(Buffer.from("hello")); // $ExpectType Buffer
codec.encode(null); // $ExpectType Buffer
codec.encode(undefined); // $ExpectType Buffer
codec.encode("hello", Buffer.alloc(10)); // $ExpectType Buffer
codec.encode("hello", Buffer.alloc(10), 1); // $ExpectType Buffer

codec.encode.bytes; // $ExpectType number

codec.decode(Buffer.from("hello")); // $ExpectType Buffer
codec.decode(Buffer.from("hello"), 1); // $ExpectType Buffer
codec.decode(Buffer.from("hello"), 1, 5); // $ExpectType Buffer

codec.decode.bytes; // $ExpectType number

codec.encodingLength("hello"); // $ExpectType number
codec.encodingLength(Buffer.from("hello")); // $ExpectType number
codec.encodingLength(null); // $ExpectType number
codec.encodingLength(undefined); // $ExpectType number
