// Type definitions for p-reduce 1.0
// Project: https://github.com/sindresorhus/p-reduce#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = pReduce;

declare function pReduce<T, U = T>(input: Iterable<PromiseLike<T> | T>,
                                   reducer: (previousValue: U, currentValue: T, index: number) => Promise<U> | U,
                                   initialValue?: U): Promise<U>;
