// Type definitions for hummus-recipe 1.8
// Project: https://github.com/chunyenHuang/hummusRecipe
// Definitions by: Erik Berreßem <https://github.com/erikberressem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @name HummusRecipe
 * @namespace
 */
declare namespace HummusRecipe {
    export interface IRecipeOptions {
        version?: number
        author?: string
        title?: string
        subject?: string
        keywords?: string[]
    }

    export interface ICommentOptions {
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

    export interface IAnotOptions {
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

    export interface IEncryptOptions {
        password?: string
        ownerPassword?: string
        userProtectionFlag?: number
    }

    export interface IImageOptions {
        width?: number
        height?: number
        scale?: number
        keepAspectRatio?: boolean
        opacity?: number
        align?: string
    }

    export interface IInfoOptions {
        version?: string
        author?: string
        title?: string
        subject?: string
        keywords?: string[]
    }

    export interface IOverlayOptions {
        scale?: number
        keepAspectRatio?: boolean
        fitWidth?: boolean
        fitHeight?: boolean
    }

    export interface ITextBoxStyle {
        lineWidth?: number
        stroke?: string | number[]
        dash?: number[]
        fill?: string | number[]
        opacity?: number
    }

    export interface ITextBox {
        width?: number
        height?: number
        minHeight?: number
        padding?: number | number[]
        lineHeight?: number
        textAlign?: string
        style?: ITextBoxStyle
    }

    export interface ITextOptions {
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

    export interface ILineToOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
    }

    export interface ILineOptions {
        color?: string | number[]
        stroke?: string | number[]
        lineWidth?: number
        dash?: number[]
    }

    export interface IPolygonOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
    }

    export interface ICircleOptions {
        color?: string | number[]
        stroke?: string | number[]
        fill?: string | number[]
        lineWidth?: number
        opacity?: number
        dash?: number[]
    }

    export interface IRactangleOptions {
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

/**
 * @name HummusRecipe
 * @class
 */
declare class HummusRecipe {
    /**
     * @name HummusRecipe
     * @desc Create a pdfDoc
     * @constructor
     * @memberof HummusRecipe
     * @param {string} src - The file path or Buffer of the src file.
     * @param {string} output - The path of the output file.
     * @param {Object} [options] - The options for pdfDoc
     * @param {number} [options.version] - The pdf version
     * @param {string} [options.author] - The author
     * @param {string} [options.title] - The title
     * @param {string} [options.subject] - The subject
     * @param {string[]} [options.keywords] - The array of keywords
     */
    constructor(src: string, output: string, options?: HummusRecipe.IRecipeOptions)

    /**
     * Create a comment annotation
     * @name comment
     * @function
     * @memberof HummusRecipe
     * @param {string} text - The text content
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {Object} [options] - The options
     * @param {string} [options.title] - The title.
     * @param {string} [options.date] - The date.
     * @param {boolean} [options.open=false] - Open the annotation by default?
     * @param {boolean} [options.richText] - Display with rich text format, text will be transformed automatically, or you may pass in your own rich text starts with "<?xml..."
     * @param {'invisible'|'hidden'|'print'|'nozoom'|'norotate'|'noview'|'readonly'|'locked'|'togglenoview'} [options.flag] - The flag property
     */
    comment(
        text: string,
        x: number,
        y: number,
        options?: HummusRecipe.ICommentOptions,
    ): HummusRecipe

    /**
     * Create an annotation
     * @name annot
     * @function
     * @memberof HummusRecipe
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {string} subtype - The markup annotation type 'Text'|'FreeText'|'Line'|'Square'|'Circle'|'Polygon'|'PolyLine'|'Highlight'|'Underline'|'Squiggly'|'StrikeOut'|'Stamp'|'Caret'|'Ink'|'FileAttachment'|'Sound'
     * @param {Object} [options] - The options
     * @param {string} [options.title] - The title.
     * @param {boolean} [options.open=false] - Open the annotation by default?
     * @param {'invisible'|'hidden'|'print'|'nozoom'|'norotate'|'noview'|'readonly'|'locked'|'togglenoview'} [options.flag] - The flag property
     * @param {'Comment'|'Key'|'Note'|'Help'|'NewParagraph'|'Paragraph'|'Insert'} [options.icon] - The icon of annotation.
     * @param {number} [options.width] - Width
     * @param {number} [options.height] - Height
     */
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

    /**
     * Append pages from the other pdf to the current pdf
     * @name appendPage
     * @function
     * @memberof HummusRecipe
     * @param {string} pdfSrc - The path for the other pdf.
     * @param {number|number[]} pages - The page number or the array of page numbers to be appended.
     */
    appendPage(pdfSrc: string, pages: number | number[]): HummusRecipe

    /**
     * Encrypt the pdf
     * @name encrypt
     * @function
     * @memberof HummusRecipe
     * @param {Object} options - The options
     * @param {string} [options.password] - The password for viewing.
     * @param {string} [options.ownerPassword] - The password for editing.
     * @param {number} [options.userProtectionFlag] - The flag for the security level.
     */
    encrypt(options: HummusRecipe.IEncryptOptions): HummusRecipe

