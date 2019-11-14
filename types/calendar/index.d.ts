// Type definitions for calendar 0.1
// Project: https://github.com/ramalho/calendar.js#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type DayFormatter = (day: Date) => Date | string;
export type WeekFormatter = (week: Date[]) => Date[] | string;

export const version: string;

export class Calendar {
    /**
     * @param firstWeekDay default is `0` (Sunday)
     */
    constructor(firstWeekDay?: number);

    monthDates(year: number, month: number, dayFormatter?: DayFormatter, weekFormatter?: WeekFormatter): Date[];
    monthDays(year: number, month: number): Date[];
    monthText(): string;
    monthText(year: number, month: number): string;
    weekStartDate(date: Date): Date;
}
