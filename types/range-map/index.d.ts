// Type definitions for range-map 1.0
// Project: https://github.com/ashleymarkfletcher/range-map#readme
// Definitions by: Dallin Skinner <https://github.com/dallinskinner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function rangeMap(
    input: number,
    inLow: number,
    inHigh: number,
    outLow: number,
    outHigh: number,
    clampValue?: boolean,
): number;

export = rangeMap;
