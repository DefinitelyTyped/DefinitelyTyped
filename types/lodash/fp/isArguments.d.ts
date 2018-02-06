import _ = require("../index");

declare namespace Lodash {
    interface IsArguments {
        /**
         * Checks if value is classified as an arguments object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsArguments;
        /**
         * Checks if value is classified as an arguments object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is IArguments;
    }
}

declare const isArguments: Lodash.IsArguments;
export = isArguments;
