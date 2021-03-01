// Type definitions for timestring 6.0
// Project: https://github.com/mike182uk/timestring
// Definitions by: Devin Spikowski <https://github.com/vegeta897>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function timestring(
    input: string,
    returnUnit?:
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
        | 'years',
    opts?: {
        hoursPerDay?: number;
        daysPerWeek?: number;
        weeksPerMonth?: number;
        monthsPerYear?: number;
        daysPerYear?: number;
    },
): number;

export = timestring;
