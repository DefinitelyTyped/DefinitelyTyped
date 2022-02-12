/// <reference types="node" />
/// <reference types="pdfkit" />

export type PageSize = PredefinedPageSize | CustomPageSize;

export interface CustomPageSize {
    width: number;
    height: number | 'auto';
}

export interface Position {
    x: number;
    y: number;
}

export type PredefinedPageSize =
    | '4A0' | '2A0'
    | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'A10'
    | 'B0' | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9' | 'B10'
    | 'C0' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'C10'
    | 'RA1' | 'RA2' | 'RA3' | 'RA4'
    | 'SRA1' | 'SRA2' | 'SRA3' | 'SRA4'
    | 'EXECUTIVE' | 'FOLIO' | 'LEGAL' | 'LETTER' | 'TABLOID';

export type PageOrientation = 'portrait' | 'landscape';

export type PageBreak = 'before' | 'after';

export type Size =
    | number // absolute
    | 'auto'
    | '*'
    | string; // percentage

export interface TFontDictionary {
    [fontName: string]: TFontFamilyTypes;
}

export interface TFontFamilyTypes {
    normal?: PDFKit.Mixins.PDFFontSource | undefined;
    bold?: PDFKit.Mixins.PDFFontSource | undefined;
    italics?: PDFKit.Mixins.PDFFontSource | undefined;
    bolditalics?: PDFKit.Mixins.PDFFontSource | undefined;
}

export interface TDocumentInformation {
    /** the title of the document */
    title?: string | undefined;
    /** the name of the author */
    author?: string | undefined;
    /** the subject of the document */
    subject?: string | undefined;
    /** keywords associated with the document */
    keywords?: string | undefined;
    creator?: string | undefined;
    producer?: string | undefined;
    creationDate?: Date | undefined;
    modDate?: Date | undefined;
    trapped?: string | undefined;
}

export type DynamicContent = (
    currentPage: number,
    pageCount: number,
    pageSize: ContextPageSize,
) => Content | null | undefined;

export type DynamicBackground = (currentPage: number, pageSize: ContextPageSize) => Content | null | undefined;

export type Margins = number | [number, number] | [number, number, number, number];

export type Decoration = 'underline' | 'lineThrough' | 'overline';
export type DecorationStyle = 'dashed' | 'dotted' | 'double' | 'wavy';

export type Alignment = 'left' | 'right' | 'justify' | 'center';

export type DynamicRowSize = (row: number) => number | 'auto';

export interface CustomTableLayout {
    hLineWidth?: DynamicLayout<number> | undefined;
    vLineWidth?: DynamicLayout<number> | undefined;
    hLineColor?: string | DynamicLayout<string> | undefined;
    vLineColor?: string | DynamicLayout<string> | undefined;
    hLineStyle?: DynamicLayout<LineStyle> | undefined;
    vLineStyle?: DynamicLayout<LineStyle> | undefined;
    fillColor?: string | DynamicLayout<string> | undefined;
    paddingLeft?: DynamicLayout<number> | undefined;
    paddingRight?: DynamicLayout<number> | undefined;
    paddingTop?: DynamicLayout<number> | undefined;
    paddingBottom?: DynamicLayout<number> | undefined;
    fillOpacity?: number | DynamicLayout<number> | undefined;
    defaultBorder?: boolean | undefined;
}

export type DynamicLayout<T> = (rowIndex: number, node: ContentTable, columnIndex: number) => T | null | undefined;

export interface LineStyle {
    dash?: {
        length: number;
        space?: number | undefined;
    } | undefined;
}

export type TableCell =
    | {} // Used when another cell spans over this cell
    | (Content & {
          rowSpan?: number | undefined;
          colSpan?: number | undefined;
          border?: [boolean, boolean, boolean, boolean] | undefined;
          borderColor?: [string, string, string, string] | undefined;
          fillOpacity?: number | undefined;
      });

export interface Table {
    body: TableCell[][];
    widths?: '*' | 'auto' | Size[] | undefined;
    heights?: number | number[] | DynamicRowSize | undefined;
    headerRows?: number | undefined;
    dontBreakRows?: boolean | undefined;
    keepWithHeaderRows?: number | undefined;
    layout?: TableLayout | undefined;
}

export type PredefinedTableLayout = 'noBorders' | 'headerLineOnly' | 'lightHorizontalLines';
export type TableLayout = string | PredefinedTableLayout | CustomTableLayout;

