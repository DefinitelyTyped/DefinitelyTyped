import _ = require("../index");

declare namespace Lodash {
    interface IsNull {
        /**
         * Checks if value is null.
         *
         * @param value The value to check.
         * @return Returns true if value is null, else false.
         */
        (): IsNull;
        /**
         * Checks if value is null.
         *
         * @param value The value to check.
         * @return Returns true if value is null, else false.
         */
        (value: any): value is null;
    }
}

declare const isNull: Lodash.IsNull;
export = isNull;
