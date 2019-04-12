/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxConnector
 *
 * Extends <mxShape> to implement a connector shape. The connector
 * shape allows for arrow heads on either side.
 *
 * This shape is registered under <mxConstants.SHAPE_CONNECTOR> in
 * <mxCellRenderer>.
 *
 * Constructor: mxConnector
 *
 * Constructs a new connector shape.
 *
 * Parameters:
 *
 * points - Array of <mxPoints> that define the points. This is stored in
 * <mxShape.points>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * Default is 'black'.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
declare namespace mxgraph {
  export class mxConnector extends mxPolyline {

    constructor(points: mxPoint[], stroke: string, strokewidth?: number);

    /**
     * Function: updateBoundingBox
     *
     * Updates the <boundingBox> for this shape using <createBoundingBox> and
     * <augmentBoundingBox> and stores the result in <boundingBox>.
     */
    updateBoundingBox(): void;

    /**
     * Function: paintEdgeShape
     *
     * Paints the line shape.
     */
    paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

    /**
     * Function: createMarker
     *
     * Prepares the marker by adding offsets in pts and returning a function to
     * paint the marker.
     */
    createMarker(c: mxAbstractCanvas2D, pts: mxPoint[], source: boolean): mxMarker;

    /**
     * Function: augmentBoundingBox
     *
     * Augments the bounding box with the strokewidth and shadow offsets.
     */
    augmentBoundingBox(bbox: mxRectangle): void;
  }
}