export interface Style {
    /** name of the font */
    font?: string | undefined;
    /** size of the font in pt */
    fontSize?: number | undefined;
    fontFeatures?: PDFKit.Mixins.OpenTypeFeatures[] | undefined;
    /** the line height (default: 1) */
    lineHeight?: number | undefined;
    /** whether to use bold text (default: false) */
    bold?: boolean | undefined;
    /** whether to use italic text (default: false) */
    italics?: boolean | undefined;
    /** the alignment of the text */
    alignment?: Alignment | undefined;
    /** the color of the text (color name e.g., ‘blue’ or hexadecimal color e.g., ‘#ff5500’) */
    color?: string | undefined;
    /** the background color of the text */
    background?: string | undefined;
    /** the color of the bullets in a buletted list */
    markerColor?: string | undefined;
    /** the text decoration to applu (‘underline’ or ‘lineThrough’ or ‘overline’) */
    decoration?: Decoration | undefined;
    /** (‘dashed’ or ‘dotted’ or ‘double’ or ‘wavy’) */
    decorationStyle?: DecorationStyle | undefined;
    /** the color of the text decoration, see color */
    decorationColor?: string | undefined;
    margin?: Margins | undefined;
    preserveLeadingSpaces?: boolean | undefined;
    opacity?: number | undefined;
    characterSpacing?: number | undefined;
    leadingIndent?: number | undefined;
    // Table-cell properties:
    noWrap?: boolean | undefined;
    /** the background color of a table cell */
    fillColor?: string | undefined;
    /** the background opacity of a table cell */
    fillOpacity?: number | undefined;
    /** optional space between columns */
    columnGap?: Size | undefined;
    sup?: boolean | undefined;
    sub?: boolean | undefined;
    // These properties appear in the documentation but don't do anything:
    // tableCellPadding?: unknown;
    // cellBorder?: unknown;
    // headerCellBorder?: unknown;
    // oddRowCellBorder?: unknown;
    // evenRowCellBorder?: unknown;
    // tableBorder?: unknown;
}

export type Content =
    | string
    | ArrayOfContent
    | ContentText
    | ContentColumns
    | ContentStack
    | ContentUnorderedList
    | ContentOrderedList
    | ContentTable
    | ContentAnchor
    | ContentPageReference
    | ContentTextReference
    | ContentToc
    | ContentTocItem
    | ContentImage
    | ContentSvg
    | ContentQr
    | ContentCanvas;

// not exported, only used to prevent Content from circularly referencing itself
interface ArrayOfContent extends Array<Content> {}

export interface ContentText extends ContentLink, ContentBase {
    text: Content;
}

export interface ContentColumns extends ContentBase {
    columns: Column[];
}

export interface ContentStack extends ContentBase {
    /** if true, ensures that the contents of the stack are always on the same page */
    unbreakable?: boolean | undefined;
    stack: Content[];
}

/** for numbered lists set the ol key */
export interface ContentOrderedList extends ContentBase {
    ol: OrderedListElement[];
    type?: OrderedListType | undefined;
    markerColor?: string | undefined;
    separator?: string | [string, string] | undefined;
    reversed?: boolean | undefined;
    start?: number | undefined;
}

/** to treat a paragraph as a bulleted list, set an array of items under the ul key */
export interface ContentUnorderedList extends ContentBase {
    ul: UnorderedListElement[];
    type?: UnorderedListType | undefined;
    markerColor?: string | undefined;
}

export interface ContentCanvas extends ContentBase {
    canvas: CanvasElement[];
}

export interface ContentSvg extends ContentBase {
    svg: string;
    width?: number | undefined;
    height?: number | undefined;
    fit?: [number, number] | undefined;
}

export interface ContentImage extends ContentLink, ContentBase {
    image: string;
    width?: number | undefined;
    height?: number | undefined;
    fit?: [number, number] | undefined;
    cover?: ImageCover | undefined;
}

export interface ContentTable extends ContentBase {
    table: Table;
    layout?: TableLayout | undefined;
}

export interface ContentAnchor extends ContentBase {
    text: string | ContentAnchor;
    id: string;
}

export interface ContentTocItem extends ContentBase {
    text: string | ContentTocItem;
    tocItem: boolean | string | string[];
    tocStyle?: string | string[] | Style | undefined;
    tocNumberStyle?: string | string[] | Style | undefined;
    tocMargin?: Margins | undefined;
}

export interface ContentPageReference extends ContentBase {
    pageReference: string;
}

export interface ContentTextReference extends ContentBase {
    textReference: string;
}

export interface ContentToc extends ContentBase {
    toc: TableOfContent;
}

export interface ContentQr extends ContentBase {
    qr: string;
    foreground?: string | undefined;
    fit?: number | undefined;
    version?: number | undefined;
    eccLevel?: 'L' | 'M' | 'Q' | 'H' | undefined;
    mode?: 'numeric' | 'alphanumeric' | 'octet' | undefined;
    mask?: number | undefined;
}

export interface ContentBase extends Style {
    style?: string | string[] | Style | undefined;
    absolutePosition?: Position | undefined;
    relativePosition?: Position | undefined;
    pageBreak?: PageBreak | undefined;
    pageOrientation?: PageOrientation | undefined;
    headlineLevel?: number | undefined;
}

export interface ContentLink {
    link?: string | undefined;
    linkToPage?: number | undefined;
    linkToDestination?: string | undefined;
}

export interface TableOfContent {
    title?: Content | undefined;
    textMargin?: Margins | undefined;
    textStyle?: string | string[] | Style | undefined;
    numberStyle?: string | string[] | Style | undefined;
    id?: string | undefined;
}

