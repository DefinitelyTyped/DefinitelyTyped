/// <reference types="node" />

/**
 * Encode value to [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp).
 *
 * @param value The value to encode.
 * @param buffer The buffer to encode the `value` to. If not provided, a new `Buffer` will be allocated.
 * @param [offset=0] The byte offset in the `buffer` to encode `value` to.
 */
export function encode(value: ValueToEncode, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    /**
     * The number of bytes the last call to `encode` produced.
     */
    const bytes: number | undefined;
}

/**
 * Decode [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp) encoded value.
 *
 * @param buffer The buffer containing the encoded value.
 * @param [start=0] The byte offset in the `buffer` start decoding.
 * @param [end=buffer.length] The byte offset in the `buffer` stop decoding.
 */
export function decode(buffer: Buffer, start?: number, end?: number): DecodedValue;
export namespace decode {
    /**
     * The number of bytes the last call to `decode` produced.
     */
    const bytes: number | undefined;
}

/**
 * Determines the number of bytes a `value` requires when encoded.
 */
export function encodingLength(value: ValueToEncode): number;

export type ValueToEncode = ReadonlyArray<ValueToEncode> | Buffer | number | string | null | undefined;
export type DecodedValue = Buffer | DecodedValue[];
