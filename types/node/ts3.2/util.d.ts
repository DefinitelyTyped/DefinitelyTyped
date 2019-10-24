// tslint:disable-next-line:no-bad-reference
/// <reference path="../util.d.ts" />

declare module "util" {
    namespace inspect {
        const custom: unique symbol;
    }

    namespace promisify {
        const custom: unique symbol;
    }
    function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom;
    function promisify<TResult>(fn: (callback: (err: unknown, result: TResult) => void) => void): () => Promise<TResult>;
    function promisify(fn: (callback: (err?: unknown) => void) => void): () => Promise<void>;
    function promisify<T1, TResult>(fn: (arg1: T1, callback: (err: unknown, result: TResult) => void) => void): (arg1: T1) => Promise<TResult>;
    function promisify<T1>(fn: (arg1: T1, callback: (err?: unknown) => void) => void): (arg1: T1) => Promise<void>;
    function promisify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2, callback: (err: unknown, result: TResult) => void) => void): (arg1: T1, arg2: T2) => Promise<TResult>;
    function promisify<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err?: unknown) => void) => void): (arg1: T1, arg2: T2) => Promise<void>;
    function promisify<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: unknown, result: TResult) => void) => void):
        (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
    function promisify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: unknown) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
    function promisify<T1, T2, T3, T4, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: unknown, result: TResult) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
    function promisify<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: unknown) => void) => void):
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
    function promisify<T1, T2, T3, T4, T5, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: unknown, result: TResult) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
    function promisify<T1, T2, T3, T4, T5>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: unknown) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
    function promisify(fn: Function): Function;

    namespace types {
        function isBigInt64Array(value: any): value is BigInt64Array;
        function isBigUint64Array(value: any): value is BigUint64Array;
    }
}
