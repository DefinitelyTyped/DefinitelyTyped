/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxPolyline
 *
 * Extends <mxShape> to implement a polyline (a line with multiple points).
 * This shape is registered under <mxConstants.SHAPE_POLYLINE> in
 * <mxCellRenderer>.
 *
 * Constructor: mxPolyline
 *
 * Constructs a new polyline shape.
 *
 * Parameters:
 *
 * points - Array of <mxPoints> that define the points. This is stored in
 * <mxShape.points>.
 * stroke - String that defines the stroke color. Default is 'black'. This is
 * stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
declare namespace mxgraph {
  export class mxPolyline extends mxShape {
    constructor(points: mxPoint[], stroke: string, strokewidth?: number);

    /**
     * Function: getRotation
     *
     * Returns 0.
     */
    getRotation(): number;

    /**
     * Function: getShapeRotation
     *
     * Returns 0.
     */
    getShapeRotation(): number;

    /**
     * Function: isPaintBoundsInverted
     *
     * Returns false.
     */
    isPaintBoundsInverted(): boolean;

    /**
     * Function: paintEdgeShape
     *
     * Paints the line shape.
     */
    paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

    /**
     * Function: paintLine
     *
     * Paints the line shape.
     */
    paintLine(c: mxAbstractCanvas2D, pts: mxPoint[], rounded?: boolean): void;

    /**
     * Function: paintLine
     *
     * Paints the line shape.
     */
    paintCurvedLine(c: mxAbstractCanvas2D, pts: mxPoint[]): void;
  }
}