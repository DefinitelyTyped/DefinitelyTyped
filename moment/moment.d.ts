// Type definitions for Moment.js 2.11.1
// Project: https://github.com/timrwood/moment
// Definitions by: Michael Lakerveld <https://github.com/Lakerfield>, Aaron King <https://github.com/kingdango>, Hiroki Horiuchi <https://github.com/horiuchi>, Dick van den Brink <https://github.com/DickvdBrink>, Adi Dahiya <https://github.com/adidahiya>, Matt Brooks <https://github.com/EnableSoftware>, Gal Talmor <https://github.com/galtalmor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace moment {

    type MomentComparable = Moment | string | number | Date | number[];

    interface MomentDateObject {
        years?: number;
        /* One digit */
        months?: number;
        /* Day of the month */
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        milliseconds?: number;
    }

    interface MomentInput {
        /** Year */
        years?: number;
        /** Year */
        year?: number;
        /** Year */
        y?: number;

        /** Month */
        months?: number;
        /** Month */
        month?: number;
        /** Month */
        M?: number;

        /** Week */
        weeks?: number;
        /** Week */
        week?: number;
        /** Week */
        w?: number;

        /** Day/Date */
        days?: number;
        /** Day/Date */
        day?: number;
        /** Day/Date */
        date?: number;
        /** Day/Date */
        d?: number;

        /** Hour */
        hours?: number;
        /** Hour */
        hour?: number;
        /** Hour */
        h?: number;

        /** Minute */
        minutes?: number;
        /** Minute */
        minute?: number;
        /** Minute */
        m?: number;

        /** Second */
        seconds?: number;
        /** Second */
        second?: number;
        /** Second */
        s?: number;

        /** Millisecond */
        milliseconds?: number;
        /** Millisecond */
        millisecond?: number;
        /** Millisecond */
        ms?: number;
    }

    interface Duration {
        humanize(withSuffix?: boolean): string;

        as(units: string): number;

        milliseconds(): number;
        asMilliseconds(): number;

        seconds(): number;
        asSeconds(): number;

        minutes(): number;
        asMinutes(): number;

        hours(): number;
        asHours(): number;

        days(): number;
        asDays(): number;

        weeks(): number;
        asWeeks(): number;

        months(): number;
        asMonths(): number;

        years(): number;
        asYears(): number;

        add(n: number, p: string): Duration;
        add(n: number): Duration;
        add(d: Duration): Duration;

        subtract(n: number, p: string): Duration;
        subtract(n: number): Duration;
        subtract(d: Duration): Duration;

        toISOString(): string;
        toJSON(): string;
    }

    interface MomentLocale {
        ordinal(n: number): string;
    }

    interface MomentCreationData {
        input?: string;
        format?: string;
        locale: MomentLocale;
        isUTC: boolean;
        strict?: boolean;
    }

    interface Moment {
        format(format: string): string;
        format(): string;

        fromNow(withoutSuffix?: boolean): string;

        startOf(unitOfTime: string): Moment;
        endOf(unitOfTime: string): Moment;

        /**
         * Mutates the original moment by adding time. (deprecated in 2.8.0)
         *
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         * @param amount the amount you want to add
         */
        add(unitOfTime: string, amount: number): Moment;
        /**
         * Mutates the original moment by adding time.
         *
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         */
        add(amount: number, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by adding time. Note that the order of arguments can be flipped.
         *
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         */
        add(amount: string, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by adding time.
         *
         * @param objectLiteral an object literal that describes multiple time units {days:7,months:1}
         */
        add(objectLiteral: MomentInput): Moment;
        /**
         * Mutates the original moment by adding time.
         *
         * @param duration a length of time
         */
        add(duration: Duration): Moment;

        /**
         * Mutates the original moment by subtracting time. (deprecated in 2.8.0)
         *
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         * @param amount the amount you want to subtract
         */
        subtract(unitOfTime: string, amount: number): Moment;
        /**
         * Mutates the original moment by subtracting time.
         *
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         * @param amount the amount you want to subtract
         */
        subtract(amount: number, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by subtracting time. Note that the order of arguments can be flipped.
         *
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         */
        subtract(amount: string, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by subtracting time.
         *
         * @param objectLiteral an object literal that describes multiple time units {days:7,months:1}
         */
        subtract(objectLiteral: MomentInput): Moment;
        /**
         * Mutates the original moment by subtracting time.
         *
         * @param duration a length of time
         */
        subtract(duration: Duration): Moment;

        calendar(): string;
        calendar(start: Moment): string;
        calendar(start: Moment, formats: MomentCalendar): string;

        clone(): Moment;

        /**
         * @return Unix timestamp, or milliseconds since the epoch.
         */
        valueOf(): number;

        local(): Moment; // current date/time in local mode

        utc(): Moment; // current date/time in UTC mode

        isValid(): boolean;
        invalidAt(): number;

        year(y: number): Moment;
        year(): number;
        quarter(): number;
        quarter(q: number): Moment;
        month(M: number): Moment;
        month(M: string): Moment;
        month(): number;
        day(d: number): Moment;
        day(d: string): Moment;
        day(): number;
        date(d: number): Moment;
        date(): number;
        hour(h: number): Moment;
        hour(): number;
        hours(h: number): Moment;
        hours(): number;
        minute(m: number): Moment;
        minute(): number;
        minutes(m: number): Moment;
        minutes(): number;
        second(s: number): Moment;
        second(): number;
        seconds(s: number): Moment;
        seconds(): number;
        millisecond(ms: number): Moment;
        millisecond(): number;
        milliseconds(ms: number): Moment;
        milliseconds(): number;
        weekday(): number;
        weekday(d: number): Moment;
        isoWeekday(): number;
        isoWeekday(d: number): Moment;
        weekYear(): number;
        weekYear(d: number): Moment;
        isoWeekYear(): number;
        isoWeekYear(d: number): Moment;
        week(): number;
        week(d: number): Moment;
        weeks(): number;
        weeks(d: number): Moment;
        isoWeek(): number;
        isoWeek(d: number): Moment;
        isoWeeks(): number;
        isoWeeks(d: number): Moment;
        weeksInYear(): number;
        isoWeeksInYear(): number;
        dayOfYear(): number;
        dayOfYear(d: number): Moment;

        from(f: MomentComparable, suffix?: boolean): string;
        to(f: MomentComparable, suffix?: boolean): string;
        toNow(withoutPrefix?: boolean): string;

        diff(b: MomentComparable): number;
        diff(b: MomentComparable, unitOfTime: string): number;
        diff(b: MomentComparable, unitOfTime: string, round: boolean): number;

        toArray(): number[];
        toDate(): Date;
        toISOString(): string;
        toJSON(): string;
        unix(): number;

        isLeapYear(): boolean;
        zone(): number;
        zone(b: number): Moment;
        zone(b: string): Moment;
        utcOffset(): number;
        utcOffset(b: number): Moment;
        utcOffset(b: string): Moment;
        daysInMonth(): number;
        isDST(): boolean;

        isBefore(): boolean;
        isBefore(b: MomentComparable, granularity?: string): boolean;

        isAfter(): boolean;
        isAfter(b: MomentComparable, granularity?: string): boolean;

        isSame(b: MomentComparable, granularity?: string): boolean;
        isBetween(a: MomentComparable, b: MomentComparable, granularity?: string, inclusivity?: string): boolean;

        /**
         * @since 2.10.7+
         */
        isSameOrBefore(b: MomentComparable, granularity?: string): boolean;
        isSameOrAfter(b: MomentComparable, granularity?: string): boolean;

        /**
         * @deprecated since version 2.8.0
         */
        lang(language: string): Moment;
        lang(reset: boolean): Moment;
        lang(): MomentLanguage;

        locale(language: string): Moment;
        locale(reset: boolean): Moment;
        locale(): string;

        /**
         * @since 2.12.0+
         */
        locales() : string[];
        localeData(language: string): Moment;
        localeData(reset: boolean): Moment;
        localeData(): MomentLanguageData;

        /**
         * @deprecated since version 2.7.0
         */
        max(date: Moment | string | number | Date | any[]): Moment;
        max(date: string, format: string): Moment;

        /**
         * @deprecated since version 2.7.0
         */
        min(date: Moment | string | number | Date | any[]): Moment;
        min(date: string, format: string): Moment;

        get(unit: string): number;
        set(unit: string, value: number): Moment;
        set(objectLiteral: MomentInput): Moment;

        /**
         * This returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.
         * @since 2.10.5+
         */
        toObject(): MomentDateObject;

        /**
         * @since 2.10.7+
         */
        creationData(): MomentCreationData;
    }

    type formatFunction = () => string;

    interface MomentCalendar {
        lastDay?: string | formatFunction;
        sameDay?: string | formatFunction;
        nextDay?: string | formatFunction;
        lastWeek?: string | formatFunction;
        nextWeek?: string | formatFunction;
        sameElse?: string | formatFunction;
    }

    interface BaseMomentLanguage {
        months?: any;
        monthsShort?: any;
        weekdays?: any;
        weekdaysShort?: any;
        weekdaysMin?: any;
        relativeTime?: MomentRelativeTime;
        meridiem?: (hour: number, minute: number, isLowercase: boolean) => string;
        calendar?: MomentCalendar;
        ordinal?: (num: number) => string;
        week?: MomentLanguageWeek;
    }

    interface MomentLanguage extends BaseMomentLanguage {
        longDateFormat?: MomentLongDateFormat;
    }

    interface MomentLanguageWeek {
        dow?: number;
        doy?: number;
    }

    interface MomentLanguageData {
        /**
         * Get the full localized month name of a moment object
         * @param  {Moment} aMoment a moment object
         * @return {string}         full month name
         */
        months(aMoment: Moment): string;

        /**
         * Get the short localized month name of a moment object
         * @param  {Moment} aMoment a moment object
         * @return {string}         short month name
         */
        monthsShort(aMoment: Moment): string;

        /**
         * Parses a month name and returns the month id (0-11)
         * @param  {string} longOrShortMonthString string of month to parse
         * @return {number}                        month id (0 to 11) of input
         */
        monthsParse(longOrShortMonthString: string): number;

        /**
         * Gets the full weekday name of a moment object (eg. Monday)
         * @param  {Moment} aMoment a moment object
         * @return {string}         full weekday name
         */
        weekdays(aMoment: Moment): string;

        /**
         * Gets the short weekday name of a moment object (eg. Mon)
         * @param  {Moment} aMoment a moment object
         * @return {string}         short weekday name
         */
        weekdaysShort(aMoment: Moment): string;

        /**
         * Gets the min weekday name of a moment object (eg. Mo)
         * @param  {Moment} aMoment a moment object
         * @return {string}         min weekday name
         */
        weekdaysMin(aMoment: Moment): string;

        /**
         * Parses a weekday name and returns the weekday id (0-6)
         * @param  {string} longOrShortMonthString string of weekday to parse
         * @return {number}                        weekday id (0 to 6) of input
         */
        weekdaysParse(longOrShortMonthString: string): number;

        /**
         * Returns the full format of abbreviated date-time formats
         * @param  {string} dateFormat date-time format such as LT, L, LL and so on
         * @return {string}            full date format string
         */
        longDateFormat(dateFormat: string): string;

        /**
         * Returns whether a string represents PM
         * @param  {string}  amPmString date string to check
         * @return {boolean}            true if string represents PM
         */
        isPM(amPmString: string): boolean;

        /**
         * Returns am/pm string for particular time-of-day in upper/lower case
         * @param  {number}  hour        hour
         * @param  {number}  minute      minute
         * @param  {boolean} isLowercase whether to return in lowercase
         * @return {string}              'am' or 'pm'
         */
        meridiem(hour: number, minute: number, isLowercase: boolean): string;

        /**
         * Returns a format that would be used for calendar representation.
         * @param  {string} key     one of 'sameDay', 'nextDay', 'lastDay', 'nextWeek', 'prevWeek', 'sameElse'
         * @param  {Moment} aMoment a moment object
         * @return {string}         date format string
         */
        calendar(key: string, aMoment: Moment): string;

        /**
         * Returns relative time string (eg. a year ago)
         * @param  {number}  number        the relative number
         * @param  {boolean} withoutSuffix whether to drop the suffix
         * @param  {string}  key           one of 's', 'm', 'mm', 'h', 'hh', 'd', 'dd', 'M', 'MM', 'y', 'yy'. Single letter when number is 1.
         * @param  {boolean} isFuture      whether this represents a future date
         * @return {string}                humanized representation of relative time
         */
        relativeTime(number: number, withoutSuffix: boolean, key: string, isFuture: boolean): string;

        /**
         * Converts relative time string to past or future string depending on difference
         * @param  {number} diff    positive or negative number
         * @param  {string} relTime relative time string
         * @return {string}         humanized representation of relative time
         */
        pastFuture(diff: number, relTime: string): string;

        /**
         * Convert number to ordinal string 1 -> 1st
         * @param  {number} number the number
         * @return {string}        ordinal string
         */
        ordinal(number: number): string;

        /**
         * Called before parsing every input string
         */
        preparse(str: string): string;

        /**
         * Called after formatting on every string
         */
        postformat(str: string): string;

        /**
         * Returns week-of-year of a moment object
         * @param  {Moment} aMoment a moment object
         * @return {number}         number of the week
         */
        week(aMoment: Moment): number;

        /**
         * Returns a translation of 'Invalid date'
         * @return {string} translation of 'Invalid date'
         */
        invalidDate(): string;

        /**
         * Returns the first day of the week (0-6, Sunday to Saturday)
         * @return {number} first day of the week
         */
        firstDayOfWeek(): number;

        /**
         * This and the first day of week are used to determine which is
         * the first week of the year. dow == 1 and doy == 4 means week starts
         * Monday and first week that has Thursday is the first week of the
         * year (but doy is NOT simply Thursday).
         * @return {number} number between 0-15
         */
        firstDayOfYear(): number;
    }

    interface MomentLongDateFormat {
        L: string;
        LL: string;
        LLL: string;
        LLLL: string;
        LT: string;
        LTS: string;
        l?: string;
        ll?: string;
        lll?: string;
        llll?: string;
        lt?: string;
        lts?: string;
    }

    interface MomentRelativeTime {
        future: any;
        past: any;
        s: any;
        m: any;
        mm: any;
        h: any;
        hh: any;
        d: any;
        dd: any;
        M: any;
        MM: any;
        y: any;
        yy: any;
    }

    interface MomentBuiltinFormat {
        __momentBuiltinFormatBrand: any;
    }

    type MomentFormatSpecification = string | MomentBuiltinFormat | (string | MomentBuiltinFormat)[];

    interface MomentStatic {
        version: string;
        fn: Moment;

        (): Moment;
        (date: number): Moment;
        (date: number[]): Moment;
        (date: string, format?: MomentFormatSpecification, strict?: boolean): Moment;
        (date: string, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment;
        (date: Date): Moment;
        (date: Moment): Moment;
        (date: Object): Moment;

        utc(): Moment;
        utc(date: number): Moment;
        utc(date: number[]): Moment;
        utc(date: string, format?: string, strict?: boolean): Moment;
        utc(date: string, format?: string, language?: string, strict?: boolean): Moment;
        utc(date: string, formats: string[], strict?: boolean): Moment;
        utc(date: string, formats: string[], language?: string, strict?: boolean): Moment;
        utc(date: Date): Moment;
        utc(date: Moment): Moment;
        utc(date: Object): Moment;

        unix(timestamp: number): Moment;

        invalid(parsingFlags?: Object): Moment;
        isMoment(): boolean;
        isMoment(m: any): m is Moment;
        isDate(m: any): m is Date;
        isDuration(): boolean;
        isDuration(d: any): d is Duration;

        /**
         * @deprecated since version 2.8.0
         */
        lang(language?: string): string;
        lang(language?: string, definition?: MomentLanguage): string;

        locale(language?: string): string;
        locale(language?: string[]): string;
        locale(language?: string, definition?: MomentLanguage): string;

        localeData(language?: string): MomentLanguageData;

        longDateFormat: any;
        relativeTime: any;
        meridiem: (hour: number, minute: number, isLowercase: boolean) => string;
        calendar: any;
        ordinal: (num: number) => string;

        duration(milliseconds: Number): Duration;
        duration(num: Number, unitOfTime: string): Duration;
        duration(input: MomentInput): Duration;
        duration(object: any): Duration;
        duration(): Duration;

        parseZone(date: string): Moment;

        months(): string[];
        months(index: number): string;
        months(format: string): string[];
        months(format: string, index: number): string;
        monthsShort(): string[];
        monthsShort(index: number): string;
        monthsShort(format: string): string[];
        monthsShort(format: string, index: number): string;

        weekdays(): string[];
        weekdays(index: number): string;
        weekdays(format: string): string[];
        weekdays(format: string, index: number): string;
        weekdaysShort(): string[];
        weekdaysShort(index: number): string;
        weekdaysShort(format: string): string[];
        weekdaysShort(format: string, index: number): string;
        weekdaysMin(): string[];
        weekdaysMin(index: number): string;
        weekdaysMin(format: string): string[];
        weekdaysMin(format: string, index: number): string;

        min(...moments: Moment[]): Moment;
        min(moments: Moment[]): Moment;
        max(...moments: Moment[]): Moment;
        max(moments: Moment[]): Moment;

        normalizeUnits(unit: string): string;
        relativeTimeThreshold(threshold: string): number | boolean;
        relativeTimeThreshold(threshold: string, limit: number): boolean;

        /**
         * @since 2.10.7+
         */
        now(): number;

        /**
         * Constant used to enable explicit ISO_8601 format parsing.
         */
        ISO_8601: MomentBuiltinFormat;

        defaultFormat: string;
    }

}

declare module 'moment' {
    var moment: moment.MomentStatic;
    export = moment;
}

declare module 'moment/moment' {
    var moment: moment.MomentStatic;
    export = moment;
}

declare var moment: moment.MomentStatic;
