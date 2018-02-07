import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts string to start case.
         *
         * @param string The string to convert.
         * @return Returns the start cased string.
         */
        startCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): LoDashExplicitWrapper<string>;
    }
}