// Type definitions for mpromise 0.5.4
// Project: https://github.com/aheckmann/mpromise
// Definitions by: Seulgi Kim <https://github.com/sgkim126/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface IFulfillFunction<F> {
    (...args: F[]): void;
    (arg: F): void;
}
interface IRejectFunction<R> {
    (err: R): void;
}
interface IResolveFunction<F, R> {
    (err: R, ...args: F[]): void;
    (err: R, arg: F): void;
}

declare class Promise<F, R> {
    constructor(fn?: IResolveFunction<F, R>);

    static FAILURE: string;
    static SUCCESS: string;

    fulfill(...args: F[]): Promise<F, R>;
    fulfill(arg: F): Promise<F, R>;
    reject(reason: R): Promise<F, R>;
    resolve(reason: R, ...args: F[]): Promise<F, R>;
    resolve(reason: R, arg: F): Promise<F, R>;

    onFulfill(callback: IFulfillFunction<F>): Promise<F, R>;
    onReject(callback: IRejectFunction<R>): Promise<F, R>;
    onResolve(callback: IResolveFunction<F, R>): Promise<F, R>;

    then<F, R>(onFulfilled: IFulfillFunction<F>, onRejected?: IRejectFunction<R>): Promise<F, R>;
    end(): void;

    chain(promise: Promise<F, R>): Promise<F, R>;
}

export = Promise;
