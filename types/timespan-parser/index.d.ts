declare namespace timespan {
    type Unit =
        | "msec"
        | "ms"
        | "seconds"
        | "second"
        | "sec"
        | "s"
        | "minutes"
        | "minute"
        | "min"
        | "m"
        | "hours"
        | "hour"
        | "hr"
        | "h"
        | "days"
        | "day"
        | "d"
        | "weeks"
        | "week"
        | "w"
        | "months"
        | "month"
        | "M"
        | "years"
        | "year"
        | "y";

    interface Options {
        /** The unit that value represents. Defaults to `"seconds"`. */
        unit?: Unit;
        /** Whether to abbreviate the unit labels in the resulting string. Defaults to `true`. */
        abbv?: boolean;
        /** Whether to set the first letter of each unit label to upper case in the resulting string. Defaults to `false`. */
        capitalize?: boolean;
        /** This string will be placed between each number and unit label in the resulting string. Defaults to `""` when `abbv` is `true`. Defaults to `" "` when `abbv` is `false`. */
        unitSep?: string;
        /** This string will be placed between each value in the resulting string. Defaults to `" "`. */
        valueSep?: string;
    }

    /**
     * Converts a timespan string into a number of `unit`s.
     * @param timespan The timespan string to be parsed.
     * @param unit The unit to use for the conversion. Defaults to `"seconds"`.
     * @returns The number of `unit`s represented by `timespan`.
     */
    function parse(timespan: string, unit?: Unit): number;

    /**
     * Converts a numeric value to a timespan string. The timespan string produced uses the shortest label available.
     * @param value The number of `unit`s to convert to a timespan string.
     * @param opts Options object
     */
    function getString(value: number, opts?: Options | Unit): string;
}

/** Returns a new `timespan` object with the defaults modified. */
declare function timespan(
    defaults?: timespan.Options | timespan.Unit,
): {
    parse: typeof timespan.parse;
    getString: typeof timespan.getString;
};

export = timespan;
