import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts `string`, as a whole, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        toLower(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): LoDashExplicitWrapper<string>;
    }
}