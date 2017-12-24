// Type definitions for luxon 0.3
// Project: https://github.com/moment/luxon#readme
// Definitions by: Colby DeHart <https://github.com/colbydehart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'luxon' {
    namespace luxon {
        type DateTimeFormat = any;
        type ZoneOptions = {
            keepCalendarTime?: boolean;
        };

        type ToFormatOptions = {
            round: boolean;
        };

        type ISOTimeOptions = {
            suppressMilliseconds?: boolean;
            supressSeconds?: boolean;
        };

        type DateTimeOptions = {
            zone?: string | Zone;
            setZone?: boolean;
            locale?: string;
            outputCalendar?: string;
            numberingSystem?: string;
        };

        type DateTimeJSOptions = {
            zone?: string | Zone;
        };

        type DateObjectUnits = {
            year?: number;
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

        type DateObject = DateObjectUnits & {
            zone?: string | Zone;
            locale?: string;
            outputCalendar?: string;
            numberingSystem?: string;
        };

        type DiffOptions = {
            conversionAccuracy?: string;
        };

        class DateTime {
            static DATETIME_FULL: DateTimeFormat;
            static DATETIME_FULL_WITH_SECONDS: DateTimeFormat;
            static DATEIME_HUGE: DateTimeFormat;
            static DATEIME_HUGE_WITH_SECONDS: DateTimeFormat;
            static DATETIME_MED: DateTimeFormat;
            static DATETIME_MED_WITH_SECONDS: DateTimeFormat;
            static DATETIME_SHORT: DateTimeFormat;
            static DATETIME_SHORT_WITH_SECONDS: DateTimeFormat;
            static DATE_FULL: DateTimeFormat;
            static DATE_HUGE: DateTimeFormat;
            static DATE_MED: DateTimeFormat;
            static DATE_SHORT: DateTimeFormat;
            static TIME_24_SIMPLE: DateTimeFormat;
            static TIME_24_WITH_LONG_OFFSET: DateTimeFormat;
            static TIME_24_WITH_SECONDS: DateTimeFormat;
            static TIME_24_WITH_SHORT_OFFSET: DateTimeFormat;
            static TIME_SIMPLE: DateTimeFormat;
            static TIME_WITH_LONG_OFFSET: DateTimeFormat;
            static TIME_WITH_SECONDS: DateTimeFormat;
            static TIME_WITH_SHORT_OFFSET: DateTimeFormat;
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
            static fromString(
                text: string,
                format: string,
                options?: DateTimeOptions
            ): DateTime;
            static fromStringExplain(
                text: string,
                format: string,
                options?: DateTimeOptions
            ): Object;
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
            static max(...dateTimes: DateTime[]): DateTime | undefined;
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
            ordinal: number | DateTime;
            outputCalendar: string;
            second: number;
            weekNumber: number;
            weekYear: number;
            weekday: string;
            weekdayLong: string;
            weekdayShort: string;
            year: number;
            zoneName: string;
            diff(
                other: DateTime,
                unit?: string | string[],
                options?: DiffOptions
            ): Duration;
            diffNow(unit?: string | string[], options?: DiffOptions): Duration;
            endOf(unit: string): DateTime;
            equals(other: DateTime): boolean;
            get(unit: string): number;
            hasSame(other: DateTime, unit: string): boolean;
            minus(duration: Duration): DateTime;
            minus(milliseconds: number): DateTime;
            minus(durationObject: DurationObject): DateTime;
            plus(duration: Duration | number | Object): DateTime;
            reconfigure(properties: Object): DateTime;
            resolvedLocaleOptions(options?: Object): Object;
            set(values: DateObjectUnits): DateTime;
            setLocale(locale: any): DateTime;
            setZone(zone: string | Zone, options?: ZoneOptions): DateTime;
            startOf(unit: string): DateTime;
            toFormat(format: string, options?: ToFormatOptions): string;
            toHTTP(): string;
            toISO(options?: Object): string;
            toISODate(): string;
            toISOTime(options?: ISOTimeOptions): string;
            toISOWeekDate(): string;
            toJSDate(): Date;
            toJSON(): string;
            toLocal(): DateTime;
            toLocaleParts(options?: Object): any[];
            toLocaleString(options?: DateTimeFormat): string;
            toObject(options?: { includeConfig?: boolean }): DateObject;
            toRFC2822(): string;
            toString(): string;
            toUTC(offset?: number, options?: ZoneOptions): DateTime;
            until(other: DateTime): Duration;
            valueOf(): number;
        }

        type DurationOptions = {
            locale?: string;
            numberingSystem?: string;
            conversionAccuracy?: string;
        };

        type DurationObject = {
            years?: number;
            months?: number;
            weeks?: number;
            days?: number;
            hours?: number;
            minutes?: number;
            seconds?: number;
            milliseconds?: number;
        };

        class Duration {
            static fromISO(text: string, options?: DurationOptions): Duration;
            static fromMillis(
                count: number,
                options?: DurationOptions
            ): Duration;
            static fromObject(
                Object: DurationObject & DurationOptions
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
            seconds: number;
            weeks: number;
            years: number;
            as(unit: string): number;
            equals(other: Duration): boolean;
            get(unit: string): number;
            minus(duration: Duration | number | Object): Duration;
            negate(): Duration;
            normalize(): Duration;
            plus(duration: Duration | number | Object): Duration;
            reconfigure(objectPattern: DurationOptions): Duration;
            set(values: DurationObject): Duration;
            shiftTo(...units: string[]): Duration;
            toFormat(format: string, options?: ToFormatOptions): string;
            toISO(): string;
            toJSON(): string;
            toObject(options?: {
                includeConfig?: boolean;
            }): DurationObject & DurationOptions;
            toString(): string;
        }

        type EraLength = 'short' | 'long';
        type UnitLength = EraLength & 'numeric' | '2-digit' | 'narrow';
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
            timezones: boolean;
        };

        type Info = {
            eras(length?: EraLength, options?: InfoOptions): string[];
            features(): Features;
            hasDST(zone: string | Zone): boolean;
            meridiems(options?: InfoOptions): string[];
            months(length?: UnitLength, options?: UnitOptions): string[];
            monthsFormat(length?: UnitLength, options?: UnitOptions): string[];
            weeksdays(length?: UnitLength, options?: UnitOptions): string[];
            weekdaysFormat(
                length?: UnitLength,
                options?: UnitOptions
            ): string[];
        };

        type IntervalObject = {
            start: DateTime;
            end: DateTime;
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
            static merge(intervals: Interval[]): [Interval];
            static xor(intervals: Interval[]): [Interval];
            end: DateTime;
            invalidReason: string;
            isValid: boolean;
            start: DateTime;
            abutsEnd(other: Interval): boolean;
            abutsStart(other: Interval): boolean;
            contains(dateTime: DateTime): boolean;
            count(unit?: string): number;
            difference(...intervals: Interval[]): Interval;
            divideEqually(numberOfParts?: number): Interval[];
            engulfs(other: Interval): boolean;
            equals(other: Interval): boolean;
            hasSame(unit: string): boolean;
            intersection(other: Interval): Interval;
            isAfter(dateTime: DateTime): boolean;
            isBefore(dateTime: DateTime): boolean;
            isEmpty(): boolean;
            length(unit?: string): number;
            overlaps(other: Interval): boolean;
            set(values: IntervalObject): Interval;
            splitAt(...dateTimes: DateTime[]): Interval[];
            splitBy(duration: Duration | DurationObject | number): Interval[];
            toDuration(
                unit: string | string[],
                options?: DiffOptions
            ): Duration;
            toFormat(
                dateFormat: string,
                options?: {
                    seperator?: string;
                }
            ): string;
            toISO(options?: Object): string;
            toString(): string;
            union(other: Interval): Interval;
        }

        namespace Settings {
            let defaultLocale: string;
            let defaultNumberingSystem: string;
            let defaultOutputCalendar: string;
            const defaultZone: Zone;
            let defaultZoneName: string;
            let now: number;
            let throwOnInvalid: boolean;
            function resetCache(): void;
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
            static offset(ts: number): number;
        }
    }

    export = luxon;
}
