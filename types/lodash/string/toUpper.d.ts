declare namespace _ {
    interface LoDashStatic {
        /**
         * Converts `string`, as a whole, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        toUpper(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): LoDashExplicitWrapper<string>;
    }
}