// Type definitions for compose-function
// Project: https://github.com/stoeffel/compose-function
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "compose-function" {
	// Hardcoded signatures for 2-4 parameters
	function f<A, B, C>(
		f1: (b: B) => C,
		f2: (a: A) => B
	): (a: A) => C
	function f<A, B, C, D>(
		f1: (b: C) => D,
		f2: (a: B) => C,
		f3: (a: A) => B
	): (a: A) => D
	function f<A, B, C, D, E>(
		f1: (b: D) => E,
		f2: (a: C) => D,
		f3: (a: B) => C,
		f4: (a: A) => B
	): (a: A) => E

	// Minimal typing for more than 4 parameters
	function f<Result>(
		f1: (a: any) => Result,
		...functions: Function[]
	): (a: any) => Result

	export = f;
}
