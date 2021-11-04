// Type definitions for calendar 0.1
// Project: https://github.com/ramalho/calendar.js#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type DayFormatter<T> = (day: Date) => T;
export type WeekFormatter<T, U> = (week: T[]) => U;

export const version: string;

export class Calendar {
    /**
     * @param firstWeekDay default is `0` (Sunday)
     */
    constructor(firstWeekDay?: number);

    monthDates<T = Date>(year: number, month: number, dayFormatter?: DayFormatter<T>): T[][];
    monthDates<T, U>(
        year: number,
        month: number,
        dayFormatter: DayFormatter<T>,
        weekFormatter: WeekFormatter<T, U>,
    ): U[];
    monthDays(year: number, month: number): number[][];
    monthText(): string;
    monthText(year: number, month: number): string;
    weekStartDate(date: Date): Date;
}