    /**
     * Register a custom font
     * @name registerFont
     * @function
     * @memberof HummusRecipe
     * @param {string} fontName - The font name will be used in text
     * @param {string} fontSrcPath - The path to the font file.
     */
    registerFont(fontName: string, fontSrcPath: string): HummusRecipe

    /**
     * Place images to pdf
     * @name image
     * @function
     * @memberof HummusRecipe
     * @param {string} imgSrc - The path for the image. [JPEG, PNG, TIFF]
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {Object} [options] - The options
     * @param {number} [options.width] - The new width
     * @param {number} [options.height] - The new height
     * @param {number} [options.scale] - Scale the image from the original width and height.
     * @param {boolean} [options.keepAspectRatio=true] - Keep the aspect ratio.
     * @param {number} [options.opacity] - The opacity.
     * @param {string} [options.align] - 'center center'...
     */
    image(imgSrc: string, x: number, y: number, options?: HummusRecipe.IImageOptions): HummusRecipe

    /**
     * @name info
     * @desc Add information to pdf
     * @memberof HummusRecipe
     * @function
     * @param {Object} [options] - The options
     * @param {number} [options.version] - The pdf version
     * @param {string} [options.author] - The author
     * @param {string} [options.title] - The title
     * @param {string} [options.subject] - The subject
     * @param {string[]} [options.keywords] - The array of keywords
     */
    info(options?: HummusRecipe.IInfoOptions): HummusRecipe

    /**
     * @name custom
     * @desc Add custom information to pdf
     * @memberof HummusRecipe
     * @function
     * @param {string} [key] - The key
     * @param {string} [value] - The value
     */
    custom(key?: string, value?: string): HummusRecipe

    /**
     * Insert a page from the other pdf
     * @name insertPage
     * @function
     * @memberof HummusRecipe
     * @param {number} afterPageNumber - The page number for insertion.
     * @param {string} pdfSrc - The path for the other pdf
     * @param {number} srcPageNumber - The page number to be insterted from the other pdf.
     */
    insertPage(afterPageNumber: number, pdfSrc: string, srcPageNumber: number): HummusRecipe

    /**
     * Overlay a pdf to the current pdf
     * @name overlay
     * @function
     * @memberof HummusRecipe
     * @param {string} pdfSrc - The path for the overlay pdf
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {number} [options.scale] - Scale the overlay pdf, default is 1
     * @param {boolean} [options.keepAspectRatio] - To keep the aspect ratio when scaling, default is true
     * @param {boolean} [options.fitWidth] - To set the width to 100% (use with keepAspectRatio=true)
     * @param {boolean} [options.fitHeight] - To set the height to 100% (use with keepAspectRatio=true)
     */
    overlay(
        pdfSrc: string,
        x: number,
        y: number,
        options?: HummusRecipe.IOverlayOptions,
    ): HummusRecipe

    /**
     * Create a new page
     * @name createPage
     * @function
     * @memberof HummusRecipe
     * @param {number} pageWidth - The page width.
     * @param {number} pageHeight - The page height.
     */
    createPage(pageWidth: number, pageHeight: number): HummusRecipe

    /**
     * Finish a page
     * @name endPage
     * @function
     * @memberof HummusRecipe
     */
    endPage(): HummusRecipe

    /**
     * Start editing a page
     * @name editPage
     * @function
     * @memberof HummusRecipe
     * @param {number} pageNumber - The page number to be edited.
     */
    editPage(pageNumber: number): HummusRecipe

    /**
     * Get page information
     * @name pageInfo
     * @function
     * @memberof HummusRecipe
     * @param {number} pageNumber - The page number.
     */
    pageInfo(pageNumber: number): HummusRecipe

    /**
     * Split the pdf
     * @name split
     * @function
     * @memberof HummusRecipe
     * @param {string} outputDir - The path for the output pdfs.
     * @param {string} prefix - `${prefix}-${i+1}.pdf`.
     */
    split(outputDir: string, prefix: string): HummusRecipe

