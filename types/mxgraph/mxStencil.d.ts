/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxStencil
 *
 * Implements a generic shape which is based on a XML node as a description.
 *
 * shape:
 *
 * The outer element is *shape*, that has attributes:
 *
 * - "name", string, required. The stencil name that uniquely identifies the shape.
 * - "w" and "h" are optional decimal view bounds. This defines your co-ordinate
 * system for the graphics operations in the shape. The default is 100,100.
 * - "aspect", optional string. Either "variable", the default, or "fixed". Fixed
 * means always render the shape with the aspect ratio defined by the ratio w/h.
 * Variable causes the ratio to match that of the geometry of the current vertex.
 * - "strokewidth", optional string. Either an integer or the string "inherit".
 * "inherit" indicates that the strokeWidth of the cell is only changed on scaling,
 * not on resizing. Default is "1".
 * If numeric values are used, the strokeWidth of the cell is changed on both
 * scaling and resizing and the value defines the multiple that is applied to
 * the width.
 *
 * connections:
 *
 * If you want to define specific fixed connection points on the shape use the
 * *connections* element. Each *constraint* element within connections defines
 * a fixed connection point on the shape. Constraints have attributes:
 *
 * - "perimeter", required. 1 or 0. 0 sets the connection point where specified
 * by x,y. 1 Causes the position of the connection point to be extrapolated from
 * the center of the shape, through x,y to the point of intersection with the
 * perimeter of the shape.
 * - "x" and "y" are the position of the fixed point relative to the bounds of
 * the shape. They can be automatically adjusted if perimeter=1. So, (0,0) is top
 * left, (0.5,0.5) the center, (1,0.5) the center of the right hand edge of the
 * bounds, etc. Values may be less than 0 or greater than 1 to be positioned
 * outside of the shape.
 * - "name", optional string. A unique identifier for the port on the shape.
 *
 * background and foreground:
 *
 * The path of the graphics drawing is split into two elements, *foreground* and
 * *background*. The split is to define which part any shadow applied to the shape
 * is derived from (the background). This, generally, means the background is the
 * line tracing of the outside of the shape, but not always.
 *
 * Any stroke, fill or fillstroke of a background must be the first element of the
 * foreground element, they must not be used within *background*. If the background
 * is empty, this is not required.
 *
 * Because the background cannot have any fill or stroke, it can contain only one
 * *path*, *rect*, *roundrect* or *ellipse* element (or none). It can also not
 * include *image*, *text* or *include-shape*.
 *
 * Note that the state, styling and drawing in mxGraph stencils is very close in
 * design to that of HTML 5 canvas. Tutorials on this subject, if you're not
 * familiar with the topic, will give a good high-level introduction to the
 * concepts used.
 *
 * State:
 *
 * Rendering within the foreground and background elements has the concept of
 * state. There are two types of operations other than state save/load, styling
 * and drawing. The styling operations change the current state, so you can save
 * the current state with <save/> and pull the last saved state from the state
 * stack using <restore/>.
 *
 * Styling:
 *
 * The elements that change colors within the current state all take a hash
 * prefixed hex color code ("#FFEA80").
 *
 * - *strokecolor*, this sets the color that drawing paths will be rendered in
 * when a stroke or fillstroke command is issued.
 * - *fillcolor*, this sets the color that the inside of closed paths will be
 * rendered in when a fill or fillstroke command is issued.
 * - *fontcolor*, this sets the color that fonts are rendered in when text is drawn.
 *
 * *alpha* defines the degree of transparency used between 1.0 for fully opaque
 * and 0.0 for fully transparent.
 *
 * *strokewidth* defines the integer thickness of drawing elements rendered by
 * stroking. Use fixed="1" to apply the value as-is, without scaling.
 *
 * *dashed* is "1" for dashing enabled and "0" for disabled.
 *
 * When *dashed* is enabled the current dash pattern, defined by *dashpattern*,
 * is used on strokes. dashpattern is a sequence of space separated "on, off"
 * lengths that define what distance to paint the stroke for, then what distance
 * to paint nothing for, repeat... The default is "3 3". You could define a more
 * complex pattern with "5 3 2 6", for example. Generally, it makes sense to have
 * an even number of elements in the dashpattern, but that's not required.
 *
 * *linejoin*, *linecap* and *miterlimit* are best explained by the Mozilla page
 * on Canvas styling (about halfway down). The values are all the same except we
 * use "flat" for linecap, instead of Canvas' "butt".
 *
 * For font styling there are.
 *
 * - *fontsize*, an integer,
 * - *fontstyle*, an ORed bit pattern of bold (1), italic (2) and underline (4),
 * i.e bold underline is "5".
 * - *fontfamily*, is a string defining the typeface to be used.
 *
 * Drawing:
 *
 * Most drawing is contained within a *path* element. Again, the graphic
 * primitives are very similar to that of HTML 5 canvas.
 *
 * - *move* to attributes required decimals (x,y).
 * - *line* to attributes required decimals (x,y).
 * - *quad* to required decimals (x2,y2) via control point required decimals
 * (x1,y1).
 * - *curve* to required decimals (x3,y3), via control points required decimals
 * (x1,y1) and (x2,y2).
 * - *arc*, this doesn't follow the HTML Canvas signatures, instead it's a copy
 * of the SVG arc command. The SVG specification documentation gives the best
 * description of its behaviors. The attributes are named identically, they are
 * decimals and all required.
 * - *close* ends the current subpath and causes an automatic straight line to
 * be drawn from the current point to the initial point of the current subpath.
 *
 * Complex drawing:
 *
 * In addition to the graphics primitive operations there are non-primitive
 * operations. These provide an easy method to draw some basic shapes.
 *
 * - *rect*, attributes "x", "y", "w", "h", all required decimals
 * - *roundrect*, attributes "x", "y", "w", "h", all required decimals. Also
 * "arcsize" an optional decimal attribute defining how large, the corner curves
 * are.
 * - *ellipse*, attributes "x", "y", "w", "h", all required decimals.
 *
 * Note that these 3 shapes and all paths must be followed by either a fill,
 * stroke, or fillstroke.
 *
 * Text:
 *
 * *text* elements have the following attributes.
 *
 * - "str", the text string to display, required.
 * - "x" and "y", the decimal location (x,y) of the text element, required.
 * - "align", the horizontal alignment of the text element, either "left",
 * "center" or "right". Optional, default is "left".
 * - "valign", the vertical alignment of the text element, either "top", "middle"
 * or "bottom". Optional, default is "top".
 * - "localized", 0 or 1, if 1 then the "str" actually contains a key to use to
 * fetch the value out of mxResources. Optional, default is
 * <defaultLocalized>.
 * - "vertical", 0 or 1, if 1 the label is rendered vertically (rotated by 90
 * degrees). Optional, default is 0.
 * - "rotation", angle in degrees (0 to 360). The angle to rotate the text by.
 * Optional, default is 0.
 * - "align-shape", 0 or 1, if 0 ignore the rotation of the shape when setting
 * the text rotation. Optional, default is 1.
 *
 * If <allowEval> is true, then the text content of the this element can define
 * a function which is invoked with the shape as the only argument and returns
 * the value for the text element (ignored if the str attribute is not null).
 *
 * Images:
 *
 * *image* elements can either be external URLs, or data URIs, where supported
 * (not in IE 7-). Attributes are:
 *
 * - "src", required string. Either a data URI or URL.
 * - "x", "y", required decimals. The (x,y) position of the image.
 * - "w", "h", required decimals. The width and height of the image.
 * - "flipH" and "flipV", optional 0 or 1. Whether to flip the image along the
 * horizontal/vertical axis. Default is 0 for both.
 *
 * If <allowEval> is true, then the text content of the this element can define
 * a function which is invoked with the shape as the only argument and returns
 * the value for the image source (ignored if the src attribute is not null).
 *
 * Sub-shapes:
 *
 * *include-shape* allow stencils to be rendered within the current stencil by
 * referencing the sub-stencil by name. Attributes are:
 *
 * - "name", required string. The unique shape name of the stencil.
 * - "x", "y", "w", "h", required decimals. The (x,y) position of the sub-shape
 * and its width and height.
 *
 * Constructor: mxStencil
 *
 * Constructs a new generic shape by setting <desc> to the given XML node and
 * invoking <parseDescription> and <parseConstraints>.
 *
 * Parameters:
 *
 * desc - XML node that contains the stencil description.
 */

