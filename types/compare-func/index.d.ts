// Type definitions for compare-func 1.3
// Project: https://github.com/stevemao/compare-func
// Definitions by: Dogan Fennibay <https://github.com/fennibay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

type extractFunc<T> = (e: T) => number | string;

declare function compare_func<T>(prop?: ReadonlyArray<string | extractFunc<T>> | string | extractFunc<T>):
    (e1: T, e2: T) => number;

export = compare_func;
