// Type definitions for pdfmake 0.1
// Project: http://pdfmake.org
// Definitions by: Milen Stefanov <https://github.com/m1llen1um>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Enzo Volkmann <https://github.com/evolkmann>
//                 Andi Pätzold <https://github.com/andipaetzold>
//                 Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare module "pdfmake/build/vfs_fonts" {
    let pdfMake: {
        vfs: any;
        [name: string]: any;
    };
}

declare module "pdfmake/build/pdfmake" {
    import {
        TFontFamilies,
        TDocumentDefinitions,
        TPageSize,

        DefinitionNodeTableLayout,

        CurrentNode
    } from "pdfmake/_internal";

    export * from "pdfmake/_internal";

    export let vfs: TFontFamily;
    export let fonts: TFontFamilies;

    export function createPdf(
        documentDefinitions: TDocumentDefinitions,
        tableLayouts?: DefinitionNodeTableLayout,
        fonts?: TFontFamilies,
        vfs?: TFontFamily
    ): TCreatedPdf;

    export let pdfMake: {
        vfs: TFontFamily;
        fonts: TFontFamilies;
        createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;
    };

    export enum PageSize {
        A0_x_4 = "4A0",
        A0_x_2 = "2A0",
        AO = "A0",
        A1 = "A1",
        A2 = "A2",
        A3 = "A3",
        A4 = "A4",
        A5 = "A5",
        A6 = "A6",
        A7 = "A7",
        A8 = "A8",
        A9 = "A9",
        A1O = "A10",
        BO = "B0",
        B1 = "B1",
        B2 = "B2",
        B3 = "B3",
        B4 = "B4",
        B5 = "B5",
        B6 = "B6",
        B7 = "B7",
        B8 = "B8",
        B9 = "B9",
        B1O = "B10",
        CO = "C0",
        C1 = "C1",
        C2 = "C2",
        C3 = "C3",
        C4 = "C4",
        C5 = "C5",
        C6 = "C6",
        C7 = "C7",
        C8 = "C8",
        C9 = "C9",
        C1O = "C10",
        RA1 = "RA1",
        RA2 = "RA2",
        RA3 = "RA3",
        RA4 = "RA4",
        SRA1 = "SRA1",
        SRA2 = "SRA2",
        SRA3 = "SRA3",
        SRA4 = "SRA4",
        EXECUTIVE = "EXECUTIVE",
        FOLIO = "FOLIO",
        LEGAL = "LEGAL",
        LETTER = "LETTER",
        TABLOID = "TABLOID"
    }

    export enum PageOrientation {
        PORTRAIT = "PORTRAIT",
        LANDSCAPE = "LANDSCAPE"
    }

    export interface TFontFamily {
        [fontName: string]: string;
    }

    export interface Page {
        items: CurrentNode[];
        pageSize: TPageSize;
    }

    export interface BufferOptions {
        autoPrint?: boolean;
    }

    export interface TCreatedPdf {
        download(defaultFileName?: string, cb?: () => void, options?: BufferOptions): void;
        getBlob(cb: (result: Blob, pages: Page[]) => void, options?: BufferOptions): void;
        getBase64(cb: (result: string, pages: Page[]) => void, options?: BufferOptions): void;
        getBuffer(cb: (result: ArrayBuffer, pages: Page[]) => void, options?: BufferOptions): void;
        getDataUrl(cb: (result: string, pages: Page[]) => void, options?: BufferOptions): void;
        getStream(cb: (result: any, pages: Page[]) => void, options?: BufferOptions): void; // minimal version 0.1.41
        open(options?: BufferOptions, win?: Window | null): void;
        print(options?: BufferOptions, win?: Window | null): void;
    }
}

declare module "pdfmake/lib/printer" {
    import * as pdfkit from "pdfkit";
    import * as _internal from "pdfmake/_internal";

    class PdfPrinter {
        /**
         * Creates an instance of a PdfPrinter which turns document definition into a pdf
         *
         * @param fonts The font definition dictionary.
         */
        constructor(fontDescriptors: _internal.TFontFamilies);

        /**
         * Executes layout engine for the specified document and renders it into a pdfkit document ready to be saved.
         *
         * @param docDefinition The document definition.
         */
        createPdfKitDocument(docDefinition: _internal.TDocumentDefinitions): PDFKit.PDFDocument;
    }

    namespace PdfPrinter {
        type TFontFamilies = _internal.TFontFamilies;
        type TFontFamilyTypes = _internal.TFontFamilyTypes;

        type Alignment = _internal.Alignment;
        type Color = _internal.Color;
        type Margin = _internal.Margin;
        type PageOrientations = _internal.PageOrientations;
        type PageSizes = _internal.PageSizes;
        type Content = _internal.Content;
        type Point = _internal.Point;
        type Style = _internal.Style;

