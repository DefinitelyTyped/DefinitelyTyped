// Type definitions for D3JS d3-time module v1.0.2
// Project: https://github.com/d3/d3-time/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ---------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------

export interface TimeInterval {
    (date: Date): Date;
    floor(date: Date): Date;
    round(date: Date): Date;
    ceil(date: Date): Date;
    offset(date: Date, step?: number): Date;
    range(start: Date, stop: Date, step?: number): Date[];
    filter(test: (date: Date) => boolean): this;
}

export interface CountableTimeInterval extends TimeInterval {
    count(start: Date, end: Date): number;
    every(step: number): TimeInterval | null;
}

// ---------------------------------------------------------------
// Custom (Countable)Interval Factories
// ---------------------------------------------------------------

export function timeInterval(
    floor: (date: Date) => void,
    offset: (date: Date, step: number) => void,
): TimeInterval;

export function timeInterval(
    floor: (date: Date) => void,
    offset: (date: Date, step: number) => void,
    count: (start: Date, end: Date) => number,
    field?: (date: Date) => number
): CountableTimeInterval;

// ---------------------------------------------------------------
// Built-In Factories and Date Array Creators
// ---------------------------------------------------------------


// local time ----------------------------------------------------------

export var timeMillisecond: CountableTimeInterval;
export function timeMilliseconds(start: Date, stop: Date, step?: number): Date[];

export var timeSecond: CountableTimeInterval;
export function timeSeconds(start: Date, stop: Date, step?: number): Date[];

export var timeMinute: CountableTimeInterval;
export function timeMinutes(start: Date, stop: Date, step?: number): Date[];

export var timeHour: CountableTimeInterval;
export function timeHours(start: Date, stop: Date, step?: number): Date[];

export var timeDay: CountableTimeInterval;
export function timeDays(start: Date, stop: Date, step?: number): Date[];

export var timeWeek: CountableTimeInterval;
export function timeWeeks(start: Date, stop: Date, step?: number): Date[];

export var timeSunday: CountableTimeInterval;
export function timeSundays(start: Date, stop: Date, step?: number): Date[];
export var timeMonday: CountableTimeInterval;
export function timeMondays(start: Date, stop: Date, step?: number): Date[];
export var timeTuesday: CountableTimeInterval;
export function timeTuesdays(start: Date, stop: Date, step?: number): Date[];
export var timeWednesday: CountableTimeInterval;
export function timeWednesdays(start: Date, stop: Date, step?: number): Date[];
export var timeThursday: CountableTimeInterval;
export function timeThursdays(start: Date, stop: Date, step?: number): Date[];
export var timeFriday: CountableTimeInterval;
export function timeFridays(start: Date, stop: Date, step?: number): Date[];
export var timeSaturday: CountableTimeInterval;
export function timeSaturdays(start: Date, stop: Date, step?: number): Date[];

export var timeMonth: CountableTimeInterval;
export function timeMonths(start: Date, stop: Date, step?: number): Date[];

export var timeYear: CountableTimeInterval;
export function timeYears(start: Date, stop: Date, step?: number): Date[];


// utc Universal Coordinated Time ----------------------------------------------------------

export var utcMillisecond: CountableTimeInterval;
export function utcMilliseconds(start: Date, stop: Date, step?: number): Date[];

export var utcSecond: CountableTimeInterval;
export function utcSeconds(start: Date, stop: Date, step?: number): Date[];

export var utcMinute: CountableTimeInterval;
export function utcMinutes(start: Date, stop: Date, step?: number): Date[];

export var utcHour: CountableTimeInterval;
export function utcHours(start: Date, stop: Date, step?: number): Date[];

export var utcDay: CountableTimeInterval;
export function utcDays(start: Date, stop: Date, step?: number): Date[];

export var utcWeek: CountableTimeInterval;
export function utcWeeks(start: Date, stop: Date, step?: number): Date[];

export var utcSunday: CountableTimeInterval;
export function utcSundays(start: Date, stop: Date, step?: number): Date[];
export var utcMonday: CountableTimeInterval;
export function utcMondays(start: Date, stop: Date, step?: number): Date[];
export var utcTuesday: CountableTimeInterval;
export function utcTuesdays(start: Date, stop: Date, step?: number): Date[];
export var utcWednesday: CountableTimeInterval;
export function utcWednesdays(start: Date, stop: Date, step?: number): Date[];
export var utcThursday: CountableTimeInterval;
export function utcThursdays(start: Date, stop: Date, step?: number): Date[];
export var utcFriday: CountableTimeInterval;
export function utcFridays(start: Date, stop: Date, step?: number): Date[];
export var utcSaturday: CountableTimeInterval;
export function utcSaturdays(start: Date, stop: Date, step?: number): Date[];

export var utcMonth: CountableTimeInterval;
export function utcMonths(start: Date, stop: Date, step?: number): Date[];

export var utcYear: CountableTimeInterval;
export function utcYears(start: Date, stop: Date, step?: number): Date[];
