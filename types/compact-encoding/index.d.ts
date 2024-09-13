// Copied from <https://github.com/sindresorhus/type-fest/blob/30b8e2209b2518ef60bdab98ec6626d69a7e9d5a/source/basic.d.ts#L38-68>
type JsonObject = { [Key in string]: JsonValue } & { [Key in string]?: JsonValue | undefined };
type JsonArray = JsonValue[] | readonly JsonValue[];
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

interface AbstractEncoding<T> {
    encode(obj: T, buffer?: Uint8Array, offset?: number): Uint8Array;
    decode(buffer: Uint8Array, start?: number, end?: number): T;
    encodingLength(obj: T): number;
}

interface Codec<T> {
    encode(value: T): Uint8Array;
    decode(buf: Uint8Array): T;
}

declare namespace cenc {
    interface State {
        /** The byte offset to start encoding/decoding at. */
        start: number;
        /** The byte offset indicating the end of the buffer. */
        end: number;
        /** Either a Node.js Buffer or Uint8Array. */
        buffer: null | Uint8Array;
        /** Used internally by codecs. Starts out as `null`. */
        cache: unknown;
    }

    interface Encoder<T> {
        /**
         * Does a fast preencode dry-run that only sets `state.end`. Use this to
         * figure out how big of a buffer you need.
         */
        preencode(state: State, val: T): void;

        /**
         * Encodes `val` into state.buffer at position `state.start`. Updates
         * `state.start` to point after the encoded value when done.
         */
        encode(state: State, val: T): void;

        /**
         * Decodes a value from `state.buffer` as position `state.start`. Updates
         * `state.start` to point after the decoded value when done in the buffer.
         */
        decode(state: State): T;
    }
}

