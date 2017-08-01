// Type definitions for p-map 1.1
// Project: https://github.com/sindresorhus/p-map#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pMap;

declare function pMap<TAll, MAll>(input: Iterable<Promise<TAll> | PromiseLike<TAll> | TAll>, mapper: Mapper<TAll, MAll>, options?: pMap.Options): Promise<MAll[]>;
declare function pMap<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>, Input<T5>, Input<T6>, Input<T7>, Input<T8>, Input<T9>, Input<T10>],
                                                                  mapper: Mapper<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10, M>,
                                                                  options?: pMap.Options): Promise<[M, M, M, M, M, M, M, M, M, M]>;
declare function pMap<T1, T2, T3, T4, T5, T6, T7, T8, T9, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>, Input<T5>, Input<T6>, Input<T7>, Input<T8>, Input<T9>],
                                                             mapper: Mapper<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9, M>,
                                                             options?: pMap.Options): Promise<[M, M, M, M, M, M, M, M, M]>;
declare function pMap<T1, T2, T3, T4, T5, T6, T7, T8, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>, Input<T5>, Input<T6>, Input<T7>, Input<T8>],
                                                         mapper: Mapper<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8, M>,
                                                         options?: pMap.Options): Promise<[M, M, M, M, M, M, M, M]>;
declare function pMap<T1, T2, T3, T4, T5, T6, T7, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>, Input<T5>, Input<T6>, Input<T7>],
                                                     mapper: Mapper<T1 | T2 | T3 | T4 | T5 | T6 | T7, M>,
                                                     options?: pMap.Options): Promise<[M, M, M, M, M, M, M]>;
declare function pMap<T1, T2, T3, T4, T5, T6, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>, Input<T5>, Input<T6>],
                                                 mapper: Mapper<T1 | T2 | T3 | T4 | T5 | T6, M>,
                                                 options?: pMap.Options): Promise<[M, M, M, M, M, M]>;
declare function pMap<T1, T2, T3, T4, T5, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>, Input<T5>],
                                             mapper: Mapper<T1 | T2 | T3 | T4 | T5, M>,
                                             options?: pMap.Options): Promise<[M, M, M, M, M]>;
declare function pMap<T1, T2, T3, T4, M>(input: [Input<T1>, Input<T2>, Input<T3>, Input<T4>],
                                         mapper: Mapper<T1 | T2 | T3 | T4, M>,
                                         options?: pMap.Options): Promise<[M, M, M, M]>;
declare function pMap<T1, T2, T3, M>(input: [Input<T1>, Input<T2>, Input<T3>],
                                     mapper: Mapper<T1 | T2 | T3, M>,
                                     options?: pMap.Options): Promise<[M, M, M]>;
declare function pMap<T1, T2, M>(input: [Input<T1>, Input<T2>], mapper: Mapper<T1 | T2, M>, options?: pMap.Options): Promise<[M, M]>;
declare function pMap<T1, M1>(input: [Input<T1>], mapper: Mapper<T1, M1>, options?: pMap.Options): Promise<[M1]>;
declare function pMap(input: Iterable<Input<any>>, mapper: Mapper<any, any>, options?: pMap.Options): Promise<any[]>;

type Input<T> = Promise<T> | PromiseLike<T> | T;
type Mapper<T, R> = (el: T, index: number) => Promise<R> | R;

declare namespace pMap {
    interface Options {
        concurrency?: number;
    }
}
