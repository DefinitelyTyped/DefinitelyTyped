// Type definitions for hummus-recipe 1.8
// Project: https://github.com/chunyenHuang/hummusRecipe
// Definitions by: Erik Berreßem <https://github.com/erikberressem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace HummusRecipe {
    interface RecipeOptions {
        version?: number;
        author?: string;
        title?: string;
        subject?: string;
        keywords?: string[];
    }

    interface CommentOptions {
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

    interface AnotOptions {
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

    interface EncryptOptions {
        password?: string;
        ownerPassword?: string;
        userProtectionFlag?: number;
    }

    interface ImageOptions {
        width?: number;
        height?: number;
        scale?: number;
        keepAspectRatio?: boolean;
        opacity?: number;
        align?: string;
    }

    interface InfoOptions {
        version?: string;
        author?: string;
        title?: string;
        subject?: string;
        keywords?: string[];
    }

    interface OverlayOptions {
        scale?: number;
        keepAspectRatio?: boolean;
        fitWidth?: boolean;
        fitHeight?: boolean;
    }

    interface TextBoxStyle {
        lineWidth?: number;
        stroke?: string | number[];
        dash?: number[];
        fill?: string | number[];
        opacity?: number;
    }

    interface TextBox {
        width?: number;
        height?: number;
        minHeight?: number;
        padding?: number | number[];
        lineHeight?: number;
        textAlign?: string;
        style?: TextBoxStyle;
    }

    interface TextOptions {
        color?: string | number[];
        opacity?: number;
        rotation?: number;
        rotationOrigin?: number[];
        font?: string;
        size?: number;
        align?: string;
        highlight?: Object | Boolean;
        underline?: Object | Boolean;
        strikeOut?: Object | Boolean;
        textBox?: TextBox;
    }

    interface LineToOptions {
        color?: string | number[];
        stroke?: string | number[];
        fill?: string | number[];
        lineWidth?: number;
        opacity?: number;
        dash?: number[];
    }

    interface LineOptions {
        color?: string | number[];
        stroke?: string | number[];
        lineWidth?: number;
        dash?: number[];
    }

    interface PolygonOptions {
        color?: string | number[];
        stroke?: string | number[];
        fill?: string | number[];
        lineWidth?: number;
        opacity?: number;
        dash?: number[];
    }

    interface CircleOptions {
        color?: string | number[];
        stroke?: string | number[];
        fill?: string | number[];
        lineWidth?: number;
        opacity?: number;
        dash?: number[];
    }

    interface RectangleOptions {
        color?: string | number[];
        stroke?: string | number[];
        fill?: string | number[];
        lineWidth?: number;
        opacity?: number;
        dash?: number[];
        rotation?: number;
        rotationOrigin?: number[];
    }
}

declare class HummusRecipe {
    constructor(
        src: string,
        output: string,
        options?: HummusRecipe.RecipeOptions
    );

    comment(
        text: string,
        x: number,
        y: number,
        options?: HummusRecipe.CommentOptions
    ): HummusRecipe;

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
        options?: HummusRecipe.AnotOptions
    ): HummusRecipe;

    appendPage(pdfSrc: string, pages: number | number[]): HummusRecipe;

    encrypt(options: HummusRecipe.EncryptOptions): HummusRecipe;

    registerFont(fontName: string, fontSrcPath: string): HummusRecipe;

    image(
        imgSrc: string,
        x: number,
        y: number,
        options?: HummusRecipe.ImageOptions
    ): HummusRecipe;

    info(options?: HummusRecipe.InfoOptions): HummusRecipe;

    custom(key?: string, value?: string): HummusRecipe;

    insertPage(
        afterPageNumber: number,
        pdfSrc: string,
        srcPageNumber: number
    ): HummusRecipe;

    overlay(
        pdfSrc: string,
        x: number,
        y: number,
        options?: HummusRecipe.OverlayOptions
    ): HummusRecipe;

    createPage(pageWidth: number, pageHeight: number): HummusRecipe;

    endPage(): HummusRecipe;

    editPage(pageNumber: number): HummusRecipe;

    pageInfo(pageNumber: number): HummusRecipe;

    split(outputDir: string, prefix: string): HummusRecipe;

    text(
        text: string,
        x: number,
        y: number,
        options?: HummusRecipe.TextOptions
    ): HummusRecipe;

    moveTo(x: number, y: number): HummusRecipe;

    lineTo(
        x: number,
        y: number,
        options?: HummusRecipe.LineToOptions
    ): HummusRecipe;

    line(
        coordinates: number[],
        options?: HummusRecipe.LineOptions
    ): HummusRecipe;

    polygon(
        coordinates: number[][],
        options?: HummusRecipe.PolygonOptions
    ): HummusRecipe;

    circle(
        x: number,
        y: number,
        radius: number,
        options?: HummusRecipe.CircleOptions
    ): HummusRecipe;

    rectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        options?: HummusRecipe.RectangleOptions
    ): HummusRecipe;

    endPDF(callback?: Function): HummusRecipe;
}

declare module "hummus-recipe" {
    export = HummusRecipe;
}
