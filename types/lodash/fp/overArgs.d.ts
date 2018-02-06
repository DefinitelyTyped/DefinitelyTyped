import _ = require("../index");

declare namespace Lodash {
    interface OverArgs {
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        (): OverArgs;
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        (transforms: _.Many<(...args: any[]) => any>): OverArgs1x1;
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        (transforms: _.Many<(...args: any[]) => any>, func: (...args: any[]) => any): (...args: any[]) => any;
    }
    interface OverArgs1x1 {
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        (): OverArgs1x1;
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const overArgs: Lodash.OverArgs;
export = overArgs;
