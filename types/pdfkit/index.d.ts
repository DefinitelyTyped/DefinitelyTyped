// Type definitions for Pdfkit v0.7.2
// Project: http://pdfkit.org
// Definitions by: Eric Hillah <https://github.com/erichillah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace PDFKit {
    interface PDFGradient {
        new(document: any): PDFGradient ;
        stop(pos: number, color?: string|PDFKit.PDFGradient, opacity?: number): PDFGradient;
        embed(): void;
        apply(): void;
    }

    interface PDFLinearGradient extends PDFGradient {
        new(document: any, x1: number, y1: number, x2: number, y2: number): PDFLinearGradient;
        shader(fn: () => any): any;
        opacityGradient(): PDFLinearGradient;
    }

    interface PDFRadialGradient extends PDFGradient {
        new(document: any, x1: number, y1: number, x2: number, y2: number): PDFRadialGradient;
        shader(fn: () => any): any;
        opacityGradient(): PDFRadialGradient;
    }
}

declare namespace PDFKit.Mixins {

    interface AnnotationOption {
        Type?: string;
        Rect?: any;
        Border?: Array<number>;
        SubType?: string;
        Contents?: string;
        Name?: string;
        color?: string;
        QuadPoints?: Array<number>;

        A?: any;
        B?: any;
        C?: any;
        L?: any;
        DA?: string;
    }

    interface PDFAnnotation<TDocument> {
        annotate(x: number, y: number, w: number, h: number, option: AnnotationOption): TDocument;
        note(x: number, y: number, w: number, h: number, content: string, option?: AnnotationOption): TDocument;
        link(x: number, y: number, w: number, h: number, url: string, option?: AnnotationOption): TDocument;
        highlight(x: number, y: number, w: number, h: number, option?: AnnotationOption): TDocument;
        underline(x: number, y: number, w: number, h: number, option?: AnnotationOption): TDocument;
        strike(x: number, y: number, w: number, h: number, option?: AnnotationOption): TDocument;
        lineAnnotation(x1: number, y1: number, x2: number, y2: number, option?: AnnotationOption): TDocument;
        rectAnnotation(x: number, y: number, w: number, h: number, option?: AnnotationOption): TDocument;
        ellipseAnnotation(x: number, y: number, w: number, h: number, option?: AnnotationOption): TDocument;
        textAnnotation(x: number, y: number, w: number, h: number, text: string, option?: AnnotationOption): TDocument;
    }

    // The color forms accepted by PDFKit:
    //     example:   "red"                  [R, G, B]                  [C, M, Y, K]
    type ColorValue = string | PDFGradient | [number, number, number] | [number, number, number, number];

    // The winding / filling rule accepted by PDFKit:
    type RuleValue = "even-odd" | "evenodd" | "non-zero" | "nonzero";

    interface PDFColor<TDocument> {
        fillColor(color: ColorValue, opacity?: number): TDocument;
        strokeColor(color: ColorValue, opacity?: number): TDocument;
        opacity(opacity: number): TDocument;
        fillOpacity(opacity: number): TDocument;
        strokeOpacity(opacity: number): TDocument;
        linearGradient(x1: number, y1: number, x2: number, y2: number): PDFLinearGradient;
        radialGradient(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): PDFRadialGradient;
    }

    interface PDFFont<TDocument> {
        font(buffer: Buffer): TDocument;
        font(src: string, family?: string, size?: number): TDocument;
        fontSize(size: number): TDocument;
        currentLineHeight(includeGap?: boolean): number;
        registerFont(name: string, src?: string, family?: string): TDocument;
    }

    interface ImageOption {
        width?: number;
        height?: number;
        /** Scale percentage */
        scale?: number;
        /** Two elements array specifying dimensions(w,h)  */
        fit?: number[];
    }

    interface PDFImage<TDocument> {
        /**
         * Draw an image in PDFKit document.
         */
        image(src: any, x?: number, y?: number, options?: ImageOption): TDocument;
        image(src: any, options?: ImageOption): TDocument;
    }

