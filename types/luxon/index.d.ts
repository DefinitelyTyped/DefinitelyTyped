// Type definitions for luxon 1.25
// Project: https://github.com/moment/luxon#readme
// Definitions by: Colby DeHart <https://github.com/colbydehart>
//                 Hyeonseok Yang <https://github.com/FourwingsY>
//                 Jonathan Siebern <https://github.com/jsiebern>
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Pietro Vismara <https://github.com/pietrovismara>
//                 Janeene Beeforth <https://github.com/dawnmist>
//                 Jason Yu <https://github.com/ycmjason>
//                 Aitor Pérez Rodal <https://github.com/Aitor1995>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export interface ZoneOptions {
    keepLocalTime?: boolean;
    /**
     * @deprecated since 0.2.12. Use keepLocalTime instead
     */
    keepCalendarTime?: boolean;
}

export type ToRelativeUnit =
    | 'years'
    | 'quarters'
    | 'months'
    | 'weeks'
    | 'days'
    | 'hours'
    | 'minutes'
    | 'seconds';

export interface ToRelativeOptions {
    /** The DateTime to use as the basis to which this time is compared. Defaults to now. */
    base?: DateTime;
    locale?: string;
    style?: StringUnitLength;
    /** If omitted, the method will pick the unit. */
    unit?: ToRelativeUnit;
    /** Defaults to `true`. */
    round?: boolean;
    /**
     * Padding in milliseconds. This allows you to round up the result if it fits inside the threshold.
     * Don't use in combination with {round: false} because the decimal output will include the padding.
     * Defaults to 0.
     */
    padding?: number;
    /** The Intl system may choose not to honor this */
    numberingSystem?: NumberingSystem;
}

export interface ToRelativeCalendarOptions {
    /** The DateTime to use as the basis to which this time is compared. Defaults to now. */
    base?: DateTime;
    locale?: string;
    /** If omitted, the method will pick the unit. */
    unit?: ToRelativeUnit;
    /** The Intl system may choose not to honor this. */
    numberingSystem?: NumberingSystem;
}

export interface ToSQLOptions {
    includeOffset?: boolean;
    includeZone?: boolean;
}

export type ToISOFormat = 'basic' | 'extended';

export interface ToISOTimeOptions {
    /**
     * @default false
     */
    suppressMilliseconds?: boolean;
    /**
     * @default false
     */
    suppressSeconds?: boolean;
    /**
     * @default true
     */
    includeOffset?: boolean;
    /**
     * choose between the basic and extended format
     * @default 'extended'
     */
    format?: ToISOFormat;
}

export interface ToISODateOptions {
    /**
     * choose between the basic and extended format
     * @default 'extended'
     */
    format?: ToISOFormat;
}

// alias for backwards compatibility
export type ISOTimeOptions = ToISOTimeOptions;

export interface LocaleOptions {
    locale?: string;
    outputCalendar?: CalendarSystem;
    numberingSystem?: NumberingSystem;
}

export interface DateTimeOptions extends LocaleOptions {
    zone?: string | Zone;
    setZone?: boolean;
}

export interface DateTimeJSOptions extends LocaleOptions {
    zone?: string | Zone;
}

export interface DateObjectUnits {
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
}

export interface DateObject extends DateObjectUnits, LocaleOptions {
    zone?: string | Zone;
}

export type ConversionAccuracy = 'casual' | 'longterm';

export interface DiffOptions {
    conversionAccuracy?: ConversionAccuracy;
}

export interface ExplainedFormat {
    input: string;
    tokens: Array<{ literal: boolean; val: string }>;
    regex?: RegExp;
    rawMatches?: RegExpMatchArray | null;
    matches?: { [k: string]: any };
    result?: { [k: string]: any } | null;
    zone?: Zone | null;
    invalidReason?: string;
}

