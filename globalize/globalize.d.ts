// Type definitions for Globalize
// Project: https://github.com/jquery/globalize
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface GlobalizePercent {
    pattern: string[];
    decimals: number;
    groupSizes: number[];
    //",": string;
    //".": string;
    symbol: string;
}

interface GlobalizeCurrency {
    pattern: string[];
    decimals: number;
    groupSizes: number[];
    //",": string;
    //".": string;
    symbol: string;
}

interface GlobalizeNumberFormat {
    pattern: string[];
    decimals: string;
    //",": string;
    //".": string;
    groupSizes: number[];
    //"+": string;
    //"-": string;
    NaN: string;
    negativeInfinity: string;
    positiveInfinity: string;
    percent: GlobalizePercent;
    currency: GlobalizeCurrency;
}

interface GlobalizeEra {
    name: string;
    start: any;
    offset: number;
}

interface GlobalizeDays {
    names: string[];
    namesAbbr: string[];
    namesShort: string[];
}

interface GlobalizeMonths {
    names: string[];
    namesAbbr: string[];
}

interface GlobalizePatterns {
    d: string;
    D: string;
    t: string;
    T: string;
    f: string;
    F: string;
    M: string;
    Y: string;
    S: string;
}

interface GlobalizeCalendar {
    name: string;
    // "/": string,
    // ":": string,
    firstDay: number;
    days: GlobalizeDays;
    months: GlobalizeMonths;
    AM: string[];
    PM: string[];
    eras: GlobalizeEra[];
    twoDigitYearMax: number;
    patterns: GlobalizePatterns;
}

interface GlobalizeCalendars {
    standard: GlobalizeCalendar;
}

interface GlobalizeCulture {
    name: string;
    englishName: string;
    nativeName: string;
    isRTL: boolean;
    language: string;
    numberFormat: GlobalizeNumberFormat;
    calendars: GlobalizeCalendars;
    messages: any;
}
interface GlobalizeCultures {
    [index: number]: GlobalizeCulture;
}

interface GlobalizeStatic {
    cultures: GlobalizeCultures;
    init(cultureSelector: string): GlobalizeStatic;
    cultureSelector: string;

    culture(): GlobalizeCulture;
    culture(cultureSelector: string): GlobalizeCulture;
    culture(cultureSelector: string[]): GlobalizeCulture;

    addCultureInfo(cultureName: string, baseCultureName: string, info: Object): void;
    addCultureInfo(cultureName: string, info: Object): void;
    addCultureInfo(info: Object): void;
    findClosestCulture(cultureSelector: string): GlobalizeStatic;
    format(value: number, format: string, cultureSelector?: string);
    format(value: Date, format: string, cultureSelector?: string);
    localize(key: string, cultureSelector?: string): string;

    parseDate(value: string, format?: string, cultureSelector?: string): Date;
    parseDate(value: string, formats?: string[], cultureSelector?: string): Date;
    parseInt(value: string, radix?: number, cultureSelector?: string): number;
    parseFloat(value: string, radix?: number, cultureSelector?: string): number;
}

declare var Globalize: GlobalizeStatic;
