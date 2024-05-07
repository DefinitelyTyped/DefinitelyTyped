import { decode, encode, encodingLength } from "buffer-json-encoding";

encode(Buffer.of(1)); // $ExpectType Buffer
encode(Buffer.of(1), 5); // $ExpectType Buffer
encode(Buffer.of(1), Buffer.alloc(10)); // $ExpectType Buffer
encode(Buffer.of(1), Buffer.alloc(10), 5); // $ExpectType Buffer
encode.bytes; // $ExpectType number | undefined

decode(Buffer.alloc(10)); // $ExpectType Buffer
decode(Buffer.alloc(10), 2); // $ExpectType Buffer
decode(Buffer.alloc(10), 2, 5); // $ExpectType Buffer
decode.bytes; // $ExpectType number | undefined

encodingLength(Buffer.alloc(10)); // $ExpectType number
