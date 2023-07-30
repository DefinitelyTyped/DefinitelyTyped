// Type definitions for sort-by 1.2
// Project: https://github.com/kvnneff/sort-by#readme
// Definitions by: Manuel Sanchez <https://github.com/msanchezdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function sortBy<T = Record<string,unknown>>(...args: ReadonlyArray<keyof T | `-${keyof T}`>): (a: T, b: T) => number;
declare function sortBy<T = Record<string,unknown>, K extends keyof T = keyof T>(...args: Array<K | `-${K}` | ((key: K, value: T[K]) => unknown)>): (a: T, b: T) => number;

export = sortBy;
