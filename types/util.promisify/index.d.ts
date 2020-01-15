// Type definitions for util.promisify 1.0
// Project: https://github.com/ljharb/util.promisify#readme
// Definitions by: Adam Voss <https://github.com/adamvoss>
//                 Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// tslint:disable:ban-types
interface CustomPromisify<TCustom extends Function> extends Function {
    __promisify__: TCustom;
}

declare function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom;
declare function promisify<TResult>(fn: (callback: (err: Error | null, result: TResult) => void) => void): () => Promise<TResult>;
declare function promisify(fn: (callback: (err?: Error | null) => void) => void): () => Promise<void>;
declare function promisify<T1, TResult>(fn: (arg1: T1, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1) => Promise<TResult>;
declare function promisify<T1>(fn: (arg1: T1, callback: (err?: Error | null) => void) => void): (arg1: T1) => Promise<void>;
declare function promisify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2) => Promise<TResult>;
declare function promisify<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2) => Promise<void>;
declare function promisify<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
declare function promisify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
declare function promisify<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error | null, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
declare function promisify<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
declare function promisify<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error | null, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
declare function promisify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: Error | null) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
declare function promisify(fn: Function): Function;

declare namespace promisify {
    function getPolyfill(): typeof promisify;
    const implementation: typeof promisify;
    function shim(): typeof promisify;
}

export = promisify;
