// Type definitions for Globalize v0.1.3 (NuGet package version)
// Project: https://github.com/jquery/globalize
// Definitions by: Aram Taieb <https://github.com/afromogli/>
// Definitions: https://github.com/afromogli/DefinitelyTyped

interface GlobalizeStatic {
    addCultureInfo(cultureName: string, baseCultureName: string, info: any): void;
    findClosestCulture(name: string): any;
    format(value: any, format: string): string;
    format(value: any, format: string, cultureSelector: string): string;
    localize(key: string): string;
    localize(key: string, cultureSelector: string): string;
    parseDate(value: any): Date;
    parseDate(value: any, formats: any): Date;
    parseDate(value: any, formats: any, culture: string): Date;
    parseInt(value: any): number;
    parseInt(value: any, radix: number): number;
    parseInt(value: any, radix: number, cultureSelector: string): number;
    parseFloat(value: any): number;
    parseFloat(value: any, radix: number): number;
    parseFloat(value: any, radix: number, cultureSelector: string): number;
    culture(cultureSelector: string): any;
}

declare var Globalize: GlobalizeStatic;
