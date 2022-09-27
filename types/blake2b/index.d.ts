// Type definitions for blake2b 2.1
// Project: https://github.com/emilbayes/blake2b
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = blake2b;

/**
 * Create a new hash instance, optionally with `key`, `salt` and
 * `personal`. Bypass input assertions by setting `noAssert` to `true`.
 *
 * All parameters must fulfill the following constraints, or an
 * `AssertionError` will be thrown (unless `noAssert = true`):
 *
 * * `outLength` must within the byte ranges defined by the constants below.
 * * `key` is optional, but must within the byte ranges defined by the constants
 *    below, if given. This value must be kept secret, and can be used to create
 *    prefix-MACs.
 * * `salt` is optional, but must be exactly `SALTBYTES`, if given. You can use
 *   this parameter as a kind of per user id, or local versioning scheme. This
 *   value is not required to be secret.
 * * `personal` is optional, but must be exactly `PERSONALBYTES`, if given. You can
 *   use this parameter as a kind of app id, or global versioning scheme. This
 *   value is not required to be secret.
 *
 * @example
 * import blake2b = require('blake2b')
 *
 * const output = new Uint8Array(64)
 * const input = Buffer.from('hello world')
 *
 * console.log('hash:', blake2b(output.length).update(input).digest('hex'))
 */
declare function blake2b(
    outLength: number,
    key?: Uint8Array,
    salt?: Uint8Array,
    personal?: Uint8Array,
    /** @default false */
    noAssert?: boolean,
): blake2b.Blake2b;

declare namespace blake2b {
    function ready(cb: () => void): void;

    const WASM_SUPPORTED: boolean;
    const WASM_LOADED: boolean;

    /** Minimum length of `out` */
    const BYTES_MIN: 16;
    /** Maximum length of `out` */
    const BYTES_MAX: 64;
    /** Recommended default length of `out` */
    const BYTES: 32;
    /** Minimum length of `key` */
    const KEYBYTES_MIN: 16;
    /** Maximum length of `key` */
    const KEYBYTES_MAX: 64;
    /** Recommended default length of `key` */
    const KEYBYTES: 32;
    /** Required length of `salt` */
    const SALTBYTES: 16;
    /** Required length of `personal` */
    const PERSONALBYTES: 16;

    interface Blake2b {
        /**
         * Update the hash with new `input`. Calling this method after `.digest` will throw
         * an error.
         */
        update(input: Uint8Array): this;

        /**
         * Finalise the the hash and write the digest to `out`. `out` must be exactly equal
         * to `outLength` given in the `blake2b` method.
         *
         * Optionally you can pass `hex` to get the hash as a hex string or no arguments
         * to have the hash return a new Uint8Array with the hash.
         */
        digest(out?: 'binary'): Uint8Array;
        digest<TBuffer extends Uint8Array>(out: TBuffer): TBuffer;
        digest(out: 'hex'): string;
    }
}
