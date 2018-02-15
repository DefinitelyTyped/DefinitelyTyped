import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isArray(value?: any): value is any[];

        /**
         * DEPRECATED
         */
        isArray<T>(value?: any): value is any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): LoDashExplicitWrapper<boolean>;
    }
}