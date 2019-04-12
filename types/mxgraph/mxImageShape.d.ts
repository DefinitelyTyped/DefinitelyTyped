/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxImageShape
 *
 * Extends <mxShape> to implement an image shape. This shape is registered
 * under <mxConstants.SHAPE_IMAGE> in <mxCellRenderer>.
 *
 * Constructor: mxImageShape
 *
 * Constructs a new image shape.
 *
 * Parameters:
 *
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * image - String that specifies the URL of the image. This is stored in
 * <image>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 0. This is stored in <strokewidth>.
 */
declare namespace mxgraph {
  export class mxImageShape extends mxRectangleShape {

    constructor(bounds: mxRectangle, image: mxImage, fill: string, stroke: string, strokewidth?: number);


    /**
     * Variable: preserveImageAspect
     *
     * Switch to preserve image aspect. Default is true.
     */
    preserveImageAspect: boolean;

    /**
     * Function: getSvgScreenOffset
     *
     * Disables offset in IE9 for crisper image output.
     */
    getSvgScreenOffset(): 0 | 0.5;

    /**
     * Function: apply
     *
     * Overrides <mxShape.apply> to replace the fill and stroke colors with the
     * respective values from <mxConstants.STYLE_IMAGE_BACKGROUND> and
     * <mxConstants.STYLE_IMAGE_BORDER>.
     *
     * Applies the style of the given <mxCellState> to the shape. This
     * implementation assigns the following styles to local fields:
     *
     * - <mxConstants.STYLE_IMAGE_BACKGROUND> => fill
     * - <mxConstants.STYLE_IMAGE_BORDER> => stroke
     *
     * Parameters:
     *
     * state - <mxCellState> of the corresponding cell.
     */
    apply(state: mxCellState): void;

    /**
     * Function: isHtmlAllowed
     *
     * Returns true if HTML is allowed for this shape. This implementation always
     * returns false.
     */
    isHtmlAllowed(): boolean;

    /**
     * Function: createHtml
     *
     * Creates and returns the HTML DOM node(s) to represent
     * this shape. This implementation falls back to <createVml>
     * so that the HTML creation is optional.
     */
    createHtml(): HTMLElement;

    /**
     * Function: isRoundable
     *
     * Disables inherited roundable support.
     */
    isRoundable(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): boolean;

    /**
     * Function: paintVertexShape
     *
     * Generic background painting implementation.
     */
    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);

    /**
     * Function: redraw
     *
     * Overrides <mxShape.redraw> to preserve the aspect ratio of images.
     */
    redrawHtmlShape(): void;
  }
}