import _ = require("../index");

declare namespace Lodash {
    interface IsSet {
        /**
         * Checks if value is classified as a Set object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (): IsSet;
        /**
         * Checks if value is classified as a Set object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (value: any): value is Set<any>;
    }
}

declare const isSet: Lodash.IsSet;
export = isSet;
