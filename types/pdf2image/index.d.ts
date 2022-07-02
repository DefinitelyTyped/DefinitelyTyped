// Type definitions for pdf2image 1.2
// Project: https://bitbucket.org/RicardoCacheira/pdf2image#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.9

/**
 * A token starts with the character '%'
 *
 * d - the page number, if the first page of the PDF is page 1
 * D - the page number, if the first page of the PDF is page 0
 * i - the processed page number, if the first processed page is page 1
 * I - the processed page number, if the first processed page is page 0
 * t - the total number of pages in the pdf
 * T - the total of processed pages
 * s - the name of the pdf file
 * p - the path of the pdf file
 * % - the character '%'
 * {...} - a custom piece of code where all of the above values can be used
 */

/// <reference types="node" />

export type OutputFormat = ((pageNum: number, pageIndex: number, totalPagesProcessed: number, totalPDFPages: number, name: string, path: string, vm: typeof import ('vm')) => string) | string;

export interface Options {
    density: number;
    height: number;
    width: number;
    outputType: 'jpg' | 'png' | '.jpg' | '.png';
    quality: number;
    pages: '*' | string;    // * | even | odd | '/1,/3,5-6,-8, 9-'
    singleProcess: boolean;
    backgroundColor: string;    // #ffffff
    outputFormat: OutputFormat;
}

export interface ConvertedFile {
    page: number;
    index: number;
    name: string;
    path: string;
}

export function convertPDF(pdfFilePath: string, options?: Partial<Options>): Promise<ConvertedFile[]>;

export interface Converter {
    convertPDF(pdfFilePath: string): Promise<ConvertedFile[]>;
    convertPDFList(pdfList: string[]): Promise<ConvertedFile[]>;
}

export function compileConverter(options?: Partial<Options>): Converter;
