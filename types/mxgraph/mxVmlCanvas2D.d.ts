/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 *
 * Class: mxVmlCanvas2D
 *
 * Implements a canvas to be used for rendering VML. Here is an example of implementing a
 * fallback for SVG images which are not supported in VML-based browsers.
 *
 * (code)
 * var mxVmlCanvas2DImage = mxVmlCanvas2D.prototype.image;
 * mxVmlCanvas2D.prototype.image(x, y, w, h, src, aspect, flipH, flipV)
 * {
 *   if (src.substring(src.length - 4, src.length) == '.svg')
 *   {
 *     src = 'http://www.jgraph.com/images/mxgraph.gif';
 *   }
 *
 *   mxVmlCanvas2DImage.apply(this, arguments);
 * };
 * (end)
 *
 * To disable anti-aliasing in the output, use the following code.
 *
 * (code)
 * document.createStyleSheet().cssText = mxClient.VML_PREFIX + '\\:*{antialias:false;)}';
 * (end)
 *
 * A description of the public API is available in <mxXmlCanvas2D>. Note that
 * there is a known issue in VML where gradients are painted using the outer
 * bounding box of rotated shapes, not the actual bounds of the shape. See
 * also <text> for plain text label restrictions in shapes for VML.
 */

declare namespace mxgraph {
  export class mxVmlCanvas2D extends mxAbstractCanvas2D {
    constructor(root: Element);


    /**
     * Variable: path
     *
     * Holds the current DOM node.
     */
    node: Element;

    /**
     * Variable: textEnabled
     *
     * Specifies if text output should be enabledetB. Default is true.
     */
    textEnabled: boolean;

    /**
     * Variable: moveOp
     *
     * Contains the string used for moving in paths. Default is 'm'.
     */
    moveOp: string;

    /**
     * Variable: lineOp
     *
     * Contains the string used for moving in paths. Default is 'l'.
     */
    lineOp: string;

    /**
     * Variable: curveOp
     *
     * Contains the string used for bezier curves. Default is 'c'.
     */
    curveOp: string;

    /**
     * Variable: closeOp
     *
     * Holds the operator for closing curves. Default is 'x e'.
     */
    closeOp: string;

    /**
     * Variable: rotatedHtmlBackground
     *
     * Background color for rotated HTML. Default is ''. This can be set to eg.
     * white to improve rendering of rotated text in VML for IE9.
     */
    rotatedHtmlBackground: string;

    /**
     * Variable: vmlScale
     *
     * Specifies the scale used to draw VML shapes.
     */
    vmlScale: number;

    /**
     * Function: createElement
     *
     * Creates the given element using the document.
     */
    createElement(name: string): HTMLElement;

    /**
     * Function: createVmlElement
     *
     * Creates a new element using <createElement> and prefixes the given name with
     * <mxClient.VML_PREFIX>.
     */
    createVmlElement(name: string): HTMLElement;

    /**
     * Function: addNode
     *
     * Adds the current node to the <root>.
     */
    addNode(filled: boolean, stroked: boolean): void;

    /**
     * Function: createTransparentFill
     *
     * Creates a transparent fill.
     */
    createTransparentFill(): HTMLElement;

    /**
     * Function: createFill
     *
     * Creates a fill for the current state.
     */
    createFill(): HTMLElement;
    /**
     * Function: createStroke
     *
     * Creates a fill for the current state.
     */
    createStroke(): HTMLElement;

    /**
     * Function: getVmlDashPattern
     *
     * Returns a VML dash pattern for the current dashPattern.
     * See http://msdn.microsoft.com/en-us/library/bb264085(v=vs.85).aspx
     */
    getVmlDashStyle(): string;

    /**
     * Function: createShadow
     *
     * Creates a shadow for the given node.
     */
    createShadow(node: Element, filled: boolean, stroked: boolean): Element;

    /**
     * Function: createShadowFill
     *
     * Creates the fill for the shadow.
     */
    createShadowFill(): HTMLElement;

    /**
     * Function: createShadowStroke
     *
     * Creates the stroke for the shadow.
     */
    createShadowStroke(): HTMLElement;

    /**
     * Function: rotate
     *
     * Sets the rotation of the canvas. Note that rotation cannot be concatenated.
     */
    rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

    /**
     * Function: begin
     *
     * Extends superclass to create path.
     */
    begin(): void;

    /**
     * Function: quadTo
     *
     * Replaces quadratic curve with bezier curve in VML.
     */
    quadTo(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Function: createRect
     *
     * Sets the glass gradient.
     */
    createRect(nodeName: string, x: number, y: number, w: number, h: number): HTMLElement;

    /**
     * Function: rect
     *
     * Sets the current path to a rectangle.
     */
    rect(x: number, y: number, w: number, h: number): void;

    /**
     * Function: roundrect
     *
     * Sets the current path to a rounded rectangle.
     */
    roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

    /**
     * Function: ellipse
     *
     * Sets the current path to an ellipse.
     */
    ellipse(x: number, y: number, w: number, h: number): void;

    /**
     * Function: image
     *
     * Paints an image.
     */
    image(x: number, y: number, w: number, h: number, src: string, aspect: boolean, flipH: boolean, flipV: boolean): void;

    /**
     * Function: createText
     *
     * Creates the innermost element that contains the HTML text.
     */
    createDiv(str: string, align: string, valign: string, overflow: string): HTMLElement;

    /**
     * Function: text
     *
     * Paints the given text. Possible values for format are empty string for plain
     * text and html for HTML markup. Clipping, text background and border are not
     * supported for plain text in VML.
     */
    text(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, format: string, overflow: string, clip: string, rotation: number, dir: string): void;

    /**
     * Function: plainText
     *
     * Paints the outline of the current path.
     */
    plainText(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, overflow: string, clip: string, rotation: number, dir: string): void;

    /**
     * Function: stroke
     *
     * Paints the outline of the current path.
     */
    stroke(): void;

    /**
     * Function: fill
     *
     * Fills the current path.
     */
    fill(): void;

    /**
     * Function: fillAndStroke
     *
     * Fills and paints the outline of the current path.
     */
    fillAndStroke(): void;
  }
}