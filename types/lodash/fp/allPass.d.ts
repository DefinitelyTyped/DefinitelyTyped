// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type OverEvery =
    /**
     * Creates a function that checks if all of the predicates return truthy when invoked with the arguments
     * provided to the created function.
     *
     * @param predicates The predicates to check.
     * @return Returns the new function.
     */
    <T>(predicates: _.Many<(...args: T[]) => boolean>) => (...args: T[]) => boolean;

declare const allPass: OverEvery;
export = allPass;
