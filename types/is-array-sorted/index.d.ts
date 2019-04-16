// Type definitions for is-array-sorted 1.0
// Project: https://github.com/sindresorhus/is-array-sorted#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isArraySorted;

declare function isArraySorted<T>(
    array: ReadonlyArray<T>,
    comparator?: (a: T, b: T) => number
): boolean;
