// Type definitions for timespan 2.3
// Project: https://github.com/indexzero/TimeSpan.js
// Definitions by: Andres G. Aragoneses <https://github.com/knocte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "timespan" {

export class TimeSpan {
    constructor(milliseconds: any, seconds: any, minutes: any, hours: any, days: any);

    add(timeSpan: any): void;

    addDays(days: any): void;

    addHours(hours: any): void;

    addMilliseconds(milliseconds: any): void;

    addMinutes(minutes: any): void;

    addSeconds(seconds: any): void;

    equals(timeSpan: any): any;

    subtract(timeSpan: any): void;

    subtractDays(days: any): void;

    subtractHours(hours: any): void;

    subtractMilliseconds(milliseconds: any): void;

    subtractMinutes(minutes: any): void;

    subtractSeconds(seconds: any): void;

    toString(): any;

    totalDays(roundDown: any): any;

    totalHours(roundDown: any): any;

    totalMilliseconds(): number;

    totalMinutes(roundDown: any): any;

    totalSeconds(roundDown: any): any;

}

export function clone(timeSpan: any): any;

export function fromDates(start: any, end: any, abs: any): any;

export function fromDays(days: any): any;

export function fromHours(hours: any): any;

export function fromMilliseconds(milliseconds: any): any;

export function fromMinutes(minutes: any): any;

export function fromSeconds(seconds: any): any;

export function instanceOf(timeSpan: any): any;

export function parse(str: any): any;

export function parseDate(str: any): any;

export function test(str: any): any;


}
