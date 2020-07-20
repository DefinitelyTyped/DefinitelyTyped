// Type definitions for date-arithmetic 4.1
// Project: https://github.com/jquense/date-math
// Definitions by: Sergii Paryzhskyi <https://github.com/HeeL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Unit =
    | 'milliseconds'
    | 'seconds'
    | 'minutes'
    | 'hours'
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'decade'
    | 'century';

export function add(date: Date, num: number, unit?: Unit): Date;
export function subtract(date: Date, num: number, unit?: Unit): Date;
export function eq(date: Date, date2: Date, unit?: Unit): boolean;
export function neq(date: Date, date2: Date): boolean;
export function gt(date: Date, date2: Date): boolean;
export function gte(date: Date, date2: Date, unit?: Unit): boolean;
export function lt(date: Date, date2: Date, unit?: Unit): boolean;
export function lte(date: Date, date2: Date, unit?: Unit): boolean;
export function inRange(date: Date, min: Date, max: Date, unit?: Unit): boolean;
export function startOf(date: Date, unit?: Unit, firstOfWeek?: number): Date;
export function endOf(date: Date, unit?: Unit, firstOfWeek?: number): Date;
export function min(dateA: Date, dateB: Date, dateN?: Date): Date;
export function max(dateA: Date, dateB: Date, dateN?: Date): Date;
export function diff(dateA: Date, dateB: Date, unit: Unit, asFloat?: boolean): number;

export function milliseconds(date: Date, value?: number): Date;
export function seconds(date: Date, value?: number): Date;
export function minutes(date: Date, value?: number): Date;
export function hours(date: Date, value?: number): Date;
export function date(date: Date, value?: number): Date;
export function day(date: Date, value?: number): Date;
export function weekday(date: Date, value?: number, firstOfWeek?: number): Date;
export function month(date: Date, value?: number): Date;
export function year(date: Date, value?: number): Date;
export function decade(date: Date, value?: number): Date;
export function century(date: Date, value?: number): Date;
