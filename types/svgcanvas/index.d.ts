/** Options for creating Context or Element */
export interface SvgCanvasOptions {
    /** width of your canvas (defaults to 500) */
    width?: number;
    /** height of your canvas (defaults to 500) */
    height?: number;
    /** existing Context2D to wrap around */
    ctx?: CanvasRenderingContext2D;
    /** enables canvas mirroring (get image data) (defaults to false) */
    enableMirroring?: boolean;
    /** the document object (defaults to the current document) */
    document?: Document;
    /** Enables debugging */
    debug?: boolean;
}

/** Canvas-like drawing context that generates SVG */
export class Context /*implements CanvasRenderingContext2D*/ {
    /** Creates the mock canvas context 500x500 px */
    constructor();
    /** Creates the mock canvas context */
    constructor(width: number, height: number);
    /** Creates the mock canvas context */
    constructor(options: SvgCanvasOptions);

    // Core serialization methods

    /**
     * Returns the serialized value of the svg so far.
     * @param fixNamedEntitie Standalone SVG doesn't support named entities, which document.createTextNode encodes. If true, we attempt to find all named entities and encode it as a numeric entity.
     */
    getSerializedSvg(fixNamedEntitie?: boolean): string;
    /** Returns the root svg. */
    getSvg(): SVGSVGElement;

    // History/debug API
    __history?: any[];
    debug?: boolean;

    // Standard CanvasRenderingContext2D properties
    canvas: HTMLCanvasElement;
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    globalAlpha: number;
    lineWidth: number;
    lineCap: CanvasLineCap;
    lineJoin: CanvasLineJoin;
    miterLimit: number;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    imageSmoothingEnabled: boolean;

    // Standard CanvasRenderingContext2D methods

    /** Will generate a group tag */
    save(): void;

    /** Sets current element to parent, or just root if already root */
    restore(): void;

    /**
     * Add the scaling transformation described by the arguments to the current transformation matrix.
     *
     * @param x The x argument represents the scale factor in the horizontal direction
     * @param y The y argument represents the scale factor in the vertical direction.
     * @see https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-scale
     */
    scale(x: number, y: number): void;

    /**
     * Rotate adds a rotation to the transformation matrix.
     *
     * @param angle The rotation angle, clockwise in radians. You can use degree * Math.PI / 180 to calculate a radian from a degree.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
     * @see https://www.w3.org/TR/css-transforms-1
     */
    rotate(angle: number): void;

    /**  GetTransform Returns a copy of the current transformation matrix, as a newly created DOMMAtrix Object */
    getTransform(): DOMMatrix;

    /**
     * Translate adds a translation transformation to the current matrix.
     *
     * @param x Distance to move in the horizontal direction. Positive values are to the right, and negative to the left.
     * @param y Distance to move in the vertical direction. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
     */
    translate(x: number, y: number): void;

    /**
     * Transform multiplies the current transformation with the matrix described by the arguments of this method.
     * This lets you scale, rotate, translate (move), and skew the context.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * ResetTransform resets the current transformation matrix to the identity matrix
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform
     */
    resetTransform(): void;

    /**
     * SetTransform changes the current transformation matrix to
     * the matrix given by the arguments as described below.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * SetTransform changes the current transformation matrix to
     * the matrix given by the arguments as described below.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
     */
    setTransform(transform?: DOMMatrix): void;

    /** Create a new Path Element */
    beginPath(): void;

    /** Closes the current path */
    closePath(): void;

    /**
     * Adds the move command to the current path element,
     * i the currentPathElement is not empty create a new path element
     */
    moveTo(x: number, y: number): void;

    /** Adds a line to command */
    lineTo(x: number, y: number): void;

