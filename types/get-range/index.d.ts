// Type definitions for get-range 1.0
// Project: https://github.com/sindresorhus/get-range#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = getRange;

// tslint:disable:unified-signatures

declare function getRange(stop: number): Iterator<number> & Iterable<number>;
declare function getRange(
    start: number,
    stop: number,
    step?: number
): Iterator<number> & Iterable<number>;
