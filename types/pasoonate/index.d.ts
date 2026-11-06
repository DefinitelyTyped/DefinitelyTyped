export type CalendarName = "gregorian" | "jalali" | "islamic" | "shia";

export interface DateParts {
    year: number;
    month: number;
    day: number;
}

export interface TimeParts {
    hour: number;
    minute: number;
    second: number;
}

export interface DateTimeParts extends DateParts, TimeParts {}

export interface Duration {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type Translation =
    | string
    | readonly string[]
    | { readonly [key: string]: Translation };

export interface Localization {
    setLang(name: string, translations: Translation): void;
    setLocale(locale: string): void;
    getLocale(): string;
    isLocale(locale: string): boolean;
    hasTransKey(key: string, locale: string): false | Translation;
    getTrans(key: string, locale: string): Translation;
    trans(key?: string, locale?: string): Translation;
}

export interface DateFormatter {
    setCalendar(calendar: CalendarManager): void;
    getCalendar(): CalendarManager | null;
    format(pattern: string, locale?: string): string;
}

export interface DateParser {
    calendar: CalendarManager | null;
    parse(format: string, text: string): void;
}

export interface CalendarManager {
    gregorian(dateTime?: string): this;
    jalali(dateTime?: string): this;
    islamic(dateTime?: string): this;
    shia(dateTime?: string): this;

    name(): CalendarName | "";
    name(calendar: CalendarName | string): void;
    parse(pattern: string, text: string): this;
    format(pattern: string, locale?: string): string;
    clone(): CalendarManager;

    setTimestamp(timestamp: number): this;
    getTimestamp(): number;
    setTimezoneOffset(timezoneOffset: number): this;
    getTimezoneOffset(): number;

    setYear(year: number): this;
    getYear(): number;
    setMonth(month: number): this;
    getMonth(): number;
    setDay(day: number): this;
    getDay(): number;
    setHour(hour: number): this;
    getHour(): number;
    setMinute(minute: number): this;
    getMinute(): number;
    setSecond(second: number): this;
    getSecond(): number;

    setUTCYear(year: number): this;
    getUTCYear(): number;
    setUTCMonth(month: number): this;
    getUTCMonth(): number;
    setUTCDay(day: number): this;
    getUTCDay(): number;
    setUTCHour(hour: number): this;
    getUTCHour(): number;
    setUTCMinute(minute: number): this;
    getUTCMinute(): number;
    setUTCSecond(second: number): this;
    getUTCSecond(): number;

    setDate(year: number, month: number, day: number): this;
    getDate(): DateParts;
    setTime(hour: number, minute: number, second: number): this;
    getTime(): TimeParts;
    setDateTime(
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        second: number,
    ): this;
    getDateTime(): DateTimeParts;
    setUTCDate(year: number, month: number, day: number): this;
    getUTCDate(): DateParts;
    setUTCTime(hour: number, minute: number, second: number): this;
    getUTCTime(): TimeParts;
    setUTCDateTime(
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        second: number,
    ): this;
    getUTCDateTime(): DateTimeParts;

    dayOfWeek(): number;
    dayOfYear(): number;
    weekOfMonth(): number;
    weekOfYear(): number;

    addYear(count: number): this;
    addMonth(count: number): this;
    addDay(count: number): this;
    addHour(count: number): this;
    addMinute(count: number): this;
    addSecond(count: number): this;
    subYear(count: number): this;
    subMonth(count: number): this;
    subDay(count: number): this;
    subHour(count: number): this;
    subMinute(count: number): this;
    subSecond(count: number): this;

    age(instance: CalendarManager): Duration;
    diff(instance: CalendarManager): Duration;
    diffInSeconds(instance: CalendarManager): number;
    diffInMinutes(instance: CalendarManager): number;
    diffInHours(instance: CalendarManager): number;
    diffInDays(instance: CalendarManager): number;
    diffInMonths(instance: CalendarManager): number;
    diffInYears(instance: CalendarManager): number;
    diffForHumans(instance: CalendarManager): string;

    equal(other: CalendarManager): boolean;
    afterThan(other: CalendarManager): boolean;
    afterThanOrEqual(other: CalendarManager): boolean;
    beforeThan(other: CalendarManager): boolean;
    beforeThanOrEqual(other: CalendarManager): boolean;
    between(value1: CalendarManager, value2: CalendarManager): boolean;
    min(other: CalendarManager): CalendarManager;
    max(other: CalendarManager): CalendarManager;
    isWeekday(): boolean;
    isWeekend(): boolean;
    isSaturday(): boolean;
    isSunday(): boolean;
    isMonday(): boolean;
    isTuesday(): boolean;
    isWednesday(): boolean;
    isThursday(): boolean;
    isFriday(): boolean;
    isYesterday(): boolean;
    isToday(): boolean;
    isTomorrow(): boolean;
    isFuture(): boolean;
    isPast(): boolean;
    isLeapYear(): boolean;
    isSameDay(other: CalendarManager): boolean;

    startOfDay(): this;
    endOfDay(): this;
    startOfMonth(): this;
    endOfMonth(): this;
    startOfYear(): this;
    endOfYear(): this;
    startOfWeek(): this;
    endOfWeek(): this;
}

declare class Pasoonate {
    static readonly J1970: number;
    static readonly Saturday: 0;
    static readonly Sunday: 1;
    static readonly Monday: 2;
    static readonly Tuesday: 3;
    static readonly Wednesday: 4;
    static readonly Thursday: 5;
    static readonly Friday: 6;
    static readonly YearsPerCentury: number;
    static readonly YearsPerDecade: number;
    static readonly MonthsPerYear: number;
    static readonly WeeksPerYear: number;
    static readonly DaysPerWeek: number;
    static readonly HoursPerDay: number;
    static readonly MinutesPerHour: number;
    static readonly SecondsPerMinute: number;
    static readonly HourInSeconds: number;
    static readonly DayInSeconds: number;
    static readonly WeekInSeconds: number;
    static readonly MonthInSeconds: number;
    static readonly YearInSeconds: number;
    static readonly MonthInDays: number;
    static readonly YearInDays: number;
    static readonly ShiaEpoch: number;
    static readonly JalaliEpoch: number;
    static readonly GregorianEpoch: number;
    static readonly IslamicEpoch: number;
    static readonly DaysOfIslamicYear: number;
    static readonly DaysOfShiaYear: number;
    static readonly DaysOfJalaliYear: number;
    static readonly DaysOfTropicalJalaliYear: number;
    static readonly DaysOfGregorianYear: number;
    static readonly Gregorian: "gregorian";
    static readonly Jalali: "jalali";
    static readonly Shia: "shia";
    static readonly Islamic: "islamic";

    static readonly localization: Localization;
    static readonly formatter: DateFormatter;
    static readonly parser: DateParser;

    static make(timestamp?: number, timezoneOffset?: number): CalendarManager;
    static trans(key: string, locale?: string): Translation;
    static setLocale(locale: string): void;
    static getLocale(): string;
    static isLocale(locale: string): boolean;
    static setFormatter(formatter: DateFormatter): void;
    static setParser(parser: DateParser): void;
    static clone(instance: CalendarManager): CalendarManager;
}

export default Pasoonate;
