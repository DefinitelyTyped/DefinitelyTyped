// Type definitions for javascript-time-ago 2.0
// Project: https://github.com/catamphetamine/javascript-time-ago
// Definitions by: Erik Burton  <https://github.com/erikburt>
//                 Henry Nguyen <https://github.com/HenryNguyen5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Locale, TimeUnit, Duration, DefaultFormats, RTFFormatter, Formats, QuantifyType } from "./locale";

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