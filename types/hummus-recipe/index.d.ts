// Type definitions for hummus-recipe 1.8
// Project: https://github.com/chunyenHuang/hummusRecipe
// Definitions by: Erik Berreßem <https://github.com/she11sh0cked>
//                 Sebastian Martinez <https://github.com/sebastinez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

declare namespace Recipe {
    type CommentOptionsFlag =
        | 'invisible'
        | 'hidden'
        | 'print'
        | 'nozoom'
        | 'norotate'
        | 'noview'
        | 'readonly'
        | 'locked'
        | 'togglenoview';

    type AnnotSubtype =
        | 'Text'
        | 'FreeText'
        | 'Line'
        | 'Square'
        | 'Circle'
        | 'Polygon'
        | 'PolyLine'
        | 'Highlight'
        | 'Underline'
        | 'Squiggly'
        | 'StrikeOut'
        | 'Stamp'
        | 'Caret'
        | 'Ink'
        | 'FileAttachment'
        | 'Sound';

    type AnnotOptionsFlag =
        | 'invisible'
        | 'hidden'
        | 'print'
        | 'nozoom'
        | 'norotate'
        | 'noview'
        | 'readonly'
        | 'locked'
        | 'togglenoview';

    type AnnotOptionsIcon = 'Comment' | 'Key' | 'Note' | 'Help' | 'NewParagraph' | 'Paragraph' | 'Insert';

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
        flag?: CommentOptionsFlag;
    }

    interface AnnotOptions {
        title?: string;
        open?: boolean;
        richText?: boolean;
        flag?: AnnotOptionsFlag;
        icon?: AnnotOptionsIcon;
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
        highlight?: boolean;
        underline?: boolean;
        strikeOut?: boolean;
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
