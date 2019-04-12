/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxAbstractCanvas2D
 *
 * Base class for all canvases. A description of the public API is available in <mxXmlCanvas2D>.
 * All color values of <mxConstants.NONE> will be converted to null in the state.
 *
 * Constructor: mxAbstractCanvas2D
 *
 * Constructs a new abstract canvas.
 */

declare namespace mxgraph {
  export class mxAbstractCanvas2D {
    constructor();

    /**
     * Variable: state
     *
     * Holds the current state.
     */
    state: HTMLCanvasElement;

    /**
     * Variable: states
     *
     * Stack of states.
     */
    states: HTMLCanvasElement[];

    /**
     * Variable: path
     *
     * Holds the current path as an array.
     */
    path: string[];

    /**
     * Variable: rotateHtml
     *
     * Switch for rotation of HTML. Default is false.
     */
    rotateHtml: boolean;

    /**
     * Variable: lastX
     *
     * Holds the last x coordinate.
     */
    lastX: number;

    /**
     * Variable: lastY
     *
     * Holds the last y coordinate.
     */
    lastY: number;

    /**
     * Variable: moveOp
     *
     * Contains the string used for moving in paths. Default is 'M'.
     */
    moveOp: string;

    /**
     * Variable: lineOp
     *
     * Contains the string used for moving in paths. Default is 'L'.
     */
    lineOp: string;

    /**
     * Variable: quadOp
     *
     * Contains the string used for quadratic paths. Default is 'Q'.
     */
    quadOp: string;

    /**
     * Variable: curveOp
     *
     * Contains the string used for bezier curves. Default is 'C'.
     */
    curveOp: string;

    /**
     * Variable: closeOp
     *
     * Holds the operator for closing curves. Default is 'Z'.
     */
    closeOp: string;

    /**
     * Variable: pointerEvents
     *
     * Boolean value that specifies if events should be handled. Default is false.
     */
    pointerEvents: boolean;

    /**
     * Function: createUrlConverter
     *
     * Create a new <mxUrlConverter> and returns it.
     */
    createUrlConverter(): mxUrlConverter;

    /**
     * Function: reset
     *
     * Resets the state of this canvas.
     */
    reset(): void;

    /**
     * Function: createState
     *
     * Creates the state of the this canvas.
     */
    createState(): HTMLCanvasElement;

    /**
     * Function: format
     *
     * Rounds all numbers to integers.
     */
    format(value: number): number;

    /**
     * Function: addOp
     *
     * Adds the given operation to the path.
     */
    addOp(): void;

    /**
     * Function: rotatePoint
     *
     * Rotates the given point and returns the result as an <mxPoint>.
     */
    rotatePoint(x: number, y: number, theta: number, cx: number, cy: number);

    /**
     * Function: save
     *
     * Saves the current state.
     */
    save(): void;

    /**
     * Function: restore
     *
     * Restores the current state.
     */
    restore(): void;

    /**
     * Function: setLink
     *
     * Sets the current link. Hook for subclassers.
     */
    setLink(link: string): void;

    /**
     * Function: scale
     *
     * Scales the current state.
     */
    scale(value: number): void;

    /**
     * Function: translate
     *
     * Translates the current state.
     */
    translate(dx: number, dy: number): void;

    /**
     * Function: rotate
     *
     * Rotates the current state.
     */
    rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

    /**
     * Function: setAlpha
     *
     * Sets the current alpha.
     */
    setAlpha(value: number): void;

    /**
     * Function: setFillAlpha
     *
     * Sets the current solid fill alpha.
     */
    setFillAlpha(value: number): void;

    /**
     * Function: setStrokeAlpha
     *
     * Sets the current stroke alpha.
     */
    setStrokeAlpha(value: number): void;

    /**
     * Function: setFillColor
     *
     * Sets the current fill color.
     */
    setFillColor(value: string): void;

    /**
     * Function: setGradient
     *
     * Sets the current gradient.
     */
    setGradient(color1: string, color2: string, x: number, y: number, w: number, h: number, direction: string, alpha1: number, alpha2: number): void;

    /**
     * Function: setStrokeColor
     *
     * Sets the current stroke color.
     */
    setStrokeColor(value: string);

    /**
     * Function: setStrokeWidth
     *
     * Sets the current stroke width.
     */
    setStrokeWidth(value: number);

    /**
     * Function: setDashed
     *
     * Enables or disables dashed lines.
     */
    setDashed(value: boolean, fixDash: boolean): void;

    /**
     * Function: setDashPattern
     *
     * Sets the current dash pattern.
     */
    setDashPattern(value: boolean): void;
    /**
     * Function: setLineCap
     *
     * Sets the current line cap.
     */
    setLineCap(value: string): void;

    /**
     * Function: setLineJoin
     *
     * Sets the current line join.
     */
    setLineJoin(value: string): void;

    /**
     * Function: setMiterLimit
     *
     * Sets the current miter limit.
     */
    setMiterLimit(value: number): void;

    /**
     * Function: setFontColor
     *
     * Sets the current font color.
     */
    setFontColor(value: string): void;

    /**
     * Function: setFontColor
     *
     * Sets the current font color.
     */
    setFontBackgroundColor(value: string): void;

    /**
     * Function: setFontColor
     *
     * Sets the current font color.
     */
    setFontBorderColor(value: string): void;

    /**
     * Function: setFontSize
     *
     * Sets the current font size.
     */
    setFontSize(value: number): void;

    /**
     * Function: setFontFamily
     *
     * Sets the current font family.
     */
    setFontFamily(value: string): void;

    /**
     * Function: setFontStyle
     *
     * Sets the current font style.
     */
    setFontStyle(value: string): void;

    /**
     * Function: setShadow
     *
     * Enables or disables and configures the current shadow.
     */
    setShadow(enabled: boolean): void;

    /**
     * Function: setShadowColor
     *
     * Enables or disables and configures the current shadow.
     */
    setShadowColor(value: string): void;

    /**
     * Function: setShadowAlpha
     *
     * Enables or disables and configures the current shadow.
     */
    setShadowAlpha(value: boolean): void;

    /**
     * Function: setShadowOffset
     *
     * Enables or disables and configures the current shadow.
     */
    setShadowOffset(dx: number, dy: number): void;

    /**
     * Function: begin
     *
     * Starts a new path.
     */
    begin();

    /**
     * Function: moveTo
     *
     *  Moves the current path the given coordinates.
     */
    moveTo(x: number, y: number): void;

    /**
     * Function: lineTo
     *
     * Draws a line to the given coordinates. Uses moveTo with the op argument.
     */
    lineTo(x: number, y: number): void;

    /**
     * Function: quadTo
     *
     * Adds a quadratic curve to the current path.
     */
    quadTo(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Function: curveTo
     *
     * Adds a bezier curve to the current path.
     */
    curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Function: arcTo
     *
     * Adds the given arc to the current path. This is a synthetic operation that
     * is broken down into curves.
     */
    arcTo(rx: number, ry: number, angle: number, largeArcFlag: number, sweepFlag: number, x: number, y: number): void;

    /**
     * Function: close
     *
     * Closes the current path.
     */
    close(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Function: end
     *
     * Empty implementation for backwards compatibility. This will be removed.
     */
    end(): void;
  }
}