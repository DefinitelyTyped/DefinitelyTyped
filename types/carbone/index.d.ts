// Type definitions for carbone 1.2
// Project: https://carbone.io
// Definitions by: Artur Nerkowski <https://github.com/apatryda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ConversionFormat {
    id: string;
    extension: string;
    desc: string;
    format: string;
}
export interface CurrencyRates {
    [currency: string]: number;
}
export type DocumentType = 'document' | 'web' | 'graphics' | 'spreadsheet' | 'presentation';
export interface Enums {
    [type: string]: string[] | { [key: string]: string };
}
export interface FormatterContext {
    currency: {
        rates: CurrencyRates;
        source: string;
        target: string;
    };
    enum: Enums;
    extension: string;
    lang: string;
    stopPropagation: boolean;
}
export type Formatter = (this: FormatterContext, data: any, ...params: any[]) => void;
export interface Formatters {
    [name: string]: Formatter;
}
export interface Translations {
    [lang: string]: {
        [key: string]: string;
    };
}
export interface Variable {
    name: string;
    code: string;
    regex: RegExp;
}
export type VoidCallback = (err: NodeJS.ErrnoException | null) => void;

export interface Options {
    tempPath?: string;
    templatePath?: string;
    lang?: string;
    translations?: Translations;
    currencySource?: string;
    currencyTarget?: string;
    currencyRates?: CurrencyRates;
}
export function set(options: Options): void;
export function reset(): void;
export function addFormatters(customFormatters: Formatters): void;
export function addTemplate(fileId: string, data: string | Buffer, callback: VoidCallback): void;
export function removeTemplate(fileId: string, callback: VoidCallback): void;
export function listConversionFormats(documentType: DocumentType): ConversionFormat[];

export interface RenderXMLOptions {
    complement?: object;
    formatters?: Formatters;
    lang?: string;
    translations?: Translations;
    existingVariables?: Variable[];
    extension?: string;
}
export type RenderXMLCallback = (err: NodeJS.ErrnoException | null, xmlResult: string) => void;
export function renderXML(xml: string, data: object, options: RenderXMLOptions, callback: RenderXMLCallback): void;
export function renderXML(xml: string, data: object, callback: RenderXMLCallback): void;

export interface RenderOptions {
    complement?: object;
    convertTo?: string | object;
    variableStr?: string;
    lang?: string;
    translations?: Translations;
    enum?: Enums;
    currencySource?: string;
    currencyTarget?: string;
    currencyRates?: CurrencyRates;
}
export type RenderCallback = (err: NodeJS.ErrnoException | null, result: Buffer | string, reportName: string) => void;
export function render(templatePath: string, data: object, options: RenderOptions, callback: RenderCallback): void;
export function render(templatePath: string, data: object, callback: RenderCallback): void;

export type ConvertCallback = (err: NodeJS.ErrnoException | null, result: Buffer) => void;
export function convert(data: Buffer, convertTo: string, options: object, callback: ConvertCallback): void;
export function convert(data: Buffer, convertTo: string, callback: ConvertCallback): void;
