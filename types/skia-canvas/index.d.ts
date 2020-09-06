// Type definitions for skia-canvas 0.9
// Project: https://github.com/samizdatco/skia-canvas#readme
// Definitions by: Carlos Precioso <https://github.com/cprecioso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node" />

export class Canvas {
    constructor(width: number, height: number);
    get width(): number;
    get height(): number;

    getContext(type: '2d'): CanvasRenderingContext2D;

    get pages(): ReadonlyArray<CanvasRenderingContext2D>;

    get pdf(): Buffer;
    get svg(): Buffer;
    get jpg(): Buffer;
    get png(): Buffer;

    newPage(width: number, height: number): CanvasRenderingContext2D;

    saveAs(filename: string, options?: { format?: string; quality?: number }): void;
    toBuffer(format: string, options?: { quality?: number; page?: number }): Buffer;
    toDataURL(format: string, options?: { quality?: number; page?: number }): string;
}

export class CanvasRenderingContext2D extends globalThis.CanvasRenderingContext2D {
    fontVariant: string;
    textTracking: number;
    textWrap: boolean;
    measureText(text: string): TextMetrics;
}

export interface TextMetrics extends globalThis.TextMetrics {
    lines: TextMetricsLine[];
}

export interface TextMetricsLine {
    x: number;
    y: number;
    height: number;
    baseline: number;
    startIndex: number;
    endIndex: number;
}

export class CanvasGradient extends globalThis.CanvasGradient {}
export class CanvasPattern extends globalThis.CanvasPattern {}
export class DOMMatrix extends globalThis.DOMMatrix {}
export class Image extends globalThis.Image {}
export class ImageData extends globalThis.ImageData {}
export class Path2D extends globalThis.Path2D {}

export function loadImage(src: string | Buffer): Promise<Image>;

export interface FontFamily {
    family: string;
    weights: number[];
    widths: string[];
    styles: string[];
}

export interface FontVariant {
    family: string;
    weight: number;
    style: string;
    width: string;
    file: string;
}

export interface FontLibrary {
    families: string[];
    family(name: string): FontFamily | undefined;
    has(familyName: string): boolean;
    use(familyName: string, fontPaths: ReadonlyArray<string>): FontVariant[];
    use(fontPaths: ReadonlyArray<string>): FontVariant[];
    use(families: Record<string, ReadonlyArray<string> | string>): Record<string, FontVariant[] | FontVariant>;
}

export const FontLibrary: FontLibrary;
