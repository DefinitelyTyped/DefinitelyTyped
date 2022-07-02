/**
 * Checks if two iterables are equal. A custom areEqual function may be provided
 * as an optional third argument.
 */
declare function equalsIterable<T>(
    one: Iterable<T>,
    two: Iterable<T>,
    areEqual?: (one: T, two: T) => boolean | null,
): boolean;

declare namespace equalsIterable {}

export = equalsIterable;
