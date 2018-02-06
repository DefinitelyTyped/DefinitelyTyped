import _ = require("../index");

declare namespace Lodash {
    interface Spread {
        (): Spread;
        <TResult>(func: (...args: any[]) => TResult): (...args: any[]) => TResult;
    }
}

declare const spread: Lodash.Spread;
export = spread;
