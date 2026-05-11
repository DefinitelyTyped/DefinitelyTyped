export = Chacha20;

/**
 * Create a new xor instance.
 *
 * @param nonce Should be a 12 byte buffer.
 * @param key Should be 32 byte buffer.
 * @param counter An optional counter value.
 *
 * @example
 * import * as crypto from 'node:crypto'
 * import Chacha20 = require('chacha20-universal')
 *
 * const key = crypto.randomBytes(32)
 * const nonce = crypto.randomBytes(24)
 * const out = Buffer.alloc(5)
 * const xor = new Chacha20(nonce, key)
 *
 * xor.update(out, Buffer.from('hello'))
 * xor.update(out, Buffer.from('world'))
 *
 * console.log(out)
 * // e.g. <Buffer 7c 77 23 51 f9>
 *
 * xor.final()
 */
declare class Chacha20 {
    readonly finalized: boolean;
    readonly pos: number;
    readonly state: Uint32Array;

    constructor(nonce: Uint8Array, key: Uint8Array, counter?: number);

    /**
     * Update the xor instance.
     *
     * @param output The result buffer to write the output to. `output` should be the same byte length as `input`.
     * @param input The buffer with new input to mix.
     */
    update(output: Uint8Array, input: Uint8Array): void;
    /**
     * Call this method last. Clears internal state.
     */
    final(): void;
}
