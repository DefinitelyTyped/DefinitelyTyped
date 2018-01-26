import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]",
         * "{", "}", and "|" in string.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escapeRegExp(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): LoDashExplicitWrapper<string>;
    }
}