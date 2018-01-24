import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Converts string to kebab case.
         *
         * @param string The string to convert.
         * @return Returns the kebab cased string.
         */
        kebabCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): LoDashExplicitWrapper<string>;
    }
}