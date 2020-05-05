// Type definitions for promise-abortable 1.2
// Project: https://github.com/dondevi/promise-abortable
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface AbortSignal {
    readonly aborted: boolean;

    onabort: (reason: any) => void;
}

type Executor<T> = (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void,
                    signal: AbortSignal) => void;

declare class AbortablePromise<T> extends Promise<T> {
    constructor(executor: Executor<T>);

    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): AbortablePromise<TResult1 | TResult2>;

    catch<TResult = never>(
        onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): AbortablePromise<T | TResult>;

    abort(reason?: any): AbortablePromise<T>;

    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>,
        T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>,
        T9 | PromiseLike<T9>, T10 | PromiseLike<T10>
    ]): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>,
        T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>,
        T9 | PromiseLike<T9>
    ]): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

    static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>,
        T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>
    ]): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

    static all<T1, T2, T3, T4, T5, T6, T7>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>,
        T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>
    ]): AbortablePromise<[T1, T2, T3, T4, T5, T6, T7]>;

    static all<T1, T2, T3, T4, T5, T6>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>,
        T5 | PromiseLike<T5>, T6 | PromiseLike<T6>
    ]): AbortablePromise<[T1, T2, T3, T4, T5, T6]>;

    static all<T1, T2, T3, T4, T5>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>,
        T5 | PromiseLike<T5>
    ]): AbortablePromise<[T1, T2, T3, T4, T5]>;

    static all<T1, T2, T3, T4>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>
    ]): AbortablePromise<[T1, T2, T3, T4]>;

    static all<T1, T2, T3>(values: [
        T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>
    ]): AbortablePromise<[T1, T2, T3]>;

    static all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): AbortablePromise<[T1, T2]>;

    static all<T>(values: ReadonlyArray<T | PromiseLike<T>>): AbortablePromise<T[]>;

    static race<T>(values: ReadonlyArray<T>): AbortablePromise<T extends PromiseLike<infer U> ? U : T>;
}

export = AbortablePromise;
