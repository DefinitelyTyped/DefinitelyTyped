/**
 * SVGCanvas - Draw on SVG using Canvas's 2D Context API
 *
 * This library provides a Canvas 2D Context API implementation that generates SVG
 * instead of drawing to a bitmap canvas.
 *
 * @example
 * ```javascript
 * import { Context } from 'svgcanvas';
 *
 * const ctx = new Context({ width: 500, height: 500 });
 * ctx.fillStyle = 'red';
 * ctx.fillRect(10, 10, 100, 100);
 * const svgElement = ctx.getSvg();
 * document.body.appendChild(svgElement);
 * ```
 */

/**
 * Options for creating a Context or Element
 */
export interface C2SOptions {
    /** Width of the canvas (default: 500) */
    width?: number;
    /** Height of the canvas (default: 500) */
    height?: number;
    /** Enable mirroring for getImageData (default: false) */
    enableMirroring?: boolean;
    /** Document object (default: global document) */
    document?: Document;
    /** Existing Context2D to wrap around */
    ctx?: CanvasRenderingContext2D;
    /** Enable debug logging */
    debug?: boolean;
}

/**
 * CanvasGradient for creating color gradients
 */
export interface CanvasGradient {
    /**
     * Adds a color stop to the gradient
     * @param offset - A number between 0 and 1
     * @param color - A CSS color string
     */
    addColorStop(offset: number, color: string): void;
}

/**
 * CanvasPattern for creating pattern fills
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CanvasPattern {}

/**
 * TextMetrics - measurement results from measureText()
 */
export interface TextMetrics {
    width: number;
}

/**
 * Context - implements most of CanvasRenderingContext2D API but generates SVG
 *
 * This class provides a Canvas 2D-like API that generates SVG elements instead
 * of drawing to a bitmap. Most standard Canvas 2D methods are supported.
 */
export class Context {
    // Canvas properties
    readonly canvas: Context;
    width: number;
    height: number;

    // Style properties
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    lineWidth: number;
    lineCap: CanvasLineCap;
    lineJoin: CanvasLineJoin;
    miterLimit: number;
    globalAlpha: number;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    shadowColor: string;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    lineDash: string | null;

    constructor(options?: C2SOptions);
    constructor(width: number, height: number);

    // Drawing state
    save(): void;
    restore(): void;

    // Transformations
    scale(x: number, y?: number): void;
    rotate(angle: number): void;
    translate(x: number, y: number): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(matrix: DOMMatrix): void;
    getTransform(): DOMMatrix;
    resetTransform(): void;

    // Path methods
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    ellipse(
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        counterClockwise?: boolean,
    ): void;
    rect(x: number, y: number, width: number, height: number): void;
    roundRect(x: number, y: number, w: number, h: number, radii: number | [number, number, number, number]): void;

    // Drawing methods
    fill(): void;
    stroke(): void;
    clip(): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    clearRect(x: number, y: number, width: number, height: number): void;

    // Text methods
    fillText(text: string, x: number, y: number): void;
    strokeText(text: string, x: number, y: number): void;
    measureText(text: string): TextMetrics;

    // Image methods - supports Context instances for nested SVG
    drawImage(
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap | Context,
        dx: number,
        dy: number,
    ): void;
    drawImage(
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap | Context,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
    ): void;
    drawImage(
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap | Context,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
    ): void;

    // Gradient and pattern methods
    createLinearGradient(x1: number, y1: number, x2: number, y2: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    createPattern(
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap | Context,
        repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat",
    ): CanvasPattern | null;

    // Line dash
    setLineDash(dashArray: ReadonlyArray<number> | null): void;

    // Image data methods (async versions)
    getImageData(
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        options?: { async?: boolean },
    ): ImageData | Promise<ImageData>;
    createImageData(): ImageData;
    putImageData(): void;

    // SVG-specific methods
    /**
     * Returns the SVG as a serialized string
     * @param fixNamedEntities - If true, fixes named entities to numbered entities
     */
    getSerializedSvg(fixNamedEntities?: boolean): string;

    /**
     * Returns the SVG root element
     */
    getSvg(): SVGSVGElement;
}

/**
 * Element - A canvas-like element that uses SVG
 *
 * This class provides a wrapper that mimics HTMLCanvasElement behavior
 * while using SVG as the underlying rendering technology.
 */
export class Element {
    ctx: Context;
    svg: SVGSVGElement;
    wrapper: HTMLDivElement;
    className: string;
    readonly tagName: string;
    width: number;
    height: number;
    style: CSSStyleDeclaration;
    id: string;

    constructor(options?: C2SOptions);

    /**
     * Get the 2D rendering context
     */
    getContext(type: "2d"): Context;

    /**
     * Returns an object URL for the SVG
     * Remember to call URL.revokeObjectURL when done
     */
    toObjectURL(): string;

    /**
     * Returns a data URI containing a representation of the image
     * @param type - Image format (image/svg+xml, image/jpeg, image/png)
     * @param encoderOptions - Quality for lossy formats (0-1)
     * @param options - If async is true, returns a Promise
     */
    toDataURL(type?: string, encoderOptions?: number, options?: { async?: boolean }): string | Promise<string>;

    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    getElement(): HTMLDivElement;
    getAttribute(prop: string): string | null;
    setAttribute(prop: string, val: string): void;
    getBoundingClientRect(): DOMRect;
}
