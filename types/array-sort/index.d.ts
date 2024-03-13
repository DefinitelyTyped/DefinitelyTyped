type Comparator<T> = (a: T, b: T) => number;
type ComparisonArg<T> = string | Comparator<T>;
type ComparisonArgs<T> = ComparisonArg<T> | Array<ComparisonArg<T>>;

interface Options {
    readonly reverse: boolean;
}

declare function arraySort<T>(
    arr: T[],
    props?: ComparisonArgs<T>,
    options?: Options,
): T[];

export default arraySort;
