import _ = require("../index");

declare namespace Lodash {
    interface KeysIn {
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects.
         *
         * @param object The object to query.
         * @return An array of property names.
         */
        (): KeysIn;
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects.
         *
         * @param object The object to query.
         * @return An array of property names.
         */
        (object: any): string[];
    }
}

declare const keysIn: Lodash.KeysIn;
export = keysIn;