        type TDocumentDefinitions = _internal.TDocumentDefinitions;
        type TDocumentInfo = _internal.TDocumentInfo;
        type TDocumentPermissions = _internal.TDocumentPermissions;
        type TPageSize = _internal.TPageSize;
        type TPageSizeDetails = _internal.TPageSizeDetails;

        type DefinitionNode = _internal.DefinitionNode;
        type DefinitionNodeText = _internal.DefinitionNodeText;
        type DefinitionNodeUnorderedList = _internal.DefinitionNodeUnorderedList;
        type DefinitionNodeOrderedList = _internal.DefinitionNodeOrderedList;
        type DefinitionNodeQrCode = _internal.DefinitionNodeQrCode;
        type DefinitionNodeImage = _internal.DefinitionNodeImage;
        type DefinitionNodeSvg = _internal.DefinitionNodeSvg;
        type DefinitionNodeCanvas = _internal.DefinitionNodeCanvas;
        type DefinitionNodeTable = _internal.DefinitionNodeTable;
        type DefinitionNodeTableOptions = _internal.DefinitionNodeTableOptions;
        type DefinitionNodeTableCell = _internal.DefinitionNodeTableCell;
        type DefinitionNodeTableLayout = _internal.DefinitionNodeTableLayout;
        type DefinitionNodeToc = _internal.DefinitionNodeToc;
        type DefinitionNodeTocOptions = _internal.DefinitionNodeTocOptions;
        type DefinitionNodePageReference = _internal.DefinitionNodePageReference;
        type DefinitionNodeTextReference = _internal.DefinitionNodeTextReference;
        type DefinitionNodeStack = _internal.DefinitionNodeStack;
        type DefinitionNodeColumns = _internal.DefinitionNodeColumns;
        type DefinitionNodeColumn = _internal.DefinitionNodeColumn;
        type DefinitionNodeVector = _internal.DefinitionNodeVector;
        type DefinitionNodeVectorRect = _internal.DefinitionNodeVectorRect;
        type DefinitionNodeVectorPolyline = _internal.DefinitionNodeVectorPolyline;
        type DefinitionNodeVectorLine = _internal.DefinitionNodeVectorLine;
        type DefinitionNodeVectorEllipse = _internal.DefinitionNodeVectorEllipse;
    }

    export = PdfPrinter;
}

declare module "pdfmake" {
    import PdfPrinter = require("pdfmake/lib/printer");
    export = PdfPrinter;
}

declare module "pdfmake/_internal" {
    interface Dict<T> { [key: string]: T; }

    type TFontFamilies = Dict<TFontFamilyTypes>;
    interface TFontFamilyTypes {
        normal?: string;
        bold?: string;
        italics?: string;
        bolditalics?: string;
    }

    type Color = string;
    type Alignment = "left" | "center" | "right" | "justify" | string;
    type Margin = number | [number, number] | [number, number, number, number];
    type PageOrientations = "portrait" | "landscape" | "PORTRAIT" | "LANDSCAPE";
    type PageSizes = "4A0" | "2A0" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "A7" | "A8" | "A9" | "A10" |
        "B0" | "B1" | "B2" | "B3" | "B4" | "B5" | "B6" | "B7" | "B8" | "B9" | "B10" |
        "C0" | "C1" | "C2" | "C3" | "C4" | "C5" | "C6" | "C7" | "C8" | "C9" | "C10" |
        "RA0" | "RA1" | "RA2" | "RA3" | "RA4" | "SRA0" | "SRA1" | "SRA2" | "SRA3" | "SRA4" |
        "EXECUTIVE" | "FOLIO" | "LEGAL" | "LETTER" | "TABLOID" |
        TPageSizeDetails;

    type Content = string | DefinitionNode | Array<DefinitionNode | DefinitionNode[]>;

    interface Point {
        x: number;
        y: number;
    }

    interface Style {
        font?: string;
        fontSize?: number;
        fontFeatures?: string[];
        bold?: boolean;
        italics?: boolean;
        alignment?: Alignment;
        color?: Color;
        columnGap?: number;
        fillColor?: Color;
        decoration?: string;
        decorationStyle?: string;
        decorationColor?: Color;
        background?: string;
        lineHeight?: number;
        characterSpacing?: number;
        noWrap?: boolean;
        markerColor?: Color;
        leadingIndent?: number;
        margin?: Margin;
        preserveLeadingSpaces?: boolean;
        opacity?: number;
    }

