// Type definitions for pdfmake 0.1
// Project: http://pdfmake.org
// Definitions by: Milen Stefanov <https://github.com/m1llen1um>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Enzo Volkmann <https://github.com/evolkmann>
//                 Andi Pätzold <https://github.com/andipaetzold>
//                 Neal Mummau <https://github.com/nmummau>
//                 Jean-Raphaël Matte <https://github.com/jeralm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="pdfkit" />

import { BufferOptions, TDocumentDefinitions, TFontDictionary } from './interfaces';

declare class PdfPrinter {
    constructor(fontDescriptors: TFontDictionary);
    createPdfKitDocument(docDefinition: TDocumentDefinitions, options?: BufferOptions): PDFKit.PDFDocument;
}

export = PdfPrinter;
