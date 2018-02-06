import _ = require("../index");

declare namespace Lodash {
    interface OverArgs {
        (): OverArgs;
        (...transforms: Array<_.Many<(...args: any[]) => any>>): OverArgs1x1;
        (...transforms: Array<_.Many<(...args: any[]) => any>>, func: (...args: any[]) => any): (...args: any[]) => any;
    }
    interface OverArgs1x1 {
        (): OverArgs1x1;
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const overArgs: Lodash.OverArgs;
export = overArgs;
