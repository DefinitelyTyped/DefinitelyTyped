// Type definitions for promise.prototype.finally v1.0.1
// Project: https://github.com/matthew-andrews/Promise.prototype.finally
// Definitions by: Slava Shpitalny <https://github.com/slavik57>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface Promise<T> {
    finally<U>(onFinally?: () => U | Promise<U>): Promise<U>;
}
