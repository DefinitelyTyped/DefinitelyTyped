import _ = require("../index");

declare namespace Lodash {
    interface IsRegExp {
        /**
         * Checks if value is classified as a RegExp object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsRegExp;
        /**
         * Checks if value is classified as a RegExp object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is RegExp;
    }
}

declare const isRegExp: Lodash.IsRegExp;
export = isRegExp;
