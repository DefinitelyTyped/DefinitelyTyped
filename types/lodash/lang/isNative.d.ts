import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is a native function.
         * @param value The value to check.
         *
         * @retrun Returns true if value is a native function, else false.
         */
        isNative(value: any): value is (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNative
         */
        isNative(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isNative
         */
        isNative(): LoDashExplicitWrapper<boolean>;
    }
}