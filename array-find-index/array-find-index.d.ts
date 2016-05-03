// Type definitions for array-find-index
// Project: https://github.com/sindresorhus/array-find-index
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "array-find-index" {
	type Predicate = (element: any, index: number, array: any[]) => boolean;

	function arrayFindIndex(arr: any[], predicate: Predicate): number;
	function arrayFindIndex(arr: any[], predicate: Predicate, ctx: any): number;
	namespace arrayFindIndex {}
	export = arrayFindIndex;
}
