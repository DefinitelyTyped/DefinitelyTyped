import _ = require("../index");

declare namespace Lodash {
    interface Lt {
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        (): Lt;
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        (other: any): Lt1x1;
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        (other: any, value: any): boolean;
    }
    interface Lt1x1 {
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        (): Lt1x1;
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        (value: any): boolean;
    }
}

declare const lt: Lodash.Lt;
export = lt;
