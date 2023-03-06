// Type definitions for hash-chain 2.0
// Project: https://github.com/emilbayes/hash-chain
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = HashChain;

/**
 * Hash Chain implementation using Blake2b.
 *
 * @example
 * import HashChain = require('hash-chain')
 * import * as fs from 'fs'
 *
 * // Persistence
 * var chain = // ...
 * const fd = fs.open('filename')
 * fs.write(fd, chain.offset, 0, 4)
 * fs.write(fd, chain.chain)
 * fs.close(fd)
 *
 * const data = fs.readFile('filename')
 * const chain = new HashChain(data.subarray(4), data.readUInt32LE(0))
 */
declare class HashChain implements Iterable<Buffer> {
    static readonly SEEDBYTES: 32;
    static readonly BYTES: 32;

    /**
     * Generate a new seed.
     *
     * @param buffer Use an existing buffer instead of allocating a new one.
     */
    static seedgen(buffer?: Buffer): Buffer;
    /**
     * Generate and instantiate a new `HashChain` from `seed`.
     * @param seed The seed buffer. Must be `HashChain.SEEDBYTES` long.
     * @param n Number of elements.
     * @param offset The offset for the chain.
     */
    static generate(
        seed: Buffer,
        n: number,
        /** @default 0 */
        offset?: number,
    ): HashChain;
    /**
     * Generate and instantiate a new lazy `HashChain` from a list of anchor points.
     *
     * This will only keep a buffer of dist points in memory, lazily generating missing points as they're accessed.
     *
     * @param anchors The list of anchor points.
     * @param dist Number of elements between each anchor.
     * @param offset The offset for the chain.
     */
    static fromAnchors(
        anchors: readonly Buffer[],
        dist: number,
        /** @default 0 */
        offset?: number,
    ): HashChain;
    static verify(hash: Buffer, prev: Buffer): boolean;

    /** The buffer used in chain. */
    readonly chain: Buffer;
    /** The current integer offset. */
    readonly offset: number;
    /** Total number of elements in the chain. */
    readonly length: number;

    constructor(
        chain: Buffer,
        /** @default 0 */
        offset?: number,
    );
    /**
     * Get the element at `offset` from the `offset` given in the constructor. Normally `HashChain`s
     * only move forward, but giving a negative integer allows you to go back. This does not increment
     * the internal counter.
     *
     * @param offset The offset of the element.
     */
    get(offset: number): Buffer;
    /**
     * Generate anchor points with `dist` elements between each anchor. This can be used to optimise
     * initialisation of an existing chain at the expense of more disk space.
     *
     * @param dist Number of elements between each anchor.
     */
    anchors(dist: number): Buffer[];
    [Symbol.iterator](): Iterator<Buffer, void, void>;
}
