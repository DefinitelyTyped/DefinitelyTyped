declare module "gregorian-calendar" {
    class GregorianCalendar {
        constructor(locale?: Object);

        /**
         * same as call setYear, setMonth, setDayOfMonth ....
         */
        set(
            year: Number,
            month: Number,
            dayOfMonth: Number,
            hourOfDay: Number,
            minutes: Number,
            seconds: Number,
            milliseconds: Number,
        ): void;

        /**
         * set absolute time for current instance
         */
        setTime(time: Number): void;

        /**
         * get absolute time for current instance
         */
        getTime(): Number;

        /**
         * set current date instance's timezone offset (in minutes)
         */
        setTimezoneOffset(timezoneOffset: Number): void;

        /**
         * current date instance's timezone offset (in minutes)
         */
        getTimezoneOffset(): Number;

        /**
         * set the year of the given calendar field.
         */
        setYear(year: Number): void;

        /**
         * Returns the year of the given calendar field.
         */
        getYear(): Number;

        /**
         * set the month of the given calendar field. January is 0, you can use enum
         */
        setMonth(month: Number): void;

        /**
         * set the month of the given calendar field without influence month.
         * 2015-09-29 -> setMonth(2) -> 2015-03-01
         * 2015-09-29 -> rollSetMonth(2) -> 2015-02-28
         */
        rollSetMonth(month: Number): void;

        /**
         * Returns the month of the given calendar field.
         */
        getMonth(): Number;

        /**
         * set the day of month of the given calendar field.
         */
        setDayOfMonth(day: Number): void;

        /**
         * Returns the day of month of the given calendar field.
         */
        getDayOfMonth(): Number;

        /**
         * set the hour of day for the given calendar field.
         */
        setHourOfDay(hour: Number): void;

        /**
         * Returns the hour of day for the given calendar field.
         */
        getHourOfDay(): Number;

        /**
         * set the minute of the given calendar field.
         */
        setMinutes(minute: Number): void;

        /**
         * Returns the minute of the given calendar field.
         */
        getMinutes(): Number;

        /**
         * set the second of the given calendar field.
         */
        setSeconds(second: Number): void;

        /**
         * Returns the second of the given calendar field.
         */
        getSeconds(): Number;

        /**
         * set the millisecond of the given calendar field.
         */
        setMilliSeconds(second: Number): void;

        /**
         * Returns the millisecond of the given calendar field.
         */
        getMilliSeconds(): Number;

        /**
         * Returns the week of year of the given calendar field.
         */
        getWeekOfYear(): Number;

        /**
         * Returns the week of month of the given calendar field.
         */
        getWeekOfMonth(): Number;

        /**
         * Returns the day of year of the given calendar field.
         */
        getDayOfYear(): Number;

        /**
         * Returns the day of week of the given calendar field. sunday is 0, monday is 1
         */
        getDayOfWeek(): Number;

        /**
         * Returns the day of week in month of the given calendar field.
         */
        getDayOfWeekInMonth(): Number;

        /**
         * add the year of the given calendar field.
         */
        addYear(amount: Number): void;

        /**
         * add the month of the given calendar field.
         */
        addMonth(amount: Number): void;

        /**
         * add the day of month of the given calendar field.
         */
        addDayOfMonth(amount: Number): void;

        /**
         * add the hour of day of the given calendar field.
         */
        addHourOfDay(amount: Number): void;

        /**
         * add the minute of the given calendar field.
         */
        addMinute(amount: Number): void;

        /**
         * add the second of the given calendar field.
         */
        addSecond(amount: Number): void;

        /**
         * add the millisecond of the given calendar field.
         */
        addMilliSecond(amount: Number): void;

        /**
         * Returns the week number of year represented by this GregorianCalendar.
         */
        getWeekYear(): Number;

        /**
         * Sets this GregorianCalendar to the date given by the date specifiers - weekYear, weekOfYear, and dayOfWeek.
         * weekOfYear follows the WEEK_OF_YEAR numbering.
         * The dayOfWeek value must be one of the DAY_OF_WEEK values: SUNDAY to SATURDAY.
         *        weekYear: the week year
         *         weekOfYear: the week number based on weekYear
         *         dayOfWeek: the day of week value
         */
        setWeekDate(weekYear: Number, weekOfYear: Number, dayOfWeek: Number): void;

        /**
         * Returns the number of weeks in the week year
         */
        getWeeksInWeekYear(): Number;

        /**
         * Returns a clone of current instance
         */
        clone(): GregorianCalendar;

        equals(other: GregorianCalendar): boolean;

        /**
         * compare this object and other by day. return -1 0 or 1
         */
        compareToDay(other: GregorianCalendar): Number;

        /**
         * clear all field of current instance
         */
        clear(): void;
    }

    export = GregorianCalendar;
}

declare module "gregorian-calendar-format" {
    import GregorianCalendar = require("gregorian-calendar");

    enum DateTimeStyle {
        /**
         * full style
         */
        FULL = 0,
        /**
         * long style
         */
        LONG,
        /**
         * medium style
         */
        MEDIUM,
        /**
         * short style
         */
        SHORT,
    }

    class DateTimeFormat {
        public Style: DateTimeStyle;

        /**
         * @param pattern The format pattern string
         * @param locale The local of to output (defaults to require('gregorian-calendar/lib/locale/en_US'),
         *               may also be one of:
         *                   require('gregorian-calendar/lib/locale/zh_CN')
         *                   require('gregorian-calendar/lib/locale/ru_RU')
         */
        constructor(pattern: string, locale?: Object);

        /**
         * format an instance of GregorianCalendar according to pattern
         */
        format(calendar: GregorianCalendar): String;

        /**
         * parse a dateString to an instance of GregorianCalendar according to pattern, it's better to specify calendarLocale, such as
         *  `df.parse('2013-11-12', {locale: require('gregorian-calendar/lib/locale/zh_CN'}));`
         */
        parse(dateString: String, { locale }: { locale: Object }): GregorianCalendar;

        /**
         * get a predefine GregorianCalendarFormat instance
         */
        getDateTimeInstance(dateStyle: DateTimeStyle, timeStyle: DateTimeStyle, locale?: Object): DateTimeFormat;
    }

    export = DateTimeFormat;
}
