import { APPTOKEN_BYTES, APPTOKEN_BYTES_MIN, create, hash } from "secure-token";

APPTOKEN_BYTES; // $ExpectType 18
APPTOKEN_BYTES_MIN; // $ExpectType 16

create(); // $ExpectType Buffer || Buffer<ArrayBufferLike>
create(APPTOKEN_BYTES); // $ExpectType Buffer || Buffer<ArrayBufferLike>

hash(create()); // $ExpectType Buffer || Buffer<ArrayBufferLike>
hash(create(), "foo"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
hash(create(), Buffer.from("foo")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
