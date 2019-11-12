// Type definitions for promise-hash 1.3
// Project: https://github.com/mtimofiiv/promise-hash
// Definitions by: Michael Shafir <https://github.com/mshafir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hash;

declare global {
    interface PromiseConstructor {
        hash<T>(promiseHash: { [P in keyof T]: PromiseLike<T[P]> | T[P] }):
            Promise<{ [P in keyof T]: T[P] }>;
    }
}

declare function hash<T>(
    promiseHash: { [P in keyof T]: PromiseLike<T[P]> | T[P]}):
    Promise<{ [P in keyof T]: T[P] }>;
