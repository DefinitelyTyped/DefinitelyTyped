import { decode, encode, EncodingProgress, TextDecoder, TextEncoder } from "fastestsmallesttextencoderdecoder";

const bytes = encode("hi"); // $ExpectType Uint8Array
decode(bytes); // $ExpectType string
decode(bytes, { stream: true }); // $ExpectType string
new TextDecoder().decode(bytes, { stream: true }); // $ExpectType string
new TextEncoder().encode("hi"); // $ExpectType Uint8Array
new TextEncoder().encodeInfo("hi", bytes); // $ExpectType EncodingProgress
