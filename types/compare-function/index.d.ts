// Type definitions for compare-function 2.0
// Project: https://github.com/michaelrhodes/compare-function
// Definitions by: Wolfgang Faust <https://github.com/wolfgang42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function compare<T>(fn: (item: T) => any): (a: T, b: T) => -1 | 0 | 1;
declare function compare<T>(sign: number, fn: (item: T) => any): (a: T, b: T) => -1 | 0 | 1;
export = compare;
