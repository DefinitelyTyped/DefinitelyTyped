// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates a function that invokes func with the this binding of the created function and arguments from start
     * and beyond provided as an array.
     *
     * Note: This method is based on the rest parameter.
     *
     * @param func The function to apply a rest parameter to.
     * @param start The start position of the rest parameter.
     * @return Returns the new function.
     */
    type Rest = (func: (...args: any[]) => any) => (...args: any[]) => any;
}

declare const rest: Lodash.Rest;
export = rest;
