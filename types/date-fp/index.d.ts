// Type definitions for date-fp 5.0
// Project: https://github.com/cullophid/date-fp#readme
// Definitions by:  Eric Crosson <https://github.com/EricCrosson>
//                  Kilian Wimmer <https://github.com/kiliw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
import { Function } from "ts-toolbelt";

export function of(dateParts: number[]): Date;
export function fromTime(time: number): Date;
export const add: Function.Curry<(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
    value: number,
    date: Date
) => Date>;
export function clone(date: Date): Date;
export const convertTo: Function.Curry<(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days',
    date: Date
) => number>;
export const diff: Function.Curry<(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
    a: Date,
    b: Date
) => number>;
export const equals: Function.Curry<(a: Date, b: Date) => boolean>;
export const format: Function.Curry<(format: string, date: Date) => string>;
export const get: Function.Curry<(
    property: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'date' | 'day' | 'week' | 'month' | 'year',
    date: Date
) => number>;
export function isLeapYear(date: Date): boolean;
export function isValid(date: Date): boolean;
export function max(dates: Date[]): Date;
export function min(dates: Date[]): Date;
export const parse: Function.Curry<(format: string, date: string) => Date>;
export const set: Function.Curry<(
    property: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'date' | 'week' | 'month' | 'year',
    value: number,
    date: Date
) => Date>;
export const sub: Function.Curry<(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
    value: number,
    date: Date
) => Date>;
export function unixTime(date: Date): number;
