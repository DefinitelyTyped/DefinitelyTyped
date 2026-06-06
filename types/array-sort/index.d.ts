declare namespace ArraySort {
    type Comparator<T> = (a: T, b: T) => number;
    type ComparisonArg<T> = string | Comparator<T>;
    type ComparisonArgs<T> = ComparisonArg<T> | Array<ComparisonArg<T>>;

    interface Options {
        readonly reverse: boolean;
    }
}

declare function ArraySort<T>(
    arr: T[],
    props?: ArraySort.ComparisonArgs<T>,
    options?: ArraySort.Options,
): T[];

export = ArraySort;
