export = hash;

type PromiseHash = <T>(promiseHash: { [P in keyof T]: PromiseLike<T[P]> | T[P] }) => Promise<T>;

declare global {
    interface PromiseConstructor {
        hash: PromiseHash;
    }
}

declare const hash: PromiseHash;