    interface TextOptions {
        /**  Set to false to disable line wrapping all together */
        lineBreak?: boolean;
        /** The width that text should be wrapped to (by default, the page width minus the left and right margin) */
        width?: number;
        /**  The maximum height that text should be clipped to */
        height?: number;
        /** The character to display at the end of the text when it is too long. Set to true to use the default character. */
        ellipsis?: boolean|string;
        /**  the number of columns to flow the text into */
        columns?: number;
        /** the amount of space between each column (1/4 inch by default) */
        columnGap?: number;
        /** The amount in PDF points (72 per inch) to indent each paragraph of text */
        indent?: number;
        /** the amount of space between each paragraph of text */
        paragraphGap?: number;
        /** the amount of space between each line of text */
        lineGap?: number;
        /** the amount of space between each word in the text */
        wordSpacing?: number;
        /** the amount of space between each character in the text */
        characterSpacing?: number;
        /** whether to fill the text (true by default) */
        fill?: boolean;
        /**  whether to stroke the text */
        stroke?: boolean;
        /** A URL to link this text to (shortcut to create an annotation) */
        link?: string;
        /** whether to underline the text */
        underline?: boolean;
        /** whether to strike out the text */
        strike?: boolean;
        /**whether the text segment will be followed immediately by another segment. Useful for changing styling in the middle of a paragraph. */
        continued?: boolean;

        /** the alignment of the text (center, justify, left, right) */
        align?: string;
    }

    interface PDFText<TDocument> {
        lineGap(lineGap: number): TDocument;
        moveDown(line?: number): TDocument;
        moveUp(line?: number): TDocument;
        text(text: string, x?: number, y?: number, options?: TextOptions): TDocument;
        text(text: string, options?: TextOptions): TDocument;
        widthOfString(text: string, options?: TextOptions): number;
        heightOfString(text: string, options?: TextOptions): number;
        list(list: Array<string|any>, x?: number, y?: number, options?: TextOptions): TDocument;
        list(list: Array<string|any>, options?: TextOptions): TDocument;
    }

    interface PDFVector<TDocument> {

        save(): TDocument;
        restore(): TDocument;
        closePath(): TDocument;
        lineWidth(w: number): TDocument;
        lineCap(c: string): TDocument;
        lineJoin(j: string): TDocument;
        miterLimit(m: any): TDocument;
        dash(length: number, option: any): TDocument;
        undash(): TDocument;
        moveTo(x: number, y: number): TDocument;
        lineTo(x: number, y: number): TDocument;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): TDocument;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): TDocument;
        rect(x: number, y: number, w: number, h: number): TDocument;
        roundedRect(x: number, y: number, w: number, h: number, r?: number): TDocument;
        ellipse(x: number, y: number, r1: number, r2?: number): TDocument;
        circle(x: number, y: number, raduis: number): TDocument;
        polygon(...points: number[][]): TDocument;
        path(path: string): TDocument;
        fill(color?: ColorValue, rule?: RuleValue): TDocument;
        fill(rule: RuleValue): TDocument;
        stroke(color?: ColorValue): TDocument;
        fillAndStroke(fillColor?: ColorValue, strokeColor?: ColorValue, rule?: RuleValue): TDocument;
        fillAndStroke(fillColor: ColorValue, rule?: RuleValue): TDocument;
        fillAndStroke(rule: RuleValue): TDocument;
        clip(rule?: RuleValue): TDocument;
        transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): TDocument;
        translate(x: number, y: number): TDocument;
        rotate(angle: number, options?: { origin?: number[] }): TDocument;
        scale(xFactor: number, yFactor?: number, options?: { origin?: number[] }): TDocument;
    }
}

declare namespace PDFKit {
    /**
    * PDFKit data
    */
    interface PDFData {
        new (data: any[]): PDFData;
        readByte(): any;
        writeByte(byte: any): void;
        byteAt(index: number): any;
        readBool(): boolean;
        writeBool(val: boolean): boolean;
        readUInt32(): number;
        writeUInt32(val: number): void;
        readInt32(): number;
        writeInt32(val: number): void;
        readUInt16(): number;
        writeUInt16(val: number): void;
        readInt16(): number;
        writeInt16(val: number): void;
        readString(length: number): string;
        writeString(val: string): void;
        stringAt(pos: number, length: number): string;
        readShort(): number;
        writeShort(val: number): void;
        readLongLong(): number;
        writeLongLong(val: number): void;
        readInt(): number;
        writeInt(val: number): void;
        slice(start: number, end: number): any[];
        read(length: number): any[];
        write(bytes: any[]): void;
    }
}

declare module "pdfkit/js/data" {
    var PDFKitData: PDFKit.PDFData;
    export = PDFKitData;
}

declare namespace PDFKit {
    interface DocumentInfo {
        Producer?: string;
        Creator?: string;
        CreationDate?: Date;
        Title?: string;
        Author?: string;
        Keywords?: string;
        ModDate?: Date;
    }

