// Type definitions for sort-by 1.2
// Project: https://github.com/kvnneff/sort-by#readme
// Definitions by: Manuel Sanchez <https://github.com/msanchezdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function sortBy<T = Record<string,unknown>>(...args: ReadonlyArray<keyof T>): (a: T, b: T) => number;
declare function sortBy<T = Record<string,unknown>>(...args: Array<keyof T | (<K extends keyof T>(key: K, value: T[K]) => any)>): (a: T, b: T) => number;

export = sortBy;
