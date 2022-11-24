import { DrawingContextAttributes } from '../types/util';

export default class CanvasEntry {
    constructor();

    /** Set the canvas transforms for wave and progress. */
    applyCanvasTransforms(vertical: boolean): void;
    /** Clear the wave and progress rendering contexts. */
    clearWave(): void;
    /** Destroys this entry. */
    destroy(): void;
    /** Render the actual waveform line on a canvas element. */
    drawLineToContext(
        ctx: CanvasRenderingContext2D,
        peaks: number[],
        absmax: number,
        halfH: number,
        offsetY: number,
        start: number,
        end: number,
    ): void;
    /** Render the actual wave and progress lines. */
    drawLines(peaks: number[], absmax: number, halfH: number, offsetY: number, start: number, end: number): void;
    /** Draw a rounded rectangle on Canvas. */
    drawRoundedRect(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number,
    ): void;
    /** Draw the actual rectangle on a canvas element. */
    fillRectToContext(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number,
    ): void;
    /** Draw a rectangle for wave and progress. */
    fillRects(x: number, y: number, width: number, height: number, radius: number): void;
    /** Utility function to handle wave color arguments. */
    getFillStyle(ctx: CanvasRenderingContext2D, color: string): string | CanvasGradient;
    /** Return image data of the wave canvas element. */
    getImage(format: string, quality: number, type: string): string | Promise<string>;
    /** Store the progress wave canvas element and create the 2D rendering context. */
    initProgress(element: HTMLCanvasElement): string;
    /** Store the wave canvas element and create the 2D rendering context. */
    initWave(element: HTMLCanvasElement): string;
    /** Set the fill styles for wave and progress. */
    setFillStyles(waveColor: string, progressColor: string): void;
    /** Update the dimensions. */
    updateDimensions(elementWidth: number, totalWidth: number, width: number, height: number): void;

    /** Canvas 2d context attributes. */
    readonly canvasContextAttributes: DrawingContextAttributes;
    /** End of the area the canvas should render, between 0 and 1. */
    readonly end: number;
    /** Unique identifier for this entry. */
    readonly id: string;
    /** The (optional) progress wave node. */
    readonly progress: HTMLCanvasElement;
    /** The (optional) progress wave canvas rendering context. */
    readonly progressCtx: CanvasRenderingContext2D;
    /** Start of the area the canvas should render, between 0 and 1. */
    readonly start: number;
    /** The wave node. */
    readonly wave: HTMLCanvasElement;
    /** The wave canvas rendering context. */
    readonly waveCtx: CanvasRenderingContext2D;
}