export type Column = Content & {
    width?: Size | undefined;
};

export type OrderedListType = 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman' | 'none';
export type OrderedListElement = Content & {
    counter?: number | undefined;
    listType?: OrderedListType | undefined;
};

export type UnorderedListType = 'square' | 'circle' | 'none';
export type UnorderedListElement = Content & {
    listType?: UnorderedListType | undefined;
};

export type CanvasElement = CanvasRect | CanvasPolyline | CanvasLine | CanvasEllipse;

export interface CanvasRect extends CanvasLineElement, CanvasFilledElement {
    type: 'rect';
    x: number;
    y: number;
    w: number;
    h: number;
    r?: number | undefined;
}

export interface CanvasPolyline extends CanvasLineElement, CanvasFilledElement {
    type: 'polyline';
    points: Array<{ x: number; y: number }>;
    closePath?: boolean | undefined;
    lineCap?: 'round' | 'square' | undefined;
}

export interface CanvasLine extends CanvasLineElement {
    type: 'line';
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    lineCap?: 'round' | 'square' | undefined;
}

export interface CanvasEllipse extends CanvasLineElement, CanvasFilledElement {
    type: 'ellipse';
    x: number;
    y: number;
    r1: number;
    r2?: number | undefined;
}

export interface CanvasFilledElement {
    color?: string | undefined;
    fillOpacity?: number | undefined;
    linearGradient?: string[] | undefined;
}

export interface CanvasLineElement {
    lineWidth?: number | undefined;
    lineColor?: string | undefined;
    dash?: {
        length: number;
        space?: number | undefined;
    } | undefined;
}

export type ImageAlignment = 'left' | 'right' | 'center';
export type ImageVerticalAlignment = 'top' | 'bottom' | 'center';

export interface ImageCover {
    width?: number | undefined;
    height?: number | undefined;
    align?: ImageAlignment | undefined;
    valign?: ImageVerticalAlignment | undefined;
}

export interface StyleDictionary {
    [name: string]: Style;
}

export type PDFVersion = '1.3' | '1.4' | '1.5' | '1.6' | '1.7' | '1.7ext3';

export interface Watermark {
    /** watermark text */
    text: string;
    /** opacity of text */
    opacity?: number | undefined;
    /** angle of text rotation (minimal version: 0.1.60) */
    angle?: number | undefined;
    font?: string | undefined;
    /** own font size of text (ideal size is calculated automatically) (minimal version: 0.1.60) */
    fontSize?: number | undefined;
    /** color of text */
    color?: string | undefined;
    /** bold style of text */
    bold?: boolean | undefined;
    /** italics style of text */
    italics?: boolean | undefined;
}

export interface TDocumentDefinitions {
    content: Content;
    background?: DynamicBackground | Content | undefined;
    compress?: boolean | undefined;
    defaultStyle?: Style | undefined;
    footer?: DynamicContent | Content | undefined;
    header?: DynamicContent | Content | undefined;
    images?: { [key: string]: string } | undefined;
    info?: TDocumentInformation | undefined;
    pageBreakBefore?: ((
        currentNode: Node,
        followingNodesOnPage: Node[],
        nodesOnNextPage: Node[],
        previousNodesOnPage: Node[],
    ) => boolean) | undefined;
    pageMargins?: Margins | undefined;
    pageOrientation?: PageOrientation | undefined;
    pageSize?: PageSize | undefined;
    styles?: StyleDictionary | undefined;
    userPassword?: string | undefined;
    ownerPassword?: string | undefined;
    permissions?: PDFKit.DocumentPermissions | undefined;
    version?: PDFVersion | undefined;
    watermark?: string | Watermark | undefined;
}

export interface Node {
    text?: Content | undefined;
    ul?: UnorderedListElement[] | undefined;
    ol?: OrderedListElement[] | undefined;
    table?: Table | undefined;
    image?: string | undefined;
    qr?: string | undefined;
    canvas?: CanvasElement | undefined;
    svg?: string | undefined;
    columns?: Column[] | undefined;
    id?: string | undefined;
    headlineLevel?: number | undefined;
    style?: string | string[] | Style | undefined;
    pageBreak?: PageBreak | undefined;
    pageOrientation?: PageOrientation | undefined;
    pageNumbers: number[];
    pages: number;
    stack: boolean;
    startPosition: {
        pageNumber: number;
        pageOrientation: PageOrientation;
        pageInnerHeight: number;
        pageInnerWidth: number;
        left: number;
        top: number;
        verticalRatio: number;
        horizontalRatio: number;
    };
}

export interface ContextPageSize {
    height: number;
    width: number;
    orientation: PageOrientation;
}

export interface BufferOptions {
    fontLayoutCache?: boolean | undefined;
    bufferPages?: boolean | undefined;
    tableLayouts?: { [key: string]: CustomTableLayout } | undefined;
    autoPrint?: boolean | undefined;
    progressCallback?: ((progress: number) => void) | undefined;
}

// disable automatic exporting
export {};
