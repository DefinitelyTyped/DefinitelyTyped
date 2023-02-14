// Type definitions for secretbox-encoding 1.0
// Project: https://github.com/jwerle/secretbox-encoding#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = createCodec;

/**
 * Creates and returns an [`abstract-encoding`](https://github.com/mafintosh/abstract-encoding)
 * interface to encode and decode values using the
 * [Xsalsa20poly1305](https://download.libsodium.org/doc/secret-key_cryptography/secretbox)
 * cipher from 32 byte `secretKey`.
 *
 * Nonces are prepended (attached) to encoded output and must be present when decoding.
 * Detached nonces may be used when attached to the `Buffer` instance to decode as a `nonce` property on it.
 *
 * @example
 * import * as crypto from 'node:crypto'
 * import createCodec = require('secretbox-encoding')
 *
 * const secretKey = crypto.randomBytes(32)
 * const codec = createCodec(secretKey)
 *
 * // encode a value
 * const buffer = codec.encode(Buffer.from('hello world'))
 *
 * // decode a value
 * codec.decode(buffer).toString('utf8') // => 'hello world'
 *
 * @example
 * import pbs = require('protocol-buffers')
 * import createCodec = require('secretbox-encoding')
 *
 * const { Message } = pbs(`
 * message {
 *   string data = 1;
 * }
 * `)
 *
 * const codec = createCodec(key, { valueEncoding: Message })
 * const encoded = codec.encode({ data: 'hello world' })
 * const message = codec.decode(encoded) // { data: 'hello world' }
 */
declare function createCodec<TEnc = createCodec.ValueToEncode, TDec = Buffer>(
    key: Buffer,
    opts?: createCodec.Options<TEnc, TDec>,
): createCodec.Codec<TEnc, TDec>;

declare namespace createCodec {
    /**
     * The size in bytes for the nonce used to encipher/decipher
     * values encoded or decoded by this module.
     */
    const NONCE_BYTES: 24;
    /**
     * The size in bytes for the MAC used to encipher/decipher
     * values encoded or decoded by this module.
     */
    const MAC_BYTES: 16;

    interface Options<TEnc = ValueToEncode, TDec = Buffer> {
        valueEncoding?: ValueEncoding<TEnc, TDec>;
        nonce?: () => Buffer;
    }

    interface ValueEncoding<TEnc, TDec> {
        encode(value: TEnc): ValueToEncode;
        decode(buffer: Buffer, offset: number): TDec;
    }

    interface Codec<TEnc = ValueToEncode, TDec = Buffer> {
        readonly key: Buffer;
        readonly valueEncoding: ValueEncoding<TEnc, TDec>;

        /**
         * Computes the encoding length for a given `value`.
         *
         * @example
         * import * as crypto from 'node:crypto'
         * import createCodec = require('secretbox-encoding')
         *
         * const secretKey = crypto.randomBytes(32)
         * const codec = createCodec(secretKey)
         *
         * const length = codec.encodingLength('hello world') // 11
         */
        encodingLength(value: ValueToEncode): number;

        /**
         * Encode a value using
         * [crypto_secretbox_easy](https://download.libsodium.org/doc/secret-key_cryptography/secretbox)
         * into a buffer.
         *
         * @param value The value to encode.
         * @param buffer If given, this buffer will be used to write the encoded value.
         * Otherwise, a new `Buffer` is allocated.
         * @param [offset=0] The byte offset into the `buffer` to encode the `value`.
         *
         * @example
         * import * as crypto from 'node:crypto'
         * import createCodec = require('secretbox-encoding')
         *
         * const secretKey = crypto.randomBytes(32)
         * const codec = createCodec(secretKey)
         *
         * // encode a value
         * const buffer = codec.encode(Buffer.from('hello world'))
         */
        encode: { (value: TEnc, buffer?: Buffer, offset?: number): Buffer; bytes: number };

        /**
         * Decode a buffer using
         * [crypto_secretbox_easy](https://download.libsodium.org/doc/secret-key_cryptography/secretbox).
         *
         * @param buffer The buffer with the encoded data.
         * @param [start=0] The byte offset at which to start decoding.
         * @param [end=buffer.length] The byte offset at which to stop decoding.
         *
         * @example
         * import * as crypto from 'node:crypto'
         * import createCodec = require('secretbox-encoding')
         *
         * const secretKey = crypto.randomBytes(32)
         * const codec = createCodec(secretKey)
         *
         * // encode a value
         * const buffer = codec.encode(Buffer.from('hello world'))
         *
         * // decode a value
         * codec.decode(buffer).toString('utf8') // => 'hello world'
         */
        decode: { (buffer: BufferWithNonce, start?: number, end?: number): TDec; bytes: number };
    }

    type ValueToEncode = Buffer | string | readonly number[] | JSONParsedBuffer;

    interface JSONParsedBuffer {
        type: 'Buffer';
        data: readonly number[];
    }

    interface BufferWithNonce extends Buffer {
        nonce?: Buffer;
    }
}
