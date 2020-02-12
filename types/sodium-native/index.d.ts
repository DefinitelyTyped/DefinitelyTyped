// Type definitions for sodium-native 2.3
// Project: https://github.com/sodium-friends/sodium-native
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface CryptoGenericHashWrap {
    /**
     * Update the instance with a new piece of data.
     *
     * * `input` should be a buffer of any size.
     */
    update(input: Buffer): void;

    /**
     * Finalize the instance.
     *
     * * `output` should be a buffer as above with the same length you gave when creating the instance.
     *
     * The generated hash is stored in `output`.
     */
    final(output: Buffer): void;
}

export interface CryptoStreamChacha20XorWrap {
    /**
     * Encrypt the next message
     */
    update(ciphertext: Buffer, message: Buffer): void;

    /**
     * Finalize the stream. Zeros out internal state.
     */
    final(): void;
}

export interface Xchacha20poly1305State {
    _pad: Buffer;
    nonce: Buffer;
    k: Buffer;
}

export interface CryptoOneTimeAuthWrap {
    /**
     * Update the instance with a new piece of data.
     *
     * * `input` should be a buffer of any size.
     */
    update(input: Buffer): void;

    /**
     * Finalize the instance.
     *
     * * `output` should be a buffer of length `crypto_onetimeauth_BYTES`.
     *
     * The generated hash is stored in `output`.
     */
    final(output: Buffer): void;
}

export interface CryptoHashSha256Wrap {
    /**
     * Update the instance with a new piece of data.
     *
     * * `input` should be a buffer of any size.
     */
    update(input: Buffer): void;

    /**
     * Finalize the instance.
     *
     * * `output` should be a buffer of length `crypto_hash_sha256_BYTES`.
     *
     * The generated hash is stored in `output`.
     */
    final(output: Buffer): void;
}

export const crypto_aead_xchacha20poly1305_ietf_ABYTES: number;
export const crypto_aead_xchacha20poly1305_ietf_KEYBYTES: number;
/** Note this is `Number.MAX_SAFE_INTEGER` for now */
export const crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX: number;
export const crypto_aead_xchacha20poly1305_ietf_NPUBBYTES: number;
export const crypto_aead_xchacha20poly1305_ietf_NSECBYTES: number;
export const crypto_core_ed25519_BYTES: number;
export const crypto_core_ed25519_NONREDUCEDSCALARBYTES: number;
export const crypto_core_ed25519_SCALARBYTES: number;
export const crypto_core_ed25519_UNIFORMBYTES: number;
export const crypto_secretstream_xchacha20poly1305_ABYTES: number;
export const crypto_secretstream_xchacha20poly1305_HEADERBYTES: number;
export const crypto_generichash_BYTES_MAX: number;
export const crypto_generichash_BYTES_MIN: number;
export const crypto_generichash_BYTES: number;
export const crypto_generichash_KEYBYTES_MAX: number;
export const crypto_generichash_KEYBYTES_MIN: number;
export const crypto_generichash_KEYBYTES: number;
export const crypto_pwhash_ALG_ARGON2I13: number;
export const crypto_pwhash_ALG_ARGON2ID13: number;
export const crypto_pwhash_ALG_DEFAULT: number;
export const crypto_pwhash_MEMLIMIT_INTERACTIVE: number;
export const crypto_pwhash_MEMLIMIT_MODERATE: number;
export const crypto_pwhash_MEMLIMIT_SENSITIVE: number;
export const crypto_pwhash_OPSLIMIT_INTERACTIVE: number;
export const crypto_pwhash_OPSLIMIT_MODERATE: number;
export const crypto_pwhash_OPSLIMIT_SENSITIVE: number;
export const crypto_scalarmult_ed25519_BYTES: number;
export const crypto_secretstream_xchacha20poly1305_KEYBYTES: number;
export const crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_scalarmult_ed25519_SCALARBYTES: number;
export const crypto_secretstream_xchacha20poly1305_TAG_FINAL: number;
export const crypto_secretstream_xchacha20poly1305_TAG_MESSAGE: number;
export const crypto_secretstream_xchacha20poly1305_TAG_PUSH: number;
export const crypto_secretstream_xchacha20poly1305_TAG_REKEY: number;
/** NOTE: Unofficial constant */
export const crypto_secretstream_xchacha20poly1305_TAGBYTES: number;
export const crypto_box_SEALBYTES: number;
export const crypto_box_PUBLICKEYBYTES: number;
export const crypto_box_SECRETKEYBYTES: number;
export const crypto_box_MACBYTES: number;
export const crypto_box_NONCEBYTES: number;

/**
 * Zero out the data in `buffer`.
 */
export function sodium_memzero(buffer: Buffer): void;

/**
 * Lock the memory contained in `buffer`.
 */
export function sodium_mlock(buffer: Buffer): void;

/**
 * Unlock previously `sodium_mlock`ed memory contained in `buffer`. This will also `sodium_memzero` `buffer`.
 */
export function sodium_munlock(buffer: Buffer): void;

/**
 * Allocate a buffer of `size` which is memory protected. See [libsodium docs](https://download.libsodium.org/doc/memory_management#guarded-heap-allocations) for details. Be aware that many Buffer
 * methods may break the security guarantees of `sodium.sodium_malloc`'ed memory. To check if a `Buffer` is a "secure" buffer, you can call access the getter `buffer.secure` which will be `true`.
 */
export function sodium_malloc(size: number): Buffer;

/**
 * Make `buffer` allocated using `sodium.sodium_malloc` inaccessible, crashing the process if any access is attempted.
 * Note that this will have no effect for normal `Buffer`s.
 */
export function sodium_mprotect_noaccess(buffer: Buffer): void;

/**
 * Make `buffer` allocated using `sodium.sodium_malloc` read-only, crashing the process if any writing is attempted.
 * Note that this will have no effect for normal `Buffer`s.
 */
export function sodium_mprotect_readonly(buffer: Buffer): void;

/**
 * Make `buffer` allocated using `sodium.sodium_malloc` read-write, undoing `sodium_mprotect_noaccess` or `sodium_mprotect_readonly`.
 * Note that this will have no effect for normal `Buffer`s.
 */
export function sodium_mprotect_readwrite(buffer: Buffer): void;

/**
 * Generate a random 32-bit unsigned integer `[0, 0xffffffff]` (both inclusive)
 */
export function randombytes_random(): number;

/**
 * Generate a random 32-bit unsigned integer `[0, upper_bound)` (last exclusive).
 * `upper_bound` must be `0xffffffff` at most.
 */
