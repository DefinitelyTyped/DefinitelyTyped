// Type definitions for non-npm package offscreencanvas-browser 2019.6
// Project: https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface
// Definitions by: Klaus Reimer <https://github.com/kayahr>
//                        Oleg Varaksin <https://github.com/ova2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="webgl2" />

// https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-transfercontroltooffscreen
interface HTMLCanvasElement extends HTMLElement {
    transferControlToOffscreen(): OffscreenCanvas;
}

// https://html.spec.whatwg.org/multipage/canvas.html#offscreencanvasrenderingcontext2d
interface OffscreenCanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing,
    CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath,
    CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasTextDrawingStyles, CanvasPath {
    readonly canvas: OffscreenCanvas;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new(): OffscreenCanvasRenderingContext2D;
};

// https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface
// Possible contextId values are defined by the enum OffscreenRenderingContextId { "2d", "bitmaprenderer", "webgl", "webgl2" }
// See also description: https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/getContext
interface OffscreenCanvas extends EventTarget {
    width: number;
    height: number;

    getContext(contextId: "2d", contextAttributes?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;

    getContext(contextId: "bitmaprenderer", contextAttributes?: WebGLContextAttributes): ImageBitmapRenderingContext | null;

    getContext(contextId: "webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;

    getContext(contextId: "webgl2", contextAttributes?: WebGLContextAttributes): WebGL2RenderingContext | null;

    convertToBlob(options?: { type?: string, quality?: number }): Promise<Blob>;

    transferToImageBitmap(): ImageBitmap;
}

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

// OffscreenCanvas should be a part of Transferable => extend all postMessage methods
interface Worker extends EventTarget, AbstractWorker {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface ServiceWorker extends EventTarget, AbstractWorker {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface MessagePort extends EventTarget {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface Window extends EventTarget, WindowSessionStorage, WindowLocalStorage, WindowConsole,
    GlobalEventHandlers, WindowOrWorkerGlobalScope, WindowEventHandlers {
    postMessage(message: any, targetOrigin: string, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

declare function postMessage(message: any, targetOrigin: string, transfer?: Array<Transferable | OffscreenCanvas>): void;

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};
