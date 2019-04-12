/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxPoint
 *
 * Implements a 2-dimensional vector with double precision coordinates.
 *
 * Constructor: mxPoint
 *
 * Constructs a new point for the optional x and y coordinates. If no
 * coordinates are given, then the default values for <x> and <y> are used.
 */
declare namespace mxgraph {
  export class mxPoint {
    constructor(x: number, y: number);

    /**
     * Variable: x
     *
     * Holds the x-coordinate of the point. Default is 0.
     */
    x: number;

    /**
     * Variable: y
     *
     * Holds the y-coordinate of the point. Default is 0.
     */
    y: number;

    /**
     * Function: equals
     *
     * Returns true if the given object equals this point.
     */
    equals(obj: mxPoint): boolean;

    /**
     * Function: clone
     *
     * Returns a clone of this <mxPoint>.
     */
    clone(): mxPoint;
  }
}