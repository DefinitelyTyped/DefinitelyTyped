import _ = require("../index");

declare namespace Lodash {
    interface ToArray {
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        (): ToArray;
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        <T>(value: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): T[];
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        <T>(value: T): Array<T[keyof T]>;
    }
}

declare const toArray: Lodash.ToArray;
export = toArray;
