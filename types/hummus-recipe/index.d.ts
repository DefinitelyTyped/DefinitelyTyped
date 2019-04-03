// Type definitions for hummus-recipe 1.8
// Project: https://github.com/chunyenHuang/hummusRecipe
// Definitions by: Erik Berreßem <https://github.com/erikberressem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace HummusRecipe {
    interface IRecipeOptions {
        version?: number
        author?: string
        title?: string
        subject?: string
        keywords?: string[]
    }

    interface ICommentOptions {
        title?: string
        date?: string
        open?: boolean
        richText?: boolean
        flag?:
            | 'invisible'
            | 'hidden'
            | 'print'
            | 'nozoom'
            | 'norotate'
            | 'noview'
            | 'readonly'
            | 'locked'
            | 'togglenoview'
    }

    interface IAnotOptions {
        title?: string
        open?: boolean
        richText?: boolean
        flag?:
            | 'invisible'
            | 'hidden'
            | 'print'
            | 'nozoom'
            | 'norotate'
            | 'noview'
            | 'readonly'
            | 'locked'
            | 'togglenoview'
        icon?: 'Comment' | 'Key' | 'Note' | 'Help' | 'NewParagraph' | 'Paragraph' | 'Insert'
        width?: number
        height?: number
    }

    interface IEncryptOptions {
        password?: string
        ownerPassword?: string
        userProtectionFlag?: number
    }

    interface IImageOptions {
        width?: number
        height?: number
        scale?: number
        keepAspectRatio?: boolean
        opacity?: number
        align?: string
    }

    interface IInfoOptions {
        version?: string
        author?: string
        title?: string
        subject?: string
        keywords?: string[]
    }

    interface IOverlayOptions {
        scale?: number
        keepAspectRatio?: boolean
        fitWidth?: boolean
        fitHeight?: boolean
    }

    interface ITextBoxStyle {
        lineWidth?: number
        stroke?: string | number[]
        dash?: number[]
        fill?: string | number[]
        opacity?: number
    }

    interface ITextBox {
        width?: number
        height?: number
        minHeight?: number
        padding?: number | number[]
        lineHeight?: number
        textAlign?: string
        style?: ITextBoxStyle
    }

    interface ITextOptions {
        color?: string | number[]
        opacity?: number
        rotation?: number
        rotationOrigin?: number[]
        font?: string
        size?: number
        align?: string
        highlight?: Object | Boolean
        underline?: Object | Boolean
        strikeOut?: Object | Boolean
        textBox?: ITextBox
    }

    interface ILineToOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
    }

    interface ILineOptions {
        color?: string | number[]
        stroke?: string | number[]
        lineWidth?: number
        dash?: number[]
    }

    interface IPolygonOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
    }

    interface ICircleOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
    }

    interface IRactangleOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
        rotation?: number
        rotationOrigin?: number[]
    }
}

declare class HummusRecipe {
    constructor(src: string, output: string, options?: HummusRecipe.IRecipeOptions)

    comment(
        text: string,
        x: number,
        y: number,
        options?: HummusRecipe.ICommentOptions,
    ): HummusRecipe

    annot(
        x: number,
        y: number,
        subtype:
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
            | 'Sound',
        options?: HummusRecipe.IAnotOptions,
    ): HummusRecipe

    appendPage(pdfSrc: string, pages: number | number[]): HummusRecipe

    encrypt(options: HummusRecipe.IEncryptOptions): HummusRecipe

    registerFont(fontName: string, fontSrcPath: string): HummusRecipe

    image(imgSrc: string, x: number, y: number, options?: HummusRecipe.IImageOptions): HummusRecipe

    info(options?: HummusRecipe.IInfoOptions): HummusRecipe

    custom(key?: string, value?: string): HummusRecipe

    insertPage(afterPageNumber: number, pdfSrc: string, srcPageNumber: number): HummusRecipe

    overlay(
        pdfSrc: string,
        x: number,
        y: number,
        options?: HummusRecipe.IOverlayOptions,
    ): HummusRecipe

    createPage(pageWidth: number, pageHeight: number): HummusRecipe

    endPage(): HummusRecipe

    editPage(pageNumber: number): HummusRecipe

    pageInfo(pageNumber: number): HummusRecipe

    split(outputDir: string, prefix: string): HummusRecipe

    text(text: string, x: number, y: number, options?: HummusRecipe.ITextOptions): HummusRecipe

    moveTo(x: number, y: number): HummusRecipe

    lineTo(x: number, y: number, options?: HummusRecipe.ILineToOptions): HummusRecipe

    line(coordinates: number[], options?: HummusRecipe.ILineOptions): HummusRecipe

    polygon(coordinates: number[][], options?: HummusRecipe.IPolygonOptions): HummusRecipe

    circle(
        x: number,
        y: number,
        radius: number,
        options?: HummusRecipe.ICircleOptions,
    ): HummusRecipe

    rectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        options?: HummusRecipe.IRactangleOptions,
    ): HummusRecipe

    endPDF(callback?: Function): HummusRecipe
}

declare module 'hummus-recipe' {
    export = HummusRecipe
}
