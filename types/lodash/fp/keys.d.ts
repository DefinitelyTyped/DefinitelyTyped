// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Keys {
        /**
         * Creates an array of the own enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects. See the ES spec for more details.
         *
         * @param object The object to query.
         * @return Returns the array of property names.
         */
        (): Keys;
        /**
         * Creates an array of the own enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects. See the ES spec for more details.
         *
         * @param object The object to query.
         * @return Returns the array of property names.
         */
        (object: any): string[];
    }
}

declare const keys: Lodash.Keys;
export = keys;
