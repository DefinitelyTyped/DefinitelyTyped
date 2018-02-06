import _ = require("../index");

declare namespace Lodash {
    interface IsTypedArray {
        /**
         * Checks if value is classified as a typed array.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsTypedArray;
        /**
         * Checks if value is classified as a typed array.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): boolean;
    }
}

declare const isTypedArray: Lodash.IsTypedArray;
export = isTypedArray;