export function randombytes_uniform(upper_bound: number): number;

/**
 * Fill `buffer` with random data.
 */
export function randombytes_buf(buffer: Buffer): void;

/**
 * Fill `buffer` with random data, generated from `seed`.
 * `seed` must be a Buffer of at least `sodium.randombytes_SEEDBYTES` length
 */
export function randombytes_buf_deterministic(buffer: Buffer, seed: Buffer): void;

/**
 * Compare `b1` with `b2`, in **constant-time** for `b1.length`.
 *
 * * `b1` must be `Buffer`
 * * `b2` must be `Buffer` and must be `b1.length` bytes
 *
 * Returns `true` when equal, otherwise `false`.
 */
export function sodium_memcmp(b1: Buffer, b2: Buffer): boolean;

/**
 * Compare `b1` with `b2`, regarding either as little-endian encoded number.
 *
 * * `b1` must be `Buffer`
 * * `b2` must be `Buffer` and must be `b1.length` bytes
 *
 * Returns `1`, `0` or `-1` on whether `b1` is greater, equal or less than `b2`.
 * This is the same scheme as `Array.prototype.sort` expect.
 */
export function sodium_compare(b1: Buffer, b2: Buffer): 1 | 0 | -1;

/**
 * Adds `b` to `a` (wrapping), regarding either as little-endian encoded number,
 * and writing the result into `a`.
 *
 * * `a` must be `Buffer`
 * * `b` must be `Buffer` and must be `a.length` bytes
 */
export function sodium_add(a: Buffer, b: Buffer): void;

/**
 * Subtracts `b` from `a` (wrapping), regarding either as little-endian encoded
 * number, and writing the result into `a`.
 *
 * * `a` must be `Buffer`
 * * `b` must be `Buffer` and must be `a.length` bytes
 */
export function sodium_sub(a: Buffer, b: Buffer): void;

/**
 * Increment `buf` as a little-endian number. This operation is **constant-time**
 * for the length of `buf`.
 *
 * * `buf` must be `Buffer`
 */
export function sodium_increment(buf: Buffer): void;

/**
 * Test whether `buf` is all zero for `len` bytes. This operation is
 * **constant-time** for `len`.
 *
 * * `len` must be integer at most the length of `buf`
 *
 * Returns `true` if all `len` bytes are zero, otherwise `false`.
 */
export function sodium_is_zero(buf: Buffer, len: number): boolean;

/**
 * Pad `buf` with random data from index `unpaddedLength` up to closest multiple of
 * `blocksize`.
 *
 * * `buf` must be `Buffer`
 * * `unpadded_buflen` must be integer at most `buf.length`
 * * `blocksize` must be integer greater than 1 but at most `buf.length`
 *
 * Returns the length of the padded data (so you may `.slice` the buffer to here).
 */
export function sodium_pad(buf: Buffer, unpaddedLength: number, blocksize: number): number;

/**
 * Calculate `unpaddedLength` from a padded `buf` with `blocksize`
 *
 * * `buf` must be `Buffer`
 * * `padded_buflen` must be integer at most `buf.length`
 * * `blocksize` must be integer greater than 1 but at most `buf.length`
 *
 * Returns the length of the unpadded data (so you may `.slice` the buffer to here).
 */
export function sodium_unpad(buf: Buffer, paddedLength: number, blocksize: number): number;

/**
 * Create a new keypair based on a seed.
 *
 * * `publicKey` should be a buffer with length `crypto_sign_PUBLICKEYBYTES`.
 * * `secretKey` should be a buffer with length `crypto_sign_SECRETKEYBYTES`.
 * * `seed` should be a buffer with length `crypto_sign_SEEDBYTES`.
 *
 * The generated public and secret key will be stored in passed in buffers.
 */
export function crypto_sign_seed_keypair(publicKey: Buffer, secretKey: Buffer, seed: Buffer): void;

/**
 * Create a new keypair.
 *
 * * `publicKey` should be a buffer with length `crypto_sign_PUBLICKEYBYTES`.
 * * `secretKey` should be a buffer with length `crypto_sign_SECRETKEYBYTES`.
 *
 * The generated public and secret key will be stored in passed in buffers.
 */
export function crypto_sign_keypair(publicKey: Buffer, secretKey: Buffer): void;

/**
 * Sign a message.
 *
 * * `signedMessage` should be a buffer with length `crypto_sign_BYTES + message.length`.
 * * `message` should be a buffer of any length.
 * * `secretKey` should be a secret key.
 *
 * The generated signed message will be stored in `signedMessage`.
 */
export function crypto_sign(signedMessage: Buffer, message: Buffer, secretKey: Buffer): void;

/**
 * Verify and open a message.
 *
 * * `message` should be a buffer with length `signedMessage.length - crypto_sign_BYTES`.
 * * `signedMessage` at least `crypto_sign_BYTES` length.
 * * `publicKey` should be a public key.
 *
 * Will return `true` if the message could be verified. Otherwise `false`.
 * If verified the originally signed message is stored in the `message` buffer.
 */
export function crypto_sign_open(message: Buffer, signedMessage: Buffer, publicKey: Buffer): boolean;

/**
 * Same as `crypto_sign` except it only stores the signature.
 *
 * * `signature` should be a buffer with length `crypto_sign_BYTES`.
 * * `message` should be a buffer of any length.
 * * `secretKey` should be a secret key.
 *
 * The generated signature is stored in `signature`.
 */
export function crypto_sign_detached(signature: Buffer, message: Buffer, secretKey: Buffer): void;

/**
 * Verify a signature.
 *
 * * `signature` should be a buffer with length `crypto_sign_BYTES`.
 * * `message` should be a buffer of any length.
 * * `publicKey` should be a public key.
 *
 * Will return `true` if the message could be verified. Otherwise `false`.
 */
export function crypto_sign_verify_detached(signature: Buffer, message: Buffer, publicKey: Buffer): boolean;

/**
 * Convert an ed25519 public key to curve25519 (which can be used with `box` and `scalarmult`)
 *
 * * `curve_pk` should be a buffer with length `crypto_box_PUBLICKEYBYTES`
 * * `ed_pk` should be a buffer with length `crypto_sign_PUBLICKEYBYTES`
 */
export function crypto_sign_ed25519_pk_to_curve25519(curve_pk: Buffer, ed_pk: Buffer): void;

