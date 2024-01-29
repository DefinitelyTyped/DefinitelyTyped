/// <reference lib="dom" />
import { BufferOptions, CustomTableLayout, TDocumentDefinitions, TFontDictionary } from "../interfaces";

export let vfs: { [file: string]: string };
export let fonts: TFontDictionary;
export let tableLayouts: { [name: string]: CustomTableLayout };

export function createPdf(
    documentDefinitions: TDocumentDefinitions,
    tableLayouts?: { [name: string]: CustomTableLayout },
    fonts?: TFontDictionary,
    vfs?: { [file: string]: string },
): TCreatedPdf;

export interface TCreatedPdf {
    download(cb?: () => void, options?: BufferOptions): void;
    download(defaultFileName: string, cb?: () => void, options?: BufferOptions): void;

    getBlob(cb: (result: Blob) => void, options?: BufferOptions): void;
    getBase64(cb: (result: string) => void, options?: BufferOptions): void;
    getBuffer(cb: (result: Buffer) => void, options?: BufferOptions): void;
    getDataUrl(cb: (result: string) => void, options?: BufferOptions): void;
    getStream(options?: BufferOptions): PDFKit.PDFDocument; // minimal version 0.1.41
    open(options?: BufferOptions, win?: Window | null): void;
    print(options?: BufferOptions, win?: Window | null): void;
}

export as namespace pdfMake;