    /**
     * Write texts
     * @name text
     * @function
     * @memberof HummusRecipe
     * @param {string} text - The text content
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {Object} [options] - The options
     * @param {string|number[]} [options.color] - HexColor (#000000 to #ffffff) or RGB (0 to 255)
     * @param {number} [options.opacity] - opacity
     * @param {number} [options.rotation] - Accept: +/- 0 through 360. Default: 0
     * @param {number[]} [options.rotationOrigin] - [originX, originY] Default: the text coordinate
     * @param {string} [options.font] - The font. 'Arial', 'Helvetica'...
     * @param {number} [options.size] - The line width
     * @param {string} [options.align] - The alignment. 'center center'...
     * @param {Object|Boolean} [options.highlight] - Text markup annotation.
     * @param {Object|Boolean} [options.underline] - Text markup annotation.
     * @param {Object|Boolean} [options.strikeOut] - Text markup annotation.
     * @param {Object} [options.textBox] - Text Box to fit in.
     * @param {number} [options.textBox.width] - Text Box width
     * @param {number} [options.textBox.height] - Text Box fixed height
     * @param {number} [options.textBox.minHeight] - Text Box minimum height
     * @param {number|number[]} [options.textBox.padding] - Text Box padding, [top, right, bottom, left]
     * @param {number} [options.textBox.lineHeight] - Text Box line height
     * @param {string} [options.textBox.textAlign] - Text alignment inside text box
     * @param {Object} [options.textBox.style] - Text Box styles
     * @param {number} [options.textBox.style.lineWidth] - Text Box border width
     * @param {string|number[]} [options.textBox.style.stroke] - Text Box border color
     * @param {number[]} [options.textBox.style.dash] - Text Box border border dash style [number, number]
     * @param {string|number[]} [options.textBox.style.fill] - Text Box border background color
     * @param {number} [options.textBox.style.opacity] - Text Box border background opacity
     */
    text(text: string, x: number, y: number, options?: HummusRecipe.ITextOptions): HummusRecipe

    /**
     * move the current position to target position
     * @name moveTo
     * @function
     * @memberof HummusRecipe
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     */
    moveTo(x: number, y: number): HummusRecipe

    /**
     * Draw a line from current position
     * @name lineTo
     * @function
     * @memberof HummusRecipe
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {Object} [options] - The options
     * @param {string|number[]} [options.color] - HexColor or RGB
     * @param {string|number[]} [options.stroke] - HexColor or RGB
     * @param {string|number[]} [options.fill] - HexColor or RGB
     * @param {number} [options.lineWidth] - The line width
     * @param {number} [options.opacity] - The opacity
     * @param {number[]} [options.dash] - The dash style [number, number]
     */
    lineTo(x: number, y: number, options?: HummusRecipe.ILineToOptions): HummusRecipe

    /**
     * Draw a line
     * @name line
     * @function
     * @memberof HummusRecipe
     * @param {number[]} coordinates - The array of coordinate [[x,y], [m,n]]
     * @param {Object} [options] - The options
     * @param {string|number[]} [options.color] - HexColor or RGB
     * @param {string|number[]} [options.stroke] - HexColor or RGB
     * @param {number} [options.lineWidth] - The line width
     * @param {number[]} [options.dash] - The dash style [number, number]
     */
    line(coordinates: number[], options?: HummusRecipe.ILineOptions): HummusRecipe

    /**
     * Draw a polygon
     * @name polygon
     * @function
     * @memberof HummusRecipe
     * @param {number[]} coordinates - The array of coordinate [[x,y], [m,n]]
     * @param {Object} [options] - The options
     * @param {string|number[]} [options.color] - HexColor or RGB
     * @param {string|number[]} [options.stroke] - HexColor or RGB
     * @param {string|number[]} [options.fill] - HexColor or RGB
     * @param {number} [options.lineWidth] - The line width
     * @param {number} [options.opacity] - The opacity
     * @param {number[]} [options.dash] - The dash style [number, number]
     */
    polygon(coordinates: number[][], options?: HummusRecipe.IPolygonOptions): HummusRecipe

    /**
     * Draw a circle
     * @name circle
     * @function
     * @memberof HummusRecipe
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {number} radius - The radius
     * @param {Object} [options] - The options
     * @param {string|number[]} [options.color] - HexColor or RGB
     * @param {string|number[]} [options.stroke] - HexColor or RGB
     * @param {string|number[]}[ options.fill] - HexColor or RGB
     * @param {number} [options.lineWidth] - The line width
     * @param {number} [options.opacity] - The opacity
     * @param {number[]} [options.dash] - The dash style [number, number]
     */
    circle(
        x: number,
        y: number,
        radius: number,
        options?: HummusRecipe.ICircleOptions,
    ): HummusRecipe

    /**
     * Draw a rectangle
     * @name rectangle
     * @function
     * @memberof HummusRecipe
     * @param {number} x - The coordinate x
     * @param {number} y - The coordinate y
     * @param {number} width - The width
     * @param {number} height - The height
     * @param {Object} [options] - The options
     * @param {string|number[]} [options.color] - HexColor or RGB
     * @param {string|number[]} [options.stroke] - HexColor or RGB
     * @param {string|number[]} [options.fill] - HexColor or RGB
     * @param {number} [options.lineWidth] - The line width
     * @param {number} [options.opacity] - The opacity
     * @param {number[]} [options.dash] - The dash style [number, number]
     * @param {number} [options.rotation] - Accept: +/- 0 through 360. Default: 0
     * @param {number[]} [options.rotationOrigin] - [originX, originY] Default: x, y
     */
    rectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        options?: HummusRecipe.IRactangleOptions,
    ): HummusRecipe

    /**
     * End the pdfDoc
     * @name endPDF
     * @function
     * @memberof HummusRecipe
     * @param {Function} callback - The callback function
     */
    endPDF(callback?: Function): HummusRecipe
}

declare module 'hummus-recipe' {
    export = HummusRecipe
}
