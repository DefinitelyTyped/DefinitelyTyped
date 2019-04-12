/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxStylesheet
 *
 * Defines the appearance of the cells in a graph. See <putCellStyle> for an
 * example of creating a new cell style. It is recommended to use objects, not
 * arrays for holding cell styles. Existing styles can be cloned using
 * <mxUtils.clone> and turned into a string for debugging using
 * <mxUtils.toString>.
 *
 * Default Styles:
 *
 * The stylesheet contains two built-in styles, which are used if no style is
 * defined for a cell:
 *
 *   defaultVertex - Default style for vertices
 *   defaultEdge - Default style for edges
 *
 * Example:
 *
 * (code)
 * var vertexStyle = stylesheet.getDefaultVertexStyle();
 * vertexStyle[mxConstants.ROUNDED] = true;
 * var edgeStyle = stylesheet.getDefaultEdgeStyle();
 * edgeStyle[mxConstants.STYLE_EDGE] = mxEdgeStyle.EntityRelation;
 * (end)
 *
 * Modifies the built-in default styles.
 *
 * To avoid the default style for a cell, add a leading semicolon
 * to the style definition, eg.
 *
 * (code)
 * ;shadow=1
 * (end)
 *
 * Removing keys:
 *
 * For removing a key in a cell style of the form [stylename;|key=value;] the
 * special value none can be used, eg. highlight;fillColor=none
 *
 * See also the helper methods in mxUtils to modify strings of this format,
 * namely <mxUtils.setStyle>, <mxUtils.indexOfStylename>,
 * <mxUtils.addStylename>, <mxUtils.removeStylename>,
 * <mxUtils.removeAllStylenames> and <mxUtils.setStyleFlag>.
 *
 * Constructor: mxStylesheet
 *
 * Constructs a new stylesheet and assigns default styles.
 */
declare namespace mxgraph {
  export interface StyleMap {
    [styleKey: string]: string;
  }

  export class mxStylesheet {

    constructor();

    /**
     * Function: styles
     *
     * Maps from names to cell styles. Each cell style is a map of key,
     * value pairs.
     */
    styles: StyleMap;

    /**
     * Function: createDefaultVertexStyle
     *
     * Creates and returns the default vertex style.
     */
    createDefaultVertexStyle(): StyleMap;

    /**
     * Function: createDefaultEdgeStyle
     *
     * Creates and returns the default edge style.
     */
    createDefaultEdgeStyle(): StyleMap;

    /**
     * Function: putDefaultVertexStyle
     *
     * Sets the default style for vertices using defaultVertex as the
     * stylename.
     *
     * Parameters:
     * style - Key, value pairs that define the style.
     */
    putDefaultVertexStyle(style: StyleMap): void;

    /**
     * Function: putDefaultEdgeStyle
     *
     * Sets the default style for edges using defaultEdge as the stylename.
     */
    putDefaultEdgeStyle(style: StyleMap): void;

    /**
     * Function: getDefaultVertexStyle
     *
     * Returns the default style for vertices.
     */
    getDefaultVertexStyle(): StyleMap;

    /**
     * Function: getDefaultEdgeStyle
     *
     * Sets the default style for edges.
     */
    getDefaultEdgeStyle(): StyleMap;

    /**
     * Function: putCellStyle
     *
     * Stores the given map of key, value pairs under the given name in
     * <styles>.
     *
     * Example:
     *
     * The following example adds a new style called 'rounded' into an
     * existing stylesheet:
     *
     * (code)
     * var style = new Object();
     * style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
     * style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
     * style[mxConstants.STYLE_ROUNDED] = true;
     * graph.getStylesheet().putCellStyle('rounded', style);
     * (end)
     *
     * In the above example, the new style is an object. The possible keys of
     * the object are all the constants in <mxConstants> that start with STYLE
     * and the values are either JavaScript objects, such as
     * <mxPerimeter.RightAngleRectanglePerimeter> (which is in fact a function)
     * or expressions, such as true. Note that not all keys will be
     * interpreted by all shapes (eg. the line shape ignores the fill color).
     * The final call to this method associates the style with a name in the
     * stylesheet. The style is used in a cell with the following code:
     *
     * (code)
     * model.setStyle(cell, 'rounded');
     * (end)
     *
     * Parameters:
     *
     * name - Name for the style to be stored.
     * style - Key, value pairs that define the style.
     */
    putCellStyle(name: string, style: string): void;

    /**
     * Function: getCellStyle
     *
     * Returns the cell style for the specified stylename or the given
     * defaultStyle if no style can be found for the given stylename.
     *
     * Parameters:
     *
     * name - String of the form [(stylename|key=value);] that represents the
     * style.
     * defaultStyle - Default style to be returned if no style can be found.
     */
    getCellStyle(name: string, defaultStyle?: string): StyleMap;
  }
}