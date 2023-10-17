export = fakeDiff;

interface FakeDiffOptions {
    /** Hide not changed lines (as default `true`). */
    hideLines?: boolean;

    /**
     * Maximum number of adjacent not changed lines shown.
     * Only takes effect if `hideLines` is `true` (as default `2`).
     */
    maxAdjacentStaticLines?: number;
}

declare function fakeDiff(
    previous: string,
    next: string,
    options?: FakeDiffOptions,
): string;
