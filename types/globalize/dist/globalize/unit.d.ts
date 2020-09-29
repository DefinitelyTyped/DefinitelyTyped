import * as Globalize from "../globalize";
import "./number";
import "./plural";

declare module "../globalize" {
    interface UnitFormatterOptions {
        /**
         * form: [String] eg. "long", "short" or "narrow".
         */
        form?: "long" | "short" | "narrow";

        /**
         * numberFormatter: [Function] a number formatter function. Defaults to Globalize .numberFormatter() for the current locale using the default options.
         */
        numberFormatter?: NumberFormatterOptions;
    }

    interface Shared {
        /**
         * Returns a function that formats a unit according to the given unit, options, and the default/instance locale.
         * The returned function is invoked with one argument: the number value to be formatted.
         * @param unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc. Could also be a compound unit, eg. "mile-per-hour" or "mile/hour"
         * @param options form: [String] eg. "long", "short" or "narrow".
         * @returns {Function} Returns a function that formats a unit according to the given unit, options, and the default/instance locale.
         */
        unitFormatter(unit: string, options?: UnitFormatterOptions): (value: number) => string;

        /**
         * Alias for .unitFormatter( unit, options )( value ).
         * @param {number} value The number to be formatted.
         * @param {string} unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc. Could also be a compound unit, eg. "mile-per-hour" or "mile/hour"
         * @param {UnitFormatterOptions} options form: [String] eg. "long", "short" or "narrow".
         * @returns {string} Returns the unit formatted.
         */
        formatUnit(value: number, unit: string, options?: UnitFormatterOptions): string
    }
}

export = Globalize;
