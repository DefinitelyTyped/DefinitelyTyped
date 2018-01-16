// Type definitions for p-try 1.0
// Project: https://github.com/sindresorhus/p-try#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pTry;

declare function pTry<T>(cb: () => Promise<T> | PromiseLike<T> | T): Promise<T>;
