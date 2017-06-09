// Type definitions for opentype.js
// Project: https://github.com/nodebox/opentype.js
// Definitions by: Dan Marshall <https://github.com/danmarshall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace opentype;

interface Contour extends Array<Point> {
}

export class Encoding {
    charset: string;
    charToGlyphIndex(c: string): number;
    font: Font;
}

interface Field {
    name: string;
    type: string;
    value: any;
}

export class Font {
    private nametoGlyphIndex;
    private supported;
    constructor(options: FontOptions);
    ascender: number;
    cffEncoding: Encoding;
    charToGlyph(c: string): Glyph;
    charToGlyphIndex(s: string): number;
    descender: number;
    download(): void;
    draw(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, options?: RenderOptions): void;
    drawMetrics(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, options?: RenderOptions): void;
    drawPoints(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, options?: RenderOptions): void;
    encoding: Encoding;
    forEachGlyph(text: string, x: number, y: number, fontSize: number, options: RenderOptions, callback: { (glyph: Glyph, x: number, y: number, fontSize: number, options?: RenderOptions): void; }): void;
    getEnglishName(name: string): string;
    getGposKerningValue: { (leftGlyph: Glyph | number, rightGlyph: Glyph | number): number; };
    getKerningValue(leftGlyph: Glyph | number, rightGlyph: Glyph | number): number;
    getPath(text: string, x: number, y: number, fontSize: number, options?: RenderOptions): Path;
    getPaths(text: string, x: number, y: number, fontSize: number, options?: RenderOptions): Path[];
    glyphs: GlyphSet;
    glyphIndexToName(gid: number): string;
    glyphNames: GlyphNames;
    hasChar(c: string): boolean;
    kerningPairs: KerningPairs;
    names: FontNames;
    nameToGlyph(name: string): Glyph;
    nameToGlyphIndex(name: string): number;
    numberOfHMetrics: number;
    numGlyphs: number;
    outlinesFormat: string;
    stringToGlyphs(s: string): Glyph[];
    tables: { [tableName: string]: Table; };
    toArrayBuffer(): ArrayBuffer;
    toBuffer(): ArrayBuffer;
    toTables(): Table;
    unitsPerEm: number;
    validate(): void;
}

interface FontNames {
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

interface FontOptions {
    copyright?: string;
    ascender?: number;
    descender?: number;
    description?: string;
    designer?: string;
    designerURL?: string;
    empty?: boolean;
    familyName?: string;
    fullName?: string;
    glyphs?: Glyph[] | GlyphSet;
    license?: string;
    licenseURL?: string;
    manufacturer?: string;
    manufacturerURL?: string;
    postScriptName?: string;
    styleName?: string;
    unitsPerEm?: number;
    trademark?: string;
    version?: string;
}

export class Glyph {
    private index;
    private xMin;
    private xMax;
    private yMin;
    private yMax;
    private points;
    constructor(options: GlyphOptions);
    addUnicode(unicode: number): void;
    advanceWidth: number;
    bindConstructorValues(options: GlyphOptions): void;
    draw(ctx: CanvasRenderingContext2D, x: number, y: number, fontSize: number): void;
    drawMetrics(ctx: CanvasRenderingContext2D, x: number, y: number, fontSize: number): void;
    drawPoints(ctx: CanvasRenderingContext2D, x: number, y: number, fontSize: number): void;
    getContours(): Contour[];
    getMetrics(): Metrics;
    getPath(x: number, y: number, fontSize: number): Path;
    name: string;
    path: Path | { (): Path; };
    unicode: number;
    unicodes: number[];
}

interface GlyphOptions {
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
    constructor(font: Font, glyphs: Glyph[] | { (): Glyph; }[]);
    get(index: number): Glyph;
    length: number;
    push(index: number, loader: { (): Glyph; }): void;
}

interface KerningPairs {
    [pair: string]: number;
}

export function load(url: string, callback: { (error: any, font?: Font): void; }): void;

export function loadSync(url: string): Font;

interface LocalizedName {
    [lang: string]: string;
}

interface Metrics {
    leftSideBearing: number;
    rightSideBearing?: number;
    xMax: number;
    xMin: number;
    yMax: number;
    yMin: number;
}

export function parse(buffer: any): Font;

export class Path {
    private fill;
    private stroke;
    private strokeWidth;
    constructor();
    bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
    close: () => void;
    closePath(): void;
    commands: PathCommand[];
    curveTo: (x1: number, y1: number, x2: number, y2: number, x: number, y: number) => void;
    draw(ctx: CanvasRenderingContext2D): void;
    extend(pathOrCommands: Path | PathCommand[]): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(x1: number, y1: number, x: number, y: number): void;
    quadTo: (x1: number, y1: number, x: number, y: number) => void;
    toPathData(decimalPlaces: number): string;
    toSVG(decimalPlaces: number): string;
    unitsPerEm: number;
}

interface PathCommand {
    type: string;
    x?: number;
    y?: number;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
}

interface Point {
    lastPointOfContour?: boolean;
}

interface Post {
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

interface RenderOptions {
    kerning: boolean;
}

interface Table {
    [propName: string]: any;
    encode(): number[];
    fields: Field[];
    sizeOf(): number;
    tables: Table[];
    tableName: string;
}
