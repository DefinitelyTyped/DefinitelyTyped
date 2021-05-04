import * as WaveSurfer from './wavesurfer';

declare module './wavesurfer' {
    class CanvasEntry {
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

    class Drawer extends Observer {
        constructor(container: HTMLElement, params: WaveSurferParams);

        readonly container: HTMLElement;
        /** The height of the renderer. */
        readonly height: number;
        readonly lastPos: number;
        readonly params: WaveSurferParams;
        /** The width of the renderer. */
        readonly width: number;
        readonly wrapper: HTMLElement;
    }

    class MultiCanvas extends Drawer {
        constructor(container: HTMLElement, params: WaveSurferParams);

        /** Add a canvas to the canvas list. */
        addCanvas(): void;
        /** Set the canvas transforms for a certain entry (wave and progress). */
        applyCanvasTransforms(entry: CanvasEntry, vertical: boolean): void;
        /** Clear the whole multi-canvas. */
        clearWave(): void;
        /** Create the canvas elements and style them. */
        createElements(): void;
        /** Draw a waveform with bars. */
        drawBars(peaks: Peaks, channelIndex: number, start: number, end: number): void;
        /** Tell the canvas entries to render their portion of the waveform. */
        drawLine(
            peaks: number[],
            absmax: number,
            halfH: number,
            offsetY: number,
            start: number,
            end: number,
            channelIndex: number,
        ): void;
        /** Draw a waveform. */
        drawWave(peaks: Peaks, channelIndex: number, start: number, end: number): void;
        /** Draw a rectangle on the multi-canvas. */
        fillRect(
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
            channelIndex: number,
        ): void;
        /** Return image data of the multi-canvas. */
        getImage(format: string, quality: number, type: string): string | string[] | Promise<string | string[]>;
        /** Returns whether to hide the channel from being drawn based on params. */
        hideChannel(channelIndex: number): void;
        /** Initialize the drawer. */
        init(): void;
        /** Performs preparation tasks and calculations which are shared by drawBars and drawWave. */
        prepareDraw(
            peaks: Peaks,
            channelIndex: number,
            start: number,
            end: number,
            fn: (arg: DrawParams) => void,
            drawIndex: number,
            normalizedMax: number,
        ): void;
        /** Pop single canvas from the list. */
        removeCanvas(): void;
        /** Set the fill styles for a certain entry (wave and progress). */
        setFillStyles(entry: CanvasEntry, waveColor: string, progressColor: string): void;
        /** Update cursor style. */
        updateCursor(): void;
        /** Update the dimensions of a canvas element. */
        updateDimensions(entry: CanvasEntry, width: number, heihgt: number): void;
        /** Render the new progress. */
        updateProgress(position: number): void;
        /** Adjust to the updated size by adding or removing canvases. */
        updateSize(): void;

        /** Class used to generate entries. */
        readonly EntryClass: typeof CanvasEntry;
        /** The radius of the wave bars. */
        readonly barRadius: number;
        /** Canvas 2d context attributes. */
        readonly canvasContextAttributes: DrawingContextAttributes;
        readonly canvases: CanvasEntry[];
        readonly halfPixel: number;
        /** Whether or not the progress wave is rendered. */
        readonly hasProgressCanvas: boolean;
        readonly maxCanvasElementWidth: number;
        readonly maxCanvasWidth: number;
        /** Overlap added between entries to prevent vertical white stripes between canvas elements. */
        readonly overlap: number;
        readonly progressWave: HTMLElement;
        /** Whether to render the waveform vertically. */
        readonly vertical: boolean;
    }

    interface DrawParams {
        absmax: number;
        hasMinVals: boolean;
        height: number;
        offsetY: number;
        halfH: number;
        peaks: Peaks;
        channelIndex: number;
    }

    class PeakCache {
        constructor();

        addRangeToPeakCache(length: number, start: number, end: number): number[][];
        clearPeakCache(): void;
        getCacheRanges(): number[][];
    }

    type Peaks = ReadonlyArray<number> | ReadonlyArray<ReadonlyArray<number>>;
}
