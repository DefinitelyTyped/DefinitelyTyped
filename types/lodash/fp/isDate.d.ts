import _ = require("../index");

declare namespace Lodash {
    interface IsDate {
        /**
         * Checks if value is classified as a Date object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsDate;
        /**
         * Checks if value is classified as a Date object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is Date;
    }
}

declare const isDate: Lodash.IsDate;
export = isDate;
