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

    enum PageSize {
        A0_x_4 = '4A0',
        A0_x_2 = '2A0',
        AO = 'A0',
        A1 = 'A1',
        A2 = 'A2',
        A3 = 'A3',
        A4 = 'A4',
        A5 = 'A5',
        A6 = 'A6',
        A7 = 'A7',
        A8 = 'A8',
        A9 = 'A9',
        A1O = 'A10',
        BO = 'B0',
        B1 = 'B1',
        B2 = 'B2',
        B3 = 'B3',
        B4 = 'B4',
        B5 = 'B5',
        B6 = 'B6',
        B7 = 'B7',
        B8 = 'B8',
        B9 = 'B9',
        B1O = 'B10'
    }

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

    type Margins = number | [number, number] | [number, number, number, number];

    interface Styles {
        [key: string]: Style;
    }

    type Alignment = 'left' | 'right' | 'justify' | 'center';

    interface Style {
        font?: any;
		fontSize?: number;
		fontFeatures?: any;
		bold?: boolean;
		italics?: boolean;
		alignment?: Alignment;
		color?: string;
		columnGap?: any;
		fillColor?: string;
		decoration?: any;
		decorationany?: any;
		decorationColor?: string;
		background?: any;
		lineHeight?: number;
		characterSpacing?: number;
		noWrap?: boolean;
		markerColor?: string;
		leadingIndent?: any;
    }

    interface TDocumentDefinitions {
        info?: TDocumentInformation;
        header?: TDocumentHeaderFooterFunction;
        footer?: TDocumentHeaderFooterFunction;
        content: any;
        styles?: Styles;
        pageSize?: PageSize;
        pageOrientation?: pageOrientationType;
        pageMargins?: Margins;
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
