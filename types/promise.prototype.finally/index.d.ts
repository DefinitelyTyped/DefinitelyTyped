// Type definitions for promise.prototype.finally 2.0
// Project: https://github.com/matthew-andrews/Promise.prototype.finally
// Definitions by: Slava Shpitalny <https://github.com/slavik57>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface Promise<T> {
        finally<U>(onFinally?: () => U | PromiseLike<U>): Promise<T>;
    }
}

export function shim(): void;
