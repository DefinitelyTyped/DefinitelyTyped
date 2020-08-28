// Type definitions for opentype.js 1.3
// Project: https://github.com/opentypejs/opentype.js
// Definitions by: Dan Marshall <https://github.com/danmarshall>
//                 Edgar Simson <https://github.com/edzis>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace opentype;

/******************************************
 * FONT
 ******************************************/

export class Font {
    names: FontNames;
    unitsPerEm: number;
    ascender: number;
    descender: number;
    createdTimestamp: number;
    tables: { [tableName: string]: Table };
    supported: boolean;
    glyphs: GlyphSet;
    encoding: Encoding;
    substitution: Substitution;

    readonly defaultRenderOptions: RenderOptions;

    constructor(options: FontConstructorOptions);

    charToGlyph(c: string): Glyph;
    charToGlyphIndex(s: string): number;
    download(fileName?: string): void;
    draw(
        ctx: CanvasRenderingContext2D,
        text: string,
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions
    ): void;
    drawMetrics(
        ctx: CanvasRenderingContext2D,
        text: string,
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions
    ): void;
    drawPoints(
        ctx: CanvasRenderingContext2D,
        text: string,
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions
    ): void;
    forEachGlyph(
        text: string,
        x: number | undefined,
        y: number | undefined,
        fontSize: number | undefined,
        options: RenderOptions | undefined,
        callback: (
            glyph: Glyph,
            x: number,
            y: number,
            fontSize: number,
            options?: RenderOptions
        ) => void
    ): number;
    getAdvanceWidth(
        text: string,
        fontSize?: number,
        options?: RenderOptions
    ): number;
    getEnglishName(name: string): string;
    getKerningValue(
        leftGlyph: Glyph | number,
        rightGlyph: Glyph | number
    ): number;
    getPath(
        text: string,
        x: number,
        y: number,
        fontSize: number,
        options?: RenderOptions
    ): Path;
    getPaths(
        text: string,
        x: number,
        y: number,
        fontSize: number,
        options?: RenderOptions
    ): Path[];
    glyphIndexToName(gid: number): string;
    glyphNames: GlyphNames;
    hasChar(c: string): boolean;
    kerningPairs: KerningPairs;
    nameToGlyph(name: string): Glyph;
    nameToGlyphIndex(name: string): number;
    numberOfHMetrics: number;
    numGlyphs: number;
    outlinesFormat: string;
    stringToGlyphs(s: string): Glyph[];
    toArrayBuffer(): ArrayBuffer;
    toBuffer(): ArrayBuffer;
    toTables(): Table;
    validate(): void;
}

export type FontConstructorOptions = FontConstructorOptionsBase &
    Partial<FontOptions> & {
        glyphs: Glyph[];
    };

export interface FontOptions {
    empty?: boolean;
    familyName: string;
    styleName: string;
    fullName?: string;
    postScriptName?: string;
    designer?: string;
    designerURL?: string;
    manufacturer?: string;
    manufacturerURL?: string;
    license?: string;
    licenseURL?: string;
    version?: string;
    description?: string;
    copyright?: string;
    trademark?: string;
    unitsPerEm: number;
    ascender: number;
    descender: number;
    createdTimestamp: number;
    weightClass?: string;
    widthClass?: string;
    fsSelection?: string;
}

export interface FontConstructorOptionsBase {
    familyName: string;
    styleName: string;
    unitsPerEm: number;
    ascender: number;
    descender: number;
}

export interface FontNames {
    copyright: LocalizedName;
    description: LocalizedName;
    designer: LocalizedName;
    designerURL: LocalizedName;
    fontFamily: LocalizedName;
    fontSubfamily: LocalizedName;
    fullName: LocalizedName;
    license: LocalizedName;
    licenseURL: LocalizedName;
    manufacturer: LocalizedName;
    manufacturerURL: LocalizedName;
    postScriptName: LocalizedName;
    trademark: LocalizedName;
    version: LocalizedName;
}

export interface Table {
    [propName: string]: any;
    encode(): number[];
    fields: Field[];
    sizeOf(): number;
    tables: Table[];
    tableName: string;
}

export interface KerningPairs {
    [pair: string]: number;
}

export interface LocalizedName {
    [lang: string]: string;
}

export interface Field {
    name: string;
    type: string;
    value: any;
}

/******************************************
 * GLYPH
 ******************************************/

