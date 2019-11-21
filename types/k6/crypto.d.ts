/*
 * Cryptography utilities.
 * https://docs.k6.io/docs/k6crypto
 */

import { bytes } from '.';

/**
 * Generate random bytes.
 * @param size - Number of bytes to generate.
 * @returns Random bytes.
 * @public
 */
export function randomBytes(size: number): bytes;

/**
 * Produce HMAC.
 * https://docs.k6.io/docs/hmac-algorithm-secret-data-outputencoding
 * @param algorithm - Hash algorithm.
 * @param secret - Shared secret.
 * @param data - Input data.
 * @param outputEncoding - Output encoding.
 * @returns Produced HMAC.
 * @public
 */
export function hmac<OE extends OutputEncoding>(
    algorithm: Algorithm,
    secret: string,
    data: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with MD4.
 * https://docs.k6.io/docs/md4-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns MD4 digest.
 * @public
 */
export function md4<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with MD5.
 * https://docs.k6.io/docs/md5-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns MD5 digest.
 * @public
 */
export function md5<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-1.
 * https://docs.k6.io/docs/sha1-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-1 digest.
 * @public
 */
export function sha1<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-256.
 * https://docs.k6.io/docs/sha256-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-256 digest.
 * @public
 */
export function sha256<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-384.
 * https://docs.k6.io/docs/sha384-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-384 digest.
 * @public
 */
export function sha384<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-512.
 * https://docs.k6.io/docs/sha512-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-512 digest.
 * @public
 */
export function sha512<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-512/224.
 * https://docs.k6.io/docs/sha512_224-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-512/224 digest.
 * @public
 */
export function sha512_224<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-512/256.
 * https://docs.k6.io/docs/sha512_256-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-512/256 digest.
 * @public
 */
export function sha512_256<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with RIPEMD-160.
 * https://docs.k6.io/docs/ripemd160-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns RIPEMD-160 digest.
 * @public
 */
export function ripemd160<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Create a hashing object.
 * https://docs.k6.io/docs/createhash-algorithm
 * @param algorithm - Hash algorithm.
 * @returns Hashing object.
 * @public
 */
export function createHash(algorithm: Algorithm): Hasher;

/**
 * Create an HMAC hashing object.
 * https://docs.k6.io/docs/createhmacalgorithm-secret
 * @param algorithm - Hash algorithm.
 * @param secret - Shared secret.
 * @returns HMAC hashing object.
 * @public
 */
export function createHMAC(algorithm: Algorithm, secret: string): Hasher;

/**
 * Hash algorithm.
 * @public
 */
export type Algorithm =
    | 'md4'
    | 'md5'
    | 'sha1'
    | 'sha256'
    | 'sha384'
    | 'sha512'
    | 'sha512_224'
    | 'sha512_256'
    | 'ripemd160';

/**
 * String output encoding.
 * @public
 */
export type StringEncoding = 'hex' | 'base64' | 'base64url' | 'base64rawurl';

/**
 * Binary output encoding.
 * @public
 */
export type BinaryEncoding = 'binary';

/**
 * Output encoding.
 * @public
 */
export type OutputEncoding = StringEncoding | BinaryEncoding;

/**
 * Output type. Varies with output encoding.
 * @typeParam OE - Output encoding.
 * @public
 */
export type Output<OE extends OutputEncoding> = OE extends StringEncoding
    ? string
    : OE extends BinaryEncoding
    ? bytes
    : never;

/**
 * Hashing object.
 * https://docs.k6.io/docs/hasher-k6crypto
 * @public
 */
export abstract class Hasher {
           protected __brand: never;

           /**
            * Add more data to the string we want to create a hash of.
            * @param input - Data to add.
            */
           update(input: string): void;

           /**
            * Return a digest from the data added so far.
            * @param outputEncoding - Output encoding.
            * @returns Digest of data added so far.
            */
           digest<OE extends OutputEncoding>(outputEncoding: OE): Output<OE>;
       }
