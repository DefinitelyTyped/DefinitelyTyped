/* tslint:disable: no-unnecessary-generics */

/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 *
 * Equivalent to:
 * ```js
 * Function.prototype.call.bind(target, ...)
 * ```
 *
 * @param target The function to be used as the this object for `Function.prototype.call`.
 * @param args Arguments to bind to the parameters of the function.
 */
declare function callBind<T, A extends unknown[], R>(target: (this: T, ...args: A) => R): (thisArg: T, ...args: A) => R;
declare function callBind<T, A extends unknown[], R>(target: (this: T, ...args: A) => R, thisArg: T): (...args: A) => R;
declare function callBind<T, A0, A extends unknown[], R>(
	target: (this: T, arg0: A0, ...args: A) => R,
	thisArg: T,
	arg0: A0,
): (...args: A) => R;
declare function callBind<T, A0, A1, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
): (...args: A) => R;
declare function callBind<T, A0, A1, A2, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
	arg2: A2,
): (...args: A) => R;
declare function callBind<T, A0, A1, A2, A3, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
	arg2: A2,
	arg3: A3,
): (...args: A) => R;
declare function callBind<T, AX, R>(
	target: (this: T, ...args: AX[]) => R,
	thisArg: T,
	...args: AX[]
): (...args: AX[]) => R;

/** Copied from `@types/eslint/helpers.d.ts` */
type Prepend<T, A extends unknown[]> = ((_: T, ..._1: A) => unknown) extends ((..._: infer R) => unknown) ? R : never;

declare namespace callBind {
	/**
	 * For a given function, creates a bound function that has the same body as the original function.
	 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
	 *
	 * Equivalent to:
	 * ```js
	 * Function.prototype.apply.bind(target, ...)
	 * ```
	 *
	 * @param target The function to be used as the this object for `Function.prototype.apply`.
	 * @param args Arguments to bind to the parameters of the function.
	 */
	function apply<T, A extends unknown[], R>(target: (this: T, ...args: A) => R): (args: Prepend<T, A>) => R;
	function apply<T, A extends unknown[], R>(target: (this: T, ...args: A) => R, thisArg: T): (args: A) => R;
	function apply<T, A0, A extends unknown[], R>(
		target: (this: T, arg0: A0, ...args: A) => R,
		thisArg: T,
		arg0: A0,
	): (args: A) => R;
	function apply<T, A0, A1, A extends unknown[], R>(
		target: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
		thisArg: T,
		arg0: A0,
		arg1: A1,
	): (args: A) => R;
	function apply<T, A0, A1, A2, A extends unknown[], R>(
		target: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
		thisArg: T,
		arg0: A0,
		arg1: A1,
		arg2: A2,
	): (args: A) => R;
	function apply<T, A0, A1, A2, A3, A extends unknown[], R>(
		target: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
		thisArg: T,
		arg0: A0,
		arg1: A1,
		arg2: A2,
		arg3: A3,
	): (args: A) => R;
	function apply<T, AX, R>(target: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (args: AX[]) => R;
}

export = callBind;
