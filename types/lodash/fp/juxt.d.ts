// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Over = 
    /**
     * Creates a function that invokes iteratees with the arguments provided to the created function and returns
     * their results.
     *
     * @param iteratees The iteratees to invoke.
     * @return Returns the new function.
     */
    <TResult>(iteratees: _.Many<(...args: any[]) => TResult>) => (...args: any[]) => TResult[];

declare const juxt: Over;
declare namespace juxt {}
export = juxt;
