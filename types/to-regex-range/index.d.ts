// Type definitions for to-regex-range 5.0
// Project: https://github.com/micromatch/to-regex-range
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace toRegexRange {
    interface Options {
        capture?: boolean;
        shorthand?: boolean;
        relaxZeros?: boolean;
    }
}

declare function toRegexRange(
    min: number | string,
    max?: number | string,
    options?: toRegexRange.Options
): string;

export = toRegexRange;
