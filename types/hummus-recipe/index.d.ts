// Type definitions for hummus-recipe 1.8
// Project: https://github.com/chunyenHuang/hummusRecipe
// Definitions by: Erik Berreßem <https://github.com/erikberressem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface RecipeOptions {
    version?: number;
    author?: string;
    title?: string;
    subject?: string;
    keywords?: string[];
}

export interface CommentOptions {
    title?: string;
    date?: string;
    open?: boolean;
    richText?: boolean;
    flag?:
        | "invisible"
        | "hidden"
        | "print"
        | "nozoom"
        | "norotate"
        | "noview"
        | "readonly"
        | "locked"
        | "togglenoview";
}

export interface AnotOptions {
    title?: string;
    open?: boolean;
    richText?: boolean;
    flag?:
        | "invisible"
        | "hidden"
        | "print"
        | "nozoom"
        | "norotate"
        | "noview"
        | "readonly"
        | "locked"
        | "togglenoview";
    icon?:
        | "Comment"
        | "Key"
        | "Note"
        | "Help"
        | "NewParagraph"
        | "Paragraph"
        | "Insert";
    width?: number;
    height?: number;
}

export interface EncryptOptions {
    password?: string;
    ownerPassword?: string;
    userProtectionFlag?: number;
}

export interface ImageOptions {
    width?: number;
    height?: number;
    scale?: number;
    keepAspectRatio?: boolean;
    opacity?: number;
    align?: string;
}

export interface InfoOptions {
    version?: string;
    author?: string;
    title?: string;
    subject?: string;
    keywords?: string[];
}

export interface OverlayOptions {
    scale?: number;
    keepAspectRatio?: boolean;
    fitWidth?: boolean;
    fitHeight?: boolean;
}

export interface TextBoxStyle {
    lineWidth?: number;
    stroke?: string | number[];
    dash?: number[];
    fill?: string | number[];
    opacity?: number;
}

export interface TextBox {
    width?: number;
    height?: number;
    minHeight?: number;
    padding?: number | number[];
    lineHeight?: number;
    textAlign?: string;
    style?: TextBoxStyle;
}

export interface TextOptions {
    color?: string | number[];
    opacity?: number;
    rotation?: number;
    rotationOrigin?: number[];
    font?: string;
    size?: number;
    align?: string;
    highlight?: boolean;
    underline?: boolean;
    strikeOut?: boolean;
    textBox?: TextBox;
}

export interface LineToOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
}

export interface LineOptions {
    color?: string | number[];
    stroke?: string | number[];
    lineWidth?: number;
    dash?: number[];
}

export interface PolygonOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
}

export interface CircleOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
}

export interface RectangleOptions {
    color?: string | number[];
    stroke?: string | number[];
    fill?: string | number[];
    lineWidth?: number;
    opacity?: number;
    dash?: number[];
    rotation?: number;
    rotationOrigin?: number[];
}

export class Recipe {
    constructor(src: string, output: string, options?: RecipeOptions);

    comment(
        text: string,
        x: number,
        y: number,
        options?: CommentOptions
    ): Recipe;

    annot(
        x: number,
        y: number,
        subtype:
            | "Text"
            | "FreeText"
            | "Line"
            | "Square"
            | "Circle"
            | "Polygon"
            | "PolyLine"
            | "Highlight"
            | "Underline"
            | "Squiggly"
            | "StrikeOut"
            | "Stamp"
            | "Caret"
            | "Ink"
            | "FileAttachment"
            | "Sound",
        options?: AnotOptions
    ): Recipe;

    appendPage(pdfSrc: string, pages: number | number[]): Recipe;

    encrypt(options: EncryptOptions): Recipe;

    registerFont(fontName: string, fontSrcPath: string): Recipe;

    image(imgSrc: string, x: number, y: number, options?: ImageOptions): Recipe;

    info(options?: InfoOptions): Recipe;

    custom(key?: string, value?: string): Recipe;

    insertPage(
        afterPageNumber: number,
        pdfSrc: string,
        srcPageNumber: number
    ): Recipe;

    overlay(
        pdfSrc: string,
        x: number,
        y: number,
        options?: OverlayOptions
    ): Recipe;

    createPage(pageWidth: number, pageHeight: number): Recipe;

    endPage(): Recipe;

    editPage(pageNumber: number): Recipe;

    pageInfo(pageNumber: number): Recipe;

    split(outputDir: string, prefix: string): Recipe;

    text(text: string, x: number, y: number, options?: TextOptions): Recipe;

    moveTo(x: number, y: number): Recipe;

    lineTo(x: number, y: number, options?: LineToOptions): Recipe;

    line(coordinates: number[], options?: LineOptions): Recipe;

    polygon(coordinates: number[][], options?: PolygonOptions): Recipe;

    circle(
        x: number,
        y: number,
        radius: number,
        options?: CircleOptions
    ): Recipe;

    rectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        options?: RectangleOptions
    ): Recipe;

    endPDF(callback?: () => any): Recipe;
}