    interface PDFDocumentOptions {
        compress?: boolean;
        info?: DocumentInfo;
        autoFirstPage?: boolean;
        size?: number[]|string;
        margin?: number;
        margins?: { top: number; left: number; bottom: number; right: number };
        layout?: "portrait" | "landscape";

        bufferPages?: boolean;
    }

    interface PDFDocument extends NodeJS.ReadableStream,
        Mixins.PDFAnnotation<PDFDocument>, Mixins.PDFColor<PDFDocument>, Mixins.PDFImage<PDFDocument>,
        Mixins.PDFText<PDFDocument>, Mixins.PDFVector<PDFDocument>, Mixins.PDFFont<PDFDocument> {
        /**
        * PDF Version
        */
        version: number;
        /**
        * Wheter streams should be compressed
        */
        compress: boolean;
        /**
        * PDF document Metadata
        */
        info: DocumentInfo;
        /**
        * Options for the document
        */
        options: PDFDocumentOptions;
        /**
        * Represent the current page.
        */
        page: PDFPage;

        x: number;
        y: number;

        new (options?: PDFDocumentOptions): PDFDocument;

        addPage(options?: PDFDocumentOptions): PDFDocument;
        bufferedPageRange(): { start: number; count: number };
        switchToPage(n?: number): PDFPage;
        flushPages(): void;
        ref(data: {}): PDFKitReference;
        addContent(data: any): PDFDocument
        /**
        * Deprecated
        */
        write(fileName: string, fn: any): void;
        /**
        * Deprecated. Throws exception
        */
        output(fn: any): void;
        end(): void;
        toString(): string;
    }
}

declare module "pdfkit" {
    var doc: PDFKit.PDFDocument;
    export = doc;
}

declare module "pdfkit/js/gradient" {
    var gradient : {
        PDFGradient: PDFKit.PDFGradient;
        PDFLinearGradient: PDFKit.PDFLinearGradient;
        PDFRadialGradiant: PDFKit.PDFRadialGradient;
    }

    export = gradient;
}

declare namespace PDFKit {
    /**
   * Represent a single page in the PDF document
   */
    interface PDFPage {
        size: string;
        layout: string;
        margins: { top: number; left: number; bottom: number; right: number };
        width: number;
        height: number;
        document: PDFDocument;
        content: PDFKitReference;

    /**
     * The page dictionnary
     */
        dictionary: PDFKitReference;

        fonts: any;
        xobjects: any;
        ext_gstates: any;
        patterns: any;
        annotations: any;

        maxY(): number;
        write(chunk: any): void;
        end(): void;
    }
}

declare module "pdfkit/js/page" {
  var PDFKitPage: PDFKit.PDFPage

    export = PDFKitPage
}

declare namespace PDFKit {
    /** PDFReference - represents a reference to another object in the PDF object heirarchy */
    class PDFKitReference {
        id: number;
        gen: number;
        deflate:any;
        compress: boolean;
        uncompressedLength: number;
        chunks: any[];
        data: { Font?: any; XObject?: any; ExtGState?: any; Pattern: any; Annots: any };
        document: PDFDocument;

        constructor(document: PDFDocument, id: number, data: {});
        initDeflate(): void;
        write(chunk: any): void;
        end(chunk: any): void;
        finalize(): void;
        toString(): string;
    }
}

declare module "pdfkit/js/reference" {
    var PDFKitReference: PDFKit.PDFKitReference;

    export = PDFKitReference;
}

declare module "pdfkit/js/mixins/annotations" {
    var PDFKitAnnotation: PDFKit.Mixins.PDFAnnotation<void>;
    export = PDFKitAnnotation;
}

declare module "pdfkit/js/mixins/color" {
    var PDFKitColor: PDFKit.Mixins.PDFColor<void>;
    export = PDFKitColor;
}

declare module "pdfkit/js/mixins/fonts" {
    var PDFKitFont: PDFKit.Mixins.PDFFont<void>;
    export = PDFKitFont;
}

declare module "pdfkit/js/mixins/images" {
    var PDFKitImage: PDFKit.Mixins.PDFImage<void>;
    export = PDFKitImage;
}

declare module "pdfkit/js/mixins/text" {
    var PDFKitText: PDFKit.Mixins.PDFText<void>;
    export = PDFKitText;
}

declare module "pdfkit/js/mixins/vector" {
    var PDFKitVector: PDFKit.Mixins.PDFVector<void>;
    export = PDFKitVector;
}
