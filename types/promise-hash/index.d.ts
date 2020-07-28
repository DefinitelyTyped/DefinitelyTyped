// Type definitions for promise-hash 1.3
// Project: https://github.com/mtimofiiv/promise-hash
// Definitions by: Michael Shafir <https://github.com/mshafir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hash;

type PromiseHash = <T>(promiseHash: { [P in keyof T]: PromiseLike<T[P]> | T[P] }) => Promise<T>;

declare global {
    interface PromiseConstructor {
        hash: PromiseHash;
    }
}

declare const hash: PromiseHash;
