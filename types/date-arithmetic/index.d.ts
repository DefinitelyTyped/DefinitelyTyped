export type Unit =
    | "milliseconds"
    | "seconds"
    | "minutes"
    | "hours"
    | "day"
    | "week"
    | "month"
    | "year"
    | "decade"
    | "century";

export function milliseconds(date: Date): number;
export function milliseconds(date: Date, value: number): Date;
export function seconds(date: Date): number;
export function seconds(date: Date, value: number): Date;
export function minutes(date: Date): number;
export function minutes(date: Date, value: number): Date;
export function hours(date: Date): number;
export function hours(date: Date, value: number): Date;
export function date(date: Date): number;
export function date(date: Date, value: number): Date;
export function day(date: Date): number;
export function day(date: Date, value: number): Date;
export function weekday(date: Date, value: Date): number;
export function weekday(date: Date, value: Date, firstOfWeek: StartOfWeek): Date;
export function month(date: Date): number;
export function month(date: Date, value: number): Date;
export function year(date: Date): number;
export function year(date: Date, value: number): Date;
export function decade(date: Date): number;
export function decade(date: Date, value: number): Date;
export function century(date: Date): number;
export function century(date: Date, value: number): Date;

/** Add specified amount of units to a provided date and return new date as a result */
export function add(date: Date, num: number, unit: Unit): Date;

/**
 * The opposite of `startOf`
 */
export function endOf(date: Date, unit: "week", firstOfWeek: StartOfWeek): Date;
export function endOf(date: Date, unit: Exclude<Unit, "week">): Date;
/**
 * Return a new date with the relevant date parts zero'd out.
 * You only need to provide a firstOfWeek when the unit is 'week'
 */
export function startOf(date: Date, unit: "week", firstOfWeek: StartOfWeek): Date;
export function startOf(date: Date, unit: Exclude<Unit, "week">): Date;

/** Subtract specified amount of units from a provided date and return new date as a result */
export function subtract(date: Date, num: number, unit: Unit): Date;

/** Compare two dates and return true if they are equal */
export function eq(date: Date, date2: Date, unit?: Unit): boolean;

/** Compare two dates and return false if they are equal */
export function neq(date: Date, date2: Date, unit?: Unit): boolean;

/** Compare two dates and return true if date is greater than date2 */
export function gt(date: Date, date2: Date, unit?: Unit): boolean;

/** Compare two dates and return true if date is greater or equal than date2 */
export function gte(date: Date, date2: Date, unit?: Unit): boolean;

/** Compare two dates and return true if date is less than date2 */
export function lt(date: Date, date2: Date, unit?: Unit): boolean;

/** Compare two dates and return true if date is less or equal than date2 */
export function lte(date: Date, date2: Date, unit?: Unit): boolean;

/** Determine is the date falls within the period */
export function inRange(day: Date, min: Date, max: Date, unit?: Unit): boolean;

/** Return the earliest date from the passed dates */
export function min(...dates: Date[]): Date;

/** Return the latest date from the passed dates */
export function max(...dates: Date[]): Date;

/** Return difference between two dates in provided units */
export function diff(date1: Date, date2: Date, unit: Unit, asFloat?: boolean): number;

export type StartOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