    interface TDocumentDefinitions {
        /** An array describing the pdf structure (for more information take a look at the examples in the /examples folder). */
        content: Content;
        /** Document metadata. */
        info?: TDocumentInfo;
        /** Default (implicit) style definition. */
        defaultStyle?: Style;
        /** Dictionary defining all styles which can be used in the document. */
        styles?: Dict<Style>;
        /** Page size (pdfkit units, A4 dimensions by default). */
        pageSize?: PageSizes;
        /** Page margins (pdfkit units). */
        pageMargins?: Margin;
        /** Maximum number of pages to render. */
        maxPagesNumber?: number;
        /** Default page orientation. */
        pageOrientation?: PageOrientations;
        /** PDF specification version to use. */
        version?: string;
        /** Enable PDF compression. */
        compress?: boolean;
        /** User password to view document. */
        userPassword?: string;
        /** Owner password to edit document. */
        ownerPassword?: string;
        /** PDF permissions. */
        permissions?: TDocumentPermissions;
        /** Enable font caching (default true). */
        fontLayoutCache?: boolean;
        /** Enable pages buffering. */
        bufferPages?: boolean;
        /** Images dictionary. */
        images?: Dict<string>;
        /** Custom page header */
        footer?: TDocumentHeaderFooterFunction;
        /** Custom page footer */
        header?: TDocumentHeaderFooterFunction;
        /** Custom page break behavior. */
        pageBreakBefore?: (
            currentNode?: CurrentNode,
            followingNodesOnPage?: any,
            nodesOnNextPage?: any,
            previousNodesOnPage?: any
        ) => boolean;
        /** Custom page background */
        background?: string | ((page: number, pageSize: PageSizes) => string | DefinitionNode | DefinitionNode[] | null | undefined);
        /** Custom document watermark */
        watermark?: string | DefinitionNodeText;
    }

    interface TDocumentInfo {
        [key: string]: any;

        title: string;
        author: string;
        subject: string;
        keywords: string;
        creator: string;
        producer: string;
        creationDate: Date;
        modDate: Date;
        trapped: string;
    }

    interface TDocumentPermissions {
        printing?: "highResolution" | "lowResolution";
        modifying?: boolean;
        copying?: boolean;
        annotating?: boolean;
        fillingForms?: boolean;
        contentAccessibility?: boolean;
        documentAssembly?: boolean;
    }

    type TDocumentHeaderFooterFunction = (
        currentPage: number,
        pageCount: number,
        pageSize?: { width: number; height: number }
    ) => any;

    interface TPageSizeDetails {
        width: string | number;
        height: string | number;
    }

    interface TPageSize {
        width: number;
        height: number;
        orientation: PageOrientations;
    }

    interface TStartPosition {
        pageNumber: number;
        pageOrientation: PageOrientations;
        left: number;
        right: number;
        verticalRatio: number;
        horizontalRatio: number;
    }

    type DefinitionNode = string | {} |
        DefinitionNodeText |
        DefinitionNodeUnorderedList | DefinitionNodeOrderedList |
        DefinitionNodeQrCode | DefinitionNodeImage | DefinitionNodeSvg | DefinitionNodeCanvas |
        DefinitionNodeTable | DefinitionNodeToc |
        DefinitionNodePageReference | DefinitionNodeTextReference |
        DefinitionNodeColumns | DefinitionNodeStack;

    type CurrentNode = { startPosition: TStartPosition; } &
        DefinitionNodeText &
        DefinitionNodeUnorderedList & DefinitionNodeOrderedList &
        DefinitionNodeQrCode & DefinitionNodeImage & DefinitionNodeSvg & DefinitionNodeCanvas &
        DefinitionNodeTable & DefinitionNodeToc &
        DefinitionNodePageReference & DefinitionNodeTextReference &
        DefinitionNodeColumns & DefinitionNodeStack;

    interface DefinitionNodeText extends DefinitionNodeBase {
        text: string | DefinitionNode | Array<string | DefinitionNode>;
    }

    interface DefinitionNodeUnorderedList extends DefinitionNodeBase {
        type?: string;
        ul: Array<(DefinitionNode & { listType?: string; }) | DefinitionNode[]>;
    }

    interface DefinitionNodeOrderedList extends DefinitionNodeBase {
        type?: string;
        reversed?: boolean;
        start?: number;
        separator?: string | string[];
        ol: Array<(DefinitionNode & { counter?: number; listType?: string; }) | DefinitionNode[]>;
    }

    interface DefinitionNodeQrCode extends DefinitionNodeBase {
        qr: string;
        width?: number;
        height?: number;
        fit?: number | [number, number];
        foreground?: Color;
        background?: Color;
        alignment?: Alignment;
    }