declare const cenc: {
    /** Get a blank state object. */
    state(): cenc.State;

    /** Helper for encoding to a buffer from a single encoder. */
    encode<T>(encoder: cenc.Encoder<T>, val: T): Uint8Array;

    /** Helper for decoding from a buffer from a single encoder. */
    decode<T>(encoder: cenc.Encoder<T>, buf: Uint8Array): T;

    /** Encodes a uint using compact-uint. */
    uint: cenc.Encoder<number>;
    /** Encodes a fixed size uint8. */
    uint8: cenc.Encoder<number>;
    /** Encodes a fixed size uint16. Useful for things like ports. */
    uint16: cenc.Encoder<number>;
    /** Encodes a fixed size uint24. Useful for message framing. */
    uint24: cenc.Encoder<number>;
    /** Encodes a fixed size uint32. Useful for very large message framing. */
    uint32: cenc.Encoder<number>;
    /** Encodes a fixed size uint40. */
    uint40: cenc.Encoder<number>;
    /** Encodes a fixed size uint48. */
    uint48: cenc.Encoder<number>;
    /** Encodes a fixed size uint56. */
    uint56: cenc.Encoder<number>;
    /** Encodes a fixed size uint64. */
    uint64: cenc.Encoder<number>;
    /** Encodes an int using cenc.uint with ZigZag encoding. */
    int: cenc.Encoder<number>;
    /** Encodes a fixed size int8 using cenc.uint8 with ZigZag encoding. */
    int8: cenc.Encoder<number>;
    /** Encodes a fixed size int16 using cenc.uint16 with ZigZag encoding. */
    int16: cenc.Encoder<number>;
    /** Encodes a fixed size int24 using cenc.uint24 with ZigZag encoding. */
    int24: cenc.Encoder<number>;
    /** Encodes a fixed size int32 using cenc.uint32 with ZigZag encoding. */
    int32: cenc.Encoder<number>;
    /** Encodes a fixed size int40 using cenc.uint40 with ZigZag encoding. */
    int40: cenc.Encoder<number>;
    /** Encodes a fixed size int48 using cenc.uint48 with ZigZag encoding. */
    int48: cenc.Encoder<number>;
    /** Encodes a fixed size int56 using cenc.uint56 with ZigZag encoding. */
    int56: cenc.Encoder<number>;
    /** Encodes a fixed size int64 using cenc.uint64 with ZigZag encoding. */
    int64: cenc.Encoder<number>;
    /** Encodes a fixed size biguint64. */
    biguint64: cenc.Encoder<bigint>;
    /** Encodes a fixed size bigint64 using cenc.biguint64 with ZigZag encoding. */
    bigint64: cenc.Encoder<bigint>;
    /** Encodes a biguint with its word count uint prefixed. */
    biguint: cenc.Encoder<bigint>;
    /** Encodes a bigint using cenc.biguint with ZigZag encoding. */
    bigint: cenc.Encoder<bigint>;
    /** Encodes a fixed size float32. */
    float32: cenc.Encoder<number>;
    /** Encodes a fixed size float64. */
    float64: cenc.Encoder<number>;
    /** Encodes a buffer with its length uint prefixed. When decoding an empty buffer, null is returned. */
    buffer: cenc.Encoder<Uint8Array>;
    /** Encodes an arraybuffer with its length uint prefixed. */
    arraybuffer: cenc.Encoder<ArrayBuffer>;
    /** Encodes a uint8array with its element length uint prefixed. */
    uint8array: cenc.Encoder<Uint8Array>;
    /** Encodes a uint16array with its element length uint prefixed. */
    uint16array: cenc.Encoder<Uint16Array>;
    /** Encodes a uint32array with its element length uint prefixed. */
    uint32array: cenc.Encoder<Uint32Array>;
    /** Encodes a int8array with its element length uint prefixed. */
    int8array: cenc.Encoder<Int8Array>;
    /** Encodes a int16array with its element length uint prefixed. */
    int16array: cenc.Encoder<Int16Array>;
    /** Encodes a int32array with its element length uint prefixed. */
    int32array: cenc.Encoder<Int32Array>;
    /** Encodes a biguint64array with its element length uint prefixed. */
    biguint64array: cenc.Encoder<BigUint64Array>;
    /** Encodes a bigint64array with its element length uint prefixed. */
    bigint64array: cenc.Encoder<BigInt64Array>;
    /** Encodes a float32array with its element length uint prefixed. */
    float32array: cenc.Encoder<Float32Array>;
    /** Encodes a float64array with its element length uint prefixed. */
    float64array: cenc.Encoder<Float64Array>;
    /** Encodes a boolean as 1 or 0. */
    bool: cenc.Encoder<boolean>;
    /** Encodes a fixed 32 byte buffer. */
    fixed32: cenc.Encoder<Uint8Array>;
    /** Encodes a fixed 64 byte buffer. */
    fixed64: cenc.Encoder<Uint8Array>;
    /** Makes a fixed sized encoder. */
    fixed(n: number): cenc.Encoder<Uint8Array>;
    /** Makes an array encoder from another encoder. Arrays are uint prefixed with their length. */
    array<T>(enc: cenc.Encoder<T>): cenc.Encoder<T[]>;
    /** Encodes a JSON value as utf-8. */
    json: cenc.Encoder<JsonValue>;
    /** Encodes a JSON value as newline delimited utf-8. */
    ndjson: cenc.Encoder<JsonValue>;
    /** Encodes any JSON representable value into a self described buffer. Like JSON + buffer, but using compact types. Useful for schemaless codecs. */
    any: cenc.Encoder<unknown>;

    /** Pass through encodes a buffer, i.e. a basic copy. */
    raw: cenc.Encoder<Uint8Array> & {
        /** Encodes a utf-8 string without a length prefixed. */
        string: cenc.Encoder<string>;
        /** Encodes a utf-8 string without a length prefixed. */
        utf8: cenc.Encoder<string>;
        /** Encodes a JSON value as newline delimited utf-8 without a length prefixed. */
        ndjson: cenc.Encoder<JsonValue>;
        /** Encodes a JSON value as utf-8 without a length prefixed. */
        json: cenc.Encoder<JsonValue>;
        /** Makes an array encoder from another encoder, without a length prefixed. */
        array<T>(enc: cenc.Encoder<T>): cenc.Encoder<T[]>;
        /** Encodes a utf16le string without a length prefixed. */
        utf16le: cenc.Encoder<string>;
        /** Encodes a utf16le string without a length prefixed. */
        ucs2: cenc.Encoder<string>;
        /** Encodes a base64 string without a length prefixed. */
        base64: cenc.Encoder<string>;
        /** Encodes a buffer without a length prefixed. */
        buffer: cenc.Encoder<Uint8Array>;
        /** Encodes an arraybuffer without a length prefixed. */
        arraybuffer: cenc.Encoder<ArrayBuffer>;
        /** Encodes a hex string without a length prefixed. */
        hex: cenc.Encoder<string>;
        /** Encodes an ascii string without a length prefixed. */
        ascii: cenc.Encoder<string>;
        /** Encodes a uint8array without a length prefixed. */
        uint8array: cenc.Encoder<Uint8Array>;
        /** Encodes a uint16array without a length prefixed. */
        uint16array: cenc.Encoder<Uint16Array>;
        /** Encodes a uint32array without a length prefixed. */
        uint32array: cenc.Encoder<Uint32Array>;
        /** Encodes a int8array without a length prefixed. */
        int8array: cenc.Encoder<Int8Array>;
        /** Encodes a int16array without a length prefixed. */
        int16array: cenc.Encoder<Int16Array>;
        /** Encodes a int32array without a length prefixed. */
        int32array: cenc.Encoder<Int32Array>;
        /** Encodes a biguint64array without a length prefixed. */
        biguint64array: cenc.Encoder<BigUint64Array>;
        /** Encodes a bigint64array without a length prefixed. */
        bigint64array: cenc.Encoder<BigInt64Array>;
        /** Encodes a float32array without a length prefixed. */
        float32array: cenc.Encoder<Float32Array>;
        /** Encodes a float64array without a length prefixed. */
        float64array: cenc.Encoder<Float64Array>;
    };

    /** Encodes a utf-8 string, similar to buffer. */
    string: cenc.Encoder<string> & {
        /** Encodes a fixed sized utf-8 string. */
        fixed(n: number): cenc.Encoder<string>;
    };
    /** Encodes a utf-8 string, similar to buffer. */
    utf8: cenc.Encoder<string> & {
        /** Encodes a fixed sized utf-8 string. */
        fixed(n: number): cenc.Encoder<string>;
    };
    /** Encodes an ascii string. */
    ascii: cenc.Encoder<string> & {
        /** Encodes a fixed size ascii string. */
        fixed(n: number): cenc.Encoder<string>;
    };
    /** Encodes a hex string. */
    hex: cenc.Encoder<string> & {
        /** Encodes a fixed size hex string. */
        fixed(n: number): cenc.Encoder<string>;
    };
    /** Encodes a base64 string. */
    base64: cenc.Encoder<string> & {
        /** Encodes a fixed size base64 string. */
        fixed(n: number): cenc.Encoder<string>;
    };
    /** Encodes a utf16le string. */
    utf16le: cenc.Encoder<string> & {
        /** Encodes a fixed size utf16le string. */
        fixed(n: number): cenc.Encoder<string>;
    };
    /** Encodes a utf16le string. */
    ucs2: cenc.Encoder<string> & {
        /** Encodes a fixed size utf16le string. */
        fixed(n: number): cenc.Encoder<string>;
    };

    /** Makes a compact encoder from a codec or abstract-encoding. */
    from(
        enc:
            | "ascii"
            | "utf-8"
            | "utf8"
            | "hex"
            | "base64"
            | "utf16-le"
            | "utf16le"
            | "ucs-2"
            | "ucs2",
    ): cenc.Encoder<string>;
    from(enc: "ndjson" | "json"): cenc.Encoder<JsonValue>;
    from(enc: "binary" | string): cenc.Encoder<Uint8Array | string>;
    from<T>(enc: cenc.Encoder<T>): cenc.Encoder<T>;
    from<T>(enc: AbstractEncoding<T>): cenc.Encoder<T>;
    from<T>(enc: Codec<T>): cenc.Encoder<T>;
};

export = cenc;
