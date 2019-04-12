/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxCellState
 *
 * Represents the current state of a cell in a given <mxGraphView>.
 *
 * For edges, the edge label position is stored in <absoluteOffset>.
 *
 * The size for oversize labels can be retrieved using the boundingBox property
 * of the <text> field as shown below.
 *
 * (code)
 * var bbox = (state.text != null) ? state.text.boundingBox : null;
 * (end)
 *
 * Constructor: mxCellState
 *
 * Constructs a new object that represents the current state of the given
 * cell in the specified view.
 *
 * Parameters:
 *
 * view - <mxGraphView> that contains the state.
 * cell - <mxCell> that this state represents.
 * style - Array of key, value pairs that constitute the style.
 */

declare namespace mxgraph {
  export class mxCellState extends mxRectangle {

    constructor(view: mxGraphView, cell: mxCell, style: { [key: string]: any });

    /**
     * Variable: view
     *
     * Reference to the enclosing <mxGraphView>.
     */
    view: mxGraphView;

    /**
     * Variable: cell
     *
     * Reference to the <mxCell> that is represented by this state.
     */
    cell: mxCell;

    /**
     * Variable: style
     *
     * Contains an array of key, value pairs that represent the style of the
     * cell.
     */
    style: { [key: string]: any };

    /**
     * Variable: invalid
     *
     * Specifies if the state is invalid. Default is true.
     */
    invalid: boolean;

    /**
     * Variable: origin
     *
     * <mxPoint> that holds the origin for all child cells. Default is a new
     * empty <mxPoint>.
     */
    origin: mxPoint;

    /**
     * Variable: absolutePoints
     *
     * Holds an array of <mxPoints> that represent the absolute points of an
     * edge.
     */
    absolutePoints: mxPoint[];

    /**
     * Variable: absoluteOffset
     *
     * <mxPoint> that holds the absolute offset. For edges, this is the
     * absolute coordinates of the label position. For vertices, this is the
     * offset of the label relative to the top, left corner of the vertex.
     */
    absoluteOffset: mxPoint;

    /**
     * Variable: visibleSourceState
     *
     * Caches the visible source terminal state.
     */
    visibleSourceState: mxCellState;

    /**
     * Variable: visibleTargetState
     *
     * Caches the visible target terminal state.
     */
    visibleTargetState: mxCellState;

    /**
     * Variable: terminalDistance
     *
     * Caches the distance between the end points for an edge.
     */
    terminalDistance: number;

    /**
     * Variable: length
     *
     * Caches the length of an edge.
     */
    length: number;

    /**
     * Variable: segments
     *
     * Array of numbers that represent the cached length of each segment of the
     * edge.
     */
    segments: number[];

    /**
     * Variable: shape
     *
     * Holds the <mxShape> that represents the cell graphically.
     */
    shape: mxShape;

    /**
     * Variable: text
     *
     * Holds the <mxText> that represents the label of the cell. Thi smay be
     * null if the cell has no label.
     */
    text: mxText;

    /**
     * Variable: unscaledWidth
     *
     * Holds the unscaled width of the state.
     */
    unscaledWidth: number;

    /**
     * Function: getPerimeterBounds
     *
     * Returns the <mxRectangle> that should be used as the perimeter of the
     * cell.
     *
     * Parameters:
     *
     * border - Optional border to be added around the perimeter bounds.
     * bounds - Optional <mxRectangle> to be used as the initial bounds.
     */
    getPerimeterBounds(border?: number, bounds?: mxRectangle): mxRectangle;

    /**
     * Function: setAbsoluteTerminalPoint
     *
     * Sets the first or last point in <absolutePoints> depending on isSource.
     *
     * Parameters:
     *
     * point - <mxPoint> that represents the terminal point.
     * isSource - Boolean that specifies if the first or last point should
     * be assigned.
     */
    setAbsoluteTerminalPoint(point: mxPoint, isSource: boolean): void;

    /**
     * Function: setCursor
     *
     * Sets the given cursor on the shape and text shape.
     */
    setCursor(cursor: string): void;

    /**
     * Function: getVisibleTerminal
     *
     * Returns the visible source or target terminal cell.
     *
     * Parameters:
     *
     * source - Boolean that specifies if the source or target cell should be
     * returned.
     */
    getVisibleTerminal(source: boolean): mxCell;

    /**
     * Function: getVisibleTerminalState
     *
     * Returns the visible source or target terminal state.
     *
     * Parameters:
     *
     * source - Boolean that specifies if the source or target state should be
     * returned.
     */
    getVisibleTerminalState(source?: boolean): mxCellState;

    /**
     * Function: setVisibleTerminalState
     *
     * Sets the visible source or target terminal state.
     *
     * Parameters:
     *
     * terminalState - <mxCellState> that represents the terminal.
     * source - Boolean that specifies if the source or target state should be set.
     */
    setVisibleTerminalState(terminalState: mxCellState, source: boolean): void;

    /**
     * Function: getCellBounds
     *
     * Returns the unscaled, untranslated bounds.
     */
    getCellBounds(): mxRectangle;

    /**
     * Function: getPaintBounds
     *
     * Returns the unscaled, untranslated paint bounds. This is the same as
     * <getCellBounds> but with a 90 degree rotation if the shape's
     * isPaintBoundsInverted returns true.
     */
    getPaintBounds(): mxRectangle;

    /**
     * Function: updateCachedBounds
     *
     * Updates the cellBounds and paintBounds.
     */
    updateCachedBounds(): void;

    /**
     * Destructor: setState
     *
     * Copies all fields from the given state to this state.
     */
    setState(state: mxCellState);

    /**
     * Function: clone
     *
     * Returns a clone of this <mxPoint>.
     */
    clone(): mxCellState;

    /**
     * Destructor: destroy
     *
     * Destroys the state and all associated resources.
     */
    destroy(): void;

  }
}