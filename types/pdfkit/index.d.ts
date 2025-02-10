/// <reference types="node" />

declare namespace PDFKit {
    interface PDFGradient {
        new(document: any): PDFGradient;
        stop(pos: number, color?: string | PDFKit.PDFGradient, opacity?: number): PDFGradient;
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

    interface PDFTilingPattern {
        new(
            document: any,
            bbox: PDFKit.Mixins.BoundingBox,
            xStep: number,
            yStep: number,
            stream: string,
        ): PDFTilingPattern;
        createPattern(): PDFKitReference;
        embedPatternColorSpaces(): void;
        getPatternColorSpaceId(underlyingColorspace: string): string;
        embed(): void;
        apply(stroke: boolean, patternColor: PDFKit.Mixins.TilingPatternColorValue): PDFKit.PDFDocument;
    }
}

declare namespace PDFKit.Mixins {
    interface AnnotationOption {
        Type?: string | undefined;
        Rect?: any;
        Border?: number[] | undefined;
        SubType?: string | undefined;
        Contents?: string | undefined;
        Name?: string | undefined;
        color?: string | undefined;
        QuadPoints?: number[] | undefined;

        A?: any;
        B?: any;
        C?: any;
        L?: any;
        DA?: string | undefined;
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

    interface PDFAttachmentOptions {
        name?: string;
        type?: string;
        description?: string;
        hidden?: boolean;
        creationDate?: Date;
        modifiedDate?: Date;
    }

    interface PDFAttachment {
        /**
         * Embed content of `src` in PDF
         */
        file(src: Buffer | ArrayBuffer | string, options?: PDFAttachmentOptions): this;
    }

    // The color forms accepted by PDFKit:
    //     example:   "red"                  [R, G, B]                  [C, M, Y, K]
    type ColorValue = string | PDFGradient | [PDFTilingPattern, TilingPatternColorValue] | [number, number, number] | [
        number,
        number,
        number,
        number,
    ];

    // The color forms accepted by PDFKit Tiling Pattern:
    //     example:   "red"                  [R, G, B]                  [C, M, Y, K]
    type TilingPatternColorValue = string | PDFGradient | [number, number, number] | [number, number, number, number];

    // The winding / filling rule accepted by PDFKit:
    type RuleValue = "even-odd" | "evenodd" | "non-zero" | "nonzero";

