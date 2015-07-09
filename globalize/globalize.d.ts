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

interface GlobalizeStatic {
   load(jsonData: any);
   locale(locale: string);

   numberFormatter(options?: NumberFormatterOptions): (value: number) => string;
   formatNumber(value, options?: NumberFormatterOptions): string;
}

declare var Globalize: GlobalizeStatic;
