// Type definitions for p-forever 1.0
// Project: https://github.com/sindresorhus/p-forever#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = pForever;

declare function pForever<T>(
    fn: (previousValue?: T) => T | PromiseLike<T> | typeof pForever.end
): Promise<void>;
declare function pForever<T>(
    fn: (previousValue: T) => T | PromiseLike<T> | typeof pForever.end,
    initialValue: T
): Promise<void>;

declare namespace pForever {
    const end: unique symbol;
}
