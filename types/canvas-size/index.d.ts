// Type definitions for canvas-size 1.2
// Project: https://github.com/jhildenbiddle/canvas-size
// Definitions by: Daniel Kucal <https://github.com/DanielKucal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CanvasSizeCommonOptions {
    useWorker?: boolean;
    usePromise?: boolean;
    onError?: (width: number, height: number, benchmark: number) => any;
    onSuccess?: (width: number, height: number, benchmark: number) => any;
}

interface CanvasSizeTestOptions extends CanvasSizeCommonOptions {
    width?: number;
    height?: number;
    sizes?: Array<[number, number]>;
}

interface CanvasSizeMaxOptions extends CanvasSizeCommonOptions {
    max?: number;
    min?: number;
    step?: number;
}

interface CanvasSizeMaxReturn {
    width: number;
    height: number;
    benchmark: number;
}

interface CanvasSize {
    test(options: CanvasSizeTestOptions): boolean;

    maxArea(options: CanvasSizeMaxOptions & { usePromise?: false }): void;
    maxArea(options: CanvasSizeMaxOptions & { usePromise: true }): Promise<CanvasSizeMaxReturn>;

    maxWidth(options: CanvasSizeMaxOptions & { usePromise?: false }): void;
    maxWidth(options: CanvasSizeMaxOptions & { usePromise: true }): Promise<CanvasSizeMaxReturn>;

    maxHeight(options: CanvasSizeMaxOptions & { usePromise?: false }): void;
    maxHeight(options: CanvasSizeMaxOptions & { usePromise: true }): Promise<CanvasSizeMaxReturn>;
}

declare const canvasSize: CanvasSize;
export as namespace canvasSize;
export = canvasSize;
