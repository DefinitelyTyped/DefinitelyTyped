// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates a function that negates the result of the predicate func. The func predicate is invoked with
     * the this binding and arguments of the created function.
     *
     * @param predicate The predicate to negate.
     * @return Returns the new function.
     */
    type Negate = <T extends (...args: any[]) => any>(predicate: T) => T;
}

declare const complement: Lodash.Negate;
export = complement;
