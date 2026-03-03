// JSBox PDF API TypeScript Declaration

declare namespace PdfTypes {
    type PDFMakeInput =
        | {
            url: string;
        }
        | {
            html: string;
        }
        | {
            images: UIImage[];
        };

    type PDFMakeOptions = {
        pageSize?: number; // The value is in $pageSize
        handler: (resp: { data: NSData }) => void;
    } & PDFMakeInput;

    type PDFMakePromiseOptions = {
        pageSize?: number; // The value is in $pageSize
    } & PDFMakeInput;
}

interface JBPdf {
    make(options: PdfTypes.PDFMakeOptions): void;
    make(options: PdfTypes.PDFMakePromiseOptions): Promise<{ data: NSData }>;
    toImages(data: NSData): UIImage[];
    toImage(data: NSData): UIImage;
}

declare const $pdf: JBPdf;
