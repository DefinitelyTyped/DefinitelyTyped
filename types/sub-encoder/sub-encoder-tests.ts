/// <reference types="node" />

import SubEncoder = require("sub-encoder");
import type { JsonValue } from "sub-encoder";

{
    const enc = new SubEncoder();

    enc.encode("str"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
    enc.encode(Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
    enc.decode(Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBufferLike>

    // @ts-expect-error
    enc.encode(123);
}

{
    const enc = new SubEncoder(null, "binary");

    enc.encode(""); // $ExpectType Buffer || Buffer<ArrayBufferLike>
    enc.encode(Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
    enc.decode(Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBufferLike>

    // @ts-expect-error
    enc.encode(123);
}

{
    const STRING_ENCODINGS = ["ascii", "base64", "utf-8", "hex", "ucs2", "utf16le"] as const;

    for (const encoding of STRING_ENCODINGS) {
        const enc = new SubEncoder(null, encoding);
        enc.encode(""); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        enc.decode(Buffer.alloc(0)); // $ExpectType string
    }

    // @ts-expect-error
    enc.encode(Buffer.alloc(0));
}

{
    const JSON_ENCODING = ["json", "ndjson"] as const;

    for (const encoding of JSON_ENCODING) {
        const enc = new SubEncoder(null, encoding);
        enc.encode({ foo: "bar" }); // $ExpectType Buffer || Buffer<ArrayBufferLike>
        enc.decode(Buffer.alloc(0)); // $ExpectType JsonValue
    }
}
