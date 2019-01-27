// Type definitions for p-cancelable 1.0
// Project: https://github.com/sindresorhus/p-cancelable#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PCancelable;

declare const PCancelable: PCancelableConstructor;

interface PCancelableConstructor extends PromiseConstructor {
    readonly prototype: PCancelable.PCancelable<any>;
    readonly CancelError: PCancelable.CancelErrorConstructor;

    new <T>(
        executor: (
            resolve: (value?: T | PromiseLike<T>) => void,
            reject: (reason?: any) => void,
            onCancel: PCancelable.OnCancelFn
        ) => void
    ): PCancelable.PCancelable<T>;

    fn<R>(
        userFn: (onCancel: PCancelable.OnCancelFn) => PromiseLike<R>
    ): () => PCancelable.PCancelable<R>;
    fn<T1, R>(
        userFn: (param1: T1, onCancel: PCancelable.OnCancelFn) => PromiseLike<R>
    ): (param1: T1) => PCancelable.PCancelable<R>;
    fn<T1, T2, R>(
        userFn: (param1: T1, param2: T2, onCancel: PCancelable.OnCancelFn) => PromiseLike<R>
    ): (param1: T1, param2: T2) => PCancelable.PCancelable<R>;
    fn<T1, T2, T3, R>(
        userFn: (
            param1: T1,
            param2: T2,
            param3: T3,
            onCancel: PCancelable.OnCancelFn
        ) => PromiseLike<R>
    ): (param1: T1, param2: T2, param3: T3) => PCancelable.PCancelable<R>;
    fn<T1, T2, T3, T4, R>(
        userFn: (
            param1: T1,
            param2: T2,
            param3: T3,
            param4: T4,
            onCancel: PCancelable.OnCancelFn
        ) => PromiseLike<R>
    ): (param1: T1, param2: T2, param3: T3, param4: T4) => PCancelable.PCancelable<R>;
    fn<R>(userFn: (...args: any[]) => PromiseLike<R>): (args: any[]) => PCancelable.PCancelable<R>;
}

declare namespace PCancelable {
    interface PCancelable<T> extends Promise<T> {
        readonly isCanceled: boolean;
        cancel(reason?: string): void;
    }

    interface OnCancelFn {
        (cancelHandler: () => void): void;
        shouldReject: boolean;
    }

    interface CancelErrorConstructor extends ErrorConstructor {
        new (reason?: string): CancelError;
    }

    interface CancelError extends Error {
        readonly name: 'CancelError';
        readonly isCanceled: boolean;
    }
}
