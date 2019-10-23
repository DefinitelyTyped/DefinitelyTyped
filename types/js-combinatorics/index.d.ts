// Type definitions for js-combinatorics v0.5.4
// Project: https://github.com/dankogai/js-combinatorics
// Definitions by: Vasya Aksyonov <https://github.com/outring>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace __Combinatorics {

	interface IGenerator<T> {

		/**
		 * Returns the element or undefined if no more elements are available.
		 */
		next():T;

		/**
		 * Applies the callback function for each element.
		 */
		forEach(f:(item:T) => void):void;

		/**
		 * Returns an array that is the output of calling the callback function separately on each element.
		 */
		map<TResult>(f:(item:T) => TResult):TResult[];

		/**
		 * Returns an array of elements that return `true` for the filter function.
		 */
		filter(predicate:(item:T) => boolean):T[];

		/**
		 * Returns an array of all elements.
		 */
		toArray():T[];

		/**
		 * Returns the total number of elements to be generated. This equals the result of calling
     * `generator.toArray().length` but it is precalculated without actually generating any elements.
		 * Handy when doing setup for a potentially long-running loop.
		 */
		length:number;

	}

	interface IPredictableGenerator<T> extends IGenerator<T> {

		/**
		 * Returns the nth element (indexed from 0).
		 */
		nth(n:number):T;

	}

	interface ICartesianProductGenerator<T> extends IPredictableGenerator<T> {

		/**
		 * Arguments are integer coordinates.
		 * Arguments can be out of bounds but it returns `undefined` in such cases.
		 */
		get(...coordinates:number[]):T;
	}

	/**
	 * Calculates m P n
	 */
	function P(m:number, n:number):number;

	/**
	 * Calculates m C n
	 */
	function C(m:number, n:number):number;

	/**
	 * Calculates n!
	 */
	function factorial(n:number):number;

	/**
	 * Returns the factoradic representation of `n` in an array, in
   * least significant order.
	 * See http://en.wikipedia.org/wiki/Factorial_number_system
	 */
	function factoradic(n:number):number[];

	/**
	 * Generates the power set of `a`.
	 */
	function power<T>(a:T[]):IPredictableGenerator<T[]>;

	/**
	 * Generates the combination of `a` with `n` elements.
	 * `n` defaults to the length of `a`.
	 */
	function combination<T>(a:T[], n?:number):IGenerator<T[]>;

	/**
	 * Generates the combination of `a` with `n` elements, which
	 * also supports larger sets of elements.
	 * When `n` is ommited, the length of the array is used.
	 * Somewhat slower than `combination()`
	 */
	function bigCombination<T>(a:T[], n?:number):IGenerator<T[]>;

	/**
	 * Generates the permutation of `a` with `n` elements.
	 * `n` defaults to the length of `a`.
	 */
	function permutation<T>(a:T[], n?:number):IGenerator<T[]>;

	/**
	 * Generates the permutation of the combination of `a`.
	 * Equivalent to `permutation(combination(a))`, but more efficient.
	 */
	function permutationCombination<T>(a:T[]):IGenerator<T[]>;

	/**
	 * Generates `n`-digit "numbers" where each digit is an element in array.
	 * Note this "number" is in the least significant order.
	 * `n` defaults to the length of `a`.
	 */
	function baseN<T>(a:T[], n?:number):IPredictableGenerator<T[]>;

	/**
	 * Generates the cartesian product of the arrays. All arguments must be arrays with more than one element.
	 */
	function cartesianProduct<T1>(a1:T1[]):ICartesianProductGenerator<[T1]>;
	function cartesianProduct<T1, T2>(a1:T1[], a2:T2[]):ICartesianProductGenerator<[T1, T2]>;
	function cartesianProduct<T1, T2, T3>(a1:T1[], a2:T2[], a3:T3[]):ICartesianProductGenerator<[T1, T2, T3]>;
	function cartesianProduct<T1, T2, T3, T4>(a1:T1[], a2:T2[], a3:T3[], a4:T4[]):ICartesianProductGenerator<[T1, T2, T3, T4]>;
	function cartesianProduct<T1, T2, T3, T4, T5>(a1:T1[], a2:T2[], a3:T3[], a4:T4[], a5:T5[]):ICartesianProductGenerator<[T1, T2, T3, T4, T5]>;
	function cartesianProduct<T1, T2, T3, T4, T5, T6>(a1:T1[], a2:T2[], a3:T3[], a4:T4[], a5:T5[], a6:T6[]):ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6]>;
	function cartesianProduct<T1, T2, T3, T4, T5, T6, T7>(a1:T1[], a2:T2[], a3:T3[], a4:T4[], a5:T5[], a6:T6[], a7:T7[]):ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7]>;
	function cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8>(a1:T1[], a2:T2[], a3:T3[], a4:T4[], a5:T5[], a6:T6[], a7:T7[], a8:T8[]):ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8]>;
	function cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8, T9>(a1:T1[], a2:T2[], a3:T3[], a4:T4[], a5:T5[], a6:T6[], a7:T7[], a8:T8[], a9:T9[]):ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
	function cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(a1:T1[], a2:T2[], a3:T3[], a4:T4[], a5:T5[], a6:T6[], a7:T7[], a8:T8[], a9:T9[], a10:T10[]):ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
	function cartesianProduct(...a:any[][]):ICartesianProductGenerator<any[]>;

	const VERSION:string;

}

export = __Combinatorics;
export as namespace Combinatorics;
