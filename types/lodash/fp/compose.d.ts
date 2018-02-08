// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type FlowRight = 
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    (funcs: ReadonlyArray<_.Many<(...args: any[]) => any>>) => (...args: any[]) => any;

declare const compose: FlowRight;
declare namespace compose {}
export = compose;
