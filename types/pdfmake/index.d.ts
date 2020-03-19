// Type definitions for pdfmake 0.1
// Project: http://pdfmake.org
// Definitions by: Milen Stefanov <https://github.com/m1llen1um>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Enzo Volkmann <https://github.com/evolkmann>
//                 Andi Pätzold <https://github.com/andipaetzold>
//                 Neal Mummau <https://github.com/nmummau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference lib="dom" />

declare module "pdfmake/build/vfs_fonts" {
    let pdfMake: {
        vfs: any;
        [name: string]: any;
    };
}

declare module "pdfmake/build/pdfmake" {
    let vfs: TFontFamily;
    let fonts: { [name: string]: TFontFamilyTypes };
    function createPdf(
        documentDefinitions: TDocumentDefinitions,
        tableLayouts?: any,
        fonts?: any,
        vfs?: any
    ): TCreatedPdf;

    type PageSize =
        "4A0"|"2A0"|"A0"|"A1"|"A2"|"A3"|"A4"|"A5"|"A6"|"A7"|"A8"|"A9"|"A10"|
        "B0"|"B1"|"B2"|"B3"|"B4"|"B5"|"B6"|"B7"|"B8"|"B9"|"B10"|
        "C0"|"C1"|"C2"|"C3"|"C4"|"C5"|"C6"|"C7"|"C8"|"C9"|"C10"|
        "RA1"|"RA2"|"RA3"|"RA4"|
        "SRA1"|"SRA2"|"SRA3"|"SRA4"|
        "EXECUTIVE"|"FOLIO"|"LEGAL"|"LETTER"|"TABLOID";

    type PageOrientation = "portrait" | "landscape";

    type Layout = "noBorders" | "headerLineOnly" | "lightHorizontalLines";

    type Alignment = "left" | "center" | "right";

    type Decoration = "underline" | "lineThrough" | "overline";

    type DecorationStyle = "dashed" | "dotted" | "double" | "wavy";