/**
 * Convert an ed25519 secret key to curve25519 (which can be used with `box` and `scalarmult`)
 *
 * * `curve_sk` should be a buffer with length `crypto_box_SECRETKEYBYTES`
 * * `ed_sk` should be a buffer with length `crypto_sign_SECRETKEYBYTES`
 */
export function crypto_sign_ed25519_sk_to_curve25519(curve_sk: Buffer, ed_sk: Buffer): void;

/**
 * Extract an ed25519 public key from an ed25519 secret key
 *
 * * `pk` must be `Buffer` of at least `crypto_sign_PUBLICKEYBYTES` bytes
 * * `sk` must be `Buffer` of at least `crypto_sign_SECRETKEYBYTES` bytes
 */
export function crypto_sign_ed25519_sk_to_pk(pk: Buffer, sk: Buffer): void;

/**
 * Hash a value with an optional key using the generichash method.
 *
 * * `output` should be a buffer with length within `crypto_generichash_BYTES_MIN` - `crypto_generichash_BYTES_MAX`.
 * * `input` should be a buffer of any length.
 * * `key` is an optional buffer of length within `crypto_generichash_KEYBYTES_MIN` - `crypto_generichash_KEYBYTES_MAX`.
 *
 * The generated hash is stored in `output`.
 *
 * Also exposes `crypto_generichash_BYTES` and `crypto_generichash_KEYBYTES` that can be used as "default" buffer sizes.
 */
export function crypto_generichash(output: Buffer, input: Buffer, key?: Buffer): void;

/**
 * Same as `crypto_generichash` except this hashes an array of buffers instead of a single one.
 */
export function crypto_generichash_batch(output: Buffer, inputArray: Buffer[], key?: Buffer): void;

/**
 * Create a generichash instance that can hash a stream of input buffers.
 *
 * * `key` is an optional buffer as above.
 * * `outputLength` the buffer size of your output.
 */
export function crypto_generichash_instance(key?: Buffer, outputLength?: number): CryptoGenericHashWrap;

/**
 * Create a new keypair based on a seed.
 *
 * * `publicKey` should be a buffer with length `crypto_box_PUBLICKEYBYTES`.
 * * `secretKey` should be a buffer with length `crypto_box_SECRETKEYBYTES`.
 * * `seed` should be a buffer with length `crypto_box_SEEDBYTES`.
 *
 * The generated public and secret key will be stored in passed in buffers.
 */
export function crypto_box_seed_keypair(publicKey: Buffer, secretKey: Buffer, seed: Buffer): void;

/**
 * Create a new keypair.
 *
 * * `publicKey` should be a buffer with length `crypto_box_PUBLICKEYBYTES`.
 * * `secretKey` should be a buffer with length `crypto_box_SECRETKEYBYTES`.
 *
 * The generated public and secret key will be stored in passed in buffers.
 */
export function crypto_box_keypair(publicKey: Buffer, secretKey: Buffer): void;

/**
 * Encrypt a message.
 *
 * * `ciphertext` should be a buffer with length `message.length`.
 * * `mac` should be a buffer with length `crypto_box_MACBYTES`.
 * * `message` should be a buffer of any length.
 * * `nonce` should be a buffer with length `crypto_box_NONCEBYTES`.
 * * `publicKey` should be a public key.
 * * `secretKey` should be a secret key.
 *
 * The encrypted message will be stored in `ciphertext` and the authentification code will be stored in `mac`.
 */
export function crypto_box_detached(
    ciphertext: Buffer,
    mac: Buffer,
    message: Buffer,
    nonce: Buffer,
    publicKey: Buffer,
    secretKey: Buffer,
): void;

/**
 * Same as `crypto_box_detached` except it encodes the mac in the message.
 *
 * * `ciphertext` should be a buffer with length `message.length + crypto_box_MACBYTES`.
 * * `message` should be a buffer of any length.
 * * `nonce` should be a buffer with length `crypto_box_NONCEBYTES`.
 * * `publicKey` should be a public key.
 * * `secretKey` should be a secret key.
 *
 * The encrypted message and authentification code  will be stored in `ciphertext`.
 */
export function crypto_box_easy(
    ciphertext: Buffer,
    message: Buffer,
    nonce: Buffer,
    publicKey: Buffer,
    secretKey: Buffer,
): void;

/**
 * Decrypt a message.
 *
 * * `message` should be a buffer with length `ciphertext.length`.
 * * `mac` should be a buffer with length `crypto_box_MACBYTES`.
 * * `ciphertext` should be a buffer of any length.
 * * `nonce` should be a buffer with length `crypto_box_NONCEBYTES`.
 * * `publicKey` should be a public key.
 * * `secretKey` should be a secret key.
 *
 * Returns `true` if the message could be decrypted. Otherwise `false`.
 *
 * The decrypted message will be stored in `message`.
 */
export function crypto_box_open_detached(
    message: Buffer,
    ciphertext: Buffer,
    mac: Buffer,
    nonce: Buffer,
    publicKey: Buffer,
    secretKey: Buffer,
): boolean;

/**
 * Decrypt a message encoded with the easy method.
 *
 * * `message` should be a buffer with length `ciphertext.length - crypto_box_MACBYTES`.
 * * `ciphertext` should be a buffer with length at least `crypto_box_MACBYTES`.
 * * `nonce` should be a buffer with length `crypto_box_NONCEBYTES`.
 * * `publicKey` should be a public key.
 * * `secretKey` should be a secret key.
 *
 * Returns `true` if the message could be decrypted. Otherwise `false`.
 *
 * The decrypted message will be stored in `message`.
 */
export function crypto_box_open_easy(
    message: Buffer,
    ciphertext: Buffer,
    nonce: Buffer,
    publicKey: Buffer,
    secretKey: Buffer,
): boolean;

/**
 * Encrypt a message in a sealed box using a throwaway keypair.
 * The ciphertext cannot be associated with the sender due to the sender's key
 * being a single use keypair that is overwritten during encryption.
 *
 * * `ciphertext` should be a buffer with length at least `message.length + crypto_box_SEALBYTES`.
 * * `message` should be a buffer with any length.
 * * `publicKey` should be the receipent's public key.
 */
export function crypto_box_seal(ciphertext: Buffer, message: Buffer, publicKey: Buffer): void;

