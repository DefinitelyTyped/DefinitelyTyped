import _ = require("../index");

declare namespace Lodash {
    interface IsUndefined {
        /**
         * Checks if value is undefined.
         *
         * @param value The value to check.
         * @return Returns true if value is undefined, else false.
         */
        (): IsUndefined;
        /**
         * Checks if value is undefined.
         *
         * @param value The value to check.
         * @return Returns true if value is undefined, else false.
         */
        (value: any): value is undefined;
    }
}

declare const isUndefined: Lodash.IsUndefined;
export = isUndefined;
