/// <reference types="node" />

export = dnsTxt;

/**
 * A constructor function which can be called with an options object.
 *
 * @example
 * import dnsTxt = require('dns-txt');
 * const txt = dnsTxt();
 *
 * const obj = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * const enc = txt.encode(obj) // <Buffer 05 66 6f 6f 3d 31 05 62 61 72 3d 32>
 *
 * txt.decode(enc) // { foo: '1', bar: '2' }
 */
declare function dnsTxt(opts?: dnsTxt.Options): {
    encode: typeof encode;
    decode: typeof decode;
    encodingLength: typeof encodingLength;
};

declare namespace dnsTxt {
    interface Options {
        /**
         * If set to `true` all values will be returned as `Buffer`
         * objects. The default behavior is to turn all values into strings. But
         * according to the RFC the values can be any binary data. If you expect
         * binary data, use this option.
         *
         * @default false
         */
        binary?: boolean | undefined;
    }

    interface DataToEncode {
        [key: string]: boolean | string | number | Buffer;
    }

    interface DecodedData {
        [key: string]: true | string | Buffer;
    }
}

/**
 * Takes a key/value data object and returns a buffer with the encoded TXT
 * record.
 *
 * This module does not actively validate the key/value pairs, but keep the
 * following in rules in mind:
 *
 * - To be RFC compliant, each key should conform with the rules as
 *   specified in [section 6.4](https://tools.ietf.org/html/rfc6763#section-6.4).
 *
 * - To be RFC compliant, each value should conform with the rules as
 *   specified in [section 6.5](https://tools.ietf.org/html/rfc6763#section-6.5).
 *
 * @param data The data to encode.
 * @param buffer A buffer to use to encode `data` into. A new buffer will be allocated if not provided.
 * @param [offset=0] Byte offset in `buffer` where `data` should be encoded.
 */
declare function encode(data: dnsTxt.DataToEncode, buffer?: Buffer, offset?: number): Buffer;
declare namespace encode {
    /**
     * After encoding, `bytes` is set to the amount of bytes used to
     * encode the `data`.
     */
    const bytes: number | undefined;
}

/**
 * Takes a buffer and returns a decoded key/value data object. Note that all keys will be
 * lowercased and all values will be `strings` if `binary` option is not set and all values
 * will be `Buffer` objects if `binary` option is set to `true`.
 *
 * @param buffer The buffer containing the encoded data object.
 * @param [offset=0] The byte offset into `buffer` at which to begin decoding the data object.
 * @param [length=buffer.length] The byte offset into `buffer` at which to stop decoding the data object.
 */
declare function decode(buffer: Buffer, offset?: number, length?: number): dnsTxt.DecodedData;
declare namespace decode {
    /**
     * After decoding, `bytes` is set to the amount of bytes used to
     * decode the data object.
     */
    const bytes: number | undefined;
}

/**
 * Takes a single key/value object and returns the number of bytes that the given object
 * would require if encoded.
 */
declare function encodingLength(data: dnsTxt.DataToEncode): number;