export class DateTime {
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
    /** abbreviated date with weekday */
    static readonly DATE_MED_WITH_WEEKDAY: DateTimeFormatOptions;
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
    static fromJSDate(date: Date, options?: DateTimeJSOptions): DateTime;
    static fromMillis(ms: number, options?: DateTimeOptions): DateTime;
    static fromObject(obj: DateObject): DateTime;
    static fromRFC2822(text: string, options?: DateTimeOptions): DateTime;
    static fromSeconds(seconds: number, options?: DateTimeOptions): DateTime;
    static fromSQL(text: string, options?: DateTimeOptions): DateTime;
    static fromFormat(text: string, format: string, opts?: DateTimeOptions): DateTime;
    static fromFormatExplain(text: string, format: string, opts?: DateTimeOptions): ExplainedFormat;
    /**
     * @deprecated since 0.3.0. Use fromFormat instead
     */
    static fromString(text: string, format: string, options?: DateTimeOptions): DateTime;
    /**
     * @deprecated 0.3.0. Use fromFormatExplain instead
     */
    static fromStringExplain(
        text: string,
        format: string,
        options?: DateTimeOptions,
    ): ExplainedFormat;
    /**
     * Create an invalid DateTime.
     * @param reason - simple string of why this DateTime is invalid.
     * Should not contain parameters or anything else data-dependent
     * @param [explanation=null] - longer explanation, may include parameters and other useful debugging information
     */
    static invalid(reason: string, explanation?: string): DateTime;
    static isDateTime(o: any): o is DateTime;
    static local(
        year?: number,
        month?: number,
        day?: number,
        hour?: number,
        minute?: number,
        second?: number,
        millisecond?: number,
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
        millisecond?: number,
    ): DateTime;
    day: number;
    daysInMonth: number;
    daysInYear: number;
    hour: number;
    invalidReason: string | null;
    invalidExplanation: string | null;
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
    zone: Zone;
    diff(other: DateTime, unit?: DurationUnit | DurationUnit[], options?: DiffOptions): Duration;
    diffNow(unit?: DurationUnit | DurationUnit[], options?: DiffOptions): Duration;
    endOf(unit: DurationUnit): DateTime;
    equals(other: DateTime): boolean;
    get(unit: keyof DateTime): number;
    hasSame(other: DateTime, unit: DurationUnit): boolean;
    minus(duration: Duration | number | DurationObject): DateTime;
    plus(duration: Duration | number | DurationObject): DateTime;
    reconfigure(properties: LocaleOptions): DateTime;
    resolvedLocaleOpts(options?: DateTimeFormatOptions): Intl.ResolvedDateTimeFormatOptions;
    set(values: DateObjectUnits): DateTime;
    setLocale(locale: string): DateTime;
    setZone(zone: string | Zone, options?: ZoneOptions): DateTime;
    startOf(unit: DurationUnit): DateTime;
    toBSON(): Date;
    toFormat(format: string, options?: DateTimeFormatOptions): string;
    toHTTP(): string;
    toISO(options?: ToISOTimeOptions): string;
    /** Returns an ISO 8601-compliant string representation of this DateTime's date component */
    toISODate(options?: ToISODateOptions): string;
    toISOTime(options?: ToISOTimeOptions): string;
    toISOWeekDate(): string;
    toJSDate(): Date;
    toJSON(): string;
    toLocal(): DateTime;
    toLocaleParts(options?: LocaleOptions & DateTimeFormatOptions): any[];
    toLocaleString(options?: LocaleOptions & DateTimeFormatOptions): string;
    toMillis(): number;
    toObject(options?: { includeConfig?: boolean }): DateObject;
    toRelative(options?: ToRelativeOptions): string | null;
    toRelativeCalendar(options?: ToRelativeCalendarOptions): string | null;
    toRFC2822(): string;
    toSeconds(): number;
    toSQL(options?: ToSQLOptions): string;
    toSQLDate(): string;
    toSQLTime(options?: ToSQLOptions): string;
    toString(): string;
    toUTC(offset?: number, options?: ZoneOptions): DateTime;
    until(other: DateTime): Interval;
    valueOf(): number;
}

export interface DurationOptions {
    locale?: string;
    numberingSystem?: NumberingSystem;
    conversionAccuracy?: ConversionAccuracy;
}

export interface DurationObjectUnits {
    year?: number;
    years?: number;
    quarter?: number;
    quarters?: number;
    month?: number;
    months?: number;
    week?: number;
    weeks?: number;
    day?: number;
    days?: number;
    hour?: number;
    hours?: number;
    minute?: number;
    minutes?: number;
    second?: number;
    seconds?: number;
    millisecond?: number;
    milliseconds?: number;
}

export interface DurationObject extends DurationObjectUnits, DurationOptions {}

export type DurationUnit = keyof DurationObjectUnits;

export interface DurationToFormatOptions extends DateTimeFormatOptions {
    floor?: boolean;
    round?: boolean;
}

export class Duration {
    static fromISO(text: string, options?: DurationOptions): Duration;
    static fromMillis(count: number, options?: DurationOptions): Duration;
    static fromObject(Object: DurationObject): Duration;
    static invalid(reason?: string): Duration;
    static isDuration(o: any): o is Duration;
    days: number;
    hours: number;
    invalidReason: string | null;
    invalidExplanation: string | null;
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
    mapUnits(fn: (x: number, u: DurationUnit) => number): Duration;
    toFormat(format: string, options?: DurationToFormatOptions): string;
    toISO(): string;
    toJSON(): string;
    toObject(options?: { includeConfig?: boolean }): DurationObject;
    toString(): string;
    valueOf(): number;
}

// @deprecated
export type EraLength = StringUnitLength;

export type NumberingSystem =
    | 'arab'
    | 'arabext'
    | 'bali'
    | 'beng'
    | 'deva'
    | 'fullwide'
    | 'gujr'
    | 'guru'
    | 'hanidec'
    | 'khmr'
    | 'knda'
    | 'laoo'
    | 'latn'
    | 'limb'
    | 'mlym'
    | 'mong'
    | 'mymr'
    | 'orya'
    | 'tamldec'
    | 'telu'
    | 'thai'
    | 'tibt';

