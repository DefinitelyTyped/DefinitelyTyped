// Type definitions for japanese-holidays 1.0
// Project: https://github.com/osamutake/japanese-holidays-js
// Definitions by: syamatoo <https://github.com/syamatoo>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace JapaneseHolidays;

export function isHoliday(date: Date, furikae?: boolean): string | undefined;
export function isHolidayAt(date: Date, furikae?: boolean): string | undefined;
export function getHolidaysOf(year: number, furikae?: boolean): Holiday[];

export function getJDate(date: Date): number;
export function getJDay(date: Date): number;
export function getJFullYear(date: Date): number;
export function getJHours(date: Date): number;
export function getJMinutes(date: Date): number;
export function getJMonth(date: Date): number;
export function j2u(date: Date): Date;
export function jDate(year: number, month: number, day: number): Date;
export function shiftDate(
    date: Date,
    year: number,
    mon: number,
    day: number,
    hour: number,
    min: number,
    sec: number,
    msec: number,
): Date;
export function u2j(date: Date): Date;
export function uDate(year: number, month: number, day: number): Date;

export interface Holiday {
    month: number;
    date: number;
    name: string;
}
