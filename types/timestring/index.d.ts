declare function timestring(input: string, returnUnit?: timestring.ReturnUnit, opts?: timestring.Options): number;

declare namespace timestring {
    type ReturnUnit =
        | "ms"
        | "milli"
        | "millisecond"
        | "milliseconds"
        | "s"
        | "sec"
        | "secs"
        | "second"
        | "seconds"
        | "m"
        | "min"
        | "mins"
        | "minute"
        | "minutes"
        | "h"
        | "hr"
        | "hrs"
        | "hour"
        | "hours"
        | "d"
        | "day"
        | "days"
        | "w"
        | "week"
        | "weeks"
        | "mon"
        | "mth"
        | "mths"
        | "month"
        | "months"
        | "y"
        | "yr"
        | "yrs"
        | "year"
        | "years";

    interface Options {
        /**
         * @default 24
         */
        hoursPerDay?: number | undefined;
        /**
         * @default 7
         */
        daysPerWeek?: number | undefined;
        /**
         * @default 4
         */
        weeksPerMonth?: number | undefined;
        /**
         * @default 12
         */
        monthsPerYear?: number | undefined;
        /**
         * @default 365.25s
         */
        daysPerYear?: number | undefined;
    }
}

export = timestring;
