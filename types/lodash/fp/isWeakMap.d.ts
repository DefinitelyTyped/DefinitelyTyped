import _ = require("../index");

declare namespace Lodash {
    interface IsWeakMap {
        /**
         * Checks if value is classified as a WeakMap object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (): IsWeakMap;
        /**
         * Checks if value is classified as a WeakMap object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (value: any): value is WeakMap<object, any>;
    }
}

declare const isWeakMap: Lodash.IsWeakMap;
export = isWeakMap;
