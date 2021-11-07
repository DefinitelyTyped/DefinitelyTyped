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
        alphaMax?: number | undefined;
        background?: string | undefined;
        blackOnWhite?: boolean | undefined;
        color?: string | undefined;
        optCurve?: boolean | undefined;
        optTolerance?: number | undefined;
        threshold?: number | undefined;
        turdSize?: number | undefined;
        turnPolicy?: string | undefined;
    }
}
export = outlineStroke;