/**
 * Decrypt a message encoded with the sealed box method.
 *
 * * `message` should be a buffer with length at least  `ciphertext.length - crypto_box_SEALBYTES`.
 * * `ciphertext` should be a buffer with length at least `crypto_box_SEALBYTES`.
 * * `publicKey` should be the receipient's public key.
 * * `secretKey` should be the receipient's secret key.
 *
 * Note: the keypair of the recipient is required here, both public and secret key.
 * This is because during encryption the recipient's public key is used to generate
 * the nonce. The throwaway public key generated by the sender is stored in the first
 * `crypto_box_PUBLICKEYBYTE`'s of the ciphertext.
 */
export function crypto_box_seal_open(message: Buffer, ciphertext: Buffer, publicKey: Buffer, secretKey: Buffer): void;

/**
 * Encrypt a message.
 *
 * * `ciphertext` should be a buffer with length `message.length`.
 * * `mac` should be a buffer with length `crypto_secretbox_MACBYTES`.
 * * `message` should be a buffer of any length.
 * * `nonce` should be a buffer with length `crypto_secretbox_NONCEBYTES`.
 * * `secretKey` should be a secret key with legnth `crypto_secretbox_KEYBYTES`.
 *
 * The encrypted message will be stored in `ciphertext` and the authentification code will be stored in `mac`.
 */
export function crypto_secretbox_detached(
    ciphertext: Buffer,
    mac: Buffer,
    message: Buffer,
    nonce: Buffer,
    secretKey: Buffer,
): void;

/**
 * Same as `crypto_secretbox_detached` except it encodes the mac in the message.
 *
 * * `ciphertext` should be a buffer with length `message.length + crypto_secretbox_MACBYTES`.
 * * `message` should be a buffer of any length.
 * * `nonce` should be a buffer with length `crypto_secretbox_NONCEBYTES`.
 * * `secretKey` should be a secret key with length `crypto_secretbox_KEYBYTES`.
 */
export function crypto_secretbox_easy(ciphertext: Buffer, message: Buffer, nonce: Buffer, secretKey: Buffer): void;

/**
 * Decrypt a message.
 *
 * * `message` should be a buffer with length `ciphertext.length`.
 * * `mac` should be a buffer with length `crypto_secretbox_MACBYTES`.
 * * `ciphertext` should be a buffer of any length.
 * * `nonce` should be a buffer with length `crypto_secretbox_NONCEBYTES`.
 * * `secretKey` should be a secret key.
 *
 * Returns `true` if the message could be decrypted. Otherwise `false`.
 *
 * The decrypted message will be stored in `message`.
 */
export function crypto_secretbox_open_detached(
    message: Buffer,
    ciphertext: Buffer,
    mac: Buffer,
    nonce: Buffer,
    secretKey: Buffer,
): boolean;

/**
 * Decrypt a message encoded with the easy method.
 *
 * * `message` should be a buffer with length `ciphertext.length - crypto_secretbox_MACBYTES`.
 * * `ciphertext` should be a buffer with length at least `crypto_secretbox_MACBYTES`.
 * * `nonce` should be a buffer with length `crypto_secretbox_NONCEBYTES`.
 * * `secretKey` should be a secret key.
 *
 * Returns `true` if the message could be decrypted. Otherwise `false`.
 *
 * The decrypted message will be stored in `message`.
 */
export function crypto_secretbox_open_easy(
    message: Buffer,
    ciphertext: Buffer,
    nonce: Buffer,
    secretKey: Buffer,
): boolean;

/**
 * Generate a new encryption key.
 *
 * * `key` should be a buffer of length `crypto_aead_xchacha20poly1305_ietf_KEYBYTES`.
 *
 * The generated key is stored in `key`.
 */
export function crypto_aead_xchacha20poly1305_ietf_keygen(key: Buffer): void;

/**
 * Encrypt a message with (`npub`, `key`) and optional additional data `ad`.
 *
 * * `ciphertext` should be a `Buffer` of size `message.length + crypto_aead_xchacha20poly1305_ietf_ABYTES`.
 * * `message` should be a `Buffer`.
 * * `ad` is optional and should be `null` or `Buffer`. Included in the computation
 *   of authentication tag appended to the message.
 * * `nullValue` is in the position of the unused `nsec` argument. This should always be `null`.
 * * `npub` should be `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_NPUBBYTES`.
 * * `key` should be a `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_KEYBYTES`.
 *
 * Returns how many bytes were written to `ciphertext`. Note that in-place
 * encryption is possible.
 */
export function crypto_aead_xchacha20poly1305_ietf_encrypt(
    ciphertext: Buffer,
    message: Buffer,
    ad: Buffer | null,
    nullValue: null,
    npub: Buffer,
    key: Buffer,
): void;

/**
 * Decrypt a message with (`npub`, `key`) and optional additional data `ad`.
 *
 * * `message` should be a `Buffer` of size
 *   `ciphertext.length - crypto_aead_xchacha20poly1305_ietf_ABYTES`.
 * * `nullValue` is in the position of the unused `nsec` argument. This should always be
 *   `null`.
 * * `ciphertext` should be a `Buffer`.
 * * `ad` is optional and should be `null` or `Buffer`. Included in the computation
 *   of authentication tag appended to the message.
 * * `npub` should be `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_NPUBBYTES`.
 * * `key` should be a `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_KEYBYTES`.
 *
 * Returns how many bytes were written to `message`. Note that in-place
 * encryption is possible.
 */
export function crypto_aead_xchacha20poly1305_ietf_decrypt(
    message: Buffer,
    nullValue: null,
    ciphertext: Buffer,
    ad: Buffer | null,
    npub: Buffer,
    key: Buffer,
): void;

/**
 * Encrypt a message with (`npub`, `key`) and optional additional data `ad`.
 *
 * * `ciphertext` should be a `Buffer` of size `message.length`.
 * * `mac` should be `Buffer` of size `crypto_aead_xchacha20poly1305_ietf_ABYTES`.
 * * `message` should be a `Buffer`.
 * * `ad` is optional and should be `null` or `Buffer`. Included in the computation
 *   of authentication tag appended to the message.
 * * `nullValue` is in the position of the unused `nsec` argument. This should always be `null`.
 * * `npub` should be `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_NPUBBYTES`.
 * * `key` should be a `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_KEYBYTES`.
 *
 * Returns how many bytes were written to `mac`. Note that in-place
 * encryption is possible.
 */
export function crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
    ciphertext: Buffer,
    mac: Buffer,
    message: Buffer,
    ad: Buffer | null,
    nullValue: null,
    npub: Buffer,
    key: Buffer,
): void;

