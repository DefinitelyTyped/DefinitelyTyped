// Type definitions for Moment.js 2.11.1
// Project: https://github.com/timrwood/moment
// Definitions by: Michael Lakerveld <https://github.com/Lakerfield>, Aaron King <https://github.com/kingdango>, Hiroki Horiuchi <https://github.com/horiuchi>, Dick van den Brink <https://github.com/DickvdBrink>, Adi Dahiya <https://github.com/adidahiya>, Matt Brooks <https://github.com/EnableSoftware>, Gal Talmor <https://github.com/galtalmor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function moment(): moment.Moment;
declare function moment(date: number): moment.Moment;
declare function moment(date: number[]): moment.Moment;
declare function moment(date: string, format?: string, strict?: boolean): moment.Moment;
declare function moment(date: string, format?: string, language?: string, strict?: boolean): moment.Moment;
declare function moment(date: string, formats: string[], strict?: boolean): moment.Moment;
declare function moment(date: string, formats: string[], language?: string, strict?: boolean): moment.Moment;
declare function moment(date: string, specialFormat: () => void, strict?: boolean): moment.Moment;
declare function moment(date: string, specialFormat: () => void, language?: string, strict?: boolean): moment.Moment;
declare function moment(date: string, formatsIncludingSpecial: any[], strict?: boolean): moment.Moment;
declare function moment(date: string, formatsIncludingSpecial: any[], language?: string, strict?: boolean): moment.Moment;
declare function moment(date: Date): moment.Moment;
declare function moment(date: moment.Moment): moment.Moment;
declare function moment(date: Object): moment.Moment;

declare namespace moment {
  type formatFunction = () => string;

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

  interface MomentLanguageData extends BaseMomentLanguage {
    /**
    * @param formatType should be L, LL, LLL, LLLL.
    */
    longDateFormat(formatType: string): string;
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

    add(n: number, p: UnitOfTime): Duration;
    add(n: number): Duration;
    add(d: Duration): Duration;

    subtract(n: number, p: UnitOfTime): Duration;
    subtract(n: number): Duration;
    subtract(d: Duration): Duration;

    toISOString(): string;
    toJSON(): string;
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

  interface MomentCalendar {
    lastDay?: string | formatFunction;
    sameDay?: string | formatFunction;
    nextDay?: string | formatFunction;
    lastWeek?: string | formatFunction;
    nextWeek?: string | formatFunction;
    sameElse?: string | formatFunction;
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

  interface MomentParsingFlags {
     empty: boolean;
     unusedTokens: string[];
     unusedInput: string[];
     overflow: number;
     charsLeftOver: number;
     nullInput: boolean;
     invalidMonth?: string;
     invalidFormat: boolean;
     userInvalidated: boolean;
     iso: boolean;
     parsedDateParts: any[];
     meridiem?: string;
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
  }

  interface MomentLanguage extends BaseMomentLanguage {
    longDateFormat?: MomentLongDateFormat;
  }

  type UnitOfTime = ("year" | "years" | "y" |
              "quarter" | "quarters" | "Q" |
              "month" | "months" | "M" |
              "week" | "weeks" | "w" |
              "day" | "days" | "d" |
              "hour" | "hours" | "h" |
              "minute" | "minutes" | "m" |
              "second" | "seconds" | "s" |
              "millisecond" | "milliseconds" | "ms");

  interface Moment {
    format(format: string): string;
    format(): string;

    fromNow(withoutSuffix?: boolean): string;

    startOf(unitOfTime: UnitOfTime): Moment;
    endOf(unitOfTime: UnitOfTime): Moment;

    /**
    * Mutates the original moment by adding time. (deprecated in 2.8.0)
    *
    * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
    * @param amount the amount you want to add
    */
    add(unitOfTime: UnitOfTime, amount: number): Moment;
    /**
    * Mutates the original moment by adding time.
    *
    * @param amount the amount you want to add
    * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
    */
    add(amount: number, unitOfTime: UnitOfTime): Moment;
    /**
    * Mutates the original moment by adding time. Note that the order of arguments can be flipped.
    *
    * @param amount the amount you want to add
    * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
    */
    add(amount: string, unitOfTime: UnitOfTime): Moment;
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
    subtract(unitOfTime: UnitOfTime, amount: number): Moment;
    /**
    * Mutates the original moment by subtracting time.
    *
    * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
    * @param amount the amount you want to subtract
    */
    subtract(amount: number, unitOfTime: UnitOfTime): Moment;
    /**
    * Mutates the original moment by subtracting time. Note that the order of arguments can be flipped.
    *
    * @param amount the amount you want to add
    * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
    */
    subtract(amount: string, unitOfTime: UnitOfTime): Moment;
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

    parsingFlags(): MomentParsingFlags;

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

    from(f: Moment | string | number | Date | number[], suffix?: boolean): string;
    to(f: Moment | string | number | Date | number[], suffix?: boolean): string;
    toNow(withoutPrefix?: boolean): string;

    diff(b: Moment): number;
    diff(b: Moment, unitOfTime: UnitOfTime): number;
    diff(b: Moment, unitOfTime: UnitOfTime, precise: boolean): number;

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
    isBefore(b: Moment | string | number | Date | number[], granularity?: string): boolean;

    isAfter(): boolean;
    isAfter(b: Moment | string | number | Date | number[], granularity?: string): boolean;

