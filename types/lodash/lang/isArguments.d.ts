import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is classified as an arguments object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArguments(value?: any): value is IArguments;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): LoDashExplicitWrapper<boolean>;
    }
}