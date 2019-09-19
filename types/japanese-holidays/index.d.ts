// Type definitions for japanese-holidays 1.0
// Project: https://github.com/osamutake/japanese-holidays-js
// Definitions by: syamatoo <https://github.com/syamatoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function isHoliday(date: Date, furikae?: boolean): string | undefined;
export function isHolidayAt(date: Date, furikae?: boolean): string | undefined;
export function getHolidaysOf(year: number, furikae?: boolean): Holiday[];

export interface Holiday {
    month: number;
    date: number;
    name: string;
}
