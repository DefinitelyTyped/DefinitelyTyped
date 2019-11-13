// Type definitions for promise-hash 1.3
// Project: https://github.com/mtimofiiv/promise-hash
// Definitions by: Michael Shafir <https://github.com/mshafir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hash;

type PromiseHash<T> = { [P in keyof T]: PromiseLike<T[P]> | T[P] };

declare global {
    interface PromiseConstructor {
        hash<T>(promiseHash: PromiseHash<T>): Promise<{ [P in keyof T]: T[P] }>;
    }
}

declare function hash<T>(promiseHash: PromiseHash<T>): Promise<{ [P in keyof T]: T[P] }>;
