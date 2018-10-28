// Type definitions for p-lazy 1.0
// Project: https://github.com/sindresorhus/p-lazy#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PLazy;

declare class PLazy<T> extends Promise<T> {
    static from<T>(fn: () => T | PromiseLike<T>): PLazy<T>;
}
