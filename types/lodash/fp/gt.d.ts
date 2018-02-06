import _ = require("../index");

declare namespace Lodash {
    interface Gt {
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        (): Gt;
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        (other: any): Gt1x1;
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        (other: any, value: any): boolean;
    }
    interface Gt1x1 {
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        (): Gt1x1;
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        (value: any): boolean;
    }
}

declare const gt: Lodash.Gt;
export = gt;
