/// <reference types="node" />

export = makeObjectStruct;

/**
 * Creates a codec with a fixed number of fields. If any subcodec has a variable
 * length, then the new codec will as well.
 *
 * @example
 * import vstruct = require('varstruct')
 *
 * //create a vector codec.
 * let Vector = vstruct<{ x: number; y: number; z: number }>([
 *   { name: 'x', type: vstruct.DoubleBE },
 *   { name: 'y', type: vstruct.DoubleBE },
 *   { name: 'z', type: vstruct.DoubleBE }
 * ])
 *
 * // or short form
 * Vector = vstruct([
 *   ['x', vstruct.DoubleBE],
 *   ['y', vstruct.DoubleBE],
 *   ['z', vstruct.DoubleBE]
 * ])
 *
 * //encode a object to get a buffer
 * const dump = Vector.encode({ x: 93.1, y: 87.3, z: 10.39 })
 * // <Buffer 40 57 46 66 66 66 66 66 40 55 d3 33 33 33 33 33 40 24 c7 ae 14 7a e1 48>
 *
 * const xyz = Vector.decode(dump)
 * // => { x: 93.1, y: 87.3, z: 10.39 }
 *
 * @example
 * import vstruct = require('varstruct')
 * import * as VarIntProtobuf from 'varint'
 *
 * // codec for a sha256 hash
 * const SHA256 = vstruct.Buffer(32)
 *
 * interface Message {
 *     previous: Buffer;
 *     author: Buffer;
 *     message: Buffer;
 *     attachments: Buffer[];
 * }
 *
 * const Message = vstruct<Message>([
 *   // the hash of the previous message
 *   { name: 'previous', type: SHA256 },
 *
 *   // the hash of the author's public key
 *   { name: 'author', type: SHA256 },
 *
 *   // an arbitary length buffer
 *   { name: 'message', type: vstruct.VarBuffer(VarIntProtobuf) },
 *
 *   // hashes of related documents.
 *   { name: 'attachments', type: vstruct.VarArray(vstruct.Byte, SHA256) }
 * ])
 */
declare function makeObjectStruct<TObj>(
    definition: makeObjectStruct.ObjectDescriptor<TObj>,
): makeObjectStruct.Codec<TObj>;

declare namespace makeObjectStruct {
    interface Codec<T> {
        encode: {
            (value: T, buffer?: Buffer, offset?: number): Buffer;
            readonly bytes: number | undefined;
        };
        decode: {
            (buffer: Buffer, start?: number, end?: number): T;
            readonly bytes: number | undefined;
        };
        encodingLength(value: T): number;
    }

    type ObjectDescriptor<TObj> = ReadonlyArray<
        ObjectDescriptorTuple<TObj, keyof TObj> | ObjectDescriptorMap<TObj, keyof TObj>
    >;

    type ObjectDescriptorTuple<TObj, TKey> = TKey extends keyof TObj
        ? readonly [name: keyof TObj, type: Codec<TObj[keyof TObj]>]
        : never;

    type ObjectDescriptorMap<TObj, TKey> = TKey extends keyof TObj
        ? { readonly name: TKey; readonly type: Codec<TObj[TKey]> }
        : never;

    /**
     * Codec for unsigned byte (8-bit) integer numbers.
     */
    const Byte: Codec<number>;
    /**
     * Codec for signed 8-bit integer numbers.
     */
    const Int8: Codec<number>;
    /**
     * Codec for unsigned byte (8-bit) integer numbers.
     */
    const UInt8: Codec<number>;
    /**
     * Codec for signed 16-bit integer numbers encoded as Big Endian (BE).
     */
    const Int16BE: Codec<number>;
    /**
     * Codec for signed 16-bit integer numbers encoded as Little Endian (LE).
     */
    const Int16LE: Codec<number>;
    /**
     * Codec for unsigned 16-bit integer numbers encoded as Big Endian (BE).
     */
    const UInt16BE: Codec<number>;
    /**
     * Codec for unsigned 16-bit integer numbers encoded as Little Endian (LE).
     */
    const UInt16LE: Codec<number>;
    /**
     * Codec for signed 32-bit integer numbers encoded as Big Endian (BE).
     */
    const Int32BE: Codec<number>;
    /**
     * Codec for signed 32-bit integer numbers encoded as Little Endian (LE).
     */
    const Int32LE: Codec<number>;
    /**
     * Codec for unsigned 32-bit integer numbers encoded as Big Endian (BE).
     */
    const UInt32BE: Codec<number>;
    /**
     * Codec for unsigned 32-bit integer numbers encoded as Little Endian (LE).
     */
    const UInt32LE: Codec<number>;
    /**
     * Codec for signed 64-bit integer numbers encoded as Big Endian (BE).
     *
     * 64 bit ints are actually only 53 bit ints, but they will still be
     * written to 8 bytes. (based on [int53](https://github.com/dannycoates/int53))
     */
    const Int64BE: Codec<number>;
    /**
     * Codec for signed 64-bit integer numbers encoded as Little Endian (LE).
     *
     * 64 bit ints are actually only 53 bit ints, but they will still be
     * written to 8 bytes. (based on [int53](https://github.com/dannycoates/int53))
     */
    const Int64LE: Codec<number>;
    /**
     * Codec for unsigned 64-bit integer numbers encoded as Big Endian (BE).
     *
     * 64 bit ints are actually only 53 bit ints, but they will still be
     * written to 8 bytes. (based on [int53](https://github.com/dannycoates/int53))
     */
    const UInt64BE: Codec<number>;
    /**
     * Codec for unsigned 64-bit integer numbers encoded as Little Endian (LE).
     *
     * 64 bit ints are actually only 53 bit ints, but they will still be
     * written to 8 bytes. (based on [int53](https://github.com/dannycoates/int53))
     */
    const UInt64LE: Codec<number>;
    /**
     * Codec for 32-bit floating point numbers encoded as Big Endian (BE).
     */
    const FloatBE: Codec<number>;
    /**
     * Codec for 32-bit floating point numbers encoded as Little Endian (LE).
     */
    const FloatLE: Codec<number>;
    /**
     * Codec for 64-bit floating point numbers encoded as Big Endian (BE).
     */
    const DoubleBE: Codec<number>;
    /**
     * Codec for 64-bit floating point numbers encoded as Little Endian (LE).
     */
    const DoubleLE: Codec<number>;

