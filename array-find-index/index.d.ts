// Type definitions for array-find-index
// Project: https://github.com/sindresorhus/array-find-index
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace arrayFindIndex {
	type Predicate = (element: any, index: number, array: any[]) => boolean;
}
declare function arrayFindIndex(arr: any[], predicate: arrayFindIndex.Predicate): number;
declare function arrayFindIndex(arr: any[], predicate: arrayFindIndex.Predicate, ctx: any): number;

export = arrayFindIndex;