declare namespace mxgraph {
  export class mxStencil {

    constructor(desc: Element);

    /**
     * Variable: defaultLocalized
     *
     * Static global variable that specifies the default value for the localized
     * attribute of the text element. Default is false.
     */
    defaultLocalized: boolean;

    /**
     * Function: allowEval
     *
     * Static global switch that specifies if the use of eval is allowed for
     * evaluating text content and images. Default is false. Set this to true
     * if stencils can not contain user input.
     */
    allowEval: boolean;

    /**
     * Variable: desc
     *
     * Holds the XML node with the stencil description.
     */
    desc: Element;

    /**
     * Variable: constraints
     *
     * Holds an array of <mxConnectionConstraints> as defined in the shape.
     */
    constraints: mxConnectionConstraint[];

    /**
     * Variable: aspect
     *
     * Holds the aspect of the shape. Default is 'auto'.
     */
    aspect: string;

    /**
     * Variable: w0
     *
     * Holds the width of the shape. Default is 100.
     */
    w0: number;

    /**
     * Variable: h0
     *
     * Holds the height of the shape. Default is 100.
     */
    h0: number;

    /**
     * Variable: bgNodes
     *
     * Holds the XML node with the stencil description.
     */
    bgNode: Element;

    /**
     * Variable: fgNodes
     *
     * Holds the XML node with the stencil description.
     */
    fgNode: Element;

