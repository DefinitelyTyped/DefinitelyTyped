import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts all elements in `array` into a string separated by `separator`.
         *
         * @param array The array to convert.
         * @param separator The element separator.
         * @returns Returns the joined string.
         */
        join(
            array: List<any> | null | undefined,
            separator?: string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): LoDashExplicitWrapper<string>;
    }
}