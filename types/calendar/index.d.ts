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
