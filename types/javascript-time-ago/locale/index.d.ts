export interface Locale {
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

export interface Duration {
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

export interface Tense {
    previous?: QuantifyType | string;
    current?: QuantifyType | string;
    next?: QuantifyType | string;
    past?: QuantifyType | string;
    future?: QuantifyType | string;
}

export interface QuantifyType {
    one: string;
    two?: string;
    few?: string;
    other: string;
}

export interface RTFFormatter {
    numeric: string;
    style: DefaultFormats;
    localeMatcher: string;
    locale: string;
    numberFormat: { [key: string]: any };
}

export type TimeUnit = 'now' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
export type DefaultFormats = "long" | "short" | "narrow";
export type ExtendedFormats = "tiny" | "short-time" | "short-convenient" | "long-time" | "long-convenient";
export type Formats = DefaultFormats | ExtendedFormats;
