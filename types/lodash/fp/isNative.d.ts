import _ = require("../index");

declare namespace Lodash {
    interface IsNative {
        /**
         * Checks if value is a native function.
         * @param value The value to check.
         *
         * @retrun Returns true if value is a native function, else false.
         */
        (): IsNative;
        /**
         * Checks if value is a native function.
         * @param value The value to check.
         *
         * @retrun Returns true if value is a native function, else false.
         */
        (value: any): value is (...args: any[]) => any;
    }
}

declare const isNative: Lodash.IsNative;
export = isNative;