export type CalendarSystem =
    | 'buddhist'
    | 'chinese'
    | 'coptic'
    | 'ethioaa'
    | 'ethiopic'
    | 'gregory'
    | 'hebrew'
    | 'indian'
    | 'islamic'
    | 'islamicc'
    | 'iso8601'
    | 'japanese'
    | 'persian'
    | 'roc';

export type HourCycle = 'h11' | 'h12' | 'h23' | 'h24';

export type StringUnitLength = 'narrow' | 'short' | 'long';
export type NumberUnitLength = 'numeric' | '2-digit';
export type UnitLength = StringUnitLength | NumberUnitLength;

export interface InfoOptions {
    locale?: string;
}

export interface InfoUnitOptions extends InfoOptions {
    numberingSystem?: NumberingSystem;
}

// @deprecated
export type UnitOptions = InfoUnitOptions;

export interface InfoCalendarOptions extends InfoUnitOptions {
    outputCalendar?: CalendarSystem;
}

export interface Features {
    intl: boolean;
    intlTokens: boolean;
    zones: boolean;
    relative: boolean;
}

export namespace Info {
    function eras(length?: StringUnitLength, options?: InfoOptions): string[];
    function features(): Features;
    function hasDST(zone: string | Zone): boolean;
    function isValidIANAZone(zone: string): boolean;
    function normalizeZone(input?: number | string | Zone): Zone;
    function meridiems(options?: InfoOptions): string[];
    function months(length?: UnitLength, options?: InfoCalendarOptions): string[];
    function monthsFormat(length?: UnitLength, options?: InfoCalendarOptions): string[];
    function weekdays(length?: StringUnitLength, options?: InfoUnitOptions): string[];
    function weekdaysFormat(length?: StringUnitLength, options?: InfoUnitOptions): string[];
}

export interface IntervalObject {
    start?: DateTime;
    end?: DateTime;
}

export class Interval {
    static after(
        start: DateTime | DateObject | Date,
        duration: Duration | number | DurationObject,
    ): Interval;
    static before(
        end: DateTime | DateObject | Date,
        duration: Duration | number | DurationObject,
    ): Interval;
    static fromDateTimes(
        start: DateTime | DateObject | Date,
        end: DateTime | DateObject | Date,
    ): Interval;
    static fromISO(string: string, options?: DateTimeOptions): Interval;
    static invalid(reason?: string): Interval;
    static isInterval(o: any): o is Interval;
    static merge(intervals: Interval[]): Interval[];
    static xor(intervals: Interval[]): Interval[];
    end: DateTime;
    invalidReason: string | null;
    invalidExplanation: string | null;
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
    intersection(other: Interval): Interval | null;
    isAfter(dateTime: DateTime): boolean;
    isBefore(dateTime: DateTime): boolean;
    isEmpty(): boolean;
    length(unit?: DurationUnit): number;
    overlaps(other: Interval): boolean;
    set(values: IntervalObject): Interval;
    splitAt(...dateTimes: DateTime[]): Interval[];
    splitBy(duration: Duration | DurationObject | number): Interval[];
    toDuration(unit?: DurationUnit | DurationUnit[], options?: DiffOptions): Duration;
    toFormat(
        dateFormat: string,
        options?: {
            separator?: string;
        },
    ): string;
    toISO(options?: ToISOTimeOptions): string;
    toISODate(): string;
    toISOTime(options?: ToISOTimeOptions): string;
    toString(): string;
    union(other: Interval): Interval;
    mapEndpoints(cb: (d: DateTime) => DateTime): Interval;
}

export namespace Settings {
    let defaultLocale: string;
    let defaultNumberingSystem: string;
    let defaultOutputCalendar: string;
    const defaultZone: Zone;
    let defaultZoneName: string;
    let throwOnInvalid: boolean;
    function now(): number;
    function resetCaches(): void;
}

export interface ZoneOffsetOptions {
    format?: 'short' | 'long';
    locale?: string;
}

export type ZoneOffsetFormat = 'narrow' | 'short' | 'techie';

export class Zone {
    offsetName(ts: number, options: ZoneOffsetOptions): string;
    formatOffset(ts: number, format: ZoneOffsetFormat): string;
    isValid: boolean;
    name: string;
    type: string;
    universal: boolean;
    equals(other: Zone): boolean;
    offset(ts: number): number;
}

export class IANAZone extends Zone {
    constructor(ianaString: string);
    static create(name: string): IANAZone;
    static isValidSpecifier(s: string): boolean;
    static isValidZone(zone: string): boolean;
    static resetCache(): void;
}

export class FixedOffsetZone extends Zone {
    static utcInstance: FixedOffsetZone;
    static instance(offset: number): FixedOffsetZone;
    static parseSpecifier(s: string): FixedOffsetZone;
}

export class InvalidZone extends Zone { }

export class LocalZone extends Zone { }
