// Type definitions for array-find-index 1.0
// Project: https://github.com/sindresorhus/array-find-index
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function arrayFindIndex<T>(arr: T[], predicate: (element: T, index: number, array: T[]) => boolean): number;
declare function arrayFindIndex<T, U>(arr: T[], predicate: (this: U, element: T, index: number, array: T[]) => boolean, ctx: U): number;
export = arrayFindIndex;
