// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates a function that checks if any of the predicates return truthy when invoked with the arguments
     * provided to the created function.
     *
     * @param predicates The predicates to check.
     * @return Returns the new function.
     */
    type OverSome = <T>(predicates: _.Many<(...args: T[]) => boolean>) => (...args: T[]) => boolean;
}

declare const anyPass: Lodash.OverSome;
export = anyPass;
