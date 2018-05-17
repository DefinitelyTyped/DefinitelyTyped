// Type definitions for pdfmake 0.1
// Project: http://pdfmake.org
// Definitions by: Milen Stefanov <https://github.com/m1llen1um>
//                 Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'pdfmake/build/vfs_fonts' {
    let pdfMake: {
        vfs: any;
        [name: string]: any;
    };
}

declare module 'pdfmake/build/pdfmake' {
    let vfs: TFontFamily;
    let fonts: { [name: string]: TFontFamilyTypes };
    function createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;

    type pageSizeType =
        '4A0' | '2A0' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'A10' |
        'B0' | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9' | 'B10' |
        'C0' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'C10' |
        'RA0' | 'RA1' | 'RA2' | 'RA3' | 'RA4' |
        'SRA0' | 'SRA1' | 'SRA2' | 'SRA3' | 'SRA4' |
        'EXECUTIVE' | 'FOLIO' | 'LEGAL' | 'LETTER' | 'TABLOID';

    type pageOrientationType = "portrait" | "landscape";

    let pdfMake: pdfMakeStatic;

    interface TFontFamily {
        [fontName: string]: string;
    }

    interface TFontFamilyTypes {
        normal?: string;
        bold?: string;
        italics?: string;
        bolditalics?: string;
    }

    interface TDocumentInformation {
        title?: string;
        author?: string;
        subject?: string;
        keywords?: string;
    }

    type TDocumentHeaderFooterFunction = (currentPage: number, pageCount: number) => any;

    interface TDocumentDefinitions {
        info?: TDocumentInformation;
        header?: any;
        footer?: any;
        content: any;
        styles?: any;
        pageSize?: pageSizeType;
        pageOrientation?: pageOrientationType;
        pageMargins?: [number, number, number, number];
        defaultStyle?: {
            font?: string;
        };
    }

    type CreatedPdfParams = (
        defaultFileName?: string,
        cb?: string,
        options?: string
    ) => void;

    interface TCreatedPdf {
        download: CreatedPdfParams;
        open: CreatedPdfParams;
        print: CreatedPdfParams;
    }

    interface pdfMakeStatic {
        vfs: TFontFamily;
        fonts: { [name: string]: TFontFamilyTypes };
        createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;
    }
}
