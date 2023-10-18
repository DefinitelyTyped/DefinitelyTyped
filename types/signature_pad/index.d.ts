declare namespace SignaturePad {
    class Point {
        x: number;
        y: number;
        time: number;
        color?: string | undefined;

        constructor(x: number, y: number, time: number);

        velocityFrom(start: Point): number;

        distanceTo(start: Point): number;
    }

    class CurveControl {
        c1: Point;
        c2: Point;

        constructor(c1: Point, c2: Point);
    }

    class Bezier {
        startPoint: Point;
        control1: CurveControl;
        control2: CurveControl;
        endPoint: Point;
        startWidth: number;
        endWidth: number;

        constructor(startPoint: Point, control1: Point, control2: Point, endPoint: Point);

        length(): number;

        _point(t: number, start: number, c1: number, c2: number, end: number): number;
    }

    interface SignaturePadOptions {
        /*
         * (float or function) Radius of a single dot.
         */
        dotSize?: number | (() => number) | undefined;

        /*
         * (float) Minimum width of a line. Defaults to 0.5.
         */
        minWidth?: number | undefined;

        /*
         * (float) Maximum width of a line. Defaults to 2.5.
         */
        maxWidth?: number | undefined;

        /*
         * (integer) Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling. Defaults to 16.
         */
        throttle?: number | undefined;

        /*
         * (integer) Add the next point only if the previous one is farther than x pixels. Defaults to 5.
         */
        minDistance?: number | undefined;

        /*
         * (string) Color used to clear the background. Can be any color format accepted by context.fillStyle. Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
         */
        backgroundColor?: string | undefined;

        /*
         * (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
         */
        penColor?: string | undefined;

        /*
         * (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.
         */
        velocityFilterWeight?: number | undefined;

        /*
         * (function) Callback when stroke begin.
         */
        onBegin?: ((event: MouseEvent) => void) | undefined;

        /*
         * (function) Callback when stroke end.
         */
        onEnd?: ((event: MouseEvent) => void) | undefined;
    }
}

declare class SignaturePad {
    backgroundColor: string;
    canvas: HTMLCanvasElement;
    dotSize: number | (() => number);
    maxWidth: number;
    minDistance: number;
    minWidth: number;
    options: SignaturePad.SignaturePadOptions;
    penColor: string;
    throttle: number;
    velocityFilterWeight: number;
    _ctx: CanvasRenderingContext2D;
    _data: Array<{
        color: string;
        points: Array<SignaturePad.Point>;
    }>;
    _isEmpty: boolean;
    _lastVelocity: number;
    _lastWidth: number;
    _mouseButtonDown: boolean;
    _points: Array<SignaturePad.Point>;
    /**
     * Callback when stroke begin
     */
    onBegin: (event: MouseEvent) => void;
    /**
     * Callback when stroke end.
     */
    onEnd: (event: MouseEvent) => void;
    /**
     *   Clears the canvas
     */
    clear: () => void;
    /**
     *   Draws signature image from data URL
     */
    fromDataURL: (
        dataUrl: string,
        options?: {
            ratio?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            callback?: ((error?: ErrorEvent) => void) | undefined;
        },
    ) => void;
    /**
     *   Returns signature image as data URL.
     *   If 'type' parameter is ommitted, PNG dataUrl is returned.
     */
    toDataURL: (type?: string, encoderOptions?: any) => string;
    /**
     *   Rebinds all event handlers
     */
    on: () => void;
    /**
     *   Unbinds all event handlers
     */
    off: () => void;
    /**
     *   Returns true if canvas is empty, otherwise returns false
     */
    isEmpty: () => boolean;
    /**
     *   Draws signature image from array of signature point groups
     */
    fromData: (pointGroups: Array<Array<SignaturePad.Point>>) => void;
    /**
     *   Returns array of signature point groups
     */
    toData: () => Array<Array<SignaturePad.Point>>;
    /**
     * Privates
     */
    _handleMouseDown: (event: MouseEvent) => void;
    _handleMouseMove: (event: MouseEvent) => void;
    _handleMouseUp: (event: MouseEvent) => void;
    _handleTouchStart: (event: MouseEvent) => void;
    _handleTouchMove: (event: MouseEvent) => void;
    _handleTouchEnd: (event: MouseEvent) => void;
    _strokeMoveUpdate: () => void;
    _strokeBegin: (event: MouseEvent) => void;
    _strokeUpdate: (event: MouseEvent) => void;
    _strokeEnd: (event: MouseEvent) => void;
    _handleMouseEvents: (event: MouseEvent) => void;
    _handleTouchEvents: (event: TouchEvent) => void;
    _reset: () => void;
    _createPoint: (x: number, y: number) => SignaturePad.Point;
    _addPoint: (point: SignaturePad.Point) => SignaturePad.Bezier | null;
    _calculateCurveWidths: (
        startPoint: SignaturePad.Point,
        endPoint: SignaturePad.Point,
    ) => { end: number; start: number };
    _strokeWidth: (velocity: number) => number;
    _drawCurveSegment: (x: number, y: number, width: number) => void;
    _drawCurve: (_a: { color: string; curve: SignaturePad.Bezier }) => void;
    _drawDot: (_a: { color: string; point: SignaturePad.Point }) => void;
    _fromData: (
        pointGroups: Array<Array<SignaturePad.Point>>,
        drawCurve: (_a: { color: string; curve: SignaturePad.Bezier }) => void,
        drawDot: (_a: { color: string; point: SignaturePad.Point }) => void,
    ) => void;
    _toSVG: () => string;

    constructor(canvas: HTMLCanvasElement, options?: SignaturePad.SignaturePadOptions);
}

export = SignaturePad;

export as namespace SignaturePad;
