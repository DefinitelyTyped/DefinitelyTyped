/// <reference types="pdfkit" />

import { BufferOptions, TDocumentDefinitions, TFontDictionary } from "./interfaces";

declare class PdfPrinter {
    constructor(fontDescriptors: TFontDictionary);
    createPdfKitDocument(docDefinition: TDocumentDefinitions, options?: BufferOptions): PDFKit.PDFDocument;
}

export = PdfPrinter;
