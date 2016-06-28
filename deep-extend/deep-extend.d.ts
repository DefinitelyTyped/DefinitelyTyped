// Type definitions for open 0.4.1
// Project: https://github.com/unclechu/node-deep-extend
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'deep-extend' {
	/*
	 * Recursive object extending.
	 */
	function deepExtend<T, U>(target: T, source: U): T & U;
	function deepExtend<T, U, V>(target: T, source1: U, source2: V): T & U & V;
	function deepExtend<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
	function deepExtend(target: any, ...sources: any[]): any;
	export = deepExtend;
}
