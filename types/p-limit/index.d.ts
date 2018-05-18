// Type definitions for p-limit 1.1
// Project: https://github.com/sindresorhus/p-limit#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare namespace pLimit {}

export = pLimit;

declare function pLimit(concurrency: number): <T>(fn: () => PromiseLike<T>) => Promise<T>;
