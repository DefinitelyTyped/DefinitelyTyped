/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxText
 *
 * Extends <mxShape> to implement a text shape. To change vertical text from
 * bottom to top to top to bottom, the following code can be used:
 *
 * (code)
 * verticalTextRotation = 90;
 * (end)
 *
 * Constructor: mxText
 *
 * Constructs a new text shape.
 *
 * Parameters:
 *
 * value - String that represents the text to be displayed. This is stored in
 * <value>.
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * align - Specifies the horizontal alignment. Default is ''. This is stored in
 * <align>.
 * valign - Specifies the vertical alignment. Default is ''. This is stored in
 * <valign>.
 * color - String that specifies the text color. Default is 'black'. This is
 * stored in <color>.
 * family - String that specifies the font family. Default is
 * <mxConstants.DEFAULT_FONTFAMILY>. This is stored in <family>.
 * size - Integer that specifies the font size. Default is
 * <mxConstants.DEFAULT_FONTSIZE>. This is stored in <size>.
 * fontStyle - Specifies the font style. Default is 0. This is stored in
 * <fontStyle>.
 * spacing - Integer that specifies the global spacing. Default is 2. This is
 * stored in <spacing>.
 * spacingTop - Integer that specifies the top spacing. Default is 0. The
 * sum of the spacing and this is stored in <spacingTop>.
 * spacingRight - Integer that specifies the right spacing. Default is 0. The
 * sum of the spacing and this is stored in <spacingRight>.
 * spacingBottom - Integer that specifies the bottom spacing. Default is 0.The
 * sum of the spacing and this is stored in <spacingBottom>.
 * spacingLeft - Integer that specifies the left spacing. Default is 0. The
 * sum of the spacing and this is stored in <spacingLeft>.
 * horizontal - Boolean that specifies if the label is horizontal. Default is
 * true. This is stored in <horizontal>.
 * background - String that specifies the background color. Default is null.
 * This is stored in <background>.
 * border - String that specifies the label border color. Default is null.
 * This is stored in <border>.
 * wrap - Specifies if word-wrapping should be enabled. Default is false.
 * This is stored in <wrap>.
 * clipped - Specifies if the label should be clipped. Default is false.
 * This is stored in <clipped>.
 * overflow - Value of the overflow style. Default is 'visible'.
 */

declare namespace mxgraph {
  export class mxText extends mxShape {

    constructor(value: string, bounds: mxRectangle, align: string, valign: string, color: string,
      family: string, size: number, fontStyle: string | 0, spacing: number, spacingTop: number, spacingRight: number,
      spacingBottom: number, spacingLeft: number, horizontal: boolean, background: string, border: string,
      wrap: boolean, clipped: boolean, overflow: string, labelPadding: string, textDirection: string);

    /**
     * Variable: baseSpacingTop
     *
     * Specifies the spacing to be added to the top spacing. Default is 0. Use the
     * value 5 here to get the same label positions as in mxGraph 1.x.
     */
    baseSpacingTop: number;

    /**
     * Variable: baseSpacingBottom
     *
     * Specifies the spacing to be added to the bottom spacing. Default is 0. Use the
     * value 1 here to get the same label positions as in mxGraph 1.x.
     */
    baseSpacingBottom: number;

    /**
     * Variable: baseSpacingLeft
     *
     * Specifies the spacing to be added to the left spacing. Default is 0.
     */
    baseSpacingLeft: number;

    /**
     * Variable: baseSpacingRight
     *
     * Specifies the spacing to be added to the right spacing. Default is 0.
     */
    baseSpacingRight: number;

    /**
     * Variable: replaceLinefeeds
     *
     * Specifies if linefeeds in HTML labels should be replaced with BR tags.
     * Default is true.
     */
    replaceLinefeeds: boolean;

    /**
     * Variable: verticalTextRotation
     *
     * Rotation for vertical text. Default is -90 (bottom to top).
     */
    verticalTextRotation: number;

    /**
     * Variable: ignoreClippedStringSize
     *
     * Specifies if the string size should be measured in <updateBoundingBox> if
     * the label is clipped and the label position is center and middle. If this is
     * true, then the bounding box will be set to <bounds>. Default is true.
     * <ignoreStringSize> has precedence over this switch.
     */
    ignoreClippedStringSize: boolean;

    /**
     * Variable: ignoreStringSize
     *
     * Specifies if the actual string size should be measured. If disabled the
     * boundingBox will not ignore the actual size of the string, otherwise
     * <bounds> will be used instead. Default is false.
     */
    ignoreStringSize: boolean;