    type PageBreak = "before" | "after";

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
        /** the title of the document */
        title?: string;
        /** the name of the author */
        author?: string;
        /** the subject of the document */
        subject?: string;
        /** keywords associated with the document */
        keywords?: string;
    }

    type TDocumentHeaderFooterFunction = (
        currentPage: number,
        pageCount: number,
        pageSize?: { width: number; height: number }
    ) => any;

    type Margins = number | [number, number] | [number, number, number, number];

    interface Style {
        /** name of the font */
        font?: any;
        /** size of the font in pt */
        fontSize?: number;
        fontFeatures?: any;
        /** whether to use bold text (default: false) */
        bold?: boolean;
        /** whether to use italic text (default: false) */
        italics?: boolean;
        /** the alignment of the text */
        alignment?: Alignment;
        /** the color of the text (color name e.g., ‘blue’ or hexadecimal color e.g., ‘#ff5500’) */
        color?: string;
        /** optional space between columns */
        columnGap?: any;
        /** the background color of a table cell */
        fillColor?: string;
        /** the background opacity of a table cell */
        fillOpacity?: string;
        /** the text decoration to applu (‘underline’ or ‘lineThrough’ or ‘overline’) */
        decoration?: Decoration;
        /** (‘dashed’ or ‘dotted’ or ‘double’ or ‘wavy’) */
        decorationStyle?: DecorationStyle;
        /** the color of the text decoration, see color */
        decorationColor?: string;
        /** the background color of the text */
        background?: any;
        /** the line height (default: 1) */
        lineHeight?: number;
        characterSpacing?: number;
        noWrap?: boolean;
        /** the color of the bullets in a buletted list */
        markerColor?: string;
        leadingIndent?: any;
        [additionalProperty: string]: any;
    }

    type TableRowFunction = (row: number) => number;

    interface TableLayoutFunctions {
        hLineWidth?: (i: number, node: any) => number;
        vLineWidth?: (i: number, node: any) => number;
        hLineColor?: (i: number, node: any) => string;
        vLineColor?: (i: number, node: any) => string;
        fillColor?: (i: number, node: any) => string;
        paddingLeft?: (i: number, node: any) => number;
        paddingRight?: (i: number, node: any) => number;
        paddingTop?: (i: number, node: any) => number;
        paddingBottom?: (i: number, node: any) => number;
    }

    interface TableCell {
        text: string;
        rowSpan?: number;
        colSpan?: number;
        fillColor?: string;
        border?: [boolean, boolean, boolean, boolean];
    }

    interface Table {
        body: Content[][] | TableCell[][];
        dontBreakRows?: boolean;
        headerRows?: number;
        heights?: Array<string | number> | TableRowFunction;
        layout?: string | TableLayoutFunctions;
        widths?: Array<string | number>;
    }

    interface Content {
        layout?: Layout;
        style?: string | string[];
        margin?: Margins;
        text?: string | string[] | Content[];
        columns?: Content[];
        stack?: Content[];
        image?: string;
        svg?: string;
        width?: string | number;
        height?: string | number;
        fit?: [number, number];
        pageBreak?: PageBreak;
        alignment?: Alignment;
        table?: Table;
        /** to treat a paragraph as a bulleted list, set an array of items under the ul key */
        ul?: Content[];
        /** for numbered lists set the ol key */
        ol?: Content[];
        qr?: string;
        toc?: TableOfContent;
        tocItem?: boolean | string | string[];
        [additionalProperty: string]: any;
    }

    interface TableOfContent {
        id?: string;
        title: Content;
    }

    interface TDocumentDefinitions {
        background?: string | ((currentPage: number, pageSize: PageSize) => string | Content | null);
        compress?: boolean;
        content: string | Content | Array<string | Content>;
        defaultStyle?: Style;
        footer?: TDocumentHeaderFooterFunction | Content | string;
        header?: TDocumentHeaderFooterFunction | Content | string;
        images?: { [key: string]: string };
        info?: TDocumentInformation;
        pageBreakBefore?: (
            currentNode?: CurrentNode,
            followingNodesOnPage?: any,
            nodesOnNextPage?: any,
            previousNodesOnPage?: any
        ) => boolean;
        pageMargins?: Margins;
        pageOrientation?: PageOrientation;
        pageSize?: PageSize | { width: number; height: number };
        styles?: Style;
        watermark?: Watermark;
    }

    interface CurrentNode {
        id: string;
        headlineLevel: string;
        text: string | string[] | Content[];
        ul: Content[];
        ol: Content[];
        table: Table;
        image: string;
        qr: string;
        canvas: string;
        columns: Content[];
        style: string | string[];
        pageOrientation: PageOrientation;
        pageNumbers: number[];
        pages: number;
        stack: boolean;
        startPosition: {
            pageNumber: number;
            pageOrientation: PageOrientation;
            left: number;
            right: number;
            verticalRatio: number;
            horizontalRatio: number;
        };
    }

    interface Pagesize {
        height: number;
        width: number;
        orientation: PageOrientation;
    }

    interface Page {
        items: any[];
        pageSize: Pagesize;
    }

    interface BufferOptions {
        autoPrint?: boolean;
    }

    type CreatedPdfDownloadParams = (
        defaultFileName?: string,
        cb?: () => void,
        options?: BufferOptions
    ) => void;

    type CreatedPdfOpenPrintParams = (
        options?: BufferOptions,
        win?: Window | null
    ) => void;

    type CreatedPdfBufferParams = (
        cb: (result: any, pages: Page[]) => void,
        options?: BufferOptions
    ) => void;

    interface TCreatedPdf {
        download: CreatedPdfDownloadParams;
        getBlob: CreatedPdfBufferParams;
        getBase64: CreatedPdfBufferParams;
        getBuffer: CreatedPdfBufferParams;
        getDataUrl: CreatedPdfBufferParams;
        getStream: CreatedPdfBufferParams; // minimal version 0.1.41
        open: CreatedPdfOpenPrintParams;
        print: CreatedPdfOpenPrintParams;
    }

    interface pdfMakeStatic {
        vfs: TFontFamily;
        fonts: { [name: string]: TFontFamilyTypes };
        createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;
    }

    interface Watermark {
        /** watermark text */
        text?: string;
        /** color of text */
        color?: string;
        /** opacity of text */
        opacity?: number;
        /** bold style of text */
        bold?: boolean;
        /** italics style of text */
        italics?: true;
        /** own font size of text (ideal size is calculated automatically) (minimal version: 0.1.60) */
        fontSize?: number;
        /** angle of text rotation (minimal version: 0.1.60) */
        angle?: number;
    }
}