    // Text option opentype features as listed at https://docs.microsoft.com/en-us/typography/opentype/spec/featurelist
    type OpenTypeFeatures =
        | "aalt"
        | "abvf"
        | "abvm"
        | "abvs"
        | "afrc"
        | "akhn"
        | "blwf"
        | "blwm"
        | "blws"
        | "calt"
        | "case"
        | "cfar"
        | "cjct"
        | "clig"
        | "cpct"
        | "cpsp"
        | "cswh"
        | "curs"
        | "cv01"
        | "cv02"
        | "cv03"
        | "cv04"
        | "cv05"
        | "cv06"
        | "cv07"
        | "cv08"
        | "cv09"
        | "cv10"
        | "cv11"
        | "cv12"
        | "cv13"
        | "cv14"
        | "cv15"
        | "cv16"
        | "cv17"
        | "cv18"
        | "cv19"
        | "cv20"
        | "cv21"
        | "cv22"
        | "cv23"
        | "cv24"
        | "cv25"
        | "cv26"
        | "cv27"
        | "cv28"
        | "cv29"
        | "cv30"
        | "cv31"
        | "cv32"
        | "cv33"
        | "cv34"
        | "cv35"
        | "cv36"
        | "cv37"
        | "cv38"
        | "cv39"
        | "cv40"
        | "cv41"
        | "cv42"
        | "cv43"
        | "cv44"
        | "cv45"
        | "cv46"
        | "cv47"
        | "cv48"
        | "cv49"
        | "cv50"
        | "cv51"
        | "cv52"
        | "cv53"
        | "cv54"
        | "cv55"
        | "cv56"
        | "cv57"
        | "cv58"
        | "cv59"
        | "cv60"
        | "cv61"
        | "cv62"
        | "cv63"
        | "cv64"
        | "cv65"
        | "cv66"
        | "cv67"
        | "cv68"
        | "cv69"
        | "cv70"
        | "cv71"
        | "cv72"
        | "cv73"
        | "cv74"
        | "cv75"
        | "cv76"
        | "cv77"
        | "cv78"
        | "cv79"
        | "cv80"
        | "cv81"
        | "cv82"
        | "cv83"
        | "cv84"
        | "cv85"
        | "cv86"
        | "cv87"
        | "cv88"
        | "cv89"
        | "cv90"
        | "cv91"
        | "cv92"
        | "cv93"
        | "cv94"
        | "cv95"
        | "cv96"
        | "cv97"
        | "cv98"
        | "cv99"
        | "c2pc"
        | "c2sc"
        | "dist"
        | "ccmp"
        | "dlig"
        | "dnom"
        | "dtls"
        | "expt"
        | "falt"
        | "fin2"
        | "fin3"
        | "fina"
        | "flac"
        | "frac"
        | "fwid"
        | "half"
        | "haln"
        | "halt"
        | "hist"
        | "hkna"
        | "hlig"
        | "hngl"
        | "hojo"
        | "hwid"
        | "init"
        | "isol"
        | "ital"
        | "jalt"
        | "jp78"
        | "jp83"
        | "jp90"
        | "jp04"
        | "kern"
        | "lfbd"
        | "liga"
        | "ljmo"
        | "lnum"
        | "locl"
        | "ltra"
        | "ltrm"
        | "mark"
        | "med2"
        | "medi"
        | "mgrk"
        | "mkmk"
        | "mset"
        | "nalt"
        | "nlck"
        | "nukt"
        | "numr"
        | "onum"
        | "opbd"
        | "ordn"
        | "ornm"
        | "palt"
        | "pcap"
        | "pkna"
        | "pnum"
        | "pref"
        | "pres"
        | "pstf"
        | "psts"
        | "pwid"
        | "qwid"
        | "rand"
        | "rclt"
        | "rkrf"
        | "rlig"
        | "rphf"
        | "rtbd"
        | "rtla"
        | "rtlm"
        | "ruby"
        | "rvrn"
        | "salt"
        | "sinf"
        | "size"
        | "smcp"
        | "smpl"
        | "ss01"
        | "ss02"
        | "ss03"
        | "ss04"
        | "ss05"
        | "ss06"
        | "ss07"
        | "ss08"
        | "ss09"
        | "ss10"
        | "ss11"
        | "ss12"
        | "ss13"
        | "ss14"
        | "ss15"
        | "ss16"
        | "ss17"
        | "ss18"
        | "ss19"
        | "ss20"
        | "ssty"
        | "stch"
        | "subs"
        | "sups"
        | "swsh"
        | "titl"
        | "tjmo"
        | "tnam"
        | "tnum"
        | "trad"
        | "twid"
        | "unic"
        | "valt"
        | "vatu"
        | "vert"
        | "vhal"
        | "vjmo"
        | "vkna"
        | "vkrn"
        | "vpal"
        | "vrt2"
        | "vrtr"
        | "zero";

    type BoundingBox = [number, number, number, number];

    interface PDFColor {
        fillColor(color: ColorValue, opacity?: number): this;
        strokeColor(color: ColorValue, opacity?: number): this;
        opacity(opacity: number): this;
        fillOpacity(opacity: number): this;
        strokeOpacity(opacity: number): this;
        linearGradient(x1: number, y1: number, x2: number, y2: number): PDFLinearGradient;
        radialGradient(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): PDFRadialGradient;
        pattern(bbox: BoundingBox, xStep: number, yStep: number, stream: string): PDFTilingPattern;
    }

    type PDFFontSource = string | Buffer | Uint8Array | ArrayBuffer;

    interface PDFFont {
        font(src: PDFFontSource, size?: number): this;
        font(src: PDFFontSource, family: string, size?: number): this;
        fontSize(size: number): this;
        currentLineHeight(includeGap?: boolean): number;
        /** Helpful method to give a font an alias, eg: `registerFont('bold', './Roboto.ttf')` */
        registerFont(
            name: string,
            src?: PDFFontSource,
            /** Only specify family if the font type is `TTC` or `DFont` */
            family?: string,
        ): this;
    }

    type ImageSrc = Buffer | ArrayBuffer | string;

    interface ImageOption {
        width?: number | undefined;
        height?: number | undefined;
        /** Scale percentage */
        scale?: number | undefined;
        /** Two elements array specifying dimensions(w,h)  */
        fit?: [number, number] | undefined;
        cover?: [number, number] | undefined;
        align?: "center" | "right" | undefined;
        valign?: "center" | "bottom" | undefined;
        link?: string | AnnotationOption | undefined;
        goTo?: AnnotationOption | undefined;
        destination?: string | undefined;
    }