    /**
     * Variable: strokewidth
     *
     * Holds the strokewidth direction from the description.
     */
    strokewidth: string;

    /**
     * Function: parseDescription
     *
     * Reads <w0>, <h0>, <aspect>, <bgNodes> and <fgNodes> from <desc>.
     */
    parseDescription(): void;

    /**
     * Function: parseConstraints
     *
     * Reads the constraints from <desc> into <constraints> using
     * <parseConstraint>.
     */
    parseConstraints(): void;

    /**
     * Function: parseConstraint
     *
     * Parses the given XML node and returns its <mxConnectionConstraint>.
     */
    parseConstraint(node: Element): void;

    /**
     * Function: evaluateTextAttribute
     *
     * Gets the given attribute as a text. The return value from <evaluateAttribute>
     * is used as a key to <mxResources.get> if the localized attribute in the text
     * node is 1 or if <defaultLocalized> is true.
     */
    evaluateTextAttribute(node: string, attribute: string, shape: string): string;

    /**
     * Function: evaluateAttribute
     *
     * Gets the attribute for the given name from the given node. If the attribute
     * does not exist then the text content of the node is evaluated and if it is
     * a function it is invoked with <shape> as the only argument and the return
     * value is used as the attribute value to be returned.
     */
    evaluateAttribute(node: string, attribute: string, shape: string): string;

    /**
     * Function: drawShape
     *
     * Draws this stencil inside the given bounds.
     */
    drawShape(canvas: mxAbstractCanvas2D, shape: string, x: number, y: number, w: number, h: number): void;

    /**
     * Function: drawChildren
     *
     * Draws this stencil inside the given bounds.
     */
    drawChildren(canvas: mxAbstractCanvas2D, shape: string, x: number, y: number, w: number, h: number, node: Element, aspect: string, disableShadow: boolean, paint: boolean)

    /**
     * Function: computeAspect
     *
     * Returns a rectangle that contains the offset in x and y and the horizontal
     * and vertical scale in width and height used to draw this shape inside the
     * given <mxRectangle>.
     *
     * Parameters:
     *
     * shape - <mxShape> to be drawn.
     * bounds - <mxRectangle> that should contain the stencil.
     * direction - Optional direction of the shape to be darwn.
     */
    computeAspect(shape: string, x: number, y: number, w: number, h: number, direction?: string): mxRectangle;

    /**
     * Function: drawNode
     *
     * Draws this stencil inside the given bounds.
     */
    drawNode(canvas: mxAbstractCanvas2D, shape: string, node: Element, aspect: mxRectangle, disableShadow: boolean, paint: boolean): void;
  }
}