import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        split(
            string: string,
            separator?: RegExp|string,
            limit?: number
        ): string[];

        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the new array of string segments.
         */
        split(
            string: string,
            index: string | number,
            guard: object
        ): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashExplicitWrapper<string[]>;
    }
}