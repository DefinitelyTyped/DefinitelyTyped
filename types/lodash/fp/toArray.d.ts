// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface ToArray {
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
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        (): any[];
    }
}

declare const toArray: Lodash.ToArray;
export = toArray;
