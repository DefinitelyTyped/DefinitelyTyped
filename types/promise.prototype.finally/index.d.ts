// Type definitions for promise.prototype.finally 2.0
// Project: https://github.com/es-shims/promise.prototype.finally
// Definitions by: Slava Shpitalny <https://github.com/slavik57>
//                 BendingBender <https://github.com/BendingBender>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface Promise<T> {
        finally<U>(onFinally?: () => U | PromiseLike<U>): Promise<T>;
    }
}

export = promiseFinally;

declare function promiseFinally<T, U>(promise: Promise<T>, onFinally?: () => U | PromiseLike<U>): Promise<T>;
declare namespace promiseFinally {
    function shim(): void;
}
