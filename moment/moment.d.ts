// Type definitions for Moment.js 2.1.0
// Project: https://github.com/timrwood/moment
// Definitions by: Michael Lakerveld <https://github.com/Lakerfield>
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

    valueOf(): string;

    local(): Moment; // current date/time in local mode

    utc(): Moment; // current date/time in UTC mode

    isValid(): boolean;

    year(y: number): Moment;
    year(): number;
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
    weekday(): Moment;
    weekday(d: number): Moment;
    isoWeekday(): Moment;
    isoWeekday(d: number): Moment;
    weekYear(): Moment;
    weekYear(d: number): Moment;
    isoWeekYear(): Moment;
    isoWeekYear(d: number): Moment;

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
    daysInMonth(): number;
    isDST(): boolean;

    isBefore(b: Moment): boolean;
    isBefore(b: string): boolean;
    isBefore(b: Number): boolean;
    isBefore(b: Date): boolean;
    isBefore(b: Array): boolean;
    isBefore(b: Moment, granularity: string): boolean;
    isBefore(b: String, granularity: string): boolean;
    isBefore(b: Number, granularity: string): boolean;
    isBefore(b: Date, granularity: string): boolean;
    isBefore(b: Array, granularity: string): boolean;

    isAfter(b: Moment): boolean;
    isAfter(b: string): boolean;
    isAfter(b: Number): boolean;
    isAfter(b: Date): boolean;
    isAfter(b: Array): boolean;
    isAfter(b: Moment, granularity: string): boolean;
    isAfter(b: String, granularity: string): boolean;
    isAfter(b: Number, granularity: string): boolean;
    isAfter(b: Date, granularity: string): boolean;
    isAfter(b: Array, granularity: string): boolean;

    isSame(b: Moment): boolean;
    isSame(b: string): boolean;
    isSame(b: Number): boolean;
    isSame(b: Date): boolean;
    isSame(b: Array): boolean;
    isSame(b: Moment, granularity: string): boolean;
    isSame(b: String, granularity: string): boolean;
    isSame(b: Number, granularity: string): boolean;
    isSame(b: Date, granularity: string): boolean;
    isSame(b: Array, granularity: string): boolean;

    lang(language: string);
    lang(reset: boolean);
    lang(): string;

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
    (date: string): Moment;
    (date: string, time: string): Moment;
    (date: Date): Moment;
    (date: string, formats: string[]): Moment;
    (date: number[]): Moment;
    (clone: Moment): Moment;

    clone(): Moment;
    unix(timestamp: number): Moment;

    utc(): Moment; // current date/time in UTC mode
    utc(Number: number): Moment; // milliseconds since the Unix Epoch in UTC mode
    utc(array: number[]): Moment; // parse an array of numbers matching Date.UTC() parameters
    utc(String: string): Moment; // parse string into UTC mode
    utc(String1: string, String2: string): Moment; // parse a string and format into UTC mode

    isMoment(): boolean;
    isMoment(m: any): boolean;
    lang(language: string);
    lang(language: string, definition: MomentLanguage);
    months: string[];
    monthsShort: string[];
    weekdays: string[];
    weekdaysShort: string[];
    weekdaysMin: string[];
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

    isBefore(b: Moment): boolean;
    isBefore(b: string): boolean;
    isBefore(b: Number): boolean;
    isBefore(b: Date): boolean;
    isBefore(b: Array): boolean;
    isBefore(b: Moment, granularity: string): boolean;
    isBefore(b: String, granularity: string): boolean;
    isBefore(b: Number, granularity: string): boolean;
    isBefore(b: Date, granularity: string): boolean;
    isBefore(b: Array, granularity: string): boolean;

    isAfter(b: Moment): boolean;
    isAfter(b: string): boolean;
    isAfter(b: Number): boolean;
    isAfter(b: Date): boolean;
    isAfter(b: Array): boolean;
    isAfter(b: Moment, granularity: string): boolean;
    isAfter(b: String, granularity: string): boolean;
    isAfter(b: Number, granularity: string): boolean;
    isAfter(b: Date, granularity: string): boolean;
    isAfter(b: Array, granularity: string): boolean;

    isSame(b: Moment): boolean;
    isSame(b: string): boolean;
    isSame(b: Number): boolean;
    isSame(b: Date): boolean;
    isSame(b: Array): boolean;
    isSame(b: Moment, granularity: string): boolean;
    isSame(b: String, granularity: string): boolean;
    isSame(b: Number, granularity: string): boolean;
    isSame(b: Date, granularity: string): boolean;
    isSame(b: Array, granularity: string): boolean;
}

declare var moment: MomentStatic;
