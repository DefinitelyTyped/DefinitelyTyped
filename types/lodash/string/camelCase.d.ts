import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts string to camel case.
         *
         * @param string The string to convert.
         * @return Returns the camel cased string.
         */
        camelCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): LoDashExplicitWrapper<string>;
    }
}