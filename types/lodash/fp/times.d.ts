import _ = require("../index");

declare namespace Lodash {
    interface Times {
        (): Times;
        <TResult>(iteratee: (num: number) => TResult): Times1x1<TResult>;
        <TResult>(iteratee: (num: number) => TResult, n: number): TResult[];
    }
    interface Times1x1<TResult> {
        (): Times1x1<TResult>;
        (n: number): TResult[];
    }
}

declare const times: Lodash.Times;
export = times;
