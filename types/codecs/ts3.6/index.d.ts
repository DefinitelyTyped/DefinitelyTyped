/// <reference types="node" />
declare namespace codecs {
    type JsonObject = { [Key in string]?: JsonValue };
    interface JsonArray extends Array<JsonValue> {}
    type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

    interface BaseCodec<InType = any, OutType = InType> {
        encode(input: InType): Buffer;
        decode(input: Uint8Array): OutType;
    }
    interface NamedCodec<TName extends string = string, InType = any, OutType = InType> extends BaseCodec<InType, OutType> {
        name: TName;
    }

    type BinaryCodec = NamedCodec<'binary', string | Uint8Array, Buffer>;
    type JsonCodec = NamedCodec<'json', any, JsonValue>;
    type NDJsonCodec = NamedCodec<'ndjson', any, JsonValue>;
    type AsciiCodec = NamedCodec<'ascii', string>;
    type Utf8Codec = NamedCodec<'utf-8', string>;
    type HexCodec = NamedCodec<'hex', string>;
    type Base64Codec = NamedCodec<'base64', string>;
    type Ucs2Codec = NamedCodec<'ucs2', string>;
    type Utf16leCodec = NamedCodec<'utf16le', string>;

    type CodecNames = keyof Codecs;

    type CodecInput = BaseCodec | CodecNames;
    type MaybeCodecInput = CodecInput | string | null | undefined;

    type OutType <
        TCodec extends MaybeCodecInput,
        TFallback extends NamedCodec = BinaryCodec,
        TCodecs = Codecs
    > = Codec<TCodec, TFallback, TCodecs> extends BaseCodec<any, infer T>
        ? T
        : unknown;

    type InType <
        TCodec extends MaybeCodecInput,
        TFallback extends NamedCodec = BinaryCodec,
        TCodecs = Codecs
    > = Codec<TCodec, TFallback, TCodecs> extends BaseCodec<infer T, any>
        ? T
        : unknown;

    type CodecName <
        TInput extends MaybeCodecInput,
        TFallback extends NamedCodec = BinaryCodec,
        TCodecs = Codecs
    > = TInput extends null | undefined
        ? TFallback['name']
        : TInput extends NamedCodec
            ? TInput['name']
            : TInput extends BaseCodec
                ? undefined
                : TInput extends keyof TCodecs
                    ? TCodecs[TInput] extends NamedCodec<infer Name>
                        ? Name
                        : undefined
                    : TFallback['name'];

    type Codec<TInput, TFallback = BinaryCodec, TCodecs = Codecs> = TInput extends BaseCodec
        ? TInput
        : TInput extends null | undefined
            ? TFallback
            : TInput extends keyof TCodecs
                ? TCodecs[TInput] extends BaseCodec
                    ? TCodecs[TInput]
                    : TFallback
                : TFallback;

    interface Codecs {
        (): BinaryCodec;
        <TCodec extends CodecInput>(codec: TCodec): Codec<TCodec>;
        <TCodec extends string | null | undefined, TFallback = BinaryCodec>(
            codec: TCodec,
            fallback?: TFallback,
        ): Codec<TCodec, TFallback>;

        binary: BinaryCodec;
        ndjson: NDJsonCodec;
        json: JsonCodec;
        ascii: AsciiCodec;
        'utf-8': Utf8Codec;
        utf8: Utf8Codec;
        hex: HexCodec;
        base64: Base64Codec;
        'ucs-2': Ucs2Codec;
        ucs2: Ucs2Codec;
        'utf16-le': Utf16leCodec;
        utf16le: Utf16leCodec;
    }
}

declare const codecs: codecs.Codecs;

export = codecs;
