import _ = require("../index");

declare namespace Lodash {
    interface FlowRight {
        (): FlowRight;
        (funcs: Array<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
}

declare const flowRight: Lodash.FlowRight;
export = flowRight;
