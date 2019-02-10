// Type definitions for p-time 1.0
// Project: https://github.com/sindresorhus/p-time#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = pTime;

declare function pTime<TArgs extends any[], TRes>(
    fn: (...args: TArgs) => PromiseLike<TRes>
): (...args: TArgs) => pTime.PromiseWithTime<TRes>;

declare namespace pTime {
    const log: typeof pTime;

    interface PromiseWithTime<T> extends Promise<T> {
        time?: number;
    }
}
