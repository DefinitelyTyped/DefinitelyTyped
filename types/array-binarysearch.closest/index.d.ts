declare function binarySearch(
    arr: ReadonlyArray<string>,
    val: string,
): number;

declare function binarySearch(
    arr: ReadonlyArray<number>,
    val: number,
): number;

declare function binarySearch<T>(
    arr: ReadonlyArray<T>,
    val: T,
    fn?: null | ((itm: T, val: T, m: any, arr: ReadonlyArray<T>) => number),
    ths?: any,
    bgn?: number,
    end?: number,
): number;

export = binarySearch;
