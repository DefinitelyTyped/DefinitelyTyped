import _ = require("../index");

declare namespace Lodash {
    interface IsWeakSet {
        /**
         * Checks if value is classified as a WeakSet object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (): IsWeakSet;
        /**
         * Checks if value is classified as a WeakSet object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (value: any): value is WeakSet<object>;
    }
}

declare const isWeakSet: Lodash.IsWeakSet;
export = isWeakSet;
