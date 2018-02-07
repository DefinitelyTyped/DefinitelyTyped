// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
     * Any additional arguments are provided to the invoked method.
     *
     * @param object The object to query.
     * @param args The arguments to invoke the method with.
     * @return Returns the new function.
     */
    type MethodOf = (object: object) => (path: _.PropertyPath) => any;
}

declare const methodOf: Lodash.MethodOf;
export = methodOf;
