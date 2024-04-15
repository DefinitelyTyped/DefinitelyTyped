export = hmac;

/**
 * Computes a HMAC from `data` with `key` and writes it into `out`.
 *
 * @param out The buffer to write the result to. Must be of length `hmac.BYTES`.
 * @param data The data for which the HMAC should be generated.
 * @param key Per the HMAC spec `key` can be as small as 1 byte, in which case it is right-padded
 * with `NUL` bytes, or any size larger than `hmac.KEYBYTES` in which case it is hashed down to fit.
 * The recommended size by the spec is `hmac.KEYBYTES`
 *
 * @example
 * import { randombytes_buf } from 'sodium-native'
 * import hmac = require('hmac-blake2b')
 *
 * const mac = Buffer.alloc(hmac.BYTES)
 * const key = Buffer.alloc(hmac.KEYBYTES)
 * randombytes_buf(key)
 *
 * const data = Buffer.from('some data')
 *
 * hmac(mac, data, key)
 */
declare function hmac(out: Uint8Array, data: Uint8Array | readonly Uint8Array[], key: Uint8Array): void;

declare namespace hmac {
    /** Size of the output MAC in bytes */
    const BYTES: 64;
    /** [RFC2104](https://www.ietf.org/rfc/rfc2104.txt) recommended size of the key in bytes. */
    const KEYBYTES: 128;
}
