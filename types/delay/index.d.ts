// Type definitions for delay 2.0
// Project: https://github.com/sindresorhus/delay#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = delay;

declare function delay<T>(ms: number): delay.PDelayedPassThroughThunk<T>;
declare function delay<T>(ms: number, value: T): delay.PDelayedThunk<T>;

declare namespace delay {
    function reject(ms: number, rejectionValue?: any): PDelayedThunk<never>;

    class CancelError extends Error {
        readonly name: 'CancelError';
        constructor(message?: string);
    }

    type PDelayedThunk<T> = ((value: any) => DelayedPromiseLike<T>) & DelayedPromiseLike<T>;

    type PDelayedPassThroughThunk<TValue> = ((value: TValue) => DelayedPromiseLike<TValue>) & DelayedPromiseLike<void>;

    interface DelayedPromiseLike<T> {
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
                                             onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult>;
        cancel(): void;
    }
}
