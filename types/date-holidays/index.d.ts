// Type definitions for date-holidays 1.2
// Project: https://github.com/commenthol/date-holidays
// Definitions by: John-Olav Storvold <https://github.com/johnolos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Country {
    country: string;
    state?: string;
    region?: string;
}

export type HolidayType = "public" | "bank" | "school" | "observance";

export interface Options {
    languages?: string | ReadonlyArray<string>;
    timezone?: string;
    types?: ReadonlyArray<HolidayType>;
}

export interface HolidayOptions {
    name: { [key: string]: string };
    type: HolidayType;
}

export interface Holiday {
    date: string;
    start: Date;
    end: Date;
    name: string;
    type: HolidayType;
}

interface HolidaysInterface {
    init(country?: Country | string, opts?: Options): void;

    init(country?: string, state?: string, opts?: Options): void;

    init(country?: string, state?: string, region?: string, opts?: Options): void;

    setHoliday(rule: string, opts: HolidayOptions | string): boolean;

    getHolidays(year?: string | Date, lang?: string): Holiday[];

    isHoliday(date: Date): Holiday;

    query(country?: string, state?: string, lang?: string): { [key: string]: string };

    getCountries(lang?: string): { [key: string]: string };

    getStates(country: string, lang?: string): { [key: string]: string };

    getRegions(country: string, state: string, lang?: string): { [key: string]: string };

    getTimezones(): string[];

    setTimezone(timezone: string): void;

    getLanguages(): string[];

    setLanguage(language: string | string[]): string[];

    getDayOff(): string;
}

interface HolidaysConstructor {
    new (country?: Country | string, state?: string, region?: string, opts?: Options): HolidaysInterface;
}

export let Holidays: HolidaysConstructor;
export default Holidays;
