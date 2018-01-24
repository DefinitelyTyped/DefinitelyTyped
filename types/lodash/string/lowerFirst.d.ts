declare namespace _ {
    interface LoDashStatic {
        /**
         * Converts the first character of `string` to lower case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        lowerFirst(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): LoDashExplicitWrapper<string>;
    }
}