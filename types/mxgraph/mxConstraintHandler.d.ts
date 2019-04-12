/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxConstraintHandler
 *
 * Handles constraints on connection targets. This class is in charge of
 * showing fixed points when the mouse is over a vertex and handles constraints
 * to establish new connections.
 *
 * Constructor: mxConstraintHandler
 *
 * Constructs an new constraint handler.
 * 
 * Parameters:
 * 
 * graph - Reference to the enclosing <mxGraph>.
 * factoryMethod - Optional function to create the edge. The function takes
 * the source and target <mxCell> as the first and second argument and
 * returns the <mxCell> that represents the new edge.
 */
declare namespace mxgraph {
  export class mxConstraintHandler {

    constructor(graph: mxGraph, factoryMethod?: (source: mxCell, target: mxCell) => mxCell);

    /**
     * Variable: pointImage
     * 
     * <mxImage> to be used as the image for fixed connection points.
     */
    pointImage: mxImage;

    /**
     * Variable: graph
     * 
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph

    /**
     * Variable: enabled
     * 
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;

    /**
     * Variable: highlightColor
     * 
     * Specifies the color for the highlight. Default is <mxConstants.DEFAULT_VALID_COLOR>.
     */
    highlightColor: string;

    /**
     * Function: isEnabled
     * 
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Function: setEnabled
     * 
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     * 
     * Parameters:
     * 
     * enabled - Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Function: reset
     * 
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Function: getTolerance
     * 
     * Returns the tolerance to be used for intersecting connection points. This
     * implementation returns <mxGraph.tolerance>.
     * 
     * Parameters:
     * 
     * me - <mxMouseEvent> whose tolerance should be returned.
     */
    getTolerance(me: mxMouseEvent): number;

    /**
     * Function: getImageForConstraint
     * 
     * Returns the tolerance to be used for intersecting connection points.
     */
    getImageForConstraint(state: mxCellState, constraint: mxConnectionConstraint, point: mxPoint): mxImage;

    /**
     * Function: isEventIgnored
     * 
     * Returns true if the given <mxMouseEvent> should be ignored in <update>. This
     * implementation always returns false.
     */
    isEventIgnored(me: mxMouseEvent, source: mxCell): boolean;

    /**
     * Function: isStateIgnored
     * 
     * Returns true if the given state should be ignored. This always returns false.
     */
    isStateIgnored(state: mxCellState, source: mxCell): boolean;

    /**
     * Function: destroyIcons
     * 
     * Destroys the <focusIcons> if they exist.
     */
    destroyIcons(): void;
    /**
     * Function: destroyFocusHighlight
     * 
     * Destroys the <focusHighlight> if one exists.
     */
    destroyFocusHighlight(): void;

    /**
     * Function: isKeepFocusEvent
     * 
     * Returns true if the current focused state should not be changed for the given event.
     * This returns true if shift and alt are pressed.
     */
    isKeepFocusEvent(me: mxMouseEvent): boolean;

    /**
     * Function: getCellForEvent
     * 
     * Returns the cell for the given event.
     */
    getCellForEvent(me: mxMouseEvent, point: mxPoint): mxCell;
    /**
     * Function: update
     * 
     * Updates the state of this handler based on the given <mxMouseEvent>.
     * Source is a boolean indicating if the cell is a source or target.
     */
    update(me: mxMouseEvent, source: mxCell, existingEdge: mxCell, point: mxPoint): void;

    /**
     * Function: redraw
     * 
     * Transfers the focus to the given state as a source or target terminal. If
     * the handler is not enabled then the outline is painted, but the constraints
     * are ignored.
     */
    redraw(): void;

    /**
     * Function: setFocus
     * 
     * Transfers the focus to the given state as a source or target terminal. If
     * the handler is not enabled then the outline is painted, but the constraints
     * are ignored.
     */
    setFocus(me: mxMouseEvent, state: mxCellState, source: mxCell): void;

    /**
     * Function: createHighlightShape
     * 
     * Create the shape used to paint the highlight.
     * 
     * Returns true if the given icon intersects the given point.
     */
    createHighlightShape(): mxRectangleShape;

    /**
     * Function: intersects
     * 
     * Returns true if the given icon intersects the given rectangle.
     */
    intersects(icon: mxShape, mouse: mxRectangle, source: mxCell, existingEdge: mxCell): boolean;

    /**
     * Function: destroy
     * 
     * Destroy this handler.
     */
    destroy(): void;
  }
}