import _ = require("../index");

declare namespace Lodash {
    interface Flow {
        (): Flow;
        (funcs: Array<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
}

declare const flow: Lodash.Flow;
export = flow;
