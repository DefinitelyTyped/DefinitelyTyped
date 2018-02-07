import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is classified as an ArrayBuffer object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): LoDashExplicitWrapper<boolean>;
    }
}