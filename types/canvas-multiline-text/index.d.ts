// Type definitions for canvas-multiline-text 1.0
// Project: https://gitlab.com/davideblasutto/canvas-multiline-text
// Definitions by: AKORA <https://github.com/A-K-O-R-A>
//                 Kiara <https://github.com/DragonCat4012>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    rect?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    font?: string;
    verbose?: boolean;
    lineHeight?: number;
    minFontSize?: number;
    maxFontSize?: number;
}

declare function drawMultilineText(ctx: CanvasRenderingContext2D, text: string, opts?: Options): number;

export = drawMultilineText;
