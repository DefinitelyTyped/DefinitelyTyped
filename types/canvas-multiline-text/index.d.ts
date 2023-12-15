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
