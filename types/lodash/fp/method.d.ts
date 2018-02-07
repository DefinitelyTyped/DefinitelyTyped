// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates a function that invokes the method at path on a given object. Any additional arguments are provided
     * to the invoked method.
     *
     * @param path The path of the method to invoke.
     * @param args The arguments to invoke the method with.
     * @return Returns the new function.
     */
    type Method = (path: _.PropertyPath) => (object: any) => any;
}

declare const method: Lodash.Method;
export = method;
