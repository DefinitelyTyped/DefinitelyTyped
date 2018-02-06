import _ = require("../index");

declare namespace Lodash {
    interface IsEmpty {
        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         *
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         */
        (): IsEmpty;
        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         *
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         */
        (value: any): boolean;
    }
}

declare const isEmpty: Lodash.IsEmpty;
export = isEmpty;
