// Type definitions for moment-holiday 1.5
// Project: https://github.com/kodie/moment-holiday
// Definitions by: Robert Winslow Dalpe <https://github.com/rwdalpe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

declare module 'moment' {
    interface Moment extends Object {
        holiday(
            holidays?: string[] | string,
            adjust?: boolean): Moment | false | { [holidayName: string]: Moment };

        holidays(
            holidays?: string[] | string,
            adjust?: boolean): Moment | false | { [holidayName: string]: Moment };

        isHoliday(
            holidays?: string[] | string | null,
            adjust?: boolean): boolean | string | string[];

        previousHoliday(count?: number, adjust?: boolean): Moment[] | Moment;

        previousHolidays(count?: number, adjust?: boolean): Moment[] | Moment;

        nextHoliday(count?: number, adjust?: boolean): Moment[] | Moment;

        nextHolidays(count?: number, adjust?: boolean): Moment[] | Moment;

        holidaysBetween(m: Moment, adjust?: boolean): Moment[] | false;
    }

    interface HolidayDefinition {
        date: string;
        keywords?: string[];
        keywords_y?: string[];
        keywords_n?: string[];
        regions?: string[];
        regions_n?: string[];
    }

    interface HolidaysMapping {
        [holidayName: string]: HolidayDefinition;
    }

    interface Holidays {
        active: HolidaysMapping;
        active_last: HolidaysMapping;
    }

    interface HolidayModifier {
        set(
            holidays: HolidaysMapping | string | string[],
            specifics?: any): HolidayModifier;

        add(
            holidays: HolidaysMapping | string,
            specifics?: any): HolidayModifier;

        remove(holidays: string | string[]): HolidayModifier;

        undo(): HolidayModifier;

        load(locales: string | string[]): HolidayModifier;

        extendParser(parserFunc: (m: Moment, date: string) => Moment | Moment[] | false | void): HolidayModifier;
    }

    let holidays: Holidays;
    let modifyHolidays: HolidayModifier;
}
