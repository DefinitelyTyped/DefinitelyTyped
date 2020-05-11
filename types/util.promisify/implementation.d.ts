import util = require('util');

// tslint:disable-next-line: ban-types
declare function promisify<TCustom extends Function>(fn: util.CustomPromisify<TCustom>): TCustom;

declare function promisify<TResult>(
	fn: (callback: (err: any, result: TResult) => void) => void,
): () => Promise<TResult>;
declare function promisify(fn: (callback: (err?: any) => void) => void): () => Promise<void>;

declare function promisify<T1, TResult>(
	fn: (arg1: T1, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1) => Promise<TResult>;
declare function promisify<T1>(fn: (arg1: T1, callback: (err?: any) => void) => void): (arg1: T1) => Promise<void>;

declare function promisify<T1, T2, TResult>(
	fn: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1, arg2: T2) => Promise<TResult>;
declare function promisify<T1, T2>(
	fn: (arg1: T1, arg2: T2, callback: (err?: any) => void) => void,
): (arg1: T1, arg2: T2) => Promise<void>;

declare function promisify<T1, T2, T3, TResult>(
	fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
declare function promisify<T1, T2, T3>(
	fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: any) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;

declare function promisify<T1, T2, T3, T4, TResult>(
	fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
declare function promisify<T1, T2, T3, T4>(
	fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: any) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;

declare function promisify<T1, T2, T3, T4, T5, TResult>(
	fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
declare function promisify<T1, T2, T3, T4, T5>(
	fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: any) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;

// tslint:disable-next-line: ban-types
declare function promisify(fn: Function): Function;

declare namespace promisify {
	const custom: typeof util.promisify.custom;

	/**
	 * @deprecated
	 * Not exposed by native `util.promisify` or supported by browserify's `util.promisify`.
	 *
	 * Use `util.promisify.custom` instead.
	 */
	const customPromisifyArgs: unique symbol;
}

export = promisify;
