import _ = require("../index");

declare namespace Lodash {
    interface Chain {
        /**
         * Creates a lodash object that wraps value with explicit method chaining enabled.
         *
         * @param value The value to wrap.
         * @return Returns the new lodash wrapper instance.
         */
        (): Chain;
        /**
         * Creates a lodash object that wraps value with explicit method chaining enabled.
         *
         * @param value The value to wrap.
         * @return Returns the new lodash wrapper instance.
         */
        <T>(value: T): _.LoDashExplicitWrapper<T>;
    }
}

declare const chain: Lodash.Chain;
export = chain;
