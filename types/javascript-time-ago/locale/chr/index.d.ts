// Generated with https://github.com/erikburt/javascript-time-ago-type-gen

declare const locale: Locale;

interface Locale {
    locale: "chr";
    long: Duration;
    narrow: Duration;
    short: Duration;
    quantify: (n: number) => keyof QuantifyType;
}

interface Duration {
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

export = locale;