    isSame(b: Moment | string | number | Date | number[], granularity?: string): boolean;
    isSameOrAfter(b: Moment | string | number | Date | number[], granularity?: string): boolean;
    isSameOrBefore(b: Moment | string | number | Date | number[], granularity?: string): boolean;

    isBetween(a: Moment | string | number | Date | number[], b: Moment | string | number | Date | number[], granularity?: string, inclusivity?: string): boolean;

    // Deprecated as of 2.8.0.
    lang(language: string): Moment;
    lang(reset: boolean): Moment;
    lang(): MomentLanguage;

    locale(language: string): Moment;
    locale(reset: boolean): Moment;
    locale(): string;

    localeData(language: string): Moment;
    localeData(reset: boolean): Moment;
    localeData(): MomentLanguage;

    defineLocale(language: string, locale: MomentLanguage): MomentLanguage;
    updateLocale(language: string, locale: MomentLanguage): MomentLanguage;

    // Deprecated as of 2.7.0.
    max(date: Moment | string | number | Date | any[]): Moment;
    max(date: string, format: string): Moment;

    // Deprecated as of 2.7.0.
    min(date: Moment | string | number | Date | any[]): Moment;
    min(date: string, format: string): Moment;

    get(unit: UnitOfTime): number;
    set(unit: UnitOfTime, value: number): Moment;
    set(objectLiteral: MomentInput): Moment;

    /*This returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.*/
    //Works with version 2.10.5+
    toObject(): MomentDateObject;
  }

  export var version: string;
  export var fn: Moment;

  export function utc(): Moment;
  export function utc(date: number): Moment;
  export function utc(date: number[]): Moment;
  export function utc(date: string, format?: string, strict?: boolean): Moment;
  export function utc(date: string, format?: string, language?: string, strict?: boolean): Moment;
  export function utc(date: string, formats: string[], strict?: boolean): Moment;
  export function utc(date: string, formats: string[], language?: string, strict?: boolean): Moment;
  export function utc(date: Date): Moment;
  export function utc(date: Moment): Moment;
  export function utc(date: Object): Moment;

  export function unix(timestamp: number): Moment;

  export function invalid(parsingFlags?: Object): Moment;
  export function isMoment(): boolean;
  export function isMoment(m: any): m is Moment;
  export function isDate(m: any): m is Date;
  export function isDuration(): boolean;
  export function isDuration(d: any): d is Duration;

  // Deprecated in 2.8.0.
  export function lang(language?: string): string;
  export function lang(language?: string, definition?: MomentLanguage): string;

  export function locale(language?: string): string;
  export function locale(language?: string[]): string;
  export function locale(language?: string, definition?: MomentLanguage): string;

  export function localeData(language?: string): MomentLanguageData;

  export function updateLocale(language: string, locale: MomentLanguage): MomentLanguage;

  export var longDateFormat: any;
  export var relativeTime: any;
  export var meridiem: (hour: number, minute: number, isLowercase: boolean) => string;
  export var calendar: any;
  export var ordinal: (num: number) => string;

  export function duration(milliseconds: Number): Duration;
  export function duration(num: Number, unitOfTime: UnitOfTime): Duration;
  export function duration(input: MomentInput): Duration;
  export function duration(object: any): Duration;
  export function duration(): Duration;

  export function parseZone(date: string): Moment;

  export function months(): string[];
  export function months(index: number): string;
  export function months(format: string): string[];
  export function months(format: string, index: number): string;
  export function monthsShort(): string[];
  export function monthsShort(index: number): string;
  export function monthsShort(format: string): string[];
  export function monthsShort(format: string, index: number): string;

  export function weekdays(): string[];
  export function weekdays(index: number): string;
  export function weekdays(format: string): string[];
  export function weekdays(format: string, index: number): string;
  export function weekdays(localeSorted: boolean): string[];
  export function weekdays(localeSorted: boolean, index: number): string;
  export function weekdays(localeSorted: boolean, format: string): string[];
  export function weekdays(localeSorted: boolean, format: string, index: number): string;
  export function weekdaysShort(): string[];
  export function weekdaysShort(index: number): string;
  export function weekdaysShort(format: string): string[];
  export function weekdaysShort(format: string, index: number): string;
  export function weekdaysShort(localeSorted: boolean): string[];
  export function weekdaysShort(localeSorted: boolean, index: number): string;
  export function weekdaysShort(localeSorted: boolean, format: string): string[];
  export function weekdaysShort(localeSorted: boolean, format: string, index: number): string;
  export function weekdaysMin(): string[];
  export function weekdaysMin(index: number): string;
  export function weekdaysMin(format: string): string[];
  export function weekdaysMin(format: string, index: number): string;
  export function weekdaysMin(localeSorted: boolean): string[];
  export function weekdaysMin(localeSorted: boolean, index: number): string;
  export function weekdaysMin(localeSorted: boolean, format: string): string[];
  export function weekdaysMin(localeSorted: boolean, format: string, index: number): string;

  export function min(...moments: Moment[]): Moment;
  export function max(...moments: Moment[]): Moment;

  export function normalizeUnits(unit: string): string;
  export function relativeTimeThreshold(threshold: string): number | boolean;
  export function relativeTimeThreshold(threshold: string, limit: number): boolean;
  export function relativeTimeRounding(fn: (num: number) => number): boolean;
  export function relativeTimeRounding(): (num: number) => number;
  export function calendarFormat(m: Moment, now: Moment): string;

  /**
  * Constant used to enable explicit ISO_8601 format parsing.
  */
  export function ISO_8601(): void;

  export var defaultFormat: string;
}

export = moment;
