// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Memoize =
    /**
     * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
     * storing the result based on the arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
     * the this binding of the memoized function.
     *
     * @param func The function to have its output memoized.
     * @param resolver The function to resolve the cache key.
     * @return Returns the new memoizing function.
     */
    <T extends (...args: any[]) => any>(func: T) => T & _.MemoizedFunction;

declare const memoize: Memoize;
export = memoize;
