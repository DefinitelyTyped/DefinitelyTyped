// https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-transfercontroltooffscreen
interface HTMLCanvasElement {
    transferControlToOffscreen(): OffscreenCanvas;
}

// https://html.spec.whatwg.org/multipage/canvas.html#offscreencanvasrenderingcontext2d
interface OffscreenCanvasRenderingContext2D
    extends
        CanvasState,
        CanvasTransform,
        CanvasCompositing,
        CanvasImageSmoothing,
        CanvasFillStrokeStyles,
        CanvasShadowStyles,
        CanvasFilters,
        CanvasRect,
        CanvasDrawPath,
        CanvasText,
        CanvasDrawImage,
        CanvasImageData,
        CanvasPathDrawingStyles,
        CanvasTextDrawingStyles,
        CanvasPath
{
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

    getContext(
        contextId: "2d",
        contextAttributes?: CanvasRenderingContext2DSettings,
    ): OffscreenCanvasRenderingContext2D | null;

    getContext(
        contextId: "bitmaprenderer",
        contextAttributes?: WebGLContextAttributes,
    ): ImageBitmapRenderingContext | null;

    getContext(contextId: "webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;

    getContext(contextId: "webgl2", contextAttributes?: WebGLContextAttributes): WebGL2RenderingContext | null;

    convertToBlob(options?: { type?: string | undefined; quality?: number | undefined }): Promise<Blob>;

    transferToImageBitmap(): ImageBitmap;
}

// https://html.spec.whatwg.org/multipage/canvas.html#canvasdrawimage
interface CanvasDrawImage {
    drawImage(image: CanvasImageSource | OffscreenCanvas, dx: number, dy: number): void;

    drawImage(image: CanvasImageSource | OffscreenCanvas, dx: number, dy: number, dw: number, dh: number): void;

    drawImage(
        image: CanvasImageSource | OffscreenCanvas,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
    ): void;
}

// https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-createimagebitmap
declare function createImageBitmap(image: ImageBitmapSource | OffscreenCanvas): Promise<ImageBitmap>;
declare function createImageBitmap(
    image: ImageBitmapSource | OffscreenCanvas,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
): Promise<ImageBitmap>;

// OffscreenCanvas should be a part of Transferable => extend all postMessage methods
interface Worker {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface DedicatedWorkerGlobalScope {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface ServiceWorker {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface MessagePort {
    postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface Window {
    postMessage(message: any, targetOrigin: string, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

declare function postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Array<Transferable | OffscreenCanvas>,
): void;

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};

interface WebGL2RenderingContextBase {
    texImage3D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        border: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
    texSubImage3D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        zoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
}

interface WebGL2RenderingContextOverloads {
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        width: GLsizei,
        height: GLsizei,
        border: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
}

interface WebGLRenderingContextOverloads {
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource | OffscreenCanvas,
    ): void;
}
