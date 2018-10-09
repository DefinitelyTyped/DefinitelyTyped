// Type definitions for luxon 1.4
// Project: https://github.com/moment/luxon#readme
// Definitions by: Colby DeHart <https://github.com/colbydehart>
//                 Hyeonseok Yang <https://github.com/FourwingsY>
//                 Jonathan Siebern <https://github.com/jsiebern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'luxon' {
    namespace luxon {
        type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

        type ZoneOptions = {
            keepLocalTime?: boolean;
            /**
             * @deprecated since 0.2.12. Use keepLocalTime instead
             */
            keepCalendarTime?: boolean;
        };

        type ToFormatOptions = DateTimeFormatOptions & {
            round?: boolean;
        };

        type ISOTimeOptions = {
            suppressMilliseconds?: boolean;
            suppressSeconds?: boolean;
            includeOffset?: boolean;
        };

        type LocaleOptions = {
            locale?: string;
            outputCalendar?: string;
            numberingSystem?: string;
        };

        type DateTimeOptions = LocaleOptions & {
            zone?: string | Zone;
            setZone?: boolean;
        };

        type DateTimeJSOptions = LocaleOptions & {
            zone?: string | Zone;
        };

        type DateObjectUnits = {
            year?: number;
            month?: number;
            day?: number;
            ordinal?: number;
            weekYear?: number;
            weekNumber?: number;
            weekday?: number;
            hour?: number;
            minute?: number;
            second?: number;
            millisecond?: number;
        };

        type DateObject = DateObjectUnits & LocaleOptions & {
            zone?: string | Zone;
        };

        type DiffOptions = {
            conversionAccuracy?: string;
        };

        class DateTime {
            static readonly DATETIME_FULL: DateTimeFormatOptions;
            static readonly DATETIME_FULL_WITH_SECONDS: DateTimeFormatOptions;
            static readonly DATETIME_HUGE: DateTimeFormatOptions;
            static readonly DATETIME_HUGE_WITH_SECONDS: DateTimeFormatOptions;
            static readonly DATETIME_MED: DateTimeFormatOptions;
            static readonly DATETIME_MED_WITH_SECONDS: DateTimeFormatOptions;
            static readonly DATETIME_SHORT: DateTimeFormatOptions;
            static readonly DATETIME_SHORT_WITH_SECONDS: DateTimeFormatOptions;
            static readonly DATE_FULL: DateTimeFormatOptions;
            static readonly DATE_HUGE: DateTimeFormatOptions;
            static readonly DATE_MED: DateTimeFormatOptions;
            static readonly DATE_SHORT: DateTimeFormatOptions;
            static readonly TIME_24_SIMPLE: DateTimeFormatOptions;
            static readonly TIME_24_WITH_LONG_OFFSET: DateTimeFormatOptions;
            static readonly TIME_24_WITH_SECONDS: DateTimeFormatOptions;
            static readonly TIME_24_WITH_SHORT_OFFSET: DateTimeFormatOptions;
            static readonly TIME_SIMPLE: DateTimeFormatOptions;
            static readonly TIME_WITH_LONG_OFFSET: DateTimeFormatOptions;
            static readonly TIME_WITH_SECONDS: DateTimeFormatOptions;
            static readonly TIME_WITH_SHORT_OFFSET: DateTimeFormatOptions;
            static fromHTTP(text: string, options?: DateTimeOptions): DateTime;
            static fromISO(text: string, options?: DateTimeOptions): DateTime;
            static fromJSDate(
                date: Date,
                options?: DateTimeJSOptions
            ): DateTime;
            static fromMillis(ms: number, options?: DateTimeOptions): DateTime;
            static fromObject(obj: DateObject): DateTime;
            static fromRFC2822(
                text: string,
                options?: DateTimeOptions
            ): DateTime;
            static fromSQL(text: string, options?: DateTimeOptions): DateTime;
            static fromFormat(
                text: string,
                format: string,
                opts?: DateTimeOptions
            ): DateTime;
            static fromFormatExplain(
                text: string,
                format: string,
                opts?: DateTimeOptions
            ): object;
            /**
             * @deprecated since 0.3.0. Use fromFormat instead
             */
            static fromString(
                text: string,
                format: string,
                options?: DateTimeOptions
            ): DateTime;
            /**
             * @deprecated 0.3.0. Use fromFormatExplain instead
             */
            static fromStringExplain(
                text: string,
                format: string,
                options?: DateTimeOptions
            ): object;
            static invalid(reason: any): DateTime;
            static local(
                year?: number,
                month?: number,
                day?: number,
                hour?: number,
                minute?: number,
                second?: number,
                millisecond?: number
            ): DateTime;
            static max(): undefined;
            static max(...dateTimes: DateTime[]): DateTime;
            static min(): undefined;
            static min(...dateTimes: DateTime[]): DateTime;
            static utc(
                year?: number,
                month?: number,
                day?: number,
                hour?: number,
                minute?: number,
                second?: number,
                millisecond?: number
            ): DateTime;
            day: number;
            daysInMonth: number;
            daysInYear: number;
            hour: number;
            invalidReason: string;
            isInDST: boolean;
            isInLeapYear: boolean;
            isOffsetFixed: boolean;
            isValid: boolean;
            locale: string;
            millisecond: number;
            minute: number;
            month: number;
            monthLong: string;
            monthShort: string;
            numberingSystem: string;
            offset: number;
            offsetNameLong: string;
            offsetNameShort: string;
            ordinal: number;
            outputCalendar: string;
            quarter: number;
            second: number;
            weekNumber: number;
            weekYear: number;
            weekday: number;
            weekdayLong: string;
            weekdayShort: string;
            weeksInWeekYear: number;
            year: number;
            zoneName: string;
            diff(
                other: DateTime,
                unit?: DurationUnit | DurationUnit[],
                options?: DiffOptions
            ): Duration;
            diffNow(unit?: DurationUnit | DurationUnit[], options?: DiffOptions): Duration;
            endOf(unit: DurationUnit): DateTime;
            equals(other: DateTime): boolean;
            get(unit: keyof DateTime): number;
            hasSame(other: DateTime, unit: DurationUnit): boolean;
            minus(duration: Duration | number | DurationObject): DateTime;
            plus(duration: Duration | number | DurationObject): DateTime;
            reconfigure(properties: LocaleOptions): DateTime;
            resolvedLocaleOpts(options?: ToFormatOptions): LocaleOptions;
            set(values: DateObjectUnits): DateTime;
            setLocale(locale: any): DateTime;
            setZone(zone: string | Zone, options?: ZoneOptions): DateTime;
            startOf(unit: DurationUnit): DateTime;
            toBSON(): Date;
            toFormat(format: string, options?: ToFormatOptions): string;
            toHTTP(): string;
            toISO(options?: ISOTimeOptions): string;
            toISODate(): string;
            toISOTime(options?: ISOTimeOptions): string;
            toISOWeekDate(): string;
            toJSDate(): Date;
            toJSON(): string;
            toLocal(): DateTime;
            toLocaleParts(options?: DateTimeFormatOptions): any[];
            toLocaleString(options?: DateTimeFormatOptions): string;
            toMillis(): number;
            toMillis(): number;
            toObject(options?: { includeConfig?: boolean }): DateObject;
            toRFC2822(): string;
            toSQL(options?: Object): string;
            toSQLDate(): string;
            toSQLTime(options?: Object): string;
            toString(): string;
            toUTC(offset?: number, options?: ZoneOptions): DateTime;
            until(other: DateTime): Interval;
            valueOf(): number;
        }

        type DurationOptions = {
            locale?: string;
            numberingSystem?: string;
            conversionAccuracy?: string;
        };

        type DurationObjectUnits = {
            years?: number;
            months?: number;
            weeks?: number;
            days?: number;
            hours?: number;
            minutes?: number;
            seconds?: number;
            milliseconds?: number;
        };

        type DurationObject = DurationObjectUnits & DurationOptions;

        type DurationUnit = 'year' | 'years' | 'quarter' | 'quarters' | 'month' | 'months' | 'week' | 'weeks' | 'day' | 'days'
                            | 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds' | 'millisecond' | 'milliseconds';

        class Duration {
            static fromISO(text: string, options?: DurationOptions): Duration;
            static fromMillis(
                count: number,
                options?: DurationOptions
            ): Duration;
            static fromObject(
                Object: DurationObject
            ): Duration;
            static invalid(reason?: string): Duration;
            days: number;
            hours: number;
            invalidReason: string;
            isValid: boolean;
            locale: string;
            milliseconds: number;
            minutes: number;
            months: number;
            numberingSystem: string;
            quarters: number;
            seconds: number;
            weeks: number;
            years: number;
            as(unit: DurationUnit): number;
            equals(other: Duration): boolean;
            get(unit: DurationUnit): number;
            minus(duration: Duration | number | DurationObject): Duration;
            negate(): Duration;
            normalize(): Duration;
            plus(duration: Duration | number | DurationObject): Duration;
            reconfigure(objectPattern: DurationOptions): Duration;
            set(values: DurationObjectUnits): Duration;
            shiftTo(...units: DurationUnit[]): Duration;
            toFormat(format: string, options?: ToFormatOptions): string;
            toISO(): string;
            toJSON(): string;
            toObject(options?: {
                includeConfig?: boolean;
            }): DurationObject;
            toString(): string;
            valueOf(): number;
        }

        type EraLength = 'short' | 'long';
        type UnitLength = EraLength | 'numeric' | '2-digit' | 'narrow';
        type UnitOptions = InfoOptions & {
            numberingSystem?: string;
            outputCalendar?: string;
        };

        type InfoOptions = {
            locale?: string;
        };

        type Features = {
            intl: boolean;
            intlTokens: boolean;
            zones: boolean;
        };

        namespace Info {
            function eras(length?: EraLength, options?: InfoOptions): string[];
            function features(): Features;
            function hasDST(zone: string | Zone): boolean;
            function isValidIANAZone(zone: string): boolean;
            function meridiems(options?: InfoOptions): string[];
            function months(length?: UnitLength, options?: UnitOptions): string[];
            function monthsFormat(length?: UnitLength, options?: UnitOptions): string[];
            function weekdays(length?: UnitLength, options?: UnitOptions): string[];
            function weekdaysFormat(
                length?: UnitLength,
                options?: UnitOptions
            ): string[];
        }

        type IntervalObject = {
            start?: DateTime;
            end?: DateTime;
        };

        class Interval {
            static after(
                start: DateTime | DateObject | Date,
                duration: Duration | number | DurationObject
            ): Interval;
            static before(
                end: DateTime | DateObject | Date,
                duration: Duration | number | DurationObject
            ): Interval;
            static fromDateTimes(
                start: DateTime | DateObject | Date,
                end: DateTime | DateObject | Date
            ): Interval;
            static fromISO(string: string, options?: DateTimeOptions): Interval;
            static invalid(reason?: string): Interval;
            static merge(intervals: Interval[]): Interval[];
            static xor(intervals: Interval[]): Interval[];
            end: DateTime;
            invalidReason: string;
            isValid: boolean;
            start: DateTime;
            abutsEnd(other: Interval): boolean;
            abutsStart(other: Interval): boolean;
            contains(dateTime: DateTime): boolean;
            count(unit?: DurationUnit): number;
            difference(...intervals: Interval[]): Interval[];
            divideEqually(numberOfParts?: number): Interval[];
            engulfs(other: Interval): boolean;
            equals(other: Interval): boolean;
            hasSame(unit: DurationUnit): boolean;
            intersection(other: Interval): Interval;
            isAfter(dateTime: DateTime): boolean;
            isBefore(dateTime: DateTime): boolean;
            isEmpty(): boolean;
            length(unit?: DurationUnit): number;
            overlaps(other: Interval): boolean;
            set(values: IntervalObject): Interval;
            splitAt(...dateTimes: DateTime[]): Interval[];
            splitBy(duration: Duration | DurationObject | number): Interval[];
            toDuration(
                unit: DurationUnit | DurationUnit[],
                options?: DiffOptions
            ): Duration;
            toFormat(
                dateFormat: string,
                options?: {
                    seperator?: string;
                }
            ): string;
            toISO(options?: ISOTimeOptions): string;
            toString(): string;
            union(other: Interval): Interval;
        }

        namespace Settings {
            let defaultLocale: string;
            let defaultNumberingSystem: string;
            let defaultOutputCalendar: string;
            const defaultZone: Zone;
            let defaultZoneName: string;
            let throwOnInvalid: boolean;
            let now: () => number;
            function resetCaches(): void;
        }

        type ZoneOffsetOptions = {
            format?: 'short' | 'long';
            localeCode?: string;
        };

        class Zone {
            static offsetName(ts: number, options?: ZoneOffsetOptions): string;
            static isValid: boolean;
            static name: string;
            static type: string;
            static universal: boolean;
            equals(other: Zone): boolean;
            offset(ts: number): number;
        }

        class IANAZone extends Zone {
            constructor(ianaString: string);
        }
    }

    export = luxon;
}