    /** Add a bezier command */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    /** Adds a quadratic curve to command */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    /** Adds the arcTo to the current path */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    /** Arc command */
    arc(x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    /** Ellipse command */
    ellipse(
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        anticlockwise?: boolean,
    ): void;

    /** Adds a rectangle to the path. */
    rect(x: number, y: number, w: number, h: number): void;

    /** Adds a rectangle to the path. */
    roundRect(x: number, y: number, w: number, h: number, radii: number | [number, number, number, number]): void;

    /** Adds a rectangle element */
    fillRect(x: number, y: number, w: number, h: number): void;

    /** Draws a rectangle with no fill */
    strokeRect(x: number, y: number, w: number, h: number): void;

    /** "Clears" a canvas by just drawing a white rectangle in the current group. */
    clearRect(x: number, y: number, w: number, h: number): void;

    /** Sets fill properties on the current element */
    fill(): void;

    /** Sets the stroke property on the current element */
    stroke(): void;

    /** Generates a ClipPath from the clip command. */
    clip(): void;

    /** Creates a text element */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;

    /** Strokes text */
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;

    /** returns a TextMetrics object that contains information about the measured text */
    measureText(text: string): TextMetrics;

    /**
     * Adds a linear gradient to a defs tag.
     * Returns a canvas gradient object that has a reference to it's parent def
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

    /**
     * Adds a radial gradient to a defs tag.
     * Returns a canvas gradient object that has a reference to it's parent def
     */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;

    /** Generates a pattern tag */
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;

    /** Set the line dash.
     *  Reset to solid line using empty array.
     */
    setLineDash(segments: number[]): void;

    /**
     * Draws a canvas, image or mock context to this canvas.
     * Note that all svg dom manipulation uses node.childNodes rather than node.children for IE support.
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawimage
     */
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;

    /**
     * Draws a canvas, image or mock context to this canvas.
     * Note that all svg dom manipulation uses node.childNodes rather than node.children for IE support.
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawimage
     */
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;

    /**
     * Draws a canvas, image or mock context to this canvas.
     * Note that all svg dom manipulation uses node.childNodes rather than node.children for IE support.
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawimage
     */
    drawImage(
        image: CanvasImageSource,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
    ): void;

    // Additional non-standard APIs

    /**
     * @param {*} sx The x-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.
     * @param {*} sy The y-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.
     * @param {*} sw The width of the rectangle from which the ImageData will be extracted. Positive values are to the right, and negative to the left.
     * @param {*} sh The height of the rectangle from which the ImageData will be extracted. Positive values are down, and negative are up.
     * @param {Boolean} options.async Will return a Promise<ImageData> if true, must be set to true
     * @returns An ImageData object containing the image data for the rectangle of the canvas specified. The coordinates of the rectangle's top-left corner are (sx, sy), while the coordinates of the bottom corner are (sx + sw, sy + sh).
     */
    getImageData(sx: number, sy: number, sw: number, sh: number, options: { async: true }): Promise<ImageData>;

    /**
     * Clear entire canvas:
     * 1. save current transforms
     * 2. remove all the childNodes of the root g element
     */
    __clearCanvas(): void;
}

/** Mock DOM element representing a canvas with SVG output */
export class Element {
    constructor(options: SvgCanvasOptions);

    // Fields
    ctx: Context;
    wrapper: HTMLElement;
    svg: SVGSVGElement;

    // Properties
    get className(): string;
    set className(value: string);
    get tagName(): "CANVAS";
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get style(): CSSStyleDeclaration | undefined;
    set style(value: CSSStyleDeclaration | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);

    /** returns a DOMRect object providing information about the size of an element and its position relative to the viewport. */
    getBoundingClientRect(): DOMRect;

    /** returns a drawing context on the canvas. */
    getContext(kind: "2d"): Context | null;

    /** Generate an SVG Data URL synchronously. */
    toDataURL(
        type?: "image/svg+xml" | "" | null,
        encoderOptions?: number | null,
        options?: { async?: false } | null,
    ): string;

    /** Generate a Data URL asynchronously. */
    toDataURL(
        type: "image/svg+xml" | "image/jpeg" | "image/png" | "" | null | undefined,
        encoderOptions: number | null | undefined,
        options: { async: true },
    ): Promise<string>;

    /** creates a string containing a data-url */
    toObjectURL(): string;
}
