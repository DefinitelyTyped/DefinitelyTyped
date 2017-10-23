// Type definitions for p-cancelable 0.3
// Project: https://github.com/sindresorhus/p-cancelable#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PCancelable;

declare const PCancelable: PCancelableConstructor;

interface PCancelableConstructor extends PromiseConstructor {
    readonly prototype: PCancelable.PCancelable<any>;
    readonly CancelError: PCancelable.CancelErrorConstructor;
    fn<T, R>(wrapper: (onCancel: (fn?: () => void) => void, input: T) => PromiseLike<R>): (input: T) => PCancelable.PCancelable<R>;
    new<T>(executor: (onCancel: (fn?: () => void) => void, resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): PCancelable.PCancelable<T>;
}

declare namespace PCancelable {
    interface PCancelable<T> extends Promise<T> {
        readonly canceled: boolean;
        cancel(): void;
    }

    interface CancelErrorConstructor extends ErrorConstructor {
        new (): CancelError;
    }

    interface CancelError extends Error {
        readonly name: 'CancelError';
    }
}
