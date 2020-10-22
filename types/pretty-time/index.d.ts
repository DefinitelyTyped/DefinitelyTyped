// Type definitions for pretty-time 1.1
// Project: https://github.com/jonschlinkert/pretty-time
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

type Increment =
    | 'ns'
    | 'nano'
    | 'nanosecond'
    | 'nanoseconds'
    | 'μs'
    | 'micro'
    | 'microsecond'
    | 'microseconds'
    | 'ms'
    | 'milli'
    | 'millisecond'
    | 'milliseconds'
    | 's'
    | 'sec'
    | 'second'
    | 'seconds'
    | 'm'
    | 'min'
    | 'minute'
    | 'minutes'
    | 'h'
    | 'hr'
    | 'hour'
    | 'hours'
    | 'd'
    | 'day'
    | 'days'
    | 'w'
    | 'wk'
    | 'week'
    | 'weeks';

declare function prettyTime(time: number[], smallest?: Increment, digits?: number): string;

export = prettyTime;
