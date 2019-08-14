// Type definitions for mpromise 0.5.4
// Project: https://github.com/aheckmann/mpromise
// Definitions by: Seulgi Kim <https://github.com/sgkim126>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IResolveFunction<F, R> {
    (err: R, ...args: F[]): void;
    (err: R, arg: F): void;
}

declare class Promise<F, R> {
    constructor(fn?: IResolveFunction<F, R>);

    static FAILURE: string;
    static SUCCESS: string;

    fulfill(...args: F[]): Promise<F, R>;
    reject(reason: R): Promise<F, R>;
    resolve(reason: R, ...args: F[]): Promise<F, R>;
    resolve(reason: R, arg: F): Promise<F, R>;

    onFulfill(callback: (...args: F[]) => void): Promise<F, R>;
    onReject(callback: (err: R) => void): Promise<F, R>;
    onResolve(callback: IResolveFunction<F, R>): Promise<F, R>;

    then<TRes>(onFulfilled: (...values: F[]) => TRes | PromiseLike<TRes>, onRejected?: (err: R) => TRes | PromiseLike<TRes>): Promise<TRes, R>;
    end(): void;

    chain(promise: Promise<F, R>): Promise<F, R>;
}

export = Promise;
