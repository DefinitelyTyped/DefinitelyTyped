// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Once {
        /**
         * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
         * of the first call. The func is invoked with the this binding and arguments of the created function.
         *
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        (): Once;
        /**
         * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
         * of the first call. The func is invoked with the this binding and arguments of the created function.
         *
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        <T extends (...args: any[]) => any>(func: T): T;
    }
}

declare const once: Lodash.Once;
export = once;
