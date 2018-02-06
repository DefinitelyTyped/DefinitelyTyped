import _ = require("../index");

declare namespace Lodash {
    interface IsArrayBuffer {
        /**
         * Checks if value is classified as an ArrayBuffer object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (): IsArrayBuffer;
        /**
         * Checks if value is classified as an ArrayBuffer object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        (value: any): value is ArrayBuffer;
    }
}

declare const isArrayBuffer: Lodash.IsArrayBuffer;
export = isArrayBuffer;
