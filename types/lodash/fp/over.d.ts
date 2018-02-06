import _ = require("../index");

declare namespace Lodash {
    interface Over {
        (): Over;
        <TResult>(...iteratees: Array<_.Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }
}

declare const over: Lodash.Over;
export = over;
