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