    /**
     * Variable: textWidthPadding
     *
     * Specifies the padding to be added to the text width for the bounding box.
     * This is needed to make sure no clipping is applied to borders. Default is 4
     * for IE 8 standards mode and 3 for all others.
     */
    textWidthPadding: 4 | 3;

    /**
     * Variable: lastValue
     *
     * Contains the last rendered text value. Used for caching.
     */
    lastValue: string;

    /**
     * Variable: cacheEnabled
     *
     * Specifies if caching for HTML labels should be enabled. Default is true.
     */
    cacheEnabled: boolean;

    /**
     * Function: isParseVml
     *
     * Text shapes do not contain VML markup and do not need to be parsed. This
     * method returns false to speed up rendering in IE8.
     */
    isParseVml(): boolean;

    /**
     * Function: isHtmlAllowed
     *
     * Returns true if HTML is allowed for this shape. This implementation returns
     * true if the browser is not in IE8 standards mode.
     */
    isHtmlAllowed(): boolean;

    /**
     * Function: getSvgScreenOffset
     *
     * Disables offset in IE9 for crisper image output.
     */
    getSvgScreenOffset(): 0 | 0.5;

    /**
     * Function: checkBounds
     *
     * Returns true if the bounds are not null and all of its variables are numeric.
     */
    checkBounds(): boolean;

    /**
     * Function: paint
     *
     * Generic rendering code.
     */
    paint(c: mxAbstractCanvas2D, update?: boolean): void;

    /**
     * Function: redraw
     *
     * Renders the text using the given DOM nodes.
     */
    redraw(): void;

    /**
     * Function: resetStyles
     *
     * Resets all styles.
     */
    resetStyles(): void;

    /**
     * Function: apply
     *
     * Extends mxShape to update the text styles.
     *
     * Parameters:
     *
     * state - <mxCellState> of the corresponding cell.
     */
    apply(state: mxCellState): void;

    /**
     * Function: getAutoDirection
     *
     * Used to determine the automatic text direction. Returns
     * <mxConstants.TEXT_DIRECTION_LTR> or <mxConstants.TEXT_DIRECTION_RTL>
     * depending on the contents of <value>. This is not invoked for HTML, wrapped
     * content or if <value> is a DOM node.
     */
    getAutoDirection(): string;

    /**
     * Function: updateBoundingBox
     *
     * Updates the <boundingBox> for this shape using the given node and position.
     */
    updateBoundingBox(): void;

    /**
     * Function: getShapeRotation
     *
     * Returns 0 to avoid using rotation in the canvas via updateTransform.
     */
    getShapeRotation(): 0;

    /**
     * Function: getTextRotation
     *
     * Returns the rotation for the text label of the corresponding shape.
     */
    getTextRotation(): number;

    /**
     * Function: isPaintBoundsInverted
     *
     * Inverts the bounds if <mxShape.isBoundsInverted> returns true or if the
     * horizontal style is false.
     */
    isPaintBoundsInverted(): boolean;

    /**
     * Function: configureCanvas
     *
     * Sets the state of the canvas for drawing the shape.
     */
    configureCanvas(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Function: updateVmlContainer
     *
     * Sets the width and height of the container to 1px.
     */
    updateVmlContainer(): void;

    /**
     * Function: redrawHtmlShape
     *
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    redrawHtmlShape(): void;

    /**
     * Function: updateHtmlTransform
     *
     * Returns the spacing as an <mxPoint>.
     */
    updateHtmlTransform(): void;

    /**
     * Function: setInnerHtml
     *
     * Sets the inner HTML of the given element to the <value>.
     */
    updateInnerHtml(elt: HTMLElement): void;

    /**
     * Function: updateHtmlFilter
     *
     * Rotated text rendering quality is bad for IE9 quirks/IE8 standards
     */
    updateHtmlFilter(): void;

    /**
     * Function: updateValue
     *
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    updateValue(): void;

    /**
     * Function: updateFont
     *
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    updateFont(node: HTMLElement): void;

    /**
     * Function: updateSize
     *
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    updateSize(node: HTMLElement, enableWrap: boolean): void;

    /**
     * Function: getMargin
     *
     * Returns the spacing as an <mxPoint>.
     */
    updateMargin(): void;

    /**
     * Function: getSpacing
     *
     * Returns the spacing as an <mxPoint>.
     */
    getSpacing(): mxPoint;
  }
}