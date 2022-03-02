// Type definitions for canvas-multiline-text 1.0
// Project: https://gitlab.com/davideblasutto/canvas-multiline-text
// Definitions by: A-K-O-R-A <https://github.com/A-K-O-R-A>
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

declare function drawMultilineText(
    ctx: CanvasRenderingContext2D,
    text: string,
    opts?: Options
): number;

export = drawMultilineText;