    interface PDFImage {
        /**
         * Draw an image in PDFKit document.
         *
         * Warning: If string 'src' is provided, the file will be loaded synchronously using `fs.readFileSync(src)`!
         */
        image(src: ImageSrc, x?: number, y?: number, options?: ImageOption): this;
        image(src: ImageSrc, options?: ImageOption): this;
    }

    interface TextOptions {
        /** Set to false to disable line wrapping all together */
        lineBreak?: boolean | undefined;
        /** The width that text should be wrapped to (by default, the page width minus the left and right margin) */
        width?: number | undefined;
        /** The maximum height that text should be clipped to */
        height?: number | undefined;
        /** The character to display at the end of the text when it is too long. Set to true to use the default character. */
        ellipsis?: boolean | string | undefined;
        /** The number of columns to flow the text into */
        columns?: number | undefined;
        /** The amount of space between each column (1/4 inch by default) */
        columnGap?: number | undefined;
        /** The amount in PDF points (72 per inch) to indent each paragraph of text */
        indent?: number | undefined;
        /** Whether to indent all lines of a paragraph */
        indentAllLines?: boolean | undefined;
        /** The amount of space between each paragraph of text */
        paragraphGap?: number | undefined;
        /** The amount of space between each line of text */
        lineGap?: number | undefined;
        /** The amount of space between each word in the text */
        wordSpacing?: number | undefined;
        /** The amount of space between each character in the text */
        characterSpacing?: number | undefined;
        /** Whether to fill the text (true by default) */
        fill?: boolean | undefined;
        /** Whether to stroke the text */
        stroke?: boolean | undefined;
        /** A URL to link this text to (shortcut to create an annotation) */
        link?: string | null | undefined;
        /** Whether to underline the text */
        underline?: boolean | undefined;
        /** Whether to strike out the text */
        strike?: boolean | undefined;
        /** Whether the text segment will be followed immediately by another segment. Useful for changing styling in the middle of a paragraph. */
        continued?: boolean | undefined;
        /** Whether to slant the text (angle in degrees or true) */
        oblique?: boolean | number | undefined;
        /** The alignment of the text (center, justify, left, right) */
        align?: "center" | "justify" | "left" | "right" | undefined;
        /** The vertical alignment of the text with respect to its insertion point */
        baseline?:
            | number
            | "svg-middle"
            | "middle"
            | "svg-central"
            | "bottom"
            | "ideographic"
            | "alphabetic"
            | "mathematical"
            | "hanging"
            | "top"
            | undefined;
        /** An array of OpenType feature tags to apply. If not provided, a set of defaults is used. */
        features?: OpenTypeFeatures[] | undefined;
        /** Sets a list as unordered, ordered or lettered */
        listType?: "bullet" | "numbered" | "lettered" | undefined;
        /** The radius of bullet points in a list. Works only with listType: 'bullet' */
        bulletRadius?: number | undefined;
        /** The indent of bullet points in a list */
        bulletIndent?: number | undefined;
        /** The indent of text in a list */
        textIndent?: number | undefined;
        destination?: string | undefined;
        goTo?: string | undefined;
        /** The parent structure element to add this child element to, for usage with text() and list() */
        structParent?: PDFStructureElement | undefined;
        /** The marking type used by text(), defaults to 'P' */
        structType?: string | undefined;
        /** The marking types used by items of list(), defaults to [ 'LI', 'Lbl', 'LBody' ] */
        structTypes?: [string | null, string | null, string | null] | undefined;
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
        circle(x: number, y: number, radius: number): this;
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
        rotate(angle: number, options?: { origin?: number[] | undefined }): this;
        scale(xFactor: number, yFactor?: number, options?: { origin?: number[] | undefined }): this;
    }

    interface PDFAcroForm {
        /**
         * Must call if adding AcroForms to a document. Must also call font() before
         * this method to set the default font.
         */
        initForm(): this;

        /**
         * Called automatically by document.js
         */
        endAcroForm(): this;

        /**
         * Creates and adds a form field to the document. Form fields are intermediate
         * nodes in a PDF form that are used to specify form name hierarchy and form
         * value defaults.
         * @param name - field name (T attribute in field dictionary)
         * @param options - other attributes to include in the field dictionary
         */
        formField(name: string, options?: Record<string, any>): PDFKitReference;

