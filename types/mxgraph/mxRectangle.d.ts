/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxRectangle
 *
 * Extends <mxPoint> to implement a 2-dimensional rectangle with double
 * precision coordinates.
 *
 * Constructor: mxRectangle
 *
 * Constructs a new rectangle for the optional parameters. If no parameters
 * are given then the respective default values are used.
 */
declare namespace mxgraph {
  export class mxRectangle extends mxPoint {
    constructor(x: number, y: number, width: number, height: number);

    /**
     * Variable: width
     *
     * Holds the width of the rectangle. Default is 0.
     */
    width: number;

    /**
     * Variable: height
     *
     * Holds the height of the rectangle. Default is 0.
     */
    height: number;

    /**
     * Function: setRect
     *
     * Sets this rectangle to the specified values
     */
    setRect(x: number, y: number, w: number, h: number);

    /**
     * Function: getCenterX
     *
     * Returns the x-coordinate of the center point.
     */
    getCenterX(): number;

    /**
     * Function: getCenterY
     *
     * Returns the y-coordinate of the center point.
     */
    getCenterY(): number;

    /**
     * Function: add
     *
     * Adds the given rectangle to this rectangle.
     */
    add(rect: mxRectangle): void;

    /**
     * Function: intersect
     *
     * Changes this rectangle to where it overlaps with the given rectangle.
     */
    intersect(rect: mxRectangle): void;

    /**
     * Function: grow
     *
     * Grows the rectangle by the given amount, that is, this method subtracts
     * the given amount from the x- and y-coordinates and adds twice the amount
     * to the width and height.
     */
    grow(amount: number): void;

    /**
     * Function: getPoint
     *
     * Returns the top, left corner as a new <mxPoint>.
     */
    getPoint(): mxPoint;

    /**
     * Function: rotate90
     *
     * Rotates this rectangle by 90 degree around its center point.
     */
    rotate90(): void;

    /**
     * Function: equals
     *
     * Returns true if the given object equals this rectangle.
     */
    equals(obj: mxRectangle): boolean;

    /**
     * Function: fromRectangle
     *
     * Returns a new <mxRectangle> which is a copy of the given rectangle.
     */
    fromRectangle(rect: mxRectangle): mxRectangle;

  }
}