/**
 * Determines the amount of bytes needed to encode the given value.
 */
declare function byteLength(value: any): number;

/**
 * Determines the amount of bytes needed to encode the given value.
 * Alias for {@link byteLength}.
 */
declare function encodingLength(value: any): number;

/**
 * Encodes data in bencode.
 *
 * @param data  Data to encode. Supports Uint8Array, Array, String, Object, Number, Boolean, Map, Set.
 * @param buffer  If provided, the encoded data will be written into this buffer at the given offset.
 * @param offset  Offset into the buffer to start writing.
 * @returns The encoded data as a Uint8Array, or the provided buffer.
 */
declare function encode(data: any, buffer?: Uint8Array, offset?: number): Uint8Array;
declare namespace encode {
    /** The number of bytes written in the last encode call. */
    let bytes: number;
    /** Set to true if a float value was coerced to an integer during encoding. */
    let _floatConversionDetected: boolean;
}

/**
 * Decodes bencoded data.
 *
 * @param data  The bencoded data to decode.
 * @param start  Optional start position in the data buffer.
 * @param end  Optional end position in the data buffer.
 * @param encoding  If provided, byte strings will be automatically converted to strings using this encoding.
 * @returns The decoded data.
 */
declare function decode(data: Uint8Array | string, encoding?: string): any;
declare function decode(data: Uint8Array | string, start?: number, encoding?: string): any;
declare function decode(data: Uint8Array | string, start?: number, end?: number, encoding?: string): any;
declare namespace decode {
    /** The number of bytes consumed in the last decode call. */
    let bytes: number;
}

declare const bencode: {
    byteLength: typeof byteLength;
    encodingLength: typeof encodingLength;
    encode: typeof encode;
    decode: typeof decode;
};

export default bencode;
