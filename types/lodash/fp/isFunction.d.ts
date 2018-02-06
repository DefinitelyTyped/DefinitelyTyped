import _ = require("../index");

declare namespace Lodash {
    interface IsFunction {
        /**
         * Checks if value is a callable function.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsFunction;
        /**
         * Checks if value is a callable function.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is (...args: any[]) => any;
    }
}

declare const isFunction: Lodash.IsFunction;
export = isFunction;
