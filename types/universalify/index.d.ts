// Type definitions for universalify 1.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function fromCallback(fn: (callback: (err?: unknown) => void) => void): {
    (): Promise<void>;
    (callback: (err?: unknown) => void): void;
};
export function fromCallback<T1, TResult>(
    fn: (arg1: T1, callback: (err: unknown, result: TResult) => void) => void,
): {
    (arg1: T1): Promise<TResult>;
    (arg1: T1, cb: (err: unknown, result: TResult) => void): void;
};
export function fromCallback<T1>(fn: (arg1: T1, callback: (err?: unknown) => void) => void): {
    (arg1: T1): Promise<void>;
    (arg1: T1, cb: (err?: unknown) => void): void;
};
export function fromCallback<T1, T2, TResult>(
    fn: (arg1: T1, arg2: T2, callback: (err: unknown, result: TResult) => void) => void,
): {
    (arg1: T1, arg2: T2): Promise<TResult>;
    (arg1: T1, arg2: T2, cb: (err: unknown, result: TResult) => void): void;
};
export function fromCallback<T1, T2>(
    fn: (arg1: T1, arg2: T2, callback: (err?: unknown) => void) => void,
): {
    (arg1: T1, arg2: T2): Promise<void>;
    (arg1: T1, arg2: T2, cb: (err: unknown) => void): void;
};
export function fromCallback<T1, T2, T3, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: unknown, result: TResult) => void) => void,
): {
    (arg1: T1, arg2: T2, arg3: T3): Promise<TResult>;
    (arg1: T1, arg2: T2, arg3: T3, cb: (err: unknown, result: TResult) => void): void;
};
export function fromCallback<T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: unknown) => void) => void,
): {
    (arg1: T1, arg2: T2, arg3: T3): Promise<void>;
    (arg1: T1, arg2: T2, arg3: T3, cb: (err?: unknown) => void): void;
};
export function fromCallback<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: unknown, result: TResult) => void) => void,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<TResult>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, cb: (err: unknown, result: TResult) => void): void;
};
export function fromCallback<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: unknown) => void) => void,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<void>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, cb: (err?: unknown) => void): void;
};
export function fromCallback<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: unknown, result: TResult) => void) => void,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<TResult>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, cb: (err: unknown, result: TResult) => void): void;
};
export function fromCallback<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: unknown) => void) => void,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<void>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, cb: (err?: unknown) => void): void;
};
export function fromCallback(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;

export function fromPromise<T1, TResult>(
    fn: (arg1: T1) => Promise<TResult>,
): {
    (arg1: T1): Promise<TResult>;
    (arg1: T1, cb: (err: unknown, result: TResult) => void): void;
};
export function fromPromise<T1>(fn: (arg1: T1) => Promise<void>): {
    (arg1: T1): Promise<void>;
    (arg1: T1, cb: (err?: unknown) => void): void;
};
export function fromPromise<T1, T2, TResult>(
    fn: (arg1: T1, arg2: T2) => Promise<TResult>,
): {
    (arg1: T1, arg2: T2): Promise<TResult>;
    (arg1: T1, arg2: T2, cb: (err: unknown, result: TResult) => void): void;
};
export function fromPromise<T1, T2>(
    fn: (arg1: T1, arg2: T2) => Promise<void>,
): {
    (arg1: T1, arg2: T2): Promise<void>;
    (arg1: T1, arg2: T2, cb: (err?: unknown) => void): void;
};
export function fromPromise<T1, T2, T3, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>,
): {
    (arg1: T1, arg2: T2, arg3: T3): Promise<TResult>;
    (arg1: T1, arg2: T2, arg3: T3, cb: (err: unknown, result: TResult) => void): void;
};
export function fromPromise<T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>,
): {
    (arg1: T1, arg2: T2, arg3: T3): Promise<void>;
    (arg1: T1, arg2: T2, arg3: T3, cb: (err?: unknown) => void): void;
};
export function fromPromise<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<TResult>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, cb: (err: unknown, result: TResult) => void): void;
};
export function fromPromise<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<void>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, cb: (err?: unknown) => void): void;
};
export function fromPromise<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg: T5) => Promise<TResult>,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg: T5): Promise<TResult>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg: T5, cb: (err: unknown, result: TResult) => void): void;
};
export function fromPromise<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg: T5) => Promise<void>,
): {
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg: T5): Promise<void>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg: T5, cb: (err?: unknown) => void): void;
};
export function fromPromise(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
