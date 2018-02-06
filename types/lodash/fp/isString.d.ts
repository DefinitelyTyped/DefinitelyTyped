import _ = require("../index");

declare namespace Lodash {
    interface IsString {
        /**
         * Checks if value is classified as a String primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsString;
        /**
         * Checks if value is classified as a String primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is string;
    }
}

declare const isString: Lodash.IsString;
export = isString;
