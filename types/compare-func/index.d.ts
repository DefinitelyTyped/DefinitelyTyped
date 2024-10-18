type extractFunc<T> = (e: T) => number | string;

declare function compare_func<T>(
    prop?: ReadonlyArray<string | extractFunc<T>> | string | extractFunc<T>,
): (e1: T, e2: T) => number;

export = compare_func;