export class Glyph {
    index: number;
    private xMin;
    private xMax;
    private yMin;
    private yMax;
    private points;

    name: string;
    path: Path | (() => Path);
    unicode: number;
    unicodes: number[];
    advanceWidth: number;

    constructor(options: GlyphOptions);

    addUnicode(unicode: number): void;
    bindConstructorValues(options: GlyphOptions): void;
    draw(
        ctx: CanvasRenderingContext2D,
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions
    ): void;
    drawMetrics(
        ctx: CanvasRenderingContext2D,
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions
    ): void;
    drawPoints(
        ctx: CanvasRenderingContext2D,
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions
    ): void;
    getBoundingBox(): BoundingBox;
    getContours(): Contour;
    getMetrics(): Metrics;
    getPath(
        x?: number,
        y?: number,
        fontSize?: number,
        options?: RenderOptions,
        font?: Font
    ): Path;
}
export interface GlyphOptions {
    advanceWidth?: number;
    index?: number;
    font?: Font;
    name?: string;
    path?: Path;
    unicode?: number;
    unicodes?: number[];
    xMax?: number;
    xMin?: number;
    yMax?: number;
    yMin?: number;
}

export class GlyphNames {
    private names;
    constructor(post: Post);
    glyphIndexToName(gid: number): string;
    nameToGlyphIndex(name: string): number;
}

export class GlyphSet {
    private font;
    private glyphs;
    constructor(font: Font, glyphs: Glyph[] | Array<(() => Glyph)>);
    get(index: number): Glyph;
    length: number;
    push(index: number, loader: () => Glyph): void;
}

export interface Post {
    glyphNameIndex?: number[];
    isFixedPitch: number;
    italicAngle: number;
    maxMemType1: number;
    minMemType1: number;
    maxMemType42: number;
    minMemType42: number;
    names?: string[];
    numberOfGlyphs?: number;
    offset?: number[];
    underlinePosition: number;
    underlineThickness: number;
    version: number;
}

export interface RenderOptions {
    script?: string;
    language?: string;
    kerning?: boolean;
    xScale?: number;
    yScale?: number;
    features?: {
        [key: string]: boolean;
    };
}

export interface Metrics {
    leftSideBearing: number;
    rightSideBearing?: number;
    xMax: number;
    xMin: number;
    yMax: number;
    yMin: number;
}

export interface Contour extends Array<Point> {}

export interface Point {
    lastPointOfContour?: boolean;
}

/******************************************
 * PATH
 ******************************************/

export class Path {
    fill: string | null;
    stroke: string | null;
    strokeWidth: number;
    constructor();
    bezierCurveTo(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x: number,
        y: number
    ): void;
    close: () => void;
    closePath(): void;
    commands: PathCommand[];
    curveTo: (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x: number,
        y: number
    ) => void;
    draw(ctx: CanvasRenderingContext2D): void;
    extend(pathOrCommands: Path | PathCommand[] | BoundingBox): void;
    getBoundingBox(): BoundingBox;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(x1: number, y1: number, x: number, y: number): void;
    quadTo: (x1: number, y1: number, x: number, y: number) => void;
    toDOMElement(decimalPlaces: number): SVGPathElement;
    toPathData(decimalPlaces: number): string;
    toSVG(decimalPlaces: number): string;
    unitsPerEm: number;
}

export type PathCommand =
| {
    type: "M";
    x: number;
    y: number;
  }
| {
    type: "L";
    x: number;
    y: number;
  }
| {
    type: "C";
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
  }
| {
    type: "Q";
    x1: number;
    y1: number;
    x: number;
    y: number;
  }
| {
    type: "Z";
  };

/******************************************
 * UTIL CLASSES
 ******************************************/

export class BoundingBox {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    isEmpty(): boolean;
    addPoint(x: number, y: number): void;
    addX(x: number): void;
    addY(y: number): void;
    addBezier(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
    addQuad(x0: number, y0: number, x1: number, y1: number, x: number, y: number): void;
}

export interface Encoding {
    charset: string;
    charToGlyphIndex(c: string): number;
    font: Font;
}

export type Substitution = (font: Font) => any;
// TODO add methods

/******************************************
 * STATIC
 ******************************************/

export function load(
    url: string,
    callback: (error: any, font?: Font) => void
): void;
export function load(
    url: string,
): Promise<Font>;

export function loadSync(url: string, opt?: {
    lowMemory: boolean;
}): Font;

export function parse(buffer: any): Font;
