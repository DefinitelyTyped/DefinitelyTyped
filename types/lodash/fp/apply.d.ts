// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates a function that invokes func with the this binding of the created function and an array of arguments
     * much like Function#apply.
     *
     * Note: This method is based on the spread operator.
     *
     * @param func The function to spread arguments over.
     * @return Returns the new function.
     */
    type Spread = <TResult>(func: (...args: any[]) => TResult) => (...args: any[]) => TResult;
}

declare const apply: Lodash.Spread;
export = apply;
