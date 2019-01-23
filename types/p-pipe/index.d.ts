// Type definitions for p-pipe 1.2
// Project: https://github.com/sindresorhus/p-pipe#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = pPipe;

// tslint:disable:no-unnecessary-generics
declare function pPipe<T1, R>(...args: Tasks1<T1, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, R>(...args: Tasks2<T1, T2, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, R>(...args: Tasks3<T1, T2, T3, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, R>(...args: Tasks4<T1, T2, T3, T4, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, R>(
    ...args: Tasks5<T1, T2, T3, T4, T5, R>
): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, T6, R>(
    ...args: Tasks6<T1, T2, T3, T4, T5, T6, R>
): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, T6, T7, R>(
    ...args: Tasks7<T1, T2, T3, T4, T5, T6, T7, R>
): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, T6, T7, T8, R>(
    ...args: Tasks8<T1, T2, T3, T4, T5, T6, T7, T8, R>
): PromiseTask<T1, R>;
declare function pPipe(...args: Array<Task<any, any>>): PromiseTask<any, any>;

declare function pPipe<T1, R>(tasks: Tasks1<T1, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, R>(tasks: Tasks2<T1, T2, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, R>(tasks: Tasks3<T1, T2, T3, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, R>(tasks: Tasks4<T1, T2, T3, T4, R>): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, R>(
    tasks: Tasks5<T1, T2, T3, T4, T5, R>
): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, T6, R>(
    tasks: Tasks6<T1, T2, T3, T4, T5, T6, R>
): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, T6, T7, R>(
    tasks: Tasks7<T1, T2, T3, T4, T5, T6, T7, R>
): PromiseTask<T1, R>;
declare function pPipe<T1, T2, T3, T4, T5, T6, T7, T8, R>(
    tasks: Tasks8<T1, T2, T3, T4, T5, T6, T7, T8, R>
): PromiseTask<T1, R>;
declare function pPipe(tasks: Array<Task<any, any>>): PromiseTask<any, any>;

type Tasks1<T1, R> = [PromiseTask<T1, R>];
type Tasks2<T1, T2, R> = [Task<T1, T2>, Task<T2, R>];
type Tasks3<T1, T2, T3, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, R>];
type Tasks4<T1, T2, T3, T4, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, R>];
type Tasks5<T1, T2, T3, T4, T5, R> = [
    Task<T1, T2>,
    Task<T2, T3>,
    Task<T3, T4>,
    Task<T4, T5>,
    Task<T5, R>
];
type Tasks6<T1, T2, T3, T4, T5, T6, R> = [
    Task<T1, T2>,
    Task<T2, T3>,
    Task<T3, T4>,
    Task<T4, T5>,
    Task<T5, T6>,
    Task<T6, R>
];
type Tasks7<T1, T2, T3, T4, T5, T6, T7, R> = [
    Task<T1, T2>,
    Task<T2, T3>,
    Task<T3, T4>,
    Task<T4, T5>,
    Task<T5, T6>,
    Task<T6, T7>,
    Task<T7, R>
];
type Tasks8<T1, T2, T3, T4, T5, T6, T7, T8, R> = [
    Task<T1, T2>,
    Task<T2, T3>,
    Task<T3, T4>,
    Task<T4, T5>,
    Task<T5, T6>,
    Task<T6, T7>,
    Task<T7, T8>,
    Task<T8, R>
];

type Task<T, R> = (input: T) => PromiseLike<R> | R;
type PromiseTask<T, R> = (input: T) => Promise<R>;
