import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Removes trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimEnd(
            string?: string,
            chars?: string
        ): string;

        /**
         * Removes trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the trimmed string.
         */
        trimEnd(
            string: string,
            index: string | number,
            guard: object
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): LoDashExplicitWrapper<string>;
    }
}