// Type definitions for p-waterfall 1.0
// Project: https://github.com/sindresorhus/p-waterfall#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export = pWaterfall;

type Task<T, R> = (previousValue: T) => R | PromiseLike<R>;
type InitialTask<R> = () => R | PromiseLike<R>;

declare function pWaterfall<R>(tasks: [InitialTask<R>]): Promise<R>;
declare function pWaterfall<T1, R>(tasks: [InitialTask<T1>, Task<T1, R>]): Promise<R>;
declare function pWaterfall<T1, T2, R>(
    tasks: [InitialTask<T1>, Task<T1, T2>, Task<T2, R>]
): Promise<R>;
declare function pWaterfall<T1, T2, T3, R>(
    tasks: [InitialTask<T1>, Task<T1, T2>, Task<T2, T3>, Task<T3, R>]
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, R>(
    tasks: [InitialTask<T1>, Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, R>]
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, R>(
    tasks: [InitialTask<T1>, Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, R>]
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, T6, R>(
    tasks: [
        InitialTask<T1>,
        Task<T1, T2>,
        Task<T2, T3>,
        Task<T3, T4>,
        Task<T4, T5>,
        Task<T5, T6>,
        Task<T6, R>
    ]
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, T6, T7, R>(
    tasks: [
        InitialTask<T1>,
        Task<T1, T2>,
        Task<T2, T3>,
        Task<T3, T4>,
        Task<T4, T5>,
        Task<T5, T6>,
        Task<T6, T7>,
        Task<T7, R>
    ]
): Promise<R>;

declare function pWaterfall<T1, R>(tasks: [Task<T1, R>], initialValue: T1): Promise<R>;
declare function pWaterfall<T1, T2, R>(
    tasks: [Task<T1, T2>, Task<T2, R>],
    initialValue: T1
): Promise<R>;
declare function pWaterfall<T1, T2, T3, R>(
    tasks: [Task<T1, T2>, Task<T2, T3>, Task<T3, R>],
    initialValue: T1
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, R>(
    tasks: [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, R>],
    initialValue: T1
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, R>(
    tasks: [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, R>],
    initialValue: T1
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, T6, R>(
    tasks: [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, T6>, Task<T6, R>],
    initialValue: T1
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, T6, T7, R>(
    tasks: [
        Task<T1, T2>,
        Task<T2, T3>,
        Task<T3, T4>,
        Task<T4, T5>,
        Task<T5, T6>,
        Task<T6, T7>,
        Task<T7, R>
    ],
    initialValue: T1
): Promise<R>;
declare function pWaterfall<T1, T2, T3, T4, T5, T6, T7, T8, R>(
    tasks: [
        Task<T1, T2>,
        Task<T2, T3>,
        Task<T3, T4>,
        Task<T4, T5>,
        Task<T5, T6>,
        Task<T6, T7>,
        Task<T7, T8>,
        Task<T8, R>
    ],
    initialValue: T1
): Promise<R>;

declare function pWaterfall(tasks: Iterable<Task<any, any>>, initialValue?: any): Promise<any>;
