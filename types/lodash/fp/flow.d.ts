import _ = require("../index");

declare namespace Lodash {
    interface Flow {
        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        (): Flow;
        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        (funcs: Array<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
}

declare const flow: Lodash.Flow;
export = flow;