/**
 * Decrypt a message with (`npub`, `key`) and optional additional data `ad`.
 *
 * * `message` should be a `Buffer` of size `ciphertext.length`.
 * * `nullValue` is in the position of the unused `nsec` argument. This should always be `null`.
 * * `ciphertext` should be a `Buffer`.
 * * `mac` should be `Buffer` of size `crypto_aead_xchacha20poly1305_ietf_ABYTES`.
 * * `ad` is optional and should be `null` or `Buffer`. Included in the computation
 *   of authentication tag appended to the message.
 * * `npub` should be `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_NPUBBYTES`.
 * * `key` should be a `Buffer` of length `crypto_aead_xchacha20poly1305_ietf_KEYBYTES`.
 *
 * Returns nothing, but will throw on in case the MAC cannot be authenticated. Note
 * that in-place encryption is possible.
 */
export function crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
    message: Buffer,
    nullValue: null,
    ciphertext: Buffer,
    mac: Buffer,
    ad: Buffer | null,
    npub: Buffer,
    key: Buffer,
): void;

/**
 * Generate random data based on a nonce and key into the ciphertext.
 *
 * * `ciphertext` should be a buffer of any size.
 * * `nonce` should be a buffer with length `crypto_stream_NONCEBYTES`.
 * * `key` should be a secret key with length `crypto_stream_KEYBYTES`.
 *
 * The generated data is stored in `ciphertext`.
 */
export function crypto_stream(ciphertext: Buffer, nonce: Buffer, key: Buffer): void;

/**
 * Encrypt, but *not* authenticate, a message based on a nonce and key
 *
 * * `ciphertext` should be a buffer with length `message.length`.
 * * `message` should be a buffer of any size.
 * * `nonce` should be a buffer with length `crypto_stream_NONCEBYTES`.
 * * `key` should be a secret key with length `crypto_stream_KEYBYTES`.
 *
 * The encrypted data is stored in `ciphertext`. To decrypt, swap `ciphertext` and `message`.
 * Also supports in-place encryption where you use the same buffer as `ciphertext` and `message`.
 *
 * Encryption defaults to XSalsa20, use `crypto_stream_chacha20_xor` if you want
 * to encrypt/decrypt with ChaCha20 instead.
 *
 */
export function crypto_stream_xor(ciphertext: Buffer, message: Buffer, nonce: Buffer, key: Buffer): void;

/**
 * Encrypt, but *not* authenticate, a message based on a nonce and key
 *
 * * `ciphertext` should be a buffer with length `message.length`.
 * * `message` should be a buffer of any size.
 * * `nonce` should be a buffer with length `crypto_stream_NONCEBYTES`.
 * * `key` should be a secret key with length `crypto_stream_KEYBYTES`.
 *
 * The encrypted data is stored in `ciphertext`. To decrypt, swap `ciphertext` and `message`.
 * Also supports in-place encryption where you use the same buffer as `ciphertext` and `message`.
 */
export function crypto_stream_chacha20_xor(ciphertext: Buffer, message: Buffer, nonce: Buffer, key: Buffer): void;

/**
 * A streaming instance to the `crypto_stream_xor` api. Pass a nonce and key in the constructor.
 *
 * Encryption defaults to XSalsa20, use `crypto_stream_chacha20_xor_instance` if
 * you want to encrypt/decrypt with ChaCha20 instead.
 */
export function crypto_stream_xor_instance(nonce: Buffer, key: Buffer): CryptoStreamChacha20XorWrap;

/**
 *
 * A streaming instance to the `crypto_stream_xor` api. Pass a nonce and key in the constructor.
 */
export function crypto_stream_chacha20_xor_instance(nonce: Buffer, key: Buffer): CryptoStreamChacha20XorWrap;

/**
 * Create an authentication token.
 *
 * * `output` should be a buffer of length `crypto_auth_BYTES`.
 * * `input` should be a buffer of any size.
 * * `key` should be a buffer of lenght `crypto_auth_KEYBYTES`.
 *
 * The generated token is stored in `output`.
 */
export function crypto_auth(output: Buffer, input: Buffer, key: Buffer): void;

/**
 * Verify a token.
 *
 * * `output` should be a buffer of length `crypto_auth_BYTES`.
 * * `input` should be a buffer of any size.
 * * `key` should be a buffer of lenght `crypto_auth_KEYBYTES`.
 *
 * Returns `true` if the token could be verified. Otherwise `false`.
 *
 */
export function crypto_auth_verify(output: Buffer, input: Buffer, key: Buffer): boolean;

/**
 * Generate a new encryption key.
 *
 * * `key` should be a buffer of length `crypto_secretstream_xchacha20poly1305_KEYBYTES`.
 *
 * The generated key is stored in `key`.
 * function crypto_secretstream_xchacha20poly1305_keygen(key)
 *
 * Create a new stream state. Returns an opaque object used in the next methods.
 */
export function crypto_secretstream_xchacha20poly1305_state_new(): Xchacha20poly1305State;

/**
 * Initialise `state` from the writer side with message `header` and
 * encryption key `key`. The header must be sent or stored with the stream.
 * The key must be exchanged securely with the receiving / reading side.
 *
 * * `state` should be an opaque state object.
 * * `header` should be a buffer of size `crypto_secretstream_xchacha20poly1305_HEADERBYTES`.
 * * `key` should be a buffer of length `crypto_secretstream_xchacha20poly1305_KEYBYTES`.
 */
export function crypto_secretstream_xchacha20poly1305_init_push(
    state: Xchacha20poly1305State,
    header: Buffer,
    key: Buffer,
): void;

/**
 * Encrypt a message with a certain tag and optional additional data `ad`.
 *
 * * `state` should be an opaque state object.
 * * `ciphertext` should be a buffer of size `message.length + crypto_secretstream_xchacha20poly1305_ABYTES`.
 * * `message` should be a buffer.
 * * `ad` is optional and should be `null` or `Buffer`. Included in the computation
 *   of authentication tag appended to the message.
 * * `tag` should be `Buffer` of length `crypto_secretstream_xchacha20poly1305_TAGBYTES`
 *
 * Note that `tag` should be one of the `crypto_secretstream_xchacha20poly1305_TAG_*` constants.
 * Returns number of encrypted bytes written to `ciphertext`.
 */
export function crypto_secretstream_xchacha20poly1305_push(
    state: Xchacha20poly1305State,
    ciphertext: Buffer,
    message: Buffer,
    ad: Buffer | null,
    tag: Buffer,
): void;

