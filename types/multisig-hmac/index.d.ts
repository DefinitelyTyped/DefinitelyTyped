/// <reference types="node" />

export = MultisigHMAC;

/**
 * Multisig scheme for HMAC authentication.
 *
 * Key management can happen in either of two modes, either by storing every of the
 * component keys, or by storing a single master seed and using that to derive keys
 * ad hoc.
 *
 * @example
 * // Using stored keys
 *
 * import MultisigHMAC = require('multisig-hmac')
 *
 * const multisigHmac = new MultisigHMAC()
 *
 * // generate keys, which need to be stored securely
 * // and need to be shared securely with each party
 * const k1 = multisigHmac.keygen(1)
 * const k2 = multisigHmac.keygen(2)
 * const k3 = multisigHmac.keygen(3)
 *
 * // Sign by each client with 2-of-3
 * const data = Buffer.from('Hello world')
 *
 * // Notice no mention of nonce here. The data can follow whatever format you
 * // desire, but should include a nonce
 * const s1 = multisigHmac.sign(k1, data)
 * const s3 = multisigHmac.sign(k3, data)
 *
 * const signature = multisigHmac.combine([s1, s3])
 *
 * // Verify on the server
 * const threshold = 2
 * const keys = [k1, k2, k3]
 * const verified = multisigHmac.verify(keys, signature, data, threshold)
 * console.log(verified)
 *
 * @example
 * // Using a derived master key
 *
 * import MultisigHMAC = require('multisig-hmac')
 *
 * const multisigHmac = new MultisigHMAC()
 *
 * // Generate a master seed, which needs to be stored securely
 * // This seed must NOT be shared with any other party
 * const seed = multisigHmac.seedgen()
 *
 * const k1 = multisigHmac.deriveKey(seed, 1)
 * const k2 = multisigHmac.deriveKey(seed, 2)
 * const k3 = multisigHmac.deriveKey(seed, 3)
 *
 * // Sign by each client with 2-of-3
 * const data = Buffer.from('Hello world')
 *
 * // Notice no mention of nonce here. The data can follow whatever format you
 * // desire, but should include a nonce
 * const s1 = multisigHmac.sign(k1, data)
 * const s3 = multisigHmac.sign(k3, data)
 *
 * const signature = multisigHmac.combine([s1, s3])
 *
 * // Verify on the server, but now keys are dynamically derived
 * const threshold = 2
 * const verified = multisigHmac.verifyDerived(seed, signature, data, threshold)
 * console.log(verified)
 */
declare class MultisigHMAC {
    /**
     * Determines the number of keys (ie. high bits) in `bitfield`.
     *
     * @param bitfield Must be a `uint32`.
     * @example
     * import { strict as assert } from 'assert'
     * import MultisigHMAC = require('miltisig-hmac')
     *
     * assert.equal(MultisigHMAC.keysCount(0b101), 2)
     */
    static keysCount(bitfield: number): number;

    /**
     * Determines the indexes of the keys (ie. high bits) in `bitfield` as an array.
     *
     * @param bitfield Must be a `uint32`.
     * @example
     * import { strict as assert } from 'assert'
     * import MultisigHMAC = require('miltisig-hmac')
     *
     * assert.equal(MultisigHMAC.keyIndexes(0b101), [0, 2])
     */
    static keyIndexes(bitfield: number): number[];

    /** Default signature length in bytes */
    static readonly BYTES: typeof MultisigHMAC.SHA256_BYTES;
    /** Default key length in bytes */
    static readonly KEYBYTES: typeof MultisigHMAC.SHA256_KEYBYTES;
    /** Default algorithm (`'sha256'`) */
    static readonly PRIMITIVE: typeof MultisigHMAC.SHA256_PRIMITIVE;

    /** `'sha256'` signature length in bytes */
    static readonly SHA256_BYTES: 32;
    /** `'sha256'` key length in bytes */
    static readonly SHA256_KEYBYTES: 64;
    /** `'sha256'` algorithm name */
    static readonly SHA256_PRIMITIVE: "sha256";
    /** `'sha384'` signature length in bytes */
    static readonly SHA384_BYTES: 48;
    /** `'sha384'` key length in bytes */
    static readonly SHA384_KEYBYTES: 128;
    /** `'sha384'` algorithm name */
    static readonly SHA384_PRIMITIVE: "sha384";
    /** `'sha512'` signature length in bytes */
    static readonly SHA512_BYTES: 64;
    /** `'sha512'` key length in bytes */
    static readonly SHA512_KEYBYTES: 128;
    /** `'sha512'` algorithm name */
    static readonly SHA512_PRIMITIVE: "sha512";
    /** `'sha512_256'` signature length in bytes */
    static readonly SHA512_256_BYTES: 32;
    /** `'sha512_256'` key length in bytes */
    static readonly SHA512_256_KEYBYTES: 128;
    /** `'sha512_256'` algorithm name (also knowns as SHA512/256) */
    static readonly SHA512_256_PRIMITIVE: "sha512_256";

