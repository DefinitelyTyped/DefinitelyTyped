// Type definitions for non-npm package offscreencanvas-browser 2019.3
// Project: https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface
// Definitions by: Klaus Reimer <https://github.com/kayahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 3.1

// https://html.spec.whatwg.org/multipage/canvas.html#canvasdrawimage
interface CanvasDrawImage {
    drawImage(image: CanvasImageSource | OffscreenCanvas, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource | OffscreenCanvas, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource | OffscreenCanvas, sx: number, sy: number, sw: number, sh: number,
        dx: number, dy: number, dw: number, dh: number): void;
}

// https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-createimagebitmap
declare function createImageBitmap(image: ImageBitmapSource | OffscreenCanvas): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource | OffscreenCanvas, sx: number, sy: number,
    sw: number, sh: number): Promise<ImageBitmap>;

// https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-transfercontroltooffscreen
interface HTMLCanvasElement extends HTMLElement {
    transferControlToOffscreen(): OffscreenCanvas;
}

// https://html.spec.whatwg.org/multipage/canvas.html#offscreencanvasrenderingcontext2d
interface OffscreenCanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing,
        CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect,
        CanvasDrawPath, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles,
        CanvasTextDrawingStyles, CanvasPath {
    readonly canvas: OffscreenCanvas;
}
declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new (): OffscreenCanvasRenderingContext2D;
};

// https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface
interface OffscreenCanvas extends EventTarget {
    width: number;
    height: number;
    getContext(contextId: "2d", contextAttributes?: CanvasRenderingContext2DSettings):
        OffscreenCanvasRenderingContext2D | null;
    getContext(contextId: "webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: string, contextAttributes?: {}): OffscreenCanvasRenderingContext2D
        | WebGLRenderingContext | null;
    transferToImageBitmap(): ImageBitmap;
    convertToBlob(options?: { type?: string, quality?: number }): Promise<Blob>;
}
declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new (width: number, height: number): OffscreenCanvas;
};
