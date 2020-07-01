// Type definitions for strftime 0.9.2
// Project: https://github.com/samsonjs/strftime
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "strftime" {
    type strftimeFunction = (format: string, date?: Date) => string;

    namespace strftime {
        /**
         * Sets locale.
         * @param {Locale} locale A locale.
         * @return {strftimeFunction} A strftime function.
         */
        export function localize(locale: Locale): strftimeFunction;

        /**
         * Sets timezone.
         * @param {number|string} offset A offset.
         * @return {strftimeFunction} A strftime function.
         */
        export function timezone(offset: number | string): strftimeFunction;

        /**
         * Locale formats.
         * @interface
         */
        export interface LocaleFormats {
            D?: string;
            F?: string;
            R?: string;
            T?: string;
            X?: string;
            c?: string;
            r?: string;
            v?: string;
            x?: string;
        }

        /**
         * Locale.
         * @interface
         */
        export interface Locale {
            days?: Array<string>;
            shortDays?: Array<string>;
            months?: Array<string>;
            shortMonths?: Array<string>;
            AM?: string;
            PM?: string;
            am?: string;
            pm?: string;
            formats: LocaleFormats
        }
    }

    /**
     * Format a local time/date according to locale settings
     * @param {string} format A format.
     * @return {string} Returns a string formatted.
     */
    function strftime(format: string): string;

    /**
     * Format a local time/date according to locale settings
     * @param {string} format A format.
     * @param {Date}   date   A date.
     * @return {string} Returns a string formatted according format using the given date or the current local time.
     */
    function strftime(format: string, date: Date): string;
    export = strftime;
}
