// Type definitions for array-binarysearch.closest 0.2
// Project: https://www.npmjs.com/package/array-binarysearch.closest
// Definitions by: Heye Vöcking <https://github.com/hvoecking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function binarySearch<T>(
    arr: ReadonlyArray<T>,
    val: T,
    fn?: null | ((itm: T, val: T, m: any, arr: ReadonlyArray<T>) => number),
    ths?: any,
    bgn?: number,
    end?: number,
): number;
