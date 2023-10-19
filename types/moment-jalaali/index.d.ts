import moment = require("moment");

export = moment;

declare module "moment" {
    type JUnitOfTime = "jYear" | "jMonth";

    interface LoadPersianOptions {
        /**
         * Use persian digits as decribed by unicode
         */
        usePersianDigits?: boolean | undefined;
        /**
         * use dialect option to change usePersian dialect, available options are:
         *      persian: default dialect(امرداد، آدینه، ...)
         *      persian-modern: modern dialect(مرداد، جمعه، ...)
         */
        dialect?: "persian" | "persian-modern" | undefined;
    }
    interface LoadPersian_dariOptions {
        /**
         * Use persian digits as decribed by unicode
         */
        usePersianDigits?: boolean | undefined;
        /**
         * use dialect option to change usePersian-dari dialect, available options are:
         *      persian-dari: default dialect(ثور، حمل ...)
         *      persian-dari-modern: modern dialect(حمل، جمعه، ...)
         */
        dialect?: "persian-dari" | "persian-dari-modern" | undefined;
    }
    interface LoadPashtoOptions {
        /**
         * Use persian digits as decribed by unicode
         */
        usePersianDigits?: boolean | undefined;
        /**
         * use dialect option to change usePashto dialect, available options are:
         *      pashto: default dialect(مرغومی، سلواغ، ...)
         *      pashto-modern: modern dialect(وری، جمعه، ...)
         */
        dialect?: "pashto" | "pashto-modern" | undefined;
    }
    /**
     * Add persian language.
     */
    function loadPersian(options?: LoadPersianOptions): void;
    /**
     * Add persian-dari language.
     */
    function loadPersian_dari(options?: LoadPersian_dariOptions): void;
    /**
     * Add pashto language.
     */
    function loadPashto(options?: LoadPashtoOptions): void;

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
