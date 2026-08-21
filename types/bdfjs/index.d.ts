/// <reference types="node" />

// https://www.x.org/docs/BDF/bdf.pdf
// https://www.adobe.com/content/dam/acom/en/devnet/font/pdfs/5005.BDF_Spec.pdf

export interface ParseOptions {
    allprops?: boolean | undefined;
    onlymeta?: boolean | undefined;
}

export interface BoundingBox {
    width: number;
    height: number;
    x: number;
    y: number;
}

export interface Glyph {
    bitmap: number[][];
    boundingBox: BoundingBox;
    bytes: number[];
    char: string;
    code: number;
    deviceWidthX: number;
    deviceWidthY: number;
    name: string;
    scalableWidthX: number;
    scalableWidthY: number;
}

export interface Properties {
    defaultChar: number;
    fontAscent: number;
    fontDescent: number;

    addStyleName?: string | undefined;
    averageWidth?: number | undefined;
    capHeight?: number | undefined;
    charsetEncoding?: string | undefined;
    charsetRegistry?: string | undefined;
    copyright?: string | undefined;
    faceName?: string | undefined;
    familyName?: string | undefined;
    font?: string | undefined;
    fontnameRegistry?: string | undefined;
    fontVersion?: string | undefined;
    foundry?: string | undefined;
    notice?: string | undefined;
    pixelSize?: number | undefined;
    pointSize?: number | undefined;
    resolutionX?: number | undefined;
    resolutionY?: number | undefined;
    setwidthName?: string | undefined;
    slant?: string | undefined;
    spacing?: string | undefined;
    weightName?: string | undefined;
    xHeight?: number | undefined;

    [key: string]: string | number | undefined;
}

export interface Size {
    points: number;
    resolutionX: number;
    resolutionY: number;
}

export interface Meta {
    boundingBox: BoundingBox;
    name: string;
    // The spec says that `properties` is optional, but then goes on to point out
    // that without `defaultChar`, `fontAscent` and `fontDescent` it's not really
    // a valid font, so I chose to not mark them as a maybe.
    properties: Properties;
    size: Size;
    totalChars: number;
    version: string;
}

export interface Font {
    meta: Meta;
    glyphs: { [key: number]: Glyph }; // This is NOT a list
}

export function parse(text: string | Buffer, options?: ParseOptions): Font;

export interface DrawOptions {
    kerningBias?: number | undefined;
}

export interface Bitmap {
    width: number;
    height: number;
    [row: number]: number[]; // Yep, this how the library does it, unfortunately
}

export function draw(
    font: Font,
    text: string,
    options?: DrawOptions,
): Bitmap | undefined;

export function trim(bitmap: Bitmap): Bitmap;
