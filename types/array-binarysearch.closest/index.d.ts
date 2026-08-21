declare function binarySearch(
    arr: readonly string[],
    val: string,
): number;

declare function binarySearch(
    arr: readonly number[],
    val: number,
): number;

declare function binarySearch<T>(
    arr: readonly T[],
    val: T,
    fn?: null | ((itm: T, val: T, m: any, arr: readonly T[]) => number),
    ths?: any,
    bgn?: number,
    end?: number,
): number;

export = binarySearch;
