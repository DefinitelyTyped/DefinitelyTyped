import { decode, encode, EncodingProgress, TextDecoder, TextEncoder } from "fastestsmallesttextencoderdecoder";

const bytes = encode("hi"); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
decode(bytes); // $ExpectType string
decode(bytes, { stream: true }); // $ExpectType string
new TextDecoder().decode(bytes, { stream: true }); // $ExpectType string
new TextEncoder().encode("hi"); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
new TextEncoder().encodeInfo("hi", bytes); // $ExpectType EncodingProgress
