import _ = require("../index");

declare namespace Lodash {
    interface IsFinite {
        /**
         * Checks if value is a finite primitive number.
         *
         * Note: This method is based on Number.isFinite.
         *
         * @param value The value to check.
         * @return Returns true if value is a finite number, else false.
         */
        (): IsFinite;
        /**
         * Checks if value is a finite primitive number.
         *
         * Note: This method is based on Number.isFinite.
         *
         * @param value The value to check.
         * @return Returns true if value is a finite number, else false.
         */
        (value: any): boolean;
    }
}

declare const isFinite: Lodash.IsFinite;
export = isFinite;
