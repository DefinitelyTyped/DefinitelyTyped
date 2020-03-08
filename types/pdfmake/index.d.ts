// Type definitions for pdfmake 0.1
// Project: http://pdfmake.org
// Definitions by: Milen Stefanov <https://github.com/m1llen1um>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Enzo Volkmann <https://github.com/evolkmann>
//                 Andi Pätzold <https://github.com/andipaetzold>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="pdfkit" />

import { BufferOptions, TDocumentDefinitions, TFontDictionnary } from './interfaces';

// 'export =' syntax forbids any other export.
// tslint:disable-next-line: strict-export-declare-modifiers
declare class PdfPrinter {
    constructor(fontDescriptors: TFontDictionnary);
    createPdfKitDocument(docDefinition: TDocumentDefinitions, options?: BufferOptions): PDFKit.PDFDocument;
}

export = PdfPrinter;
