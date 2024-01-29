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
    options?: toRegexRange.Options,
): string;

export = toRegexRange;
