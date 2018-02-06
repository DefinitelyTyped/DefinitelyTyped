import _ = require("../index");

declare namespace Lodash {
    interface IsBoolean {
        /**
         * Checks if value is classified as a boolean primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsBoolean;
        /**
         * Checks if value is classified as a boolean primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is boolean;
    }
}

declare const isBoolean: Lodash.IsBoolean;
export = isBoolean;
