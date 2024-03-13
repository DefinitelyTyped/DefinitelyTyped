export as namespace cashaddr;

/**
 * Encodes a hash from a given type into a Bitcoin Cash address with the given prefix.
 *
 * @param prefix Network prefix. E.g.: 'bitcoincash'.
 * @param type Type of address to generate. Either 'P2PKH' or 'P2SH'.
 * @param hash Hash to encode represented as an array of 8-bit integers.
 * @throws {ValidationError}
 */
export function encode(prefix: string, type: string, hash: Uint8Array): string;

/**
 * Decodes the given address into its constituting prefix, type and hash.
 *
 * @param address Address to decode. E.g.: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'.
 * @throws {ValidationError}
 */
export function decode(address: string): { prefix: string; type: string; hash: Uint8Array };

/**
 * Error thrown when encoding or decoding fail due to invalid input.
 *
 * @param message Error description.
 */
export class ValidationError extends Error {
    constructor(message: string);
}
