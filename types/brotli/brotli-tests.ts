import * as brotli from "brotli";
import compress = require("brotli/compress");
import decompress = require("brotli/decompress");

// $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
brotli.compress(Buffer.from("hello"));
// $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
brotli.decompress(Buffer.from("hello"));

// $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
compress(Buffer.from("hello"));
compress(Buffer.from("hello"), {});
// $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
decompress(Buffer.from("hello"));

// @ts-expect-error
compress(Buffer.from("hello"), { mode: 3 });
// @ts-expect-error
compress(Buffer.from("hello"), { quality: 12 });
