import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts `string`, as space separated words, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        upperCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): LoDashExplicitWrapper<string>;
    }
}