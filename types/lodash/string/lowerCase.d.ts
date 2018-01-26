import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts `string`, as space separated words, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        lowerCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): LoDashExplicitWrapper<string>;
    }
}