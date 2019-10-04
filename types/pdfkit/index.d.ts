// Type definitions for Pdfkit v0.10.0
// Project: http://pdfkit.org
// Definitions by: Eric Hillah <https://github.com/erichillah>
//                 Erik Berreßem <https://github.com/she11sh0cked>
//                 Jeroen Vervaeke <https://github.com/jeroenvervaeke/>
//                 Thales Agapito <https://github.com/thalesagapito/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace PDFKit {
    interface PDFGradient {
        new (document: any): PDFGradient;
        stop(pos: number, color?: string | PDFKit.PDFGradient, opacity?: number): PDFGradient;
        embed(): void;
        apply(): void;
    }

    interface PDFLinearGradient extends PDFGradient {
        new (document: any, x1: number, y1: number, x2: number, y2: number): PDFLinearGradient;
        shader(fn: () => any): any;
        opacityGradient(): PDFLinearGradient;
    }

    interface PDFRadialGradient extends PDFGradient {
        new (document: any, x1: number, y1: number, x2: number, y2: number): PDFRadialGradient;
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

    interface PDFAnnotation {
        annotate(x: number, y: number, w: number, h: number, option: AnnotationOption): this;
        note(x: number, y: number, w: number, h: number, content: string, option?: AnnotationOption): this;
        goTo(x: number, y: number, w: number, h: number, name: string, options?: AnnotationOption): this;
        link(x: number, y: number, w: number, h: number, url: string, option?: AnnotationOption): this;
        highlight(x: number, y: number, w: number, h: number, option?: AnnotationOption): this;
        underline(x: number, y: number, w: number, h: number, option?: AnnotationOption): this;
        strike(x: number, y: number, w: number, h: number, option?: AnnotationOption): this;
        lineAnnotation(x1: number, y1: number, x2: number, y2: number, option?: AnnotationOption): this;
        rectAnnotation(x: number, y: number, w: number, h: number, option?: AnnotationOption): this;
        ellipseAnnotation(x: number, y: number, w: number, h: number, option?: AnnotationOption): this;
        textAnnotation(x: number, y: number, w: number, h: number, text: string, option?: AnnotationOption): this;
    }

    // The color forms accepted by PDFKit:
    //     example:   "red"                  [R, G, B]                  [C, M, Y, K]
    type ColorValue = string | PDFGradient | [number, number, number] | [number, number, number, number];

    // The winding / filling rule accepted by PDFKit:
    type RuleValue = 'even-odd' | 'evenodd' | 'non-zero' | 'nonzero';

    interface PDFColor {
        fillColor(color: ColorValue, opacity?: number): this;
        strokeColor(color: ColorValue, opacity?: number): this;
        opacity(opacity: number): this;
        fillOpacity(opacity: number): this;
        strokeOpacity(opacity: number): this;
        linearGradient(x1: number, y1: number, x2: number, y2: number): PDFLinearGradient;
        radialGradient(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): PDFRadialGradient;
    }

    interface PDFFont {
        font(buffer: Buffer): this;
        font(src: string, family?: string, size?: number): this;
        fontSize(size: number): this;
        currentLineHeight(includeGap?: boolean): number;
        registerFont(name: string, src?: string, family?: string): this;
    }

    interface ImageOption {
        width?: number;
        height?: number;
        /** Scale percentage */
        scale?: number;
        /** Two elements array specifying dimensions(w,h)  */
        fit?: [number, number];
        cover?: [number, number];
        align?: 'center' | 'right';
        valign?: 'center' | 'bottom';
        link?: AnnotationOption;
        goTo?: AnnotationOption;
        destination?: string;
    }

    interface PDFImage {
        /**
         * Draw an image in PDFKit document.
         */
        image(src: any, x?: number, y?: number, options?: ImageOption): this;
        image(src: any, options?: ImageOption): this;
    }

    interface TextOptions {
        /**  Set to false to disable line wrapping all together */
        lineBreak?: boolean;
        /** The width that text should be wrapped to (by default, the page width minus the left and right margin) */
        width?: number;
        /**  The maximum height that text should be clipped to */
        height?: number;
        /** The character to display at the end of the text when it is too long. Set to true to use the default character. */
        ellipsis?: boolean | string;
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
        /** whether the text segment will be followed immediately by another segment. Useful for changing styling in the middle of a paragraph. */
        continued?: boolean;
        /** whether to slant the text (angle in degrees or true) */
        oblique?: boolean | number;
        /** the alignment of the text (center, justify, left, right) */
        //TODO check this
        align?: 'center' | 'justify' | 'left' | 'right' | string;
        /** the vertical alignment of the text with respect to its insertion point */
        baseline?: number | 'svg-middle' | 'middle' | 'svg-central' | 'bottom' | 'ideographic' | 'alphabetic' | 'mathematical' | 'hanging' | 'top';
    }

    interface PDFText {
        lineGap(lineGap: number): this;
        moveDown(line?: number): this;
        moveUp(line?: number): this;
        text(text: string, x?: number, y?: number, options?: TextOptions): this;
        text(text: string, options?: TextOptions): this;
        widthOfString(text: string, options?: TextOptions): number;
        heightOfString(text: string, options?: TextOptions): number;
        list(list: Array<string | any>, x?: number, y?: number, options?: TextOptions): this;
        list(list: Array<string | any>, options?: TextOptions): this;
    }

    interface PDFVector {
        save(): this;
        restore(): this;
        closePath(): this;
        lineWidth(w: number): this;
        lineCap(c: string): this;
        lineJoin(j: string): this;
        miterLimit(m: any): this;
        dash(length: number, option: any): this;
        undash(): this;
        moveTo(x: number, y: number): this;
        lineTo(x: number, y: number): this;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this;
        rect(x: number, y: number, w: number, h: number): this;
        roundedRect(x: number, y: number, w: number, h: number, r?: number): this;
        ellipse(x: number, y: number, r1: number, r2?: number): this;
        circle(x: number, y: number, raduis: number): this;
        polygon(...points: number[][]): this;
        path(path: string): this;
        fill(color?: ColorValue, rule?: RuleValue): this;
        fill(rule: RuleValue): this;
        stroke(color?: ColorValue): this;
        fillAndStroke(fillColor?: ColorValue, strokeColor?: ColorValue, rule?: RuleValue): this;
        fillAndStroke(fillColor: ColorValue, rule?: RuleValue): this;
        fillAndStroke(rule: RuleValue): this;
        clip(rule?: RuleValue): this;
        transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): this;
        translate(x: number, y: number): this;
        rotate(angle: number, options?: { origin?: number[] }): this;
        scale(xFactor: number, yFactor?: number, options?: { origin?: number[] }): this;
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

declare module 'pdfkit/js/data' {
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
        size?: number[] | string;
        margin?: number;
        margins?: { top: number; left: number; bottom: number; right: number };
        layout?: 'portrait' | 'landscape';

        bufferPages?: boolean;
    }

    interface PDFDocument
        extends NodeJS.ReadableStream,
            Mixins.PDFAnnotation,
            Mixins.PDFColor,
            Mixins.PDFImage,
            Mixins.PDFText,
            Mixins.PDFVector,
            Mixins.PDFFont {
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
        addContent(data: any): PDFDocument;
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

declare module 'pdfkit' {
    var doc: PDFKit.PDFDocument;
    export = doc;
}

declare module 'pdfkit/js/gradient' {
    var gradient: {
        PDFGradient: PDFKit.PDFGradient;
        PDFLinearGradient: PDFKit.PDFLinearGradient;
        PDFRadialGradiant: PDFKit.PDFRadialGradient;
    };

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

declare module 'pdfkit/js/page' {
    var PDFKitPage: PDFKit.PDFPage;

    export = PDFKitPage;
}

declare namespace PDFKit {
    /** PDFReference - represents a reference to another object in the PDF object heirarchy */
    class PDFKitReference {
        id: number;
        gen: number;
        deflate: any;
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

declare module 'pdfkit/js/reference' {
    var PDFKitReference: PDFKit.PDFKitReference;

    export = PDFKitReference;
}

declare module 'pdfkit/js/mixins/annotations' {
    var PDFKitAnnotation: PDFKit.Mixins.PDFAnnotation;
    export = PDFKitAnnotation;
}

declare module 'pdfkit/js/mixins/color' {
    var PDFKitColor: PDFKit.Mixins.PDFColor;
    export = PDFKitColor;
}

declare module 'pdfkit/js/mixins/fonts' {
    var PDFKitFont: PDFKit.Mixins.PDFFont;
    export = PDFKitFont;
}

declare module 'pdfkit/js/mixins/images' {
    var PDFKitImage: PDFKit.Mixins.PDFImage;
    export = PDFKitImage;
}

declare module 'pdfkit/js/mixins/text' {
    var PDFKitText: PDFKit.Mixins.PDFText;
    export = PDFKitText;
}

declare module 'pdfkit/js/mixins/vector' {
    var PDFKitVector: PDFKit.Mixins.PDFVector;
    export = PDFKitVector;
}
