// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
