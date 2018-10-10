// Type definitions for p-all 1.0
// Project: https://github.com/sindresorhus/p-all#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pAll;

declare function pAll<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>, PromiseFactory<T5>, PromiseFactory<T6>, PromiseFactory<T7>,
        PromiseFactory<T8>, PromiseFactory<T9>, PromiseFactory<T10>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
declare function pAll<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>, PromiseFactory<T5>, PromiseFactory<T6>, PromiseFactory<T7>,
        PromiseFactory<T8>, PromiseFactory<T9>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
declare function pAll<T1, T2, T3, T4, T5, T6, T7, T8>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>, PromiseFactory<T5>, PromiseFactory<T6>, PromiseFactory<T7>,
        PromiseFactory<T8>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
declare function pAll<T1, T2, T3, T4, T5, T6, T7>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>, PromiseFactory<T5>, PromiseFactory<T6>, PromiseFactory<T7>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
declare function pAll<T1, T2, T3, T4, T5, T6>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>, PromiseFactory<T5>, PromiseFactory<T6>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4, T5, T6]>;
declare function pAll<T1, T2, T3, T4, T5>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>, PromiseFactory<T5>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4, T5]>;
declare function pAll<T1, T2, T3, T4>(
    tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>, PromiseFactory<T4>],
    options?: pAll.Options): Promise<[T1, T2, T3, T4]>;
declare function pAll<T1, T2, T3>(tasks: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>], options?: pAll.Options): Promise<[T1, T2, T3]>;
declare function pAll<T1, T2>(tasks: [PromiseFactory<T1>, PromiseFactory<T2>], options?: pAll.Options): Promise<[T1, T2]>;
declare function pAll<T1>(tasks: [PromiseFactory<T1>], options?: pAll.Options): Promise<[T1]>;
declare function pAll<TAll>(tasks: Iterable<PromiseFactory<TAll>> | Array<PromiseFactory<TAll>>, options?: pAll.Options): Promise<TAll[]>;

type PromiseFactory<T> = () => Promise<T> | PromiseLike<T>;

declare namespace pAll {
    interface Options {
        concurrency?: number;
    }
}
