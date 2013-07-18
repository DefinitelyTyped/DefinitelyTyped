// Type definitions for Intl
// Project: http://www.ecma-international.org/ecma-402/1.0/
// Definitions by: Jeffery Grajkowski <http://github.com/pushplay>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Intl {

    export interface SupportedLocalesOfOptions {
        localeMatcher?: string;
    }

    export interface CollatorOptions {
        localeMatcher?: string;
        usage?: string;
        sensitivity?: string;
        ignorePunctuation?: boolean;
        numeric?: boolean;
        caseFirst?: string;
    }

    export class Collator {
        constructor(locales?: string, options?: CollatorOptions);
        constructor(locales?: string[], options?: CollatorOptions);
        static supportedLocalesOf(locales: string, options?: SupportedLocalesOfOptions): string[];
        static supportedLocalesOf(locales: string[], options?: SupportedLocalesOfOptions): string[];
        compare(string1: string, string2: string): number;
        resolvedOptions(): {
            locale: string;
            usage: string;
            sensitivity: string;
            ignorePunctuation: boolean;
            collation: string;
            numeric: boolean;
            caseFirst: string;
        };
    }

    export interface DateTimeFormatOptions {
        localeMatcher?: string;
        timeZone?: string;
        hour12?: boolean;
        formatMatcher?: boolean;
    }

    export class DateTimeFormat {
        constructor(locales?: string, options?: DateTimeFormatOptions);
        constructor(locales?: string[], options?: DateTimeFormatOptions);
        static supportedLocalesOf(locales: string, options?: SupportedLocalesOfOptions): string[];
        static supportedLocalesOf(locales: string[], options?: SupportedLocalesOfOptions): string[];
        format(date: Date): string;
        resolvedOptions(): {
            locale: string;
            calendar: string;
            numberingSystem: string;
            timeZone: string;
            hour12?: boolean;
            weekday?: string;
            era?: string;
            year?: string;
            month?: string;
            day?: string;
            hour?: string;
            minute?: string;
            second?: string;
            timeZoneName?: string;
        };
    }

    export interface NumberFormatOptions {
        localeMatcher?: string;
        style?: string;
        currency?: string;
        currencyDisplay?: string;
        useGrouping?: boolean;
        minimumIntegerDigits?: number;
        minimumFractionDigits?: number;
        maximumFractionDigits?: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
    }

    export class NumberFormat {
        constructor(locales?: string, options?: NumberFormatOptions);
        constructor(locales?: string[], options?: NumberFormatOptions);
        static supportedLocalesOf(locales: string, options?: SupportedLocalesOfOptions): string[];
        static supportedLocalesOf(locales: string[], options?: SupportedLocalesOfOptions): string[];
        format(n: number): string;
        resolvedOptions(): {
            locale: string;
            numberingSystem: string;
            style: string;
            useGrouping: boolean;
            currency?: string;
            currencyDisplay?: string;
            minimumIntegerDigits?: number;
            minimumFractionDigits?: number;
            maximumFractionDigits?: number;
            minimumSignificantDigits?: number;
            maximumSignificantDigits?: number;
        }
    }
}