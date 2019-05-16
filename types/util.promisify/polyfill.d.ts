/// <reference types="node" />

// tslint:disable:ban-types max-line-length
interface CustomPromisify<TCustom extends Function> extends Function {
    __promisify__: TCustom;
}

declare function getPolyfill<TCustom extends Function>(): (fn: CustomPromisify<TCustom>) => TCustom;
declare function getPolyfill<TResult>(): (fn: (callback: (err: Error | null, result: TResult) => void) => void) => () => Promise<TResult>;
declare function getPolyfill(): (fn: (callback: (err?: Error | null) => void) => void) => () => Promise<void>;
declare function getPolyfill<T1, TResult>(): (fn: (arg1: T1, callback: (err: Error | null, result: TResult) => void) => void) => (arg1: T1) => Promise<TResult>;
declare function getPolyfill<T1>(): (fn: (arg1: T1, callback: (err?: Error | null) => void) => void) => (arg1: T1) => Promise<void>;
declare function getPolyfill<T1, T2, TResult>(): (fn: (arg1: T1, arg2: T2, callback: (err: Error | null, result: TResult) => void) => void) => (arg1: T1, arg2: T2) => Promise<TResult>;
declare function getPolyfill<T1, T2>(): (fn: (arg1: T1, arg2: T2, callback: (err?: Error | null) => void) => void) => (arg1: T1, arg2: T2) => Promise<void>;
declare function getPolyfill<T1, T2, T3, TResult>(): (fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error | null, result: TResult) => void) => void) => (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
declare function getPolyfill<T1, T2, T3>(): (fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: Error | null) => void) => void) => (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
declare function getPolyfill<T1, T2, T3, T4, TResult>(): (
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error | null, result: TResult) => void) => void,
) => (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
declare function getPolyfill<T1, T2, T3, T4>(): (fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: Error | null) => void) => void) => (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
declare function getPolyfill<T1, T2, T3, T4, T5, TResult>(): (
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error | null, result: TResult) => void) => void,
) => (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
declare function getPolyfill<T1, T2, T3, T4, T5>(): (
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: Error | null) => void) => void,
) => (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
declare function getPolyfill(): (fn: Function) => Function;

export = getPolyfill;
