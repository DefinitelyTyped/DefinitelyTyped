import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a lodash object that wraps value with explicit method chaining enabled.
         *
         * @param value The value to wrap.
         * @return Returns the new lodash wrapper instance.
         */
        chain<T>(value: T): LoDashExplicitWrapper<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.chain
         */
        chain(): LoDashExplicitWrapper<TValue>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chain
         */
        chain(): this;
    }
}