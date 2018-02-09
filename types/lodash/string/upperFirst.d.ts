import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts the first character of `string` to upper case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        upperFirst(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): LoDashExplicitWrapper<string>;
    }
}