/**
 * Initialise `state` from the reader side with message `header` and
 * encryption key `key`. The header must be retrieved from somewhere.
 * The key must be exchanged securely with the sending / writing side.
 *
 * * `state` should be an opaque state object.
 * * `header` should be a buffer of size `crypto_secretstream_xchacha20poly1305_HEADERBYTES`.
 * * `key` should be a buffer of length `crypto_secretstream_xchacha20poly1305_KEYBYTES`.
 */
export function crypto_secretstream_xchacha20poly1305_init_pull(
    state: Xchacha20poly1305State,
    header: Buffer,
    key: Buffer,
): void;

/**
 * Decrypt a message with optional additional data `ad`, and write message tag to
 * `tag`. Make sure to check this!
 *
 * * `state` should be an opaque state object.
 * * `message` should be a buffer of size `ciphertext.length - crypto_secretstream_xchacha20poly1305_ABYTES`.
 * * `tag` should be a buffer of `crypto_secretstream_xchacha20poly1305_TAGBYTES`.
 * * `ad` is optional and should be `null` or `Buffer`. Included in the computation
 *   of the authentication tag appended to the message.
 *
 * Note that `tag` should be one of the `crypto_secretstream_xchacha20poly1305_TAG_*` constants.
 * Returns number of decrypted bytes written to `message`.
 */
export function crypto_secretstream_xchacha20poly1305_pull(
    state: Xchacha20poly1305State,
    message: Buffer,
    tag: Buffer,
    ciphertext: Buffer,
    ad: Buffer | null,
): void;

/**
 * Rekey the opaque `state` object.
 */
export function crypto_secretstream_xchacha20poly1305_rekey(state: Xchacha20poly1305State): void;

/**
 * Create a authentication token based on a onetime key.
 *
 * * `output` should be a buffer of length `crypto_onetimauth_BYTES`.
 * * `input` should be a buffer of any size.
 * * `key` should be a buffer of length `crypto_onetimeauth_KEYBYTES`.
 *
 * The generated token is stored in `output`.
 */
export function crypto_onetimeauth(output: Buffer, input: Buffer, key: Buffer): void;

/**
 * Verify a token.
 *
 * * `output` should be a buffer of length `crypto_onetimeauth_BYTES`.
 * * `input` should be a buffer of any size.
 * * `key` should be a buffer of lenght `crypto_onetimeauth_KEYBYTES`.
 *
 * Returns `true` if the token could be verified. Otherwise `false`.
 */
export function crypto_onetimeauth_verify(output: Buffer, input: Buffer, key: Buffer): boolean;

/**
 * Create an instance that create a token from a onetime key and a stream of input data.
 *
 * * `key` should be a buffer of length `crypto_onetimeauth_KEYBYTES`.
 */
export function crypto_onetimeauth_instance(key: Buffer): CryptoOneTimeAuthWrap;

/**
 * Create a password hash.
 *
 * * `output` should be a buffer with length within `crypto_pwhash_BYTES_MIN` - `crypto_pwhash_BYTES_MAX`.
 * * `password` should be a buffer of any size.
 * * `salt` should be a buffer with length `crypto_pwhash_SALTBYTES`.
 * * `opslimit` should a be number containing your ops limit setting in the range `crypto_pwhash_OPSLIMIT_MIN` - `crypto_pwhash_OPSLIMIT_MAX`.
 * * `memlimit` should a be number containing your mem limit setting in the range `crypto_pwhash_MEMLIMIT_MIN` - `crypto_pwhash_OPSLIMIT_MAX`.
 * * `algorithm` should be a number specifying the algorithm you want to use.
 *
 * Available default ops and mem limits are
 *
 * * `crypto_pwhash_OPSLIMIT_INTERACTIVE`
 * * `crypto_pwhash_OPSLIMIT_MODERATE`
 * * `crypto_pwhash_OPSLIMIT_SENSITIVE`
 * * `crypto_pwhash_MEMLIMIT_INTERACTIVE`
 * * `crypto_pwhash_MEMLIMIT_MODERATE`
 * * `crypto_pwhash_MEMLIMIT_SENSITIVE`
 *
 * The available algorithms are
 *
 * * `crypto_pwhash_ALG_DEFAULT`
 * * `crypto_pwhash_ALG_ARGON2ID13`
 * * `crypto_pwhash_ALG_ARGON2I13`
 *
 * The generated hash will be stored in `output` and the entire `output` buffer will be used.
 */
export function crypto_pwhash(
    output: Buffer,
    password: Buffer,
    salt: Buffer,
    opslimit: number,
    memlimit: number,
    algorithm: number,
): void;

/**
 * Create a password hash with a random salt.
 *
 * * `output` should be a buffer with length `crypto_pwhash_STRBYTES`.
 * * `password` should be a buffer of any size.
 * * `opslimit` should a be number containing your ops limit setting in the range `crypto_pwhash_OPSLIMIT_MIN` - `crypto_pwhash_OPSLIMIT_MAX`.
 * * `memlimit` should a be number containing your mem limit setting in the range `crypto_pwhash_MEMLIMIT_MIN` - `crypto_pwhash_OPSLIMIT_MAX`.
 *
 * The generated hash, settings, salt, version and algorithm will be stored in `output` and the entire `output` buffer will be used.
 */
export function crypto_pwhash_str(output: Buffer, password: Buffer, opslimit: number, memlimit: number): void;

/**
 * Verify a password hash generated with the above method.
 *
 * * `str` should be a buffer with length `crypto_pwhash_STRBYTES`.
 * * `password` should be a buffer of any size.
 *
 * Returns `true` if the hash could be verified with the settings contained in `str`. Otherwise `false`.
 */
export function crypto_pwhash_str_verify(str: Buffer, password: Buffer): boolean;

/**
 * Check if a password hash needs rehash, either because the default algorithm
 * changed, opslimit or memlimit increased or because the hash is malformed.
 *
 * * `hash` should be a buffer with length `crypto_pwhash_STRBYTES`.
 * * `opslimit` should a be number containing your ops limit setting in the range `crypto_pwhash_OPSLIMIT_MIN` - `crypto_pwhash_OPSLIMIT_MAX`.
 * * `memlimit` should a be number containing your mem limit setting in the range `crypto_pwhash_MEMLIMIT_MIN` - `crypto_pwhash_OPSLIMIT_MAX`.
 *
 * Returns `true` if the hash should be rehashed the settings contained in `str`.
 * Otherwise `false` if it is still good.
 */
export function crypto_pwhash_str_needs_rehash(hash: Buffer, opslimit: number, memlimit: number): boolean;

/**
 * Just like `crypto_pwhash` but will run password hashing on a seperate worker so it will not block the event loop. `callback(err)` will receive any errors from the hashing but all argument
 * errors will `throw`. The resulting hash is written to `output`. This function also supports [`async_hook`s](https://nodejs.org/dist/latest/docs/api/async_hooks.html) as the type
 * `sodium-native:crypto_pwhash_async`
 */
export function crypto_pwhash_async(
    output: Buffer,
    password: Buffer,
    salt: Buffer,
    opslimit: number,
    memlimit: number,
    algorithm: number,
    callback: (err: Error | null) => void,
): void;

/**
 * Just like `crypto_pwhash_str` but will run password hashing on a seperate worker so it will not block the event loop. `callback(err)` will receive any errors from the hashing but all argument
 * errors will `throw`. The resulting hash with parameters is written to `output`. This function also supports [`async_hook`s](https://nodejs.org/dist/latest/docs/api/async_hooks.html) as the type
 * `sodium-native:crypto_pwhash_str_async`
 */
export function crypto_pwhash_str_async(
    output: Buffer,
    password: Buffer,
    opslimit: number,
    memlimit: number,
    callback: (err: Error | null) => void,
): void;

/**
 * Just like `crypto_pwhash_str_verify` but will run password hashing on a seperate worker so it will not block the event loop. `callback(err, bool)` will receive any errors from the hashing but
 * all argument errors will `throw`. If the verification succeeds `bool` is `true`, otherwise `false`. Due to an issue with libsodium `err` is currently never set. This function also supports
 * [`async_hook`s](https://nodejs.org/dist/latest/docs/api/async_hooks.html) as the type `sodium-native:crypto_pwhash_str_verify_async`
 */
export function crypto_pwhash_str_verify_async(
    str: Buffer,
    password: Buffer,
    callback: (err: Error | null, bool: boolean) => void,
): void;

/**
 * Create a key exchange key pair.
 *
 * * `publicKey` should be a buffer of length `crypto_kx_PUBLICKEYBYTES`.
 * * `secretKey` should be a buffer of length `crypto_kx_SECRETKEYBYTES`.
 */
export function crypto_kx_keypair(publicKey: Buffer, secretKey: Buffer): void;

/**
 * Create a key exchange key pair based on a seed.
 *
 * * `publicKey` should be a buffer of length `crypto_kx_PUBLICKEYBYTES`.
 * * `secretKey` should be a buffer of length `crypto_kx_SECRETKEYBYTES`.
 * * `seed` should be a buffer of length `crypto_kx_SEEDBYTES`
 */
export function crypto_kx_seed_keypair(publicKey: Buffer, secretKey: Buffer, seed: Buffer): void;

/**
 * Generate a session receive and transmission key for a client.
 * The public / secret keys should be generated using the key pair method above.
 *
 * * `rx` should be a buffer of length `crypto_kx_SESSIONKEYBYTES` or `null`.
 * * `tx` should be a buffer of length `crypto_kx_SESSIONKEYBYTES` or `null`.
 *
 * You should use the `rx` to decrypt incoming data and `tx` to encrypt outgoing.
 * If you need to make a one-way or half-duplex channel you can give only one of
 * `rx` or `tx`.
 */
export function crypto_kx_client_session_keys(
    rx: Buffer | null,
    tx: Buffer | null,
    clientPublicKey: Buffer,
    clientSecretKey: Buffer,
    serverPublicKey: Buffer,
): void;

/**
 * Generate a session receive and transmission key for a server.
 * The public / secret keys should be generated using the key pair method above.
 *
 * * `rx` should be a buffer of length `crypto_kx_SESSIONKEYBYTES` or `null`.
 * * `tx` should be a buffer of length `crypto_kx_SESSIONKEYBYTES` or `null`.
 *
 * You should use the `rx` to decrypt incoming data and `tx` to encrypt outgoing.
 * If you need to make a one-way or half-duplex channel you can give only one of
 * `rx` or `tx`.
 */
export function crypto_kx_server_session_keys(
    rx: Buffer | null,
    tx: Buffer | null,
    serverPublicKey: Buffer,
    serverSecretKey: Buffer,
    clientPublicKey: Buffer,
): void;

/**
 * Create a scalar multiplication public key based on a secret key
 *
 * * `publicKey` should be a buffer of length `crypto_scalarmult_BYTES`.
 * * `secretKey` should be a buffer of length `crypto_scalarmult_SCALARBYTES`.
 *
 * The generated public key is stored in `publicKey`.
 */
export function crypto_scalarmult_base(publicKey: Buffer, secretKey: Buffer): void;

/**
 * Derive a shared secret from a local secret key and a remote public key.
 *
 * * `sharedSecret` shoudl be a buffer of length `crypto_scalarmult_BYTES`.
 * * `secretKey` should be a buffer of length `crypto_scalarmult_SCALARBYTES`.
 * * `remotePublicKey` should be a buffer of length `crypto_scalarmult_BYTES`.
 *
 * The generated shared secret is stored in `sharedSecret`.
 */
export function crypto_scalarmult(sharedSecret: Buffer, secretKey: Buffer, remotePublicKey: Buffer): void;

/**
 * > The crypto_core_ed25519_is_valid_point() function checks that p represents
 * > a point on the edwards25519 curve, in canonical form, on the main subgroup,
 * > and that the point doesn't have a small order.
 *
 * * `p` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 *
 * Returns `true` or `false`
 */
export function crypto_core_ed25519_is_valid_point(p: Buffer): boolean;

/**
 * Maps a `crypto_core_ed25519_UNIFORMBYTES` bytes vector (usually the output of
 * a hash function) to a a valid curve point and stores its compressed
 * representation in `p`.
 *
 * The point is guaranteed to be on the main subgroup.
 *
 * * `p` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 * * `r` must be `Buffer` of at least `crypto_core_ed25519_UNIFORMBYTES` bytes
 */
export function crypto_core_ed25519_from_uniform(p: Buffer, r: Buffer): void;

/**
 * Multiply point `p` by scalar `n` and store its compressed representation in `q`.
 *
 * * `q` must be `Buffer` of at least `crypto_scalarmult_ed25519_BYTES` bytes
 * * `n` must be `Buffer` of at least `crypto_scalarmult_ed25519_SCALARBYTES` bytes
 * * `p` must be `Buffer` of at least `crypto_scalarmult_ed25519_BYTES` bytes
 *
 * Note this function will throw if `n` is zero or `p` is an invalid curve point.
 */
