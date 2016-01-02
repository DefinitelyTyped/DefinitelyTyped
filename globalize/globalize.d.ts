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
}

interface Cldr {
   /* TODO: add typings */
}

interface GlobalizeStatic {
   load(jsonData: any): void;
   locale(locale: string): Cldr;

   numberFormatter(options?: NumberFormatterOptions): (value: number) => string;
   formatNumber(value:number, options?: NumberFormatterOptions): string;
}

declare var Globalize: GlobalizeStatic;
