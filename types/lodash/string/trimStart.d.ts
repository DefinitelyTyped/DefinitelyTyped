import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimStart(
            string?: string,
            chars?: string
        ): string;

        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the trimmed string.
         */
        trimStart(
            string: string,
            index: string | number,
            guard: object
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): LoDashExplicitWrapper<string>;
    }
}