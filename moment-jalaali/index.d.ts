// Type definitions for moment-jalaali 0.5.0
// Project: https://github.com/jalaali/moment-jalaali
// Definitions by: Ali Taheri Moghaddar <https://github.com/alitaheri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export = moment;

declare module 'moment' {
    type JUnitOfTime = 'jYear' | 'jMonth';

    /**
     * Add persian language.
     */
    function loadPersian(): void;

    function jIsLeapYear(year: number): boolean;
    function jDaysInMonth(year: number, month: number): number;

    interface Moment {

        startOf(jUnitOfTime: JUnitOfTime): Moment;
        endOf(jUnitOfTime: JUnitOfTime): Moment;

        add(amount: number, jUnitOfTime: JUnitOfTime): Moment;
        add(amount: string, jUnitOfTime: JUnitOfTime): Moment;

        subtract(amount: number, jUnitOfTime: JUnitOfTime): Moment;
        subtract(amount: string, jUnitOfTime: JUnitOfTime): Moment;

        jYear(y: number): Moment;
        jYear(): number;
        jMonth(M: number): Moment;
        jMonth(M: string): Moment;
        jMonth(): number;
        jDate(d: number): Moment;
        jDate(): number;
        jWeek(): number;
        jWeek(d: number): Moment;
        jWeekYear(): number;
        jWeekYear(d: number): Moment;
        jDayOfYear(): number;
        jDayOfYear(d: number): Moment;
    }

}
