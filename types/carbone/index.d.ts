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
export type DocumentType = "document" | "web" | "graphics" | "spreadsheet" | "presentation";
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
    tempPath?: string | undefined;
    templatePath?: string | undefined;
    lang?: string | undefined;
    timezone?: string | undefined;
    translations?: Translations | undefined;
    currencySource?: string | undefined;
    currencyTarget?: string | undefined;
    currencyRates?: CurrencyRates | undefined;
    factories?: number | undefined;
    startFactory?: boolean | undefined;
    attempts?: number | undefined;
}
export function set(options: Options): void;
export function reset(): void;
export function addFormatters(customFormatters: Formatters): void;
export function addTemplate(fileId: string, data: string | Buffer, callback: VoidCallback): void;
export function removeTemplate(fileId: string, callback: VoidCallback): void;
export function listConversionFormats(documentType: DocumentType): ConversionFormat[];

export interface RenderXMLOptions {
    complement?: object | undefined;
    formatters?: Formatters | undefined;
    lang?: string | undefined;
    timezone?: string | undefined;
    translations?: Translations | undefined;
    existingVariables?: Variable[] | undefined;
    extension?: string | undefined;
}
export type RenderXMLCallback = (err: NodeJS.ErrnoException | null, xmlResult: string) => void;
export function renderXML(xml: string, data: object, options: RenderXMLOptions, callback: RenderXMLCallback): void;
export function renderXML(xml: string, data: object, callback: RenderXMLCallback): void;

export interface RenderOptions {
    complement?: object | undefined;
    convertTo?: string | object | undefined;
    variableStr?: string | undefined;
    lang?: string | undefined;
    timezone?: string | undefined;
    translations?: Translations | undefined;
    enum?: Enums | undefined;
    currencySource?: string | undefined;
    currencyTarget?: string | undefined;
    currencyRates?: CurrencyRates | undefined;
}
export type RenderCallback = (err: NodeJS.ErrnoException | null, result: Buffer | string, reportName: string) => void;
export function render(templatePath: string, data: object, options: RenderOptions, callback: RenderCallback): void;
export function render(templatePath: string, data: object, callback: RenderCallback): void;

export type ConvertCallback = (err: NodeJS.ErrnoException | null, result: Buffer) => void;
export function convert(data: Buffer, options: RenderOptions & { extension: string }, callback: ConvertCallback): void;

export interface DecodedFilenameResult {
    reportName: string;
    extension: string;
}
export function decodeRenderedFilename(pathOrFilename: string, prefixLength?: number): DecodedFilenameResult;

export type GetFileExtensionCallback = (err: NodeJS.ErrnoException | null, extension: string) => void;
export function getFileExtension(filePath: string, callback: GetFileExtensionCallback): void;
