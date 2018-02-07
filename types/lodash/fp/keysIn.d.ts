// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates an array of the own and inherited enumerable property names of object.
     *
     * Note: Non-object values are coerced to objects.
     *
     * @param object The object to query.
     * @return An array of property names.
     */
    type KeysIn = (object: any) => string[];
}

declare const keysIn: Lodash.KeysIn;
export = keysIn;
