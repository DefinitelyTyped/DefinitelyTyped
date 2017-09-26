// Type definitions for p-limit 1.1
// Project: https://github.com/sindresorhus/p-limit#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pLimit {}

export = pLimit;

declare function pLimit<T>(concurrency: number): (fn: () => PromiseLike<T>) => Promise<T>;
