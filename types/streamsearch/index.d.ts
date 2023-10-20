/// <reference types="node" />

/**
 * callback is called any time there is non-matching data and/or there is a needle match.
 * @param isMatch Indicates whether a match has been found
 * @param data If set, this contains data that did not match the needle.
 * @param start he index in data where the non-matching data begins (inclusive).
 * @param end The index in data where the non-matching data ends (exclusive).
 * @param isSafeData Indicates if it is safe to store a reference to data (e.g. as-is or via data.slice()) or not, as in some cases data may point to a Buffer whose contents change over time.
 */
type MatchCallback = (
    isMatch: boolean,
    data: Buffer | undefined,
    start: number,
    end: number,
    isSafeData?: boolean,
) => void;

declare class SBMH {
    /**
     * The maximum number of matches.
     * @default Infinity
     */
    maxMatches: number;

    /**
     * The current match count.
     * @default 0
     */
    matches: number;

    /**
     * Creates and returns a new instance for searching for a Buffer or string needle. callback is called any time there is non-matching data and/or there is a needle match.
     * @param needle
     * @param cb
     */
    constructor(needle: Buffer | string, cb: MatchCallback);

    /**
     * Resets internal state. Useful for when you wish to start searching a new/different stream for example.
     */
    reset(): void;

    /**
     * Processes chunk, searching for a match.
     * @param chunk
     * @param pos
     * @returns The value is the last processed index in chunk + 1.
     */

    push(chunk: Buffer | string, pos?: number): number;
    /**
     * Emits any last remaining unmatched data that may still be buffered and then resets internal state.
     */
    destroy(): void;
}

export = SBMH;
