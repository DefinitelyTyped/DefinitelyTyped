// Type definitions for javascript-time-ago 2.0
// Project: https://github.com/catamphetamine/javascript-time-ago
// Definitions by: Erik Burton  <https://github.com/erikburt>
//                 Henry Nguyen <https://github.com/HenryNguyen5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = TimeAgo;

declare class TimeAgo {
    constructor(locales?: string | string[]);

    format(input: Date | number, style?: string): string;
    formatNumber(number: number): string;
    formatValue(value: Date | number, unit: TimeUnit, localeData: Duration): string;
    getFormatter(flavor: DefaultFormats): RTFFormatter;
    getLocaleData(format?: Formats): Duration; // Defaults to "long"
    getRule(value: Date | number, unit: TimeUnit, localeData: Duration): string;

    static addLocale(localeData: Locale): void;
    static locale(localeData: Locale): void;
    static getDefaultLocale(): string;
    static intlDateTimeFormatSupported(): boolean;
    static intlDateTimeFormatSupportedLocale(locale: string): string | void;
    static setDefaultLocale(locale: string): void;
}

type TimeUnit = 'now' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
type DefaultFormats = "long" | "short" | "narrow";
type ExtendedFormats = "tiny" | "short-time" | "short-convenient" | "long-time" | "long-convenient";
type Formats = DefaultFormats | ExtendedFormats;

interface Locale {
    locale: string;
    long?: Duration;
    short?: Duration;
    narrow?: Duration;
    tiny?: Duration;
    "short-time"?: Duration;
    "short-convenient"?: Duration;
    "long-time"?: Duration;
    "long-convenient"?: Duration;
    quantify: (n: number) => keyof QuantifyType;
}

interface Duration {
    flavour?: Formats;
    year: Tense;
    quarter: Tense;
    month: Tense;
    week: Tense;
    day: Tense;
    hour: Tense;
    minute: Tense;
    second: Tense;
}

interface Tense {
    previous?: QuantifyType | string;
    current?: QuantifyType | string;
    next?: QuantifyType | string;
    past?: QuantifyType | string;
    future?: QuantifyType | string;
}

interface QuantifyType {
    one: string;
    two?: string;
    few?: string;
    other: string;
}

interface RTFFormatter {
    numeric: string;
    style: DefaultFormats;
    localeMatcher: string;
    locale: string;
    numberFormat: { [key: string]: any };
}
