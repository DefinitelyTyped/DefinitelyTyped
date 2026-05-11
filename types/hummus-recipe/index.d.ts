/// <reference types="node" />

declare namespace Recipe {
    type CommentOptionsFlag =
        | "invisible"
        | "hidden"
        | "print"
        | "nozoom"
        | "norotate"
        | "noview"
        | "readonly"
        | "locked"
        | "togglenoview";

    type AnnotSubtype =
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
        | "Sound";

    type AnnotOptionsFlag =
        | "invisible"
        | "hidden"
        | "print"
        | "nozoom"
        | "norotate"
        | "noview"
        | "readonly"
        | "locked"
        | "togglenoview";

    type AnnotOptionsIcon = "Comment" | "Key" | "Note" | "Help" | "NewParagraph" | "Paragraph" | "Insert";

    interface RecipeOptions {
        version?: number | undefined;
        author?: string | undefined;
        title?: string | undefined;
        subject?: string | undefined;
        colorspace?: "rgb" | "cmyk" | "grey" | undefined;
        keywords?: string[] | undefined;
        password?: string | undefined;
        userPassword?: string | undefined;
        ownerPassword?: string | undefined;
        userProtectionFlag?: string | undefined;
        fontSrcPath?: string | string[] | undefined;
    }

    interface CommentOptions {
        title?: string | undefined;
        date?: string | undefined;
        open?: boolean | undefined;
        richText?: boolean | undefined;
        flag?: CommentOptionsFlag | undefined;
    }

    interface AnnotOptions {
        title?: string | undefined;
        open?: boolean | undefined;
        richText?: boolean | undefined;
        flag?: AnnotOptionsFlag | undefined;
        icon?: AnnotOptionsIcon | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }

    interface EncryptOptions {
        password?: string | undefined;
        ownerPassword?: string | undefined;
        userProtectionFlag?: number | undefined;
    }

    interface ImageOptions {
        width?: number | undefined;
        height?: number | undefined;
        scale?: number | undefined;
        keepAspectRatio?: boolean | undefined;
        opacity?: number | undefined;
        align?: string | undefined;
    }

    interface InfoOptions {
        version?: string | undefined;
        author?: string | undefined;
        title?: string | undefined;
        subject?: string | undefined;
        keywords?: string[] | undefined;
    }

    interface OverlayOptions {
        scale?: number | undefined;
        keepAspectRatio?: boolean | undefined;
        fitWidth?: boolean | undefined;
        fitHeight?: boolean | undefined;
    }

    interface TextBoxStyle {
        lineWidth?: number | undefined;
        stroke?: string | number[] | undefined;
        dash?: number[] | undefined;
        fill?: string | number[] | undefined;
        opacity?: number | undefined;
    }

    interface TextBox {
        width?: number | undefined;
        height?: number | undefined;
        minHeight?: number | undefined;
        padding?: number | number[] | undefined;
        lineHeight?: number | undefined;
        textAlign?: string | undefined;
        style?: TextBoxStyle | undefined;
    }

    interface TextOptions {
        color?: string | number[] | undefined;
        opacity?: number | undefined;
        rotation?: number | undefined;
        rotationOrigin?: number[] | undefined;
        font?: string | undefined;
        size?: number | undefined;
        align?: string | undefined;
        highlight?: boolean | undefined;
        underline?: boolean | undefined;
        strikeOut?: boolean | undefined;
        textBox?: TextBox | undefined;
    }

    interface LineToOptions {
        color?: string | number[] | undefined;
        stroke?: string | number[] | undefined;
        fill?: string | number[] | undefined;
        lineWidth?: number | undefined;
        opacity?: number | undefined;
        dash?: number[] | undefined;
    }

    interface LineOptions {
        color?: string | number[] | undefined;
        stroke?: string | number[] | undefined;
        lineWidth?: number | undefined;
        dash?: number[] | undefined;
    }

    interface PolygonOptions {
        color?: string | number[] | undefined;
        stroke?: string | number[] | undefined;
        fill?: string | number[] | undefined;
        lineWidth?: number | undefined;
        opacity?: number | undefined;
        dash?: number[] | undefined;
    }

    interface CircleOptions {
        color?: string | number[] | undefined;
        stroke?: string | number[] | undefined;
        fill?: string | number[] | undefined;
        lineWidth?: number | undefined;
        opacity?: number | undefined;
        dash?: number[] | undefined;
    }

    interface RectangleOptions {
        color?: string | number[] | undefined;
        stroke?: string | number[] | undefined;
        fill?: string | number[] | undefined;
        lineWidth?: number | undefined;
        opacity?: number | undefined;
        dash?: number[] | undefined;
        rotation?: number | undefined;
        rotationOrigin?: number[] | undefined;
    }

    interface PageInfo {
        pageNumber: number;
        mediaBox: number[];
        layout: string;
        rotate: number;
        width: number;
        height: number;
        size: number[];
        offsetX: number;
        offsetY: number;
    }

    interface Metadata {
        pages: number;
        [PagesIndex: number]: PageInfo;
    }

    type EndPDFCallback1 = () => any;
    type EndPDFCallback2 = (buffer: Buffer) => any;
    type EndPDFCallback = EndPDFCallback1 | EndPDFCallback2;
}

declare class Recipe {
    constructor(src: string, output: string, options?: Recipe.RecipeOptions);

    constructor(buffer: Buffer, options?: Recipe.RecipeOptions);

    readonly metadata: Recipe.Metadata;

    comment(text: string, x: number, y: number, options?: Recipe.CommentOptions): Recipe;

    annot(x: number, y: number, subtype: Recipe.AnnotSubtype, options?: Recipe.AnnotOptions): Recipe;

    appendPage(pdfSrc: string, pages: number | number[]): Recipe;

    encrypt(options: Recipe.EncryptOptions): Recipe;

    registerFont(fontName: string, fontSrcPath: string): Recipe;

    image(imgSrc: string, x: number, y: number, options?: Recipe.ImageOptions): Recipe;

    info(options?: Recipe.InfoOptions): Recipe;

    custom(key?: string, value?: string): Recipe;

    insertPage(afterPageNumber: number, pdfSrc: string, srcPageNumber: number): Recipe;

    overlay(pdfSrc: string, x: number, y: number, options?: Recipe.OverlayOptions): Recipe;

    createPage(pageWidth: number, pageHeight: number): Recipe;

    endPage(): Recipe;

    editPage(pageNumber: number): Recipe;

    pageInfo(pageNumber: number): Recipe;

    split(outputDir: string, prefix: string): Recipe;

    text(text: string, x: number, y: number, options?: Recipe.TextOptions): Recipe;

    moveTo(x: number, y: number): Recipe;

    lineTo(x: number, y: number, options?: Recipe.LineToOptions): Recipe;

    line(coordinates: number[][], options?: Recipe.LineOptions): Recipe;

    polygon(coordinates: number[][], options?: Recipe.PolygonOptions): Recipe;

    circle(x: number, y: number, radius: number, options?: Recipe.CircleOptions): Recipe;

    rectangle(x: number, y: number, width: number, height: number, options?: Recipe.RectangleOptions): Recipe;

    endPDF(callback?: Recipe.EndPDFCallback): Recipe;
}

export = Recipe;