    /**
     * Creates codec that encodes an array with *fixed* length.
     */
    function Array<T>(length: number, itemCodec: Codec<T>): Codec<T[]>;
    /**
     * Creates a variable length codec that encodes an array of items.
     *
     * @param lengthCodec Must encode an integer.
     * @param itemCodec May be any varstruct compatible codec, including a `VarArray`.
     * As long as it can encode every element in the array.
     */
    function VarArray<T>(lengthCodec: Codec<number>, itemCodec: Codec<T>): Codec<T[]>;
    /**
     * Creates codec that encodes an array with *fixed* length and *various* types.
     */
    function Sequence<TCodecs extends readonly [...Array<Codec<any>>]>(itemCodecs: TCodecs): Codec<CodecTypes<TCodecs>>;

    /**
     * Creates a *fixed* length buffer codec.
     */
    function Buffer(length: number): Codec<Buffer>;
    /**
     * Creates a variable length buffer codec. This will first write out the length of the
     * value buffer and then the value buffer itself.
     *
     * @param lengthCodec May be variable length itself, but must encode an integer.
     */
    function VarBuffer(lengthCodec: Codec<number>): Codec<Buffer>;

    /**
     * Create a variable length object codec. This will first write out the number of
     * entries in the object and then write each entry as a key-value pair.
     *
     * @param lengthCodec May be variable length itself, but must encode an integer.
     * @param keyCodec Must accept string keys.
     * @param valueCodec The codec for each value of the map.
     */
    function VarMap<TKey extends string, TValue>(
        lengthCodec: Codec<number>,
        keyCodec: Codec<TKey>,
        valueCodec: Codec<TValue>,
    ): Codec<Record<TKey, TValue>>;

    /**
     * Creates a *fixed* length (in bytes) string codec.
     *
     * @param length The length of the string.
     * @param [encoding='utf-8'] The encoding of the string.
     */
    function String(length: number, encoding?: string): Codec<string>;
    /**
     * Create a variable length string codec. This codec uses `VarBuffer`
     * (buffer will be created from string with given `encoding`).
     *
     * @param lengthCodec May be variable length itself, but must encode an integer.
     * @param [encoding='utf-8'] The encoding of the string.
     */
    function VarString(lengthCodec: Codec<number>, encoding?: string): Codec<string>;

    /**
     * Creates a codec that will call `checkValueCallback` before encode and after decode.
     *
     * @param valueCodec The codec for the value.
     * @param checkValueCallback Should throw error if the given `value` is wrong.
     */
    function Bound<T>(valueCodec: Codec<T>, checkValueCallback: (value: T) => asserts value is T): Codec<T>;

    /**
     * Creates a codec that will encode `constantValue` every time (and will throw
     * if given any value other than `constantValue`), and will decode `constantValue`
     * if it exists (throwing otherwise).
     */
    function Value<T>(valueCodec: Codec<T>, constantValue: T): Codec<T | undefined>;
}

type CodecType<T> = T extends makeObjectStruct.Codec<infer TCodec> ? TCodec : never;
type CodecTypes<Tuple extends readonly [...any[]]> =
    & {
        [k in keyof Tuple]: CodecType<Tuple[k]>;
    }
    & { length: Tuple["length"] };
