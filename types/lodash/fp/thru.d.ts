import _ = require("../index");

declare namespace Lodash {
    interface Thru {
        (): Thru;
        <T, TResult>(interceptor: (value: T) => TResult): Thru1x1<T, TResult>;
        <T, TResult>(interceptor: (value: T) => TResult, value: T): TResult;
    }
    interface Thru1x1<T, TResult> {
        (): Thru1x1<T, TResult>;
        (value: T): TResult;
    }
}

declare const thru: Lodash.Thru;
export = thru;
