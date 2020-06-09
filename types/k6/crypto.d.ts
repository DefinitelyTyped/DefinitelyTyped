import { bytes } from '.';

/**
 * Generate random bytes.
 * @param size - Number of bytes to generate.
 * @returns Random bytes.
 */
export function randomBytes(size: number): bytes;

/**
 * Produce HMAC.
 * https://k6.io/docs/javascript-api/k6-crypto/hmac-algorithm-secret-data-outputencoding
 * @param algorithm - Hash algorithm.
 * @param secret - Shared secret.
 * @param data - Input data.
 * @param outputEncoding - Output encoding.
 * @returns Produced HMAC.
 */
export function hmac<OE extends OutputEncoding>(
    algorithm: Algorithm,
    secret: string,
    data: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with MD4.
 * https://k6.io/docs/javascript-api/k6-crypto/md4-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns MD4 digest.
 */
export function md4<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with MD5.
 * https://k6.io/docs/javascript-api/k6-crypto/md5-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns MD5 digest.
 */
export function md5<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-1.
 * https://k6.io/docs/javascript-api/k6-crypto/sha1-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-1 digest.
 */
export function sha1<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-256.
 * https://k6.io/docs/javascript-api/k6-crypto/sha256-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-256 digest.
 */
export function sha256<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-384.
 * https://k6.io/docs/javascript-api/k6-crypto/sha384-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-384 digest.
 */
export function sha384<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-512.
 * https://k6.io/docs/javascript-api/k6-crypto/sha512-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-512 digest.
 */
export function sha512<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-512/224.
 * https://k6.io/docs/javascript-api/k6-crypto/sha512_224-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-512/224 digest.
 */
export function sha512_224<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with SHA-512/256.
 * https://k6.io/docs/javascript-api/k6-crypto/sha512_256-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns SHA-512/256 digest.
 */
export function sha512_256<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Hash with RIPEMD-160.
 * https://k6.io/docs/javascript-api/k6-crypto/ripemd160-input-outputencoding
 * @param input - Data to hash.
 * @param outputEncoding - Output encoding.
 * @returns RIPEMD-160 digest.
 */
export function ripemd160<OE extends OutputEncoding>(
    input: string,
    outputEncoding: OE
): Output<OE>;

/**
 * Create a hashing object.
 * https://k6.io/docs/javascript-api/k6-crypto/createhash-algorithm
 * @param algorithm - Hash algorithm.
 * @returns Hashing object.
 */
export function createHash(algorithm: Algorithm): Hasher;

/**
 * Create an HMAC hashing object.
 * https://k6.io/docs/javascript-api/k6-crypto/createhmac-algorithm-secret
 * @param algorithm - Hash algorithm.
 * @param secret - Shared secret.
 * @returns HMAC hashing object.
 */
export function createHMAC(algorithm: Algorithm, secret: string): Hasher;

/**
 * Hash algorithm.
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
 */
export type StringEncoding = 'hex' | 'base64' | 'base64url' | 'base64rawurl';

/**
 * Binary output encoding.
 */
export type BinaryEncoding = 'binary';

/**
 * Output encoding.
 */
export type OutputEncoding = StringEncoding | BinaryEncoding;

/**
 * Output type. Varies with output encoding.
 * @typeParam OE - Output encoding.
 */
export type Output<OE extends OutputEncoding> = OE extends StringEncoding
    ? string
    : OE extends BinaryEncoding
    ? bytes
    : never;

/**
 * Hashing object.
 * https://docs.k6.io/docs/hasher-k6crypto
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

/**
 * This module provides common hashing functionality available in the GoLang crypto package.
 * https://k6.io/docs/javascript-api/k6-crypto
 */
declare namespace crypto {
    /**
     * Produce HMAC.
     * https://k6.io/docs/javascript-api/k6-crypto/hmac-algorithm-secret-data-outputencoding
     * @param algorithm - Hash algorithm.
     * @param secret - Shared secret.
     * @param data - Input data.
     * @param outputEncoding - Output encoding.
     * @returns Produced HMAC.
     */
    function hmac<OE extends OutputEncoding>(
        algorithm: Algorithm,
        secret: string,
        data: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with MD4.
     * https://k6.io/docs/javascript-api/k6-crypto/md4-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns MD4 digest.
     */
    function md4<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with MD5.
     * https://k6.io/docs/javascript-api/k6-crypto/md5-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns MD5 digest.
     */
    function md5<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with SHA-1.
     * https://k6.io/docs/javascript-api/k6-crypto/sha1-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns SHA-1 digest.
     */
    function sha1<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with SHA-256.
     * https://k6.io/docs/javascript-api/k6-crypto/sha256-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns SHA-256 digest.
     */
    function sha256<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with SHA-384.
     * https://k6.io/docs/javascript-api/k6-crypto/sha384-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns SHA-384 digest.
     */
    function sha384<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with SHA-512.
     * https://k6.io/docs/javascript-api/k6-crypto/sha512-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns SHA-512 digest.
     */
    function sha512<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with SHA-512/224.
     * https://k6.io/docs/javascript-api/k6-crypto/sha512_224-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns SHA-512/224 digest.
     */
    function sha512_224<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with SHA-512/256.
     * https://k6.io/docs/javascript-api/k6-crypto/sha512_256-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns SHA-512/256 digest.
     */
    function sha512_256<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Hash with RIPEMD-160.
     * https://k6.io/docs/javascript-api/k6-crypto/ripemd160-input-outputencoding
     * @param input - Data to hash.
     * @param outputEncoding - Output encoding.
     * @returns RIPEMD-160 digest.
     */
    function ripemd160<OE extends OutputEncoding>(
        input: string,
        outputEncoding: OE
    ): Output<OE>;

    /**
     * Create a hashing object.
     * https://k6.io/docs/javascript-api/k6-crypto/createhash-algorithm
     * @param algorithm - Hash algorithm.
     * @returns Hashing object.
     */
    function createHash(algorithm: Algorithm): Hasher;

    /**
     * Create an HMAC hashing object.
     * https://k6.io/docs/javascript-api/k6-crypto/createhmac-algorithm-secret
     * @param algorithm - Hash algorithm.
     * @param secret - Shared secret.
     * @returns HMAC hashing object.
     */
    function createHMAC(algorithm: Algorithm, secret: string): Hasher;
}

export default crypto;
