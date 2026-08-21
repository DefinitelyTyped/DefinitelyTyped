/// <reference types="node" />

type JsonPrimitive = string | number | boolean | null;
type JsonArray = SubEncoder.JsonValue[];
interface JsonObject {
    [key: string]: undefined | SubEncoder.JsonValue;
}

interface Encoding<TInput, TOutput = TInput> {
    input: TInput;
    output: TOutput;
}

interface EncodingLookup {
    ascii: Encoding<string>;
    base64: Encoding<string>;
    binary: Encoding<string | Buffer, Buffer>;
    hex: Encoding<string>;
    json: Encoding<SubEncoder.JsonValue>;
    ndjson: Encoding<SubEncoder.JsonValue>;
    ucs2: Encoding<string>;
    "utf-8": Encoding<string>;
    utf16le: Encoding<string>;
}

declare class SubEncoder<T extends keyof EncodingLookup = "binary"> {
    /**
     * Create a new SubEncoder. Optionally set the initial prefix and encoding.
     *
     * `prefix` can be string or Buffer.
     */
    constructor(prefix?: null | string | Buffer, encoding?: T);

    /**
     * Encode a key.
     */
    encode(key: EncodingLookup[T]["input"]): Buffer;

    /**
     * Decode a key.
     */
    decode(buf: Buffer): EncodingLookup[T]["output"];
}

declare namespace SubEncoder {
    type JsonValue = JsonPrimitive | JsonArray | JsonObject;
}

export = SubEncoder;
