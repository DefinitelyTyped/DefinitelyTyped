import _ = require("../index");

declare namespace Lodash {
    interface NthArg {
        /**
         * Creates a function that returns its nth argument.
         *
         * @param n The index of the argument to return.
         * @return Returns the new function.
         */
        (): NthArg;
        /**
         * Creates a function that returns its nth argument.
         *
         * @param n The index of the argument to return.
         * @return Returns the new function.
         */
        (n: number): (...args: any[]) => any;
    }
}

declare const nthArg: Lodash.NthArg;
export = nthArg;
