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
         * Sets the timezone to UTC.
         * @return {strftimeFunction} A strftime function.
         */
        export function utc(): strftimeFunction;

        /**
         * Locale formats.
         * @interface
         */
        export interface LocaleFormats {
            D?: string | undefined;
            F?: string | undefined;
            R?: string | undefined;
            T?: string | undefined;
            X?: string | undefined;
            c?: string | undefined;
            r?: string | undefined;
            v?: string | undefined;
            x?: string | undefined;
        }

        /**
         * Locale.
         * @interface
         */
        export interface Locale {
            days?: Array<string> | undefined;
            shortDays?: Array<string> | undefined;
            months?: Array<string> | undefined;
            shortMonths?: Array<string> | undefined;
            AM?: string | undefined;
            PM?: string | undefined;
            am?: string | undefined;
            pm?: string | undefined;
            formats: LocaleFormats;
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
