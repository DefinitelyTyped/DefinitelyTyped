// Type definitions for p-map 1.1
// Project: https://github.com/sindresorhus/p-map#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = pMap;

declare function pMap<T = any, M = T>(input: Iterable<Input<T>>, mapper: Mapper<T, M>, options?: pMap.Options): Promise<M[]>;

type Input<T> = Promise<T> | PromiseLike<T> | T;
type Mapper<T, R> = (el: T, index: number) => Promise<R> | R;

declare namespace pMap {
    interface Options {
        concurrency?: number;
    }
}
