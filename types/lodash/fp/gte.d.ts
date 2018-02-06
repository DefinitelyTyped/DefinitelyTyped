import _ = require("../index");

declare namespace Lodash {
    interface Gte {
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        (): Gte;
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        (other: any): Gte1x1;
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        (other: any, value: any): boolean;
    }
    interface Gte1x1 {
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        (): Gte1x1;
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        (value: any): boolean;
    }
}

declare const gte: Lodash.Gte;
export = gte;
