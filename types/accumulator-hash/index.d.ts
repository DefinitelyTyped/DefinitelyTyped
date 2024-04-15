/// <reference types="node" />

export = RollingHash;

/**
 * Hash and xor to generate unique byte strings.
 *
 * @example
 * import State = require('accumulator-hash')
 *
 * const input = Buffer.from('hello, world!')
 * const state = new State()
 *
 * const a = state.hash(input)
 * const b = state.hash(input)
 * const c = state.hash(input)
 *
 * // a !== b !== c
 */
declare class RollingHash {
    /**
     * Instantiate a new state.
     *
     * @param init Can be supplied to initialise the state buffer. If it is not supplied, a random `init`
     * buffer is generated.
     */
    constructor(init?: ArrayLike<number>);
    /**
     * Hash some data.
     */
    hash(data: Buffer | Uint8Array): Buffer | Uint8Array;
}
