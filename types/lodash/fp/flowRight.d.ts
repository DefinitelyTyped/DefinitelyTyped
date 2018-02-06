import _ = require("../index");

declare namespace Lodash {
    interface FlowRight {
        /**
         * This method is like _.flow except that it creates a function that invokes the provided functions from right
         * to left.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        (): FlowRight;
        /**
         * This method is like _.flow except that it creates a function that invokes the provided functions from right
         * to left.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        (funcs: ReadonlyArray<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
}

declare const flowRight: Lodash.FlowRight;
export = flowRight;
