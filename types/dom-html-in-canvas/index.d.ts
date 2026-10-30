// HTML-in-Canvas (https://github.com/WICG/html-in-canvas), as shipped in Chrome 157.
// web-features: canvas-html
//
// Generated with microsoft/TypeScript-DOM-lib-generator from the Chromium IDL, so this package can be
// removed with no code changes once lib.dom.d.ts includes the API.
//
// Requires the "dom" lib and an explicit opt-in: "types": ["dom-html-in-canvas"]
// or /// <reference types="dom-html-in-canvas" />.

interface CanvasPaintEventInit extends EventInit {
    changedElements?: Element[];
}

interface DrawElementImageOptions {
    preserveElementGeometry?: boolean;
}

interface ElementGeometryUpdateEventInit extends EventInit {
    elements?: Element[];
}

interface ElementImageDefaultSize {
    height?: number;
    width?: number;
}

interface GPUDrawElementImageDestination extends GPUCopyExternalImageDestInfo {
    size?: GPUExtent3D;
}

interface GPUDrawElementImageSource {
    source: Element | ElementImage;
    sourceHeight?: number;
    sourceWidth?: number;
    sourceX?: number;
    sourceY?: number;
}

interface UpdateElementGeometryOptions {
    canvasClip?: DOMRectInit;
    canvasTransform?: DOMMatrixInit;
    preserveHitTestOrder?: boolean;
}

interface WebGLCopyElementImageConfig {
    height?: GLsizei;
    sheight?: GLfloat;
    swidth?: GLfloat;
    sx?: GLfloat;
    sy?: GLfloat;
    width?: GLsizei;
}

interface CanvasDrawElementImage {
    drawElementImage(
        element: Element | ElementImage,
        dx: number,
        dy: number,
        options?: DrawElementImageOptions,
    ): void;
    drawElementImage(
        element: Element | ElementImage,
        dx: number,
        dy: number,
        dwidth: number,
        dheight: number,
        options?: DrawElementImageOptions,
    ): void;
    drawElementImage(
        element: Element | ElementImage,
        sx: number,
        sy: number,
        swidth: number,
        sheight: number,
        dx: number,
        dy: number,
        options?: DrawElementImageOptions,
    ): void;
    drawElementImage(
        element: Element | ElementImage,
        sx: number,
        sy: number,
        swidth: number,
        sheight: number,
        dx: number,
        dy: number,
        dwidth: number,
        dheight: number,
        options?: DrawElementImageOptions,
    ): void;
}

interface CanvasPaintEvent extends Event {
    readonly changedElements: ReadonlyArray<Element>;
}

declare var CanvasPaintEvent: {
    prototype: CanvasPaintEvent;
    new(type: string, eventInitDict?: CanvasPaintEventInit): CanvasPaintEvent;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CanvasRenderingContext2D extends CanvasDrawElementImage {}

interface Document {
    createEvent(eventInterface: "CanvasPaintEvent"): CanvasPaintEvent;
    createEvent(eventInterface: "ElementGeometryUpdateEvent"): ElementGeometryUpdateEvent;
}

interface ElementGeometryUpdateEvent extends Event {
    readonly elements: ReadonlyArray<Element>;
}

declare var ElementGeometryUpdateEvent: {
    prototype: ElementGeometryUpdateEvent;
    new(type: string, eventInitDict?: ElementGeometryUpdateEventInit): ElementGeometryUpdateEvent;
};

interface ElementImage {
    close(): void;
}

declare var ElementImage: {
    prototype: ElementImage;
    new(): ElementImage;
};

interface GPUQueue {
    drawElementImageToTexture(source: GPUDrawElementImageSource, destination: GPUDrawElementImageDestination): void;
}

interface HTMLCanvasElementEventMap extends HTMLElementEventMap {
    "elementgeometryupdate": ElementGeometryUpdateEvent;
    "paint": CanvasPaintEvent;
}

interface HTMLCanvasElement {
    content: string;
    onelementgeometryupdate: ((this: HTMLCanvasElement, ev: ElementGeometryUpdateEvent) => any) | null;
    onpaint: ((this: HTMLCanvasElement, ev: CanvasPaintEvent) => any) | null;
    captureElementImage(element: Element): ElementImage;
    clearElementGeometry(element: Element | ElementImage): void;
    getElementImageDefaultSize(element: Element | ElementImage): ElementImageDefaultSize;
    getElementTransform(element: Element): DOMMatrix;
    requestPaint(): void;
    updateElementGeometry(element: Element | ElementImage, options?: UpdateElementGeometryOptions): void;
    addEventListener<K extends keyof HTMLCanvasElementEventMap>(
        type: K,
        listener: (this: HTMLCanvasElement, ev: HTMLCanvasElementEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof HTMLCanvasElementEventMap>(
        type: K,
        listener: (this: HTMLCanvasElement, ev: HTMLCanvasElementEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
}

interface OffscreenCanvas {
    clearElementGeometry(element: Element | ElementImage): void;
    getElementImageDefaultSize(element: Element | ElementImage): ElementImageDefaultSize;
    updateElementGeometry(element: Element | ElementImage, options?: UpdateElementGeometryOptions): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OffscreenCanvasRenderingContext2D extends CanvasDrawElementImage {}

interface WebGLRenderingContextBase {
    texElementSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        element: Element | ElementImage,
        config?: WebGLCopyElementImageConfig,
    ): void;
}
