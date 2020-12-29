// Type definitions for codecs 2.2
// Project: https://github.com/mafintosh/codecs
// Definitions by: Martin Heidegger <https://github.com/martinheidegger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace codecs {
    type JsonObject = { [Key in string]?: JsonValue };
    interface JsonArray extends Array<JsonValue> {}
    type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

    interface BaseCodec<InType = any, OutType = InType> {
        encode(input: InType): Buffer;
        decode(input: Uint8Array): OutType;
    }
    interface NamedCodec<TName extends string, InType = any, OutType = InType> extends BaseCodec<InType, OutType> {
        name: TName;
    }
    type BinaryCodec = NamedCodec<'binary', string | Uint8Array, Buffer>;
    type Codec<TInput, TFallback = BinaryCodec> = TInput extends BaseCodec
        ? BaseCodec
        : TInput extends null | undefined
        ? TFallback
        : TInput extends keyof Codecs
        ? Codecs[TInput]
        : TFallback;
    type CodecInput = BaseCodec | keyof Codecs;
    interface Codecs {
        (): BinaryCodec;
        <TCodec extends BaseCodec | keyof Codecs>(codec: TCodec): Codec<TCodec>;
        <TCodec extends string | null, TFallback extends BaseCodec = BinaryCodec>(
            codec: TCodec,
            fallback?: TFallback,
        ): Codec<TCodec, TFallback>;

        binary: BinaryCodec;
        ndjson: NamedCodec<'ndjson', any, JsonValue>;
        json: NamedCodec<'json', any, JsonValue>;
        ascii: NamedCodec<'ascii', string>;
        'utf-8': NamedCodec<'utf-8', string>;
        utf8: NamedCodec<'utf-8', string>;
        hex: NamedCodec<'hex', string>;
        base64: NamedCodec<'base64', string>;
        'ucs-2': NamedCodec<'ucs2', string>;
        ucs2: NamedCodec<'ucs2', string>;
        'utf16-le': NamedCodec<'utf16le', string>;
        utf16le: NamedCodec<'utf16le', string>;
    }
}

declare const codecs: codecs.Codecs;

export = codecs;