        /**
         * Creates and adds a Form Annotation to the document. Form annotations are
         * called Widget annotations internally within a PDF file.
         * @param name - form field name (T attribute of widget annotation
         * dictionary)
         */
        formAnnotation(name: string, type: string, x: number, y: number, w: number, h: number, options?: object): this;

        formText(name: string, x: number, y: number, w: number, h: number, options?: object): this;
        formPushButton(name: string, x: number, y: number, w: number, h: number, options?: object): this;
        formCombo(name: string, x: number, y: number, w: number, h: number, options?: object): this;
        formList(name: string, x: number, y: number, w: number, h: number, options?: object): this;
        formRadioButton(name: string, x: number, y: number, w: number, h: number, options?: object): this;
        formCheckbox(name: string, x: number, y: number, w: number, h: number, options?: object): this;
    }

    interface PDFMarking {
        markContent(tag: string, options?: MarkingOptions): this;
        endMarkedContent(): this;
        struct(
            tag: string,
            options?: StructureElementOptions,
            children?: PDFStructureElementChild | PDFStructureElementChild[],
        ): PDFStructureElement;
        addStructure(structElem: PDFStructureElement): this;
        initMarkings(options?: { tagged?: boolean }): void;
        initPageMarkings(pageMarkings: PageMarking[]): void;
        endPageMarkings(page: PDFPage): PageMarking[];
        markStructureContent(tag: string, options?: MarkingOptions): PDFStructureContent;
        getMarkingsDictionary(): PDFKitReference;
        getStructTreeRoot(): PDFKitReference;
        createStructParentTreeNextKey(): number;
        endMarkings(): void;
    }
    interface MarkingOptions {
        type?: "Pagination" | "Layout" | "Page";
        bbox?: [number, number, number, number];
        attached?: string[];
        lang?: string;
        alt?: string;
        expanded?: string;
        actual?: string;
    }
    interface StructureElementOptions {
        title?: string;
        lang?: string;
        alt?: string;
        expanded?: string;
        actual?: string;
    }
    interface PageMarking {
        tag: string;
        structContent?: PDFStructureContent;
        options?: MarkingOptions;
    }

    interface PDFMetadata {
        /** Called automatically */
        initMetadata(): void;
        appendXML(XMLxml: string, newLine?: boolean): void;
        /** Called automatically */
        endMetadata(): void;
    }

    type PDFSubsets = `PDF/A-1${"" | "a" | "b"}` | `PDF/A-2${"" | "a" | "b"}` | `PDF/A-3${"" | "a" | "b"}`;
    interface PDFSubset {
        // TODO: Add more types if needed. I do not understand this enought...
        initSubset(options: { subset: PDFSubsets }): void;
        endSubset(): void;
    }

    interface PDFOutline {
        initOutline(): void;
        endOutline(): void;
    }
}

declare namespace PDFKit {
    /**
     * PDFKit data
     */
    interface PDFData {
        new(data: any[]): PDFData;
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
        Subject?: string;
        Keywords?: string;
        ModDate?: Date;
    }

    interface DocumentPermissions {
        modifying?: boolean | undefined;
        copying?: boolean | undefined;
        annotating?: boolean | undefined;
        fillingForms?: boolean | undefined;
        contentAccessibility?: boolean | undefined;
        documentAssembly?: boolean | undefined;
        printing?: "lowResolution" | "highResolution" | undefined;
    }

    interface PDFDocumentOptions {
        compress?: boolean | undefined;
        info?: DocumentInfo | undefined;
        userPassword?: string | undefined;
        ownerPassword?: string | undefined;
        permissions?: DocumentPermissions | undefined;
        pdfVersion?: "1.3" | "1.4" | "1.5" | "1.6" | "1.7" | "1.7ext3" | undefined;
        autoFirstPage?: boolean | undefined;
        size?: number[] | string | undefined;
        margin?: number | undefined;
        margins?: { top: number; left: number; bottom: number; right: number } | undefined;
        layout?: "portrait" | "landscape" | undefined;
        font?: string | undefined;

        bufferPages?: boolean | undefined;
        tagged?: boolean;
        lang?: string;
        displayTitle?: boolean;
        subset?: Mixins.PDFSubsets;
        fontLayoutCache?: boolean;
    }

