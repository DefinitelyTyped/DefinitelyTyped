// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Flow = 
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    (funcs: ReadonlyArray<_.Many<(...args: any[]) => any>>) => (...args: any[]) => any;

declare const flow: Flow;
declare namespace flow {}
export = flow;
