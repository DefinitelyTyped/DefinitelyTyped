/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxRectangleShape
 *
 * Extends <mxShape> to implement a rectangle shape.
 * This shape is registered under <mxConstants.SHAPE_RECTANGLE>
 * in <mxCellRenderer>.
 *
 * Constructor: mxRectangleShape
 *
 * Constructs a new rectangle shape.
 *
 * Parameters:
 *
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */

declare namespace mxgraph {
  export class mxRectangleShape extends mxShape {

    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     * Function: isHtmlAllowed
     *
     * Returns true for non-rounded, non-rotated shapes with no glass gradient.
     */
    isHtmlAllowed(): boolean;

    /**
     * Function: paintBackground
     *
     * Generic background painting implementation.
     */
    paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);

    /**
     * Function: isRoundable
     *
     * Adds roundable support.
     */
    isRoundable(c?: mxAbstractCanvas2D, x?: number, y?: number, w?: number, h?: number);

    /**
     * Function: paintForeground
     *
     * Generic background painting implementation.
     */
    paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);
  }
}