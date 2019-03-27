// Type definitions for p-times 1.0
// Project: https://github.com/sindresorhus/p-times#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pTimes;

declare function pTimes<T>(
    count: number,
    mapper: (index: number) => T | PromiseLike<T>,
    options?: pTimes.Options
): Promise<T[]>;

declare namespace pTimes {
    interface Options {
        concurrency?: number;
    }
}
