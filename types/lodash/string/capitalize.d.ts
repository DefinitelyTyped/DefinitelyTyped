import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Converts the first character of string to upper case and the remaining to lower case.
         *
         * @param string The string to capitalize.
         * @return Returns the capitalized string.
         */
        capitalize(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): LoDashExplicitWrapper<string>;
    }
}