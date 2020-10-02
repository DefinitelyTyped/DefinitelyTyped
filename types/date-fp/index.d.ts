// Type definitions for date-fp 5.0
// Project: https://github.com/cullophid/date-fp#readme
// Definitions by: Eric Crosson <https://github.com/EricCrosson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function of(dateParts: number[]): Date;
export function fromTime(time: number): Date;
export function add(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
    value: number,
    date: Date
): Date;
export function clone(date: Date): Date;
export function convertTo(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days',
    date: Date
): number;
export function diff(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
    a: Date,
    b: Date
): number;
export function equals(a: Date, b: Date): boolean;
export function format(format: string, date: Date): string;
export function get(
    property: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'date' | 'day' | 'week' | 'month' | 'year',
    date: Date
): number;
export function isLeapYear(date: Date): boolean;
export function isValid(date: Date): boolean;
export function max(dates: Date[]): Date;
export function min(dates: Date[]): Date;
export function parse(format: string, date: string): Date;
export function set(
    property: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'date' | 'week' | 'month' | 'year',
    value: number,
    date: Date
): Date;
export function sub(
    unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
    value: number,
    date: Date
): Date;
export function unixTime(date: Date): number;