    interface PDFDocument
        extends
            NodeJS.ReadableStream,
            Mixins.PDFMetadata,
            Mixins.PDFAnnotation,
            Mixins.PDFColor,
            Mixins.PDFImage,
            Mixins.PDFText,
            Mixins.PDFVector,
            Mixins.PDFFont,
            Mixins.PDFAcroForm,
            Mixins.PDFMarking,
            Mixins.PDFAttachment,
            Mixins.PDFMetadata,
            Mixins.PDFSubset,
            Mixins.PDFOutline
    {
        /**
         * PDF Version
         */
        version: number;
        /**
         * Whenever streams should be compressed
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

        new(options?: PDFDocumentOptions): PDFDocument;

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

        /**
         * The root outline
         */
        outline: PDFOutline;
    }
}

declare module "pdfkit" {
    var doc: PDFKit.PDFDocument;
    export = doc;
}

declare module "pdfkit/js/gradient" {
    var gradient: {
        PDFGradient: PDFKit.PDFGradient;
        PDFLinearGradient: PDFKit.PDFLinearGradient;
        PDFRadialGradiant: PDFKit.PDFRadialGradient;
    };

    export = gradient;
}

declare module "pdfkit/js/pattern" {
    var pattern: {
        PDFTilingPattern: PDFKit.PDFTilingPattern;
    };

    export = pattern;
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
         * The page dictionary
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
    var PDFKitPage: PDFKit.PDFPage;

    export = PDFKitPage;
}

declare namespace PDFKit {
    /** PDFReference - represents a reference to another object in the PDF object hierarchy */
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

declare module "pdfkit/js/reference" {
    var PDFKitReference: PDFKit.PDFKitReference;

    export = PDFKitReference;
}
declare namespace PDFKit {
    /** PDFStructureContent */
    class PDFStructureContent {
        constructor(pageRef: PDFKitReference, mcid: number);
        push(structContent: PDFStructureContent): void;
    }
}

declare module "pdfkit/js/structure_content" {
    var PDFStructureContent: PDFKit.PDFStructureContent;
    export = PDFStructureContent;
}

declare namespace PDFKit {
    type PDFStructureElementChild =
        | (() => any)
        | PDFStructureElement
        | PDFStructureContent;

    /** PDFStructureElement */
    class PDFStructureElement {
        constructor(
            document: PDFDocument,
            type: string,
            options?: { title?: string; lang?: string; alt?: string; expanded?: string; actual?: string },
            children?: PDFStructureElementChild | PDFStructureElementChild[],
        );
        constructor(
            document: PDFDocument,
            type: string,
            children?: PDFStructureElementChild | PDFStructureElementChild[],
        );
        add(el: PDFStructureElementChild): PDFStructureElement;
        setParent(parentRef: PDFKitReference): void;
        setAttached(): void;
        end(): void;
    }
}

declare namespace PDFKit {
    /**
     * PDFKit data
     */
    interface PDFOutline {
        document: PDFDocument;
        children: PDFOutline[];
        addItem(title: string, options?: { expanded?: boolean }): PDFOutline;
        endOutline(): void;
    }
}

declare module "pdfkit/js/structure_element" {
    var PDFStructureElement: PDFKit.PDFStructureElement;
    export = PDFStructureElement;
}

declare module "pdfkit/js/mixins/annotations" {
    var PDFKitAnnotation: PDFKit.Mixins.PDFAnnotation;
    export = PDFKitAnnotation;
}

declare module "pdfkit/js/mixins/color" {
    var PDFKitColor: PDFKit.Mixins.PDFColor;
    export = PDFKitColor;
}

declare module "pdfkit/js/mixins/fonts" {
    var PDFKitFont: PDFKit.Mixins.PDFFont;
    export = PDFKitFont;
}

declare module "pdfkit/js/mixins/images" {
    var PDFKitImage: PDFKit.Mixins.PDFImage;
    export = PDFKitImage;
}

declare module "pdfkit/js/mixins/text" {
    var PDFKitText: PDFKit.Mixins.PDFText;
    export = PDFKitText;
}

declare module "pdfkit/js/mixins/vector" {
    var PDFKitVector: PDFKit.Mixins.PDFVector;
    export = PDFKitVector;
}

declare module "pdfkit/js/mixins/markings" {
    var PDFKitMarking: PDFKit.Mixins.PDFMarking;
    export = PDFKitMarking;
}

declare module "pdfkit/js/mixins/outline" {
    var PDFKitOutline: PDFKit.Mixins.PDFOutline;
    export = PDFKitOutline;
}