    /**
     * Create a new instance of `MultisigHMAC`, which can be used as a global singleton.
     * Just sets the algorithm to be used for subsequent methods and associated constants.
     */
    constructor(
        /** @default 'sha256' */
        algorithm?: "sha256" | "sha384" | "sha512" | "sha512_256",
    );

    /**
     * Generate a new cryptographically random key.
     *
     * @param index The index of the key to generate. *Note*: `index` should be counted from `0`.
     * @param buffer Pass a `Buffer` of length `KEYBYTES` that the key will be written to. This `Buffer`
     * will the be returned instead of a new one.
     */
    keygen(index: number, buffer?: Buffer): MultisigHMAC.Key;

    /**
     * Generate a new cryptographically random master seed. Optionally
     *
     * @param buffer Pass a `Buffer` of length `KEYBYTES` that the seed will be written to. This `Buffer`
     * will the be returned instead of a new one.
     */
    seedgen(buffer?: Buffer): Buffer;

    /**
     * Derive a new sub key from a master seed.
     *
     * Keys are derived using a KDF based on HMAC:
     *
     * ```
     *  b[0...BYTES] = HMAC(Key = masterSeed, data = 'derive' || U32LE(index) || 0x00)
     *  b[BYTES...] = HMAC(Key = masterSeed, b[0...BYTES] || 0x01)
     * ```
     *
     * @param masterSeed A random master seed.
     * @param index Must be a `uint32`, but in practice you want to keep a much lower number, as the
     * bitfield used with the signature has as many bits as the largest index. A simple counter suffices.
     * *Note*: `index` should be counted from `0`.
     * @param buffer Pass a `Buffer` of length `KEYBYTES` that the key will be written to. This `Buffer`
     * will the be returned instead of a new one.
     */
    deriveKey(masterSeed: Buffer, index: number, buffer?: Buffer): MultisigHMAC.Key;

    /**
     * Independently sign data with a key.
     *
     * @param key The key to use for signing.
     * @param data The data to sign.
     * @param buffer Use provided `Buffer` to store the signature. Must be at least `BYTES` long.
     * @return A `Signature` object. Can be passed to `combine()`.
     */
    sign(key: MultisigHMAC.Key, data: string | Buffer, buffer?: Buffer): MultisigHMAC.Signature;

    /**
     * Combine a list of signatures, which have all been signed independently. Only include each signature
     * once or they will cancel out. Signatures can be combined in any order and over several passes for
     * more advanced aggregation schemes.
     *
     * @param signatures The signatures to combine.
     * @param buffer Will store the aggregate signature. Must be at least `BYTES` long.
     */
    combine(signatures: readonly MultisigHMAC.Signature[], buffer?: Buffer): MultisigHMAC.Signature;

    /**
     * Verify a `signature` of `data` against a list of `keys`, over a given `threshold`.
     *
     * @param keys A list of keys required by `signature.bitfield`.
     * @param signature The signature to verify.
     * @param data The data for the `signature`.
     * @param threshold The minimum number of keys required to pass the verification.
     * @param sigScratchBuffer Will be used for intermediate signature verification.
     * Must be at least `BYTES` long.
     * @return Whether `signature` could be verified.
     */
    verify(
        keys: readonly MultisigHMAC.Key[],
        signature: MultisigHMAC.Signature,
        data: string | Buffer,
        threshold: number,
        sigScratchBuffer?: Buffer,
    ): boolean;

    /**
     * Verify a `signature` of `data` against dynamically derived keys from `masterSeed`, over a given `threshold`.
     *
     * @param masterSeed The master seed. Must be at least `KEYBYTES` long. `signature.bitfield` defines
     * which keys must be derived and verified.
     * @param signature The signature to verify.
     * @param data The data for the `signature`.
     * @param threshold The minimum number of keys required to pass the verification.
     * @param keyScratchBuffer Will be used to derive intermediate keys into. Must be `KEYBYTES` long.
     * @param sigScratchBuffer Will be used for intermediate signature verification. Must be `BYTES` long.
     * @return Whether `signature` could be verified.
     */
    verifyDerived(
        masterSeed: Buffer,
        signature: MultisigHMAC.Signature,
        data: string | Buffer,
        threshold: number,
        keyScratchBuffer?: Buffer,
        sigScratchBuffer?: Buffer,
    ): boolean;
}

declare namespace MultisigHMAC {
    interface Key {
        index: number;
        key: Buffer;
    }

    interface Signature {
        bitfield: number;
        signature: Buffer;
    }
}
