// Type definitions for date-arithmetic 4.1
// Project: https://github.com/jquense/date-math
// Definitions by: Sergii Paryzhskyi <https://github.com/HeeL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type MathUnit =
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

interface DateArithmeticStatic {
    add(date: Date, num: number, unit?: MathUnit): Date;
    subtract(date: Date, num: number, unit?: MathUnit): Date;
    eq(date: Date, date2: Date, unit?: MathUnit): boolean;
    neq(date: Date, date2: Date): boolean;
    gt(date: Date, date2: Date): boolean;
    gte(date: Date, date2: Date, unit?: MathUnit): boolean;
    lt(date: Date, date2: Date, unit?: MathUnit): boolean;
    lte(date: Date, date2: Date, unit?: MathUnit): boolean;
    inRange(date: Date, min: Date, max: Date, unit?: MathUnit): boolean;
    startOf(date: Date, unit?: MathUnit, firstOfWeek?: number): Date;
    endOf(date: Date, unit?: MathUnit, firstOfWeek?: number): Date;
    min(dateA: Date, dateB: Date, dateN?: Date): Date;
    max(dateA: Date, dateB: Date, dateN?: Date): Date;
    diff(dateA: Date, dateB: Date, unit: MathUnit, asFloat?: boolean): number;

    milliseconds(date: Date, value?: number): Date;
    seconds(date: Date, value?: number): Date;
    minutes(date: Date, value?: number): Date;
    hours(date: Date, value?: number): Date;
    date(date: Date, value?: number): Date;
    day(date: Date, value?: number): Date;
    weekday(date: Date, value?: number, firstOfWeek?: number): Date;
    month(date: Date, value?: number): Date;
    year(date: Date, value?: number): Date;
    decade(date: Date, value?: number): Date;
    century(date: Date, value?: number): Date;
}

declare const DateArithmetic: DateArithmeticStatic;
export = DateArithmetic;

declare namespace DateArithmetic {
    type Unit = MathUnit;
}
