// Type definitions for sort-by 1.2
// Project: https://github.com/kvnneff/sort-by#readme
// Definitions by: Manuel Sanchez <https://github.com/msanchezdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function sortBy<T>(...args: ReadonlyArray<string>): (a: T, b: T) => number;
declare function sortBy<T>(...args: Array<string | ((key: string, value: any) => any)>): (a: T, b: T) => number;

export = sortBy;
