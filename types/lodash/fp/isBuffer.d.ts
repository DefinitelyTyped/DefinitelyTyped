import _ = require("../index");

declare namespace Lodash {
    interface IsBuffer {
        /**
         * Checks if value is a buffer.
         *
         * @param value The value to check.
         * @return Returns true if value is a buffer, else false.
         */
        (): IsBuffer;
        /**
         * Checks if value is a buffer.
         *
         * @param value The value to check.
         * @return Returns true if value is a buffer, else false.
         */
        (value: any): boolean;
    }
}

declare const isBuffer: Lodash.IsBuffer;
export = isBuffer;
