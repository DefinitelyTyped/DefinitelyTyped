// Type definitions for signature_pad
// Project: https://github.com/szimek/signature_pad
// Definitions by: Abubaker Bashir <https://github.com/AbubakerB>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Project by: Szymon Nowak <https://github.com/szimek>

declare class Point {
    x: number;
    y: number;
    time: number;
    constructor(x: number, y: number, time: number);
    velocityFrom(start: Point): number;
    distanceTo(start: Point): number;
}

declare class CurveControl {
    c1: Point;
    c2: Point;
    constructor(c1: Point, c2: Point);
}

declare class Bezier {
    startPoint: Point;
    control1: CurveControl;
    control2: CurveControl;
    endPoint: Point;
    constructor(startPoint, control1, control2, endPoint);
    length(): number;
    _point(t: number, start: number, c1: number, c2: number, end: number): number;
}

declare class SignaturePadOptions {
    /**
    *   (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.
    */
    velocityFilterWeight: number;
    /**
    *   (float) Minimum width of a line. Defaults to 0.5.
    */
    minWidth: number;
    /**
    *   (float) Maximum width of a line. Defaults to 2.5.
    */
    maxWidth: number;
    /**
    *   (float or function) Radius of a single dot.
    */
    dotSize: Function;
    /**
    *   (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle.
    *   Defaults to "black".
    */
    penColor: string;
    /**
    *   (string) Color used to clear the background. Can be any color format accepted by context.fillStyle.
    *   Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)"
    *   (opaque white) if you'd like to save signatures as JPEG images.
    */
    backgroundColor: string;
    /**
    *   (function) Callback when stroke begin.
    */
    onEnd: Function;
    /**
    *   (function) Callback when stroke end.
    */
    onBegin: Function;
}

declare class SignaturePad {
    points: Array<Point>;
    _lastVelocity: number;
    _lastWidth: number;
    _isEmpty: boolean;
    _mouseButtonDown: boolean;
    _ctx: CanvasRenderingContext2D;
    _canvas: HTMLCanvasElement;
    velocityFilterWeight: number;
    minWidth: number;
    maxWidth: number;
    dotSize: Function;
    penColor: string;
    backgroundColor: string;
    onEnd: Function;
    onBegin: Function;

    constructor(canvas: Element, options?: SignaturePadOptions);
    /**
    *   Clears the canvas
    */
    clear(): void;
    /**
    *   Returns true if canvas is empty, otherwise returns false
    */
    isEmpty(): boolean;
    /**
    *   Draws signature image from data URL
    */
    fromDataURL(dataUrl: string);
    /**
    *   Returns signature image as data URL
    */
    toDataURL(): string;

    _strokeBegin(event: Event): void;
    _strokeUpdate(event: Event): void;
    _strokeDraw(point: Point): void;
    _strokeEnd(event: Event): void;
    _handleMouseEvents(): void;
    _handleTouchEvents(): void;
    _reset(): void;
    _createPoint(event: Event): Point;
    _addPoint(point: Point): void;
    _calculateCurveControlPoints(point1: Point, point2: Point, point3: Point): void;

    _addCurve(curve: Bezier): void;
    _drawPoint(x: number, y: number, size: number): void;
    _drawCurve(curve: Bezier, startWidth: number, endWidth: number): void;
    _strokeWidth(velocity: number): void;
}
