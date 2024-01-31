/// <reference types="node" />

export type JsonPrimitive = string | number | boolean | null;
export type JsonArray = JsonValue[];
export interface JsonObject {
    [key: string]: JsonValue | undefined;
}
export type JsonValue = JsonPrimitive | JsonArray | JsonObject;

interface Encoding<TInput, TOutput = TInput> {
    input: TInput;
    output: TOutput;
}

interface EncodingLookup {
    ascii: Encoding<string>;
    base64: Encoding<string>;
    binary: Encoding<string | Buffer, Buffer>;
    hex: Encoding<string>;
    json: Encoding<JsonValue>;
    ndjson: Encoding<JsonValue>;
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

export = SubEncoder;
