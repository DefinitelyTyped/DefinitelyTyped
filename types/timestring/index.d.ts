// Type definitions for timestring 6.0
// Project: https://github.com/mike182uk/timestring
// Definitions by: Devin Spikowski <https://github.com/vegeta897>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function timestring(input: string, returnUnit?: timestring.ReturnUnit, opts?: timestring.Options): number;

declare namespace timestring {
    type ReturnUnit =
        | 'ms'
        | 'milli'
        | 'millisecond'
        | 'milliseconds'
        | 's'
        | 'sec'
        | 'secs'
        | 'second'
        | 'seconds'
        | 'm'
        | 'min'
        | 'mins'
        | 'minute'
        | 'minutes'
        | 'h'
        | 'hr'
        | 'hrs'
        | 'hour'
        | 'hours'
        | 'd'
        | 'day'
        | 'days'
        | 'w'
        | 'week'
        | 'weeks'
        | 'mon'
        | 'mth'
        | 'mths'
        | 'month'
        | 'months'
        | 'y'
        | 'yr'
        | 'yrs'
        | 'year'
        | 'years';

    interface Options {
        /**
         * @default 24
         */
        hoursPerDay?: number;
        /**
         * @default 7
         */
        daysPerWeek?: number;
        /**
         * @default 4
         */
        weeksPerMonth?: number;
        /**
         * @default 12
         */
        monthsPerYear?: number;
        /**
         * @default 365.25s
         */
        daysPerYear?: number;
    }
}

export = timestring;
