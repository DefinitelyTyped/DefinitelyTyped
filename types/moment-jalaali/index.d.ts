// Type definitions for moment-jalaali 0.7.0
// Project: https://github.com/jalaali/moment-jalaali
// Definitions by: Ali Taheri Moghaddar <https://github.com/alitaheri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import moment = require('moment');

export = moment;

declare module 'moment' {
    type JUnitOfTime = 'jYear' | 'jMonth';

    interface LoadPersianOptions {
        /**
         * Use persian digits as decribed by unicode
         */
        usePersianDigits?: boolean;
        /**
         * use dialect option to change usePersian dialect, available options are:
         *      persian: default dialect(امرداد، آدینه، ...)
         *      persian-modern: modern dialect(مرداد، جمعه، ...)
         */
        dialect?: 'persian' | 'persian-modern';
    }

    /**
     * Add persian language.
     */
    function loadPersian(options?: LoadPersianOptions): void;

    function jIsLeapYear(year: number): boolean;
    function jDaysInMonth(year: number, month: number): number;

    interface Moment {
        startOf(jUnitOfTime: JUnitOfTime): Moment;
        endOf(jUnitOfTime: JUnitOfTime): Moment;

        add(amount: string | number, jUnitOfTime: JUnitOfTime): Moment;

        subtract(amount: string | number, jUnitOfTime: JUnitOfTime): Moment;

        jYear(y: number): Moment;
        jYear(): number;
        jMonth(M: number | string): Moment;
        jMonth(): number;
        jDate(d: number): Moment;
        jDate(): number;
        jWeek(d: number): Moment;
        jWeek(): number;
        jWeekYear(d: number): Moment;
        jWeekYear(): number;
        jDayOfYear(d: number): Moment;
        jDayOfYear(): number;
    }

}
