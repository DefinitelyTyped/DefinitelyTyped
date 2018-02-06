import _ = require("../index");

declare namespace Lodash {
    interface IsArray {
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsArray;
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is any[];
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        <T>(value: any): value is any[];
    }
}

declare const isArray: Lodash.IsArray;
export = isArray;