    interface DefinitionNodeImage extends DefinitionNodeBase {
        image: string;
        width?: number;
        height?: number;
        fit?: number | [number, number];
        opacity?: number;
    }

    interface DefinitionNodeSvg extends DefinitionNodeBase {
        svg: string;
        width?: number;
        height?: number;
        fit?: number | [number, number];
        opacity?: number;
    }

    interface DefinitionNodeTable extends DefinitionNodeBase {
        table: DefinitionNodeTableOptions;
        layout?: string | DefinitionNodeTableLayout;
    }

    interface DefinitionNodeTableOptions {
        body: Array<Array<DefinitionNode[] | (DefinitionNode & DefinitionNodeTableCell) | Array<DefinitionNode & DefinitionNodeTableCell>>>;
        widths?: Array<string | number>;
        heights?: number | number[] | ((row: number) => number);
        headerRows?: number;
        dontBreakRows?: boolean;
        keepWithHeaderRows?: number;
    }

    interface DefinitionNodeTableCell {
        colSpan?: number;
        rowSpan?: number;
        border?: boolean | [boolean, boolean, boolean, boolean];
        borderColor?: string | [string, string, string, string];
        fillColor?: string;
    }

    interface DefinitionNodeTableLayout {
        defaultBorder?: boolean | [boolean, boolean, boolean, boolean];
        hLineWidth?: (i: number, node: DefinitionNodeTable) => number | string;
        vLineWidth?: (i: number, node: DefinitionNodeTable) => number | string;
        hLineColor?: (i: number, node: DefinitionNodeTable) => string | null;
        vLineColor?: (i: number, node: DefinitionNodeTable) => string | null;
        hLineStyle?: (i: number, node: DefinitionNodeTable) => any;
        vLineStyle?: (i: number, node: DefinitionNodeTable) => any;
        paddingLeft?: (i: number, node: DefinitionNodeTable) => number;
        paddingRight?: (i: number, node: DefinitionNodeTable) => number;
        paddingTop?: (i: number, node: DefinitionNodeTable) => number;
        paddingBottom?: (i: number, node: DefinitionNodeTable) => number;
        fillColor?: (rowIndex: number, node: DefinitionNodeTable, columnIndex: number) => string | null;
    }

    interface DefinitionNodeToc {
        toc: DefinitionNodeTocOptions;
    }

    interface DefinitionNodeTocOptions {
        title?: string | DefinitionNodeText;
        textMargin?: Margin;
        textStyle?: Style;
        numberStyle?: Style;
    }

    interface DefinitionNodePageReference extends DefinitionNodeBase {
        pageReference: string;
    }

    interface DefinitionNodeTextReference extends DefinitionNodeBase {
        textReference: string;
    }

    interface DefinitionNodeStack extends DefinitionNodeBase {
        stack: Content;
    }

    interface DefinitionNodeColumns extends DefinitionNodeBase {
        columns: DefinitionNodeColumn[];
    }

    type DefinitionNodeColumn = DefinitionNode | DefinitionNode[] | (DefinitionNode & { width: number | string; });

    interface DefinitionNodeCanvas extends DefinitionNodeBase {
        canvas: DefinitionNodeVector[];
    }

    type DefinitionNodeVector = DefinitionNodeVectorRect | DefinitionNodeVectorPolyline | DefinitionNodeVectorLine | DefinitionNodeVectorEllipse;

    interface DefinitionNodeVectorRect extends DefinitionNodeVectorBase {
        type: "rect";
        x: number;
        y: number;
        w: number;
        h: number;
        r?: number;
    }

    interface DefinitionNodeVectorPolyline extends DefinitionNodeVectorBase {
        type: "polyline";
        points: Point[];
        closePath?: boolean;
    }

    interface DefinitionNodeVectorLine extends DefinitionNodeVectorBase {
        type: "line";
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }

    interface DefinitionNodeVectorEllipse extends DefinitionNodeVectorBase {
        type: "ellipse";
        x: number;
        y: number;
        r1: number;
        r2: number;
    }

    interface DefinitionNodeVectorBase {
        lineWidth?: number;
        lineColor?: Color;
        lineCap?: "round" | "square";
        color?: Color;
        linearGradient?: Color[];
        fillOpacity?: number;
        dash?: any;
    }

    interface DefinitionNodeBase extends Style {
        id?: string;
        style?: string | string[] | Style;
        absolutePosition?: Point;
        relativePosition?: Point;
        pageBreak?: string;
        link?: string;
        linkToPage?: number;
        linkToDestination?: string;
        tocItem?: boolean;
        tocStyle?: Style;
        tocMargin?: Margin;
        tocNumberStyle?: Style;
        margins?: Margin;
    }
}
