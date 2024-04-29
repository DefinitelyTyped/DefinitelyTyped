export interface Locale {
    locale: string;
    long?: Duration | undefined;
    short?: Duration | undefined;
    narrow?: Duration | undefined;
    tiny?: Duration | undefined;
    "short-time"?: Duration | undefined;
    "short-convenient"?: Duration | undefined;
    "long-time"?: Duration | undefined;
    "long-convenient"?: Duration | undefined;
    quantify: (n: number) => keyof QuantifyType;
}

export interface Duration {
    flavour?: Formats | undefined;
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
    previous?: QuantifyType | string | undefined;
    current?: QuantifyType | string | undefined;
    next?: QuantifyType | string | undefined;
    past?: QuantifyType | string | undefined;
    future?: QuantifyType | string | undefined;
}

export interface QuantifyType {
    one: string;
    two?: string | undefined;
    few?: string | undefined;
    other: string;
}

export interface RTFFormatter {
    numeric: string;
    style: DefaultFormats;
    localeMatcher: string;
    locale: string;
    numberFormat: { [key: string]: any };
}

export type TimeUnit = "now" | "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
export type DefaultFormats = "long" | "short" | "narrow";
export type ExtendedFormats = "tiny" | "short-time" | "short-convenient" | "long-time" | "long-convenient";
export type Formats = DefaultFormats | ExtendedFormats;
