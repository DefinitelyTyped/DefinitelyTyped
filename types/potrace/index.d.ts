// Type definitions for potrace 2.1
// Project: https://github.com/tooolbox/node-potrace
// Definitions by: Direnc Timur <https://github.com/proohit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Jimp = require('jimp');

export interface PotraceOptions {
    /**
     * how to resolve ambiguities in path decomposition (default "minority")
     */
    turdPolicy?: 'minority' | 'majority' | 'black' | 'white' | 'left' | 'right';
    /**
     * suppress speckles of up to this size (default 2)
     */
    turdSize?: number;
    /**
     * corner threshold parameter (default 1)
     */
    alphaMax?: number;
    /**
     * curve optimization (default true)
     */
    optCurve?: boolean;
    /**
     * curve optimization tolerance (default 0.2)
     */
    optTolerance?: number;
    /**
     * threshold below which color is considered black (0..255, default -1)
     */
    threshold?: number;
    /**
     * specifies colors by which side from threshold should be traced (default true)
     */
    blackOnWhite?: boolean;
    /**
     * foreground color (default: 'auto' (black or white)) Will be ignored when exporting as `<symbol>`
     */
    color?: string | 'auto';
    /**
     * background color (default: 'transparent') Will be ignored when exporting as `<symbol>`
     */
    background?: string | 'transparent';
}

export interface PosterizerOptions extends PotraceOptions {
    /**
     * Number of samples that needs to be taken (and number of layers in SVG). (default: -1, which most likely will result in 3, sometimes 4)
     */
    steps?: number;
    /**
     * How to select fill color for color ranges - equally spread or dominant. (default: "dominant")
     */
    fillStrategy?: string | 'dominant';
    /**
     * How to choose thresholds in-between - after equal intervals or automatically balanced. (default: "auto")
     */
    rangeDistribution?: string | 'auto';
}

export function trace(
    file: string | Buffer | Jimp,
    cb: (error: Error | null, svg: string, potrace: Potrace) => void,
): void;

export function trace(
    file: string | Buffer | Jimp,
    options: PotraceOptions,
    cb: (error: Error | null, svg: string, potrace: Potrace) => void,
): void;

export function posterize(
    file: string | Buffer | Jimp,
    options: PosterizerOptions,
    cb: (error: Error | null, svg: string, posterizer: Posterizer) => void,
): void;

export function posterize(
    file: string | Buffer | Jimp,
    cb: (error: Error | null, svg: string, posterizer: Posterizer) => void,
): void;

export class Posterizer {
    constructor(options?: PosterizerOptions);
    loadImage(image: string | Buffer | Jimp, callback: (posterizer: Posterizer, error: Error | null) => void): void;
    setParameters(params: PotraceOptions): void;
    getSVG(): string;
    getSymbol(id: string): string;
}

export class Potrace {
    constructor(options?: PotraceOptions);
    loadImage(image: string | Buffer | Jimp, callback: (potrace: Potrace, error: Error | null) => void): void;
    setParameters(params: PotraceOptions): void;
    getSVG(): string;
    getSymbol(id: string): string;
    getPathTag(fillColor: string, scale: number): string;
}
