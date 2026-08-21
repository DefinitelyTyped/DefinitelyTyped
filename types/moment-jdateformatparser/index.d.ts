import "moment";

declare module "moment" {
    interface Moment {
        /**
         * Formats this moment instance with a given Java date format.
         *
         * @example
         * ```js
         * // "24.12.2013"
         * moment("2013-12-24 14:30").formatWithJDF("dd.MM.yyyy")
         * ```
         * @param format The Java date format, e.g. `dd.MM.yyyy`.
         * @returns The formatted date.
         */
        formatWithJDF(format: string): string;

        /**
         * Translates the given Java date format to a moment format.
         *
         * @example
         * ```js
         * // "DD.MM.YYYY"
         * moment().toMomentFormatString("dd.MM.yyyy")
         * ```
         * @param format The Java date format, e.g. `dd.MM.yyyy`.
         * @returns The moment format, e.g. `dd.MM.yyyy`.
         */
        toMomentFormatString(format: string): string;

        /**
         * Translates the given moment format to a Java date format.
         *
         * @example
         * ```js
         * // "dd.MM.yyyy"
         * moment().toJDFString("DD.MM.YYYY")
         * ```
         * @param format The moment date format, e.g. `DD.MM.YYYY`.
         * @returns The moment format, e.g. `dd.MM.yyyy`.
         */
        toJDFString(format: string): string;
    }
}
