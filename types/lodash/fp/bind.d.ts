import _ = require("../index");

declare namespace Lodash {
    interface Bind {
        (): Bind;
        (...partials: any[]): Bind1x1;
        <TValue>(...partials: any[], thisArg: any): _.LoDashImplicitWrapper<(...args: any[]) => any>;
    }
    interface Bind1x1 {
        (): Bind1x1;
        <TValue>(thisArg: any): _.LoDashImplicitWrapper<(...args: any[]) => any>;
    }
}

declare const bind: Lodash.Bind;
export = bind;
