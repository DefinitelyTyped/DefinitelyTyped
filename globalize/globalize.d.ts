// Type definitions for Globalize
// Project: https://github.com/jquery/globalize
// Definitions by: Aram Taieb <https://github.com/afromogli/>
// Definitions: https://github.com/afromogli/DefinitelyTyped

interface NumberFormatterOptions {
   minimumIntegerDigits?: number;
   minimumFractionDigits?: number;
   maximumFractionDigits?: number;
   minimumSignificantDigits?: number;
   maximumSignificantDigits?: number;
   round?: string;
   useGrouping?: boolean;
   style?: string;
}

interface DateFormatterOptions {
    skeleton?: string;
    date?: string;
    time?: string;
    datetime?: string;
    raw?: string;
}

interface CurrencyFormatterOptions {
    style?: string;
}

interface CldrAttributes {
    language: string;
    maxLanguageId: string;
    minLanguageId: string;
    region: string;
    script: string;
    territory: string;
}

interface Cldr {
    locale: string;
    attributes: CldrAttributes;

	get(path: string): any;
	main(path: string): any;
}

interface Globalize {

    formatNumber(value: number, options?: NumberFormatterOptions): string;
    formatDate(value: Date, options?: DateFormatterOptions): string;
    formatCurrency(value: number, currency: string, options?: CurrencyFormatterOptions): string;
    formatMessage(path: string, variables?: any[]): string;

    numberFormatter(options?: NumberFormatterOptions): (value: number) => string;
    dateFormatter(options?: DateFormatterOptions): (value: Date) => string;
    currencyFormatter(currency: string, options?: CurrencyFormatterOptions): (value: number) => string;
    messageFormatter(path: string): (variables?: any[]) => string;

    dateParser(options?: DateFormatterOptions): (value: string) => Date;
    numberParser(options?: NumberFormatterOptions): (value: string) => number;

    parseNumber(value: string, options?: NumberFormatterOptions): number;
    parseDate(value: string, options?: DateFormatterOptions): Date;
}

interface GlobalizeStatic extends Globalize {
    new (locale?: string | Cldr): Globalize;
    (locale?: string | Cldr): Globalize;

   load(...jsonData: any[]): void;
   loadMessages(jsonData: any): void;
   locale(locale?: string | Cldr): Cldr;
}

declare var Globalize: GlobalizeStatic;