import * as Globalize from "../globalize";
import "./number";
import "./plural";

declare module "../globalize" {
    interface RelativeTimeFormatterOptions {
        /**
         * eg. "short" or "narrow". Or falsy for default long form
         */
        form?: "short" | "narrow";
    }
    interface Shared {
        /**
         * Returns a function that formats a relative time according to the given unit, options, and the default/instance locale.
         * The returned function is invoked with one argument: the number value to be formatted.
         * @param unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc.
         * @param options form: [String] eg. "short" or "narrow". Or falsy for default long form.
         * @returns {Function} Returns a function that formats a relative time according to the given unit.
         */
        relativeTimeFormatter(unit: string, options?: RelativeTimeFormatterOptions): (value: number) => string;

        /**
         * Return a relative time according to the given unit
         * @param {number} value The number to be formatted.
         * @param {string} unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc.
         * @param options form: [String] eg. "short" or "narrow". Or falsy for default long form.
         * @returns {string} Return a relative time according to the given unit.
         */
        formatRelativeTime(value: number, unit: string, options?: RelativeTimeFormatterOptions): string;
    }
}

export = Globalize;
