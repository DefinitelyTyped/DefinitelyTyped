// Type definitions for svg-outline-stroke 1.3
// Project: https://github.com/elrumordelaluz/outline-stroke#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Transform svg strokes into filled paths
 */
declare function outlineStroke(input: string | Buffer, params?: outlineStroke.Options): Promise<string>;

declare namespace outlineStroke {
    interface Options {
        alphaMax?: number;
        background?: string;
        blackOnWhite?: boolean;
        color?: string;
        optCurve?: boolean;
        optTolerance?: number;
        threshold?: number;
        turdSize?: number;
        turnPolicy?: string;
    }
}
export = outlineStroke;
