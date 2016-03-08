// Type definitions for buffer-compare
// Project: https://github.com/soldair/node-buffer-compare
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "buffer-compare" {
	interface List {
		[index: number]: any;
		length: number
	}

	function compare(cmp: List, to: List): number;
	function compare<T>(cmp: T, to: T): number;
	function compare<C, T>(cmp: C, to: T): number;

	export = compare;
}
