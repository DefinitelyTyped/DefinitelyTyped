// Type definitions for Moment.js 2.5.0
// Project: https://github.com/timrwood/moment
// Definitions by: Michael Lakerveld <https://github.com/Lakerfield>
// Definitions by: Aaron King <https://github.com/kingdango> (2.4.0)
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi> (2.5.0)
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

interface MomentInput {
    years?: number;
    y?: number;
    months?: number;
    M?: number;
    weeks?: number;
    w?: number;
    days?: number;
    d?: number;
    hours?: number;
    h?: number;
    minutes?: number;
    m?: number;
    seconds?: number;
    s?: number;
    milliseconds?: number;
    ms?: number;
}


interface Duration {

    humanize(): string;

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

    months(): number;
    asMonths(): number;

    years(): number;
    asYears(): number;

    subtract(n: number, p: string): Duration;
    subtract(n: number): Duration;
    subtract(d: Duration): Duration;
}

interface Moment {

    format(format: string): string;
    format(): string;

    fromNow(withoutSuffix?: boolean): string;

    startOf(soort: string): Moment;
    endOf(soort: string): Moment;

    add(input: MomentInput): Moment;
    add(soort: string, aantal: number): Moment;
    add(duration: Duration): Moment;
    subtract(input: MomentInput): Moment;
    subtract(soort: string, aantal: number): Moment;

    calendar(): string;
    clone(): Moment;

    valueOf(): number;

    local(): Moment; // current date/time in local mode

    utc(): Moment; // current date/time in UTC mode

    isValid(): boolean;

    year(y: number): Moment;
    year(): number;
    quarter(): number;
    month(M: number): Moment;
    month(M: string): Moment;
    month(): number;
    day(d: number): Moment;
    day(d: string): Moment;
    day(): number;
    date(d: number): Moment;
    date(): number;
    hours(h: number): Moment;
    hours(): number;
    minutes(m: number): Moment;
    minutes(): number;
    seconds(s: number): Moment;
    seconds(): number;
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

    from(f: Moment): string;
    from(f: Moment, suffix: boolean): string;
    from(d: Date): string;
    from(s: string): string;
    from(date: number[]): string;

    diff(b: Moment): number;
    diff(b: Moment, soort: string): number;
    diff(b: Moment, soort: string, round: boolean): number;

    toDate(): Date;
    toISOString(): string;
    unix(): number;

    isLeapYear(): boolean;
    zone(): number;
    zone(b: number): Moment;
    zone(b: string): Moment;
    daysInMonth(): number;
    isDST(): boolean;

    isBefore(): boolean;
    isBefore(b: Moment): boolean;
    isBefore(b: string): boolean;
    isBefore(b: Number): boolean;
    isBefore(b: Date): boolean;
    isBefore(b: number[]): boolean;
    isBefore(b: Moment, granularity: string): boolean;
    isBefore(b: String, granularity: string): boolean;
    isBefore(b: Number, granularity: string): boolean;
    isBefore(b: Date, granularity: string): boolean;
    isBefore(b: number[], granularity: string): boolean;

    isAfter(): boolean;
    isAfter(b: Moment): boolean;
    isAfter(b: string): boolean;
    isAfter(b: Number): boolean;
    isAfter(b: Date): boolean;
    isAfter(b: number[]): boolean;
    isAfter(b: Moment, granularity: string): boolean;
    isAfter(b: String, granularity: string): boolean;
    isAfter(b: Number, granularity: string): boolean;
    isAfter(b: Date, granularity: string): boolean;
    isAfter(b: number[], granularity: string): boolean;

    isSame(b: Moment): boolean;
    isSame(b: string): boolean;
    isSame(b: Number): boolean;
    isSame(b: Date): boolean;
    isSame(b: number[]): boolean;
    isSame(b: Moment, granularity: string): boolean;
    isSame(b: String, granularity: string): boolean;
    isSame(b: Number, granularity: string): boolean;
    isSame(b: Date, granularity: string): boolean;
    isSame(b: number[], granularity: string): boolean;

    lang(language: string): void;
    lang(reset: boolean): void;
    lang(): string;

    max(date: Date): Moment;
    max(date: number): Moment;
    max(date: any[]): Moment;
    max(date: string): Moment;
    max(date: string, format: string): Moment;
    max(clone: Moment): Moment;
    
    min(date: Date): Moment;
    min(date: number): Moment;
    min(date: any[]): Moment;
    min(date: string): Moment;
    min(date: string, format: string): Moment;
    min(clone: Moment): Moment;
    
    get(unit: string): number;
    set(unit: string, value: number): Moment;
    
}

interface MomentCalendar {

  lastDay: any;
  sameDay: any;
  nextDay: any;
  lastWeek: any;
  nextWeek: any;
  sameElse: any;

}

interface MomentLanguage {

  months?: any;
  monthsShort?: any;
  weekdays?: any;
  weekdaysShort?: any;
  weekdaysMin?: any;
  longDateFormat?: MomentLongDateFormat;
  relativeTime?: MomentRelativeTime;
  meridiem?: (hour: number, minute: number, isLowercase: boolean) => string;
  calendar?: MomentCalendar;
  ordinal?: (num: number) => string;

}

interface MomentLongDateFormat {

  L: string;
  LL: string;
  LLL: string;
  LLLL: string;
  LT: string;
  l?: string;
  ll?: string;
  lll?: string;
  llll?: string;
  lt?: string;

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

interface MomentStatic {

    (): Moment;
    (date: number): Moment;
    (date: number[]): Moment;
    (date: string, format?: string, strict?: boolean): Moment;
    (date: string, format?: string, language?: string, strict?: boolean): Moment;
    (date: string, formats: string[], strict?: boolean): Moment;
    (date: string, formats: string[], language?: string, strict?: boolean): Moment;
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

    isMoment(): boolean;
    isMoment(m: any): boolean;
    lang(language: string): any;
    lang(language: string, definition: MomentLanguage): any;
    longDateFormat: any;
    relativeTime: any;
    meridiem: (hour: number, minute: number, isLowercase: boolean) => string;
    calendar: any;
    ordinal: (num: number) => string;

    duration(milliseconds: Number): Duration;
    duration(num: Number, soort: string): Duration;
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
    version: string;
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
    
    normalizeUnits(unit: string): string;
    
    invalid(parsingFlags?: Object): Moment;
}

declare var moment: MomentStatic;

declare module 'moment' {
    export = moment;
}
