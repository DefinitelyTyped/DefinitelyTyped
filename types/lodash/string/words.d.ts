import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param pattern The pattern to match words.
         * @return Returns the words of `string`.
         */
        words(
            string?: string,
            pattern?: string|RegExp
        ): string[];

        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the words of `string`.
         */
        words(
            string: string,
            index: string | number,
            guard: object
        ): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): string[];
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): LoDashExplicitWrapper<string[]>;
    }
}