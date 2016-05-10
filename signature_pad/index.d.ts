// Type definitions for signature_pad
// Project: https://github.com/szimek/signature_pad
// Definitions by: Abubaker Bashir <https://github.com/AbubakerB>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Project by: Szymon Nowak <https://github.com/szimek>

declare namespace SignaturePad {
	class Point {
	    x: number;
	    y: number;
	    time: number;
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
	    constructor(startPoint: Point, control1: Point, control2: Point, endPoint: Point);
	    length(): number;
	    _point(t: number, start: number, c1: number, c2: number, end: number): number;
	}

 	interface SignaturePadOptions {
	    /**
	    *   (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.
	    */
	    velocityFilterWeight?: number;
	    /**
	    *   (float) Minimum width of a line. Defaults to 0.5.
	    */
	    minWidth?: number;
	    /**
	    *   (float) Maximum width of a line. Defaults to 2.5.
	    */
	    maxWidth?: number;
	    /**
	    *   (float or function) Radius of a single dot.
	    */
	    dotSize?: Function;
	    /**
	    *   (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle.
	    *   Defaults to "black".
	    */
	    penColor?: string;
	    /**
	    *   (string) Color used to clear the background. Can be any color format accepted by context.fillStyle.
	    *   Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)"
	    *   (opaque white) if you'd like to save signatures as JPEG images.
	    */
	    backgroundColor?: string;
	    /**
	    *   (function) Callback when stroke begin.
	    */
	    onEnd?: Function;
	    /**
	    *   (function) Callback when stroke end.
	    */
	    onBegin?: Function;
	}
}

declare class SignaturePad {
    points: Array<SignaturePad.Point>;
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

    constructor(canvas: Element, options?: SignaturePad.SignaturePadOptions);
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
    fromDataURL(dataUrl: string): void;
    /**
    *   Returns signature image as data URL
    */
    toDataURL(): string;

    _strokeBegin(event: Event): void;
    _strokeUpdate(event: Event): void;
    _strokeDraw(point: SignaturePad.Point): void;
    _strokeEnd(event: Event): void;
    _handleMouseEvents(): void;
    _handleTouchEvents(): void;
    _reset(): void;
    _createPoint(event: Event): SignaturePad.Point;
    _addPoint(point: SignaturePad.Point): void;
    _calculateCurveControlPoints(point1: SignaturePad.Point, point2: SignaturePad.Point, point3: SignaturePad.Point): void;

    _addCurve(curve: SignaturePad.Bezier): void;
    _drawPoint(x: number, y: number, size: number): void;
    _drawCurve(curve: SignaturePad.Bezier, startWidth: number, endWidth: number): void;
    _strokeWidth(velocity: number): void;
}
