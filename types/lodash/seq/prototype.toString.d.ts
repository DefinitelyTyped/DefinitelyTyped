import _ = require("../index");
declare module "../index" {
    interface LoDashWrapper<TValue> {
        /**
         * Produces the result of coercing the unwrapped value to a string.
         *
         * @return Returns the coerced string value.
         */
        toString(): string;
    }
}