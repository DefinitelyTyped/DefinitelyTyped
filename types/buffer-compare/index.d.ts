// Type definitions for buffer-compare
// Project: https://github.com/soldair/node-buffer-compare
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface List {
    [index: number]: any;
    length: number
}

declare function compare(cmp: List, to: List): number;
declare function compare<T>(cmp: T, to: T): number;
declare function compare<C, T>(cmp: C, to: T): number;

export = compare;
