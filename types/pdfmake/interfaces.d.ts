/// <reference types="node" />
/// <reference types="pdfkit" />

export type PageSize = PredefinedPageSize | CustomPageSize;

export interface CustomPageSize {
    width: number;
    height: number | 'auto';
}

export type PredefinedPageSize =
    | '4A0'
    | '2A0'
    | 'A0'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'A9'
    | 'A10'
    | 'B0'
    | 'B1'
    | 'B2'
    | 'B3'
    | 'B4'
    | 'B5'
    | 'B6'
    | 'B7'
    | 'B8'
    | 'B9'
    | 'B10'
    | 'C0'
    | 'C1'
    | 'C2'
    | 'C3'
    | 'C4'
    | 'C5'
    | 'C6'
    | 'C7'
    | 'C8'
    | 'C9'
    | 'C10'
    | 'RA1'
    | 'RA2'
    | 'RA3'
    | 'RA4'
    | 'SRA1'
    | 'SRA2'
    | 'SRA3'
    | 'SRA4'
    | 'EXECUTIVE'
    | 'FOLIO'
    | 'LEGAL'
    | 'LETTER'
    | 'TABLOID';

export type PageOrientation = 'portrait' | 'landscape';

export interface TFontFamily {
    [fontName: string]: string;
}

export interface TFontFamilyTypes {
    normal?: string;
    bold?: string;
    italics?: string;
    bolditalics?: string;
}

export interface TDocumentInformation {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
}

export type TDocumentHeaderFooterFunction = (
    currentPage: number,
    pageCount: number,
    pageSize?: { width: number; height: number }
) => any;

export type Margins = number | [number, number] | [number, number, number, number];

export type Alignment = "left" | "right" | "justify" | "center" | string;

export interface Style {
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
    [additionalProperty: string]: any;
}

export type TableRowFunction = (row: number) => number;

export interface TableLayoutFunctions {
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

export interface TableCell {
    text: string;
    rowSpan?: number;
    colSpan?: number;
    fillColor?: string;
    border?: [boolean, boolean, boolean, boolean];
}

export interface Table {
    body: Content[][] | TableCell[][];
    dontBreakRows?: boolean;
    headerRows?: number;
    heights?: Array<string | number> | TableRowFunction;
    layout?: string | TableLayoutFunctions;
    widths?: Array<string | number>;
}

export interface Content {
    style?: string | string[];
    margin?: Margins;
    text?: string | string[] | Content[];
    columns?: Content[];
    stack?: Content[];
    image?: string;
    width?: string | number;
    height?: string | number;
    fit?: [number, number];
    pageBreak?: "before" | "after";
    alignment?: Alignment;
    table?: Table;
    ul?: Content[];
    ol?: Content[];
    [additionalProperty: string]: any;
}

export interface TDocumentDefinitions {
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
}

export interface CurrentNode {
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

export interface Pagesize {
    height: number;
    width: number;
    orientation: PageOrientation;
}

export interface Page {
    items: any[];
    pageSize: Pagesize;
}

export interface BufferOptions {
    autoPrint?: boolean;
}

export type CreatedPdfDownloadParams = (
    defaultFileName?: string,
    cb?: () => void,
    options?: BufferOptions
) => void;

export type CreatedPdfOpenPrintParams = (
    options?: BufferOptions,
    win?: Window | null
) => void;

export type CreatedPdfBufferParams = (
    cb: (result: any, pages: Page[]) => void,
    options?: BufferOptions
) => void;

export interface TCreatedPdf {
    download: CreatedPdfDownloadParams;
    getBlob: CreatedPdfBufferParams;
    getBase64: CreatedPdfBufferParams;
    getBuffer: CreatedPdfBufferParams;
    getDataUrl: CreatedPdfBufferParams;
    getStream: CreatedPdfBufferParams; // minimal version 0.1.41
    open: CreatedPdfOpenPrintParams;
    print: CreatedPdfOpenPrintParams;
}

export interface pdfMakeStatic {
    vfs: TFontFamily;
    fonts: { [name: string]: TFontFamilyTypes };
    createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;
}
