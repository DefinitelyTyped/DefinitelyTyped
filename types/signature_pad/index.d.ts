// Type definitions for signature_pad 2.3
// Project: https://github.com/szimek/signature_pad
// Definitions by: Abubaker Bashir <https://github.com/AbubakerB>
//                 Jason Mihalick <https://github.com/jrmihalick>
//                 Jaeyeon Lee <https://github.com/leejaedus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Project by: Szymon Nowak <https://github.com/szimek>
// TypeScript Version: 2.8

declare module 'signature_pad' {
	export class Point {
	  x: number;
	  y: number;
	  time: number;
	  color?: string;

	  constructor(x: number, y: number, time: number);

	  velocityFrom(start: Point): number;

	  distanceTo(start: Point): number;
	}

	export class CurveControl {
	  c1: Point;
	  c2: Point;

	  constructor(c1: Point, c2: Point);
	}

	export class Bezier {
	  startPoint: Point;
	  control1: CurveControl;
	  control2: CurveControl;
	  endPoint: Point;

	  constructor(startPoint: Point, control1: Point, control2: Point, endPoint: Point);

	  length(): number;

	  _point(t: number, start: number, c1: number, c2: number, end: number): number;
	}

	export interface SignaturePadOptions {
	  /**
	   * (float or function) Radius of a single dot.
	   */
	  dotSize?: number | Function
	  /**
	   * (float) Minimum width of a line.
	   * Defaults to 0.5.
	   */
	  minWidth?: number
	  /**
	   * (float) Maximum width of a line.
	   * Defaults to 2.5.
	   */
	  maxWidth?: number
	  /**
	   * (integer) Draw the next point at most once per every x milliseconds.
	   * Set it to 0 to turn off throttling.
	   * Defaults to 16.
	   */
	  throttle?: number
	  /**
	   * (integer) Add the next point only if the previous one is farther than x pixels.
	   * Defaults to 5.
	   */
	  minDistance?: number
	  /**
	   * Color used to clear the background.
	   * Can be any color format accepted by context.fillStyle.
	   * Defaults to "rgba(0,0,0,0)" (transparent black).
	   * Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
	   */
	  backgroundColor?: string
	  /**
	   * Color used to draw the lines.
	   * Can be any color format accepted by context.fillStyle.
	   * Defaults to "black".
	   */
	  penColor?: string
	  /**
	   * (float) Weight used to modify new velocity based on the previous velocity.
	   * Defaults to 0.7.
	   */
	  velocityFilterWeight?: number
	  /**
	   * Callback when stroke begin.
	   */
	  onBegin?: Function
	  /**
	   * Callback when stroke end.
	   */
	  onEnd?: Function
	}

	export class SignaturePad {
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
	  fromDataURL(dataUrl: string): void;

	  /**
	   *   Returns array of signature point groups
	   */
	  toData(): Array<Array<Point>>;

	  /**
	   *   Returns signature image as data URL.
	   *   If 'type' parameter is ommitted, PNG dataUrl is returned.
	   */
	  toDataURL(type?: string): string;

	  /**
	   *   Unbinds all event handlers
	   */
	  off(): void;

	  /**
	   *   Rebinds all event handlers
	   */
	  on(): void;

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

	export default SignaturePad;
  }