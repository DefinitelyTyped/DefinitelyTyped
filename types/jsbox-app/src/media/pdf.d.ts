// JSBox PDF API TypeScript Declaration

declare namespace PdfTypes {
    interface PDFMakeOptions {
        url?: string;
        html?: string;
        images?: UIImage[];
        pageSize?: number; // The value is in $pageSize
        handler: (resp: { data: NSData }) => void;
    }
}

interface JBPdf {
    make(options: PdfTypes.PDFMakeOptions): void;
    make(options: Omit<PdfTypes.PDFMakeOptions, "handler">): Promise<{ data: NSData }>;
    toImages(data: NSData): UIImage[];
    toImage(data: NSData): UIImage;
}

declare const $pdf: JBPdf;