export function crypto_scalarmult_ed25519(q: Buffer, n: Buffer, p: Buffer): void;

/**
 * Multiply the basepoint by scalar `n` and store its compressed representation in
 * `q`. Note that `n` will be clamped.
 *
 * * `q` must be `Buffer` of at least `crypto_scalarmult_ed25519_BYTES` bytes
 * * `n` must be `Buffer` of at least `crypto_scalarmult_ed25519_SCALARBYTES` bytes
 *
 * Note this function will throw if `n` is zero
 */
export function crypto_scalarmult_ed25519_base(q: Buffer, n: Buffer): void;

/**
 * Multiply point `p` by scalar `n` and store its compressed representation in `q`.
 * This version does not clamp.
 *
 * * `q` must be `Buffer` of at least `crypto_scalarmult_ed25519_BYTES` bytes
 * * `n` must be `Buffer` of at least `crypto_scalarmult_ed25519_SCALARBYTES` bytes
 * * `p` must be `Buffer` of at least `crypto_scalarmult_ed25519_BYTES` bytes
 *
 * Note this function will throw if `n` is zero or `p` is an invalid curve point.
 */
export function crypto_scalarmult_ed25519_noclamp(q: Buffer, n: Buffer, p: Buffer): void;

/**
 * Multiply the basepoint by scalar `n` and store its compressed representation in
 * `q`. This version does not clamp.
 *
 * * `q` must be `Buffer` of at least `crypto_scalarmult_ed25519_BYTES` bytes
 * * `n` must be `Buffer` of at least `crypto_scalarmult_ed25519_SCALARBYTES` bytes
 *
 * Note this function will throw if `n` is zero
 */
export function crypto_scalarmult_ed25519_base_noclamp(q: Buffer, n: Buffer): void;

/**
 * Add point `q` to `p`, storing the result to `r`.
 *
 * * `r` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 * * `p` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 * * `q` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 *
 * Will throw if `p`, `q` are not valid curve points
 */
export function crypto_core_ed25519_add(r: Buffer, p: Buffer, q: Buffer): void;

/**
 * Subtract point `q` to `p`, storing the result to `r`.
 *
 * * `r` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 * * `p` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 * * `q` must be `Buffer` of at least `crypto_core_ed25519_BYTES` bytes
 *
 * Will throw if `p`, `q` are not valid curve points
 */
export function crypto_core_ed25519_sub(r: Buffer, p: Buffer, q: Buffer): void;

/**
 * Generate random point, storing it in `r`.
 *
 * * `r` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_random(r: Buffer): void;

/**
 * Reduce `s mod L`, storing it in `r`.
 *
 * * `r` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `s` must be `Buffer` of at least `crypto_core_ed25519_NONREDUCEDSCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_reduce(r: Buffer, s: Buffer): void;

/**
 * Find `recip` such that `s * recip = 1 (mod L)`, storing it in `recip`.
 *
 * * `recip` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `s` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_invert(recip: Buffer, s: Buffer): void;

/**
 * Find `neg` such that `s + neg = 0 (mod L)`, storing it in `recip`.
 *
 * * `recip` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `s` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_negate(neg: Buffer, s: Buffer): void;

/**
 * Find `comp` such that `s + comp = 1 (mod L)`, storing it in `recip`.
 *
 * * `comp` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `s` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_complement(comp: Buffer, s: Buffer): void;

/**
 * Add `x` and `y` such that `x + y = z (mod L)`, storing it in `z`.
 *
 * * `x` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `y` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `z` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_add(z: Buffer, x: Buffer, y: Buffer): void;

/**
 * Subtract `x` and `y` such that `x - y = z (mod L)`, storing it in `z`.
 *
 * * `x` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `y` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 * * `z` must be `Buffer` of at least `crypto_core_ed25519_SCALARBYTES` bytes
 */
export function crypto_core_ed25519_scalar_sub(z: Buffer, x: Buffer, y: Buffer): void;

/**
 * Hash a value to a short hash based on a key.
 *
 * * `output` should be a buffer of length `crypto_shorthash_BYTES`.
 * * `input` should be a buffer of any size.
 * * `key` should be a buffer of length `crypto_shorthash_KEYBYTES`.
 *
 * The generated short hash is stored in `output`.
 */
export function crypto_shorthash(output: Buffer, input: Buffer, key: Buffer): void;

/**
 * Generate a new master key.
 *
 * * `key` should be a buffer of length `crypto_kdf_KEYBYTES`
 */
export function crypto_kdf_keygen(key: Buffer): void;

/**
 * Derive a new key from a master key.
 *
 * * `subkey` should be a buffer between `crypto_kdf_BYTES_MIN` and `crypto_kdf_BYTES_MAX`.
 * * `subkeyId` should be an integer.
 * * `context` should be a buffer of length `crypto_kdf_CONTEXTBYTES`
 * * `key` should by a buffer of length `crypto_kdf_KEYBYTES`
 */
export function crypto_kdf_derive_from_key(subkey: Buffer, subkeyId: number, context: Buffer, key: Buffer): void;

/**
 * Hash a value to a short hash based on a key.
 *
 * * `output` should be a buffer of length `crypto_hash_sha256_BYTES`.
 * * `input` should be a buffer of any size.
 *
 * The generated short hash is stored in `output`.
 */
export function crypto_hash_sha256(output: Buffer, input: Buffer): void;

/**
 * Create an instance that has stream of input data to sha256.
 */
export function crypto_hash_sha256_instance(): CryptoHashSha256Wrap;

/**
 * Hash a value to a short hash based on a key.
 *
 * * `output` should be a buffer of length `crypto_hash_sha512_BYTES`.
 * * `input` should be a buffer of any size.
 *
 * The generated short hash is stored in `output`.
 */
export function crypto_hash_sha512(output: Buffer, input: Buffer): void;

/**
 * Create an instance that has stream of input data to sha512.
 */
export function crypto_hash_sha512_instance(): CryptoHashSha512Wrap;

export interface CryptoHashSha512Wrap {
    /**
     * Update the instance with a new piece of data.
     *
     * * `input` should be a buffer of any size.
     */
    update(input: Buffer): void;

    /**
     * Finalize the instance.
     *
     * * `output` should be a buffer of length `crypto_hash_sha512_BYTES`.
     *
     * The generated hash is stored in `output`.
     */
    final(output: Buffer): void;
}
