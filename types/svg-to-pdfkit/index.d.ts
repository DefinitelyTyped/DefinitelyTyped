import PDFDocument = require("pdfkit");

declare function SVGtoPDF(
    doc: typeof PDFDocument,
    svg: SVGElement | string,
    x?: number,
    y?: number,
    options?: SVGtoPDF.SVGtoPDFOptions,
): void;

declare namespace SVGtoPDF {
    interface SVGtoPDFOptions {
        width?: number;
        height?: number;
        preserveAspectRatio?: string;
        useCSS?: boolean;
        fontCallback?: (
            family: string,
            bold: boolean,
            italic: boolean,
            fontOptions: { fauxItalic: boolean; fauxBold: boolean },
        ) => string;
        imageCallback?: (link: string) => string;
        documentCallback?: (file: string) => string;
        colorCallback?: (result: string, raw: string) => [[number, number, number], number];
        warningCallback?: (str: string) => void;
        assumePt?: boolean;
        precision?: number;
    }
}

export = SVGtoPDF;
