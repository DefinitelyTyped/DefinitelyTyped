/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxEdgeHandler
 *
 * Graph event handler that reconnects edges and modifies control points and
 * the edge label location. Uses <mxTerminalMarker> for finding and
 * highlighting new source and target vertices. This handler is automatically
 * created in <mxGraph.createHandler> for each selected edge.
 * 
 * To enable adding/removing control points, the following code can be used:
 * 
 * (code)
 * addEnabled = true;
 * removeEnabled = true;
 * (end)
 * 
 * Note: This experimental feature is not recommended for production use.
 * 
 * Constructor: mxEdgeHandler
 *
 * Constructs an edge handler for the specified <mxCellState>.
 * 
 * Parameters:
 * 
 * state - <mxCellState> of the cell to be handled.
 */
declare namespace mxgraph {
  export class mxEdgeHandler {
    constructor(state: mxCellState);

    /**
     * Variable: graph
     * 
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: state
     * 
     * Reference to the <mxCellState> being modified.
     */
    state: mxCellState;

    /**
     * Variable: marker
     * 
     * Holds the <mxTerminalMarker> which is used for highlighting terminals.
     */
    marker: any;

    /**
     * Variable: constraintHandler
     * 
     * Holds the <mxConstraintHandler> used for drawing and highlighting
     * constraints.
     */
    constraintHandler: mxConstraintHandler;

    /**
     * Variable: error
     * 
     * Holds the current validation error while a connection is being changed.
     */
    error: string;

    /**
     * Variable: shape
     * 
     * Holds the <mxShape> that represents the preview edge.
     */
    shape: mxShape;

    /**
     * Variable: bends
     * 
     * Holds the <mxShapes> that represent the points.
     */
    bends: mxShape[];

    /**
     * Variable: labelShape
     * 
     * Holds the <mxShape> that represents the label position.
     */
    labelShape: mxShape;

    /**
     * Variable: cloneEnabled
     * 
     * Specifies if cloning by control-drag is enabled. Default is true.
     */
    cloneEnabled: boolean;

    /**
     * Variable: addEnabled
     * 
     * Specifies if adding bends by shift-click is enabled. Default is false.
     * Note: This experimental feature is not recommended for production use.
     */
    addEnabled: boolean;

    /**
     * Variable: removeEnabled
     * 
     * Specifies if removing bends by shift-click is enabled. Default is false.
     * Note: This experimental feature is not recommended for production use.
     */
    removeEnabled: boolean;

    /**
     * Variable: dblClickRemoveEnabled
     * 
     * Specifies if removing bends by double click is enabled. Default is false.
     */
    dblClickRemoveEnabled: boolean;

    /**
     * Variable: mergeRemoveEnabled
     * 
     * Specifies if removing bends by dropping them on other bends is enabled.
     * Default is false.
     */
    mergeRemoveEnabled: boolean;

    /**
     * Variable: straightRemoveEnabled
     * 
     * Specifies if removing bends by creating straight segments should be enabled.
     * If enabled, this can be overridden by holding down the alt key while moving.
     * Default is false.
     */
    straightRemoveEnabled: boolean;

    /**
     * Variable: virtualBendsEnabled
     * 
     * Specifies if virtual bends should be added in the center of each
     * segments. These bends can then be used to add new waypoints.
     * Default is false.
     */
    virtualBendsEnabled: boolean;

    /**
     * Variable: virtualBendOpacity
     * 
     * Opacity to be used for virtual bends (see <virtualBendsEnabled>).
     * Default is 20.
     */
    virtualBendOpacity: number;

    /**
     * Variable: parentHighlightEnabled
     * 
     * Specifies if the parent should be highlighted if a child cell is selected.
     * Default is false.
     */
    parentHighlightEnabled: boolean;

    /**
     * Variable: preferHtml
     * 
     * Specifies if bends should be added to the graph container. This is updated
     * in <init> based on whether the edge or one of its terminals has an HTML
     * label in the container.
     */
    preferHtml: boolean;

    /**
     * Variable: allowHandleBoundsCheck
     * 
     * Specifies if the bounds of handles should be used for hit-detection in IE
     * Default is true.
     */
    allowHandleBoundsCheck: boolean;

    /**
     * Variable: snapToTerminals
     * 
     * Specifies if waypoints should snap to the routing centers of terminals.
     * Default is false.
     */
    snapToTerminals: boolean;

    /**
     * Variable: handleImage
     * 
     * Optional <mxImage> to be used as handles. Default is null.
     */
    handleImage: mxImage;

    /**
     * Variable: tolerance
     * 
     * Optional tolerance for hit-detection in <getHandleForEvent>. Default is 0.
     */
    tolerance: number;

    /**
     * Variable: outlineConnect
     * 
     * Specifies if connections to the outline of a highlighted target should be
     * enabled. This will allow to place the connection point along the outline of
     * the highlighted target. Default is false.
     */
    outlineConnect: boolean;

    /**
     * Variable: manageLabelHandle
     * 
     * Specifies if the label handle should be moved if it intersects with another
     * handle. Uses <checkLabelHandle> for checking and moving. Default is false.
     */
    manageLabelHandle: boolean;

    /**
     * Function: init
     * 
     * Initializes the shapes required for this edge handler.
     */
    init(): void;

    /**
     * Function: createCustomHandles
     * 
     * Returns an array of custom handles. This implementation returns null.
     */
    createCustomHandles(): any[];

    /**
     * Function: isVirtualBendsEnabled
     * 
     * Returns true if virtual bends should be added. This returns true if
     * <virtualBendsEnabled> is true and the current style allows and
     * renders custom waypoints.
     */
    isVirtualBendsEnabled(evt: Event): boolean;

    /**
     * Function: isAddPointEvent
     * 
     * Returns true if the given event is a trigger to add a new point. This
     * implementation returns true if shift is pressed.
     */
    isAddPointEvent(evt: Event): boolean;

    /**
     * Function: isRemovePointEvent
     * 
     * Returns true if the given event is a trigger to remove a point. This
     * implementation returns true if shift is pressed.
     */
    isRemovePointEvent(evt: Event): boolean;

    /**
     * Function: getSelectionPoints
     * 
     * Returns the list of points that defines the selection stroke.
     */
    getSelectionPoints(state: mxCellState): mxPoint[];

    /**
     * Function: createSelectionShape
     * 
     * Creates the shape used to draw the selection border.
     */
    createParentHighlightShape(bounds: mxRectangle): mxRectangleShape;

    /**
     * Function: createSelectionShape
     * 
     * Creates the shape used to draw the selection border.
     */
    createSelectionShape(points: mxPoint[]): mxShape;

    /**
     * Function: getSelectionColor
     * 
     * Returns <mxConstants.EDGE_SELECTION_COLOR>.
     */
    getSelectionColor(): string;

    /**
     * Function: getSelectionStrokeWidth
     * 
     * Returns <mxConstants.EDGE_SELECTION_STROKEWIDTH>.
     */
    getSelectionStrokeWidth(): number;

    /**
     * Function: isSelectionDashed
     * 
     * Returns <mxConstants.EDGE_SELECTION_DASHED>.
     */
    isSelectionDashed(): string;

    /**
     * Function: isConnectableCell
     * 
     * Returns true if the given cell is connectable. This is a hook to
     * disable floating connections. This implementation returns true.
     */
    isConnectableCell(cell: mxCell): boolean;

    /**
     * Function: getCellAt
     * 
     * Creates and returns the <mxCellMarker> used in <marker>.
     */
    getCellAt(x: number, y: number): mxCell;

    /**
     * Function: createMarker
     * 
     * Creates and returns the <mxCellMarker> used in <marker>.
     */
    createMarker(): mxCellMarker;

    /**
     * Function: validateConnection
     * 
     * Returns the error message or an empty string if the connection for the
     * given source, target pair is not valid. Otherwise it returns null. This
     * implementation uses <mxGraph.getEdgeValidationError>.
     * 
     * Parameters:
     * 
     * source - <mxCell> that represents the source terminal.
     * target - <mxCell> that represents the target terminal.
     */
    validateConnection(source: mxCell, target: mxCell): string;

    /**
     * Function: createBends
     * 
     * Creates and returns the bends used for modifying the edge. This is
     * typically an array of <mxRectangleShapes>.
     */
    createBends(): mxRectangleShape[];

    /**
     * Function: createVirtualBends
     * 
     * Creates and returns the bends used for modifying the edge. This is
     * typically an array of <mxRectangleShapes>.
     */
    createVirtualBends(): mxRectangleShape[];

    /**
     * Function: isHandleEnabled
     * 
     * Creates the shape used to display the given bend.
     */
    isHandleEnabled(index: number): boolean;

    /**
     * Function: isHandleVisible
     * 
     * Returns true if the handle at the given index is visible.
     */
    isHandleVisible(index: number): boolean;

    /**
     * Function: createHandleShape
     * 
     * Creates the shape used to display the given bend. Note that the index may be
     * null for special cases, such as when called from
     * <mxElbowEdgeHandler.createVirtualBend>. Only images and rectangles should be
     * returned if support for HTML labels with not foreign objects is required.
     * Index if null for virtual handles.
     */
    createHandleShape(index: number): mxRectangleShape;

    /**
     * Function: createLabelHandleShape
     * 
     * Creates the shape used to display the the label handle.
     */
    createLabelHandleShape(): mxRectangleShape;

    /**
     * Function: initBend
     * 
     * Helper method to initialize the given bend.
     * 
     * Parameters:
     * 
     * bend - <mxShape> that represents the bend to be initialized.
     */
    initBend(bend: mxShape, dblClick: (evt: Event) => void): boolean;

    /**
     * Function: getHandleForEvent
     * 
     * Returns the index of the handle for the given event.
     */
    getHandleForEvent(me: mxMouseEvent): number | boolean;

    /**
     * Function: isAddVirtualBendEvent
     * 
     * Returns true if the given event allows virtual bends to be added. This
     * implementation returns true.
     */
    isAddVirtualBendEvent(me: mxMouseEvent): boolean;

    /**
     * Function: isCustomHandleEvent
     * 
     * Returns true if the given event allows custom handles to be changed. This
     * implementation returns true.
     */
    isCustomHandleEvent(me: mxMouseEvent): boolean;

    /**
     * Function: mouseDown
     * 
     * Handles the event by checking if a special element of the handler
     * was clicked, in which case the index parameter is non-null. The
     * indices may be one of <LABEL_HANDLE> or the number of the respective
     * control point. The source and target points are used for reconnecting
     * the edge.
     */
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Function: start
     * 
     * Starts the handling of the mouse gesture.
     */
    start(x: number, y: number, index: number): void;

    /**
     * Function: clonePreviewState
     * 
     * Returns a clone of the current preview state for the given point and terminal.
     */
    clonePreviewState(point: mxPoint, terminal: mxCell): mxCellState;

    /**
     * Function: getSnapToTerminalTolerance
     * 
     * Returns the tolerance for the guides. Default value is
     * gridSize * scale / 2.
     */
    getSnapToTerminalTolerance(): number;

    /**
     * Function: updateHint
     * 
     * Hook for subclassers do show details while the handler is active.
     */
    updateHint(me: mxMouseEvent, point: mxPoint): void;

    /**
     * Function: removeHint
     * 
     * Hooks for subclassers to hide details when the handler gets inactive.
     */
    removeHint(): void;

    /**
     * Function: roundLength
     * 
     * Hook for rounding the unscaled width or height. This uses Math.round.
     */
    roundLength(length: number): number;

    /**
     * Function: isSnapToTerminalsEvent
     * 
     * Returns true if <snapToTerminals> is true and if alt is not pressed.
     */
    isSnapToTerminalsEvent(me: mxMouseEvent): boolean;

    /**
     * Function: getPointForEvent
     * 
     * Returns the point for the given event.
     */
    getPointForEvent(me: mxMouseEvent): mxPoint;

    /**
     * Function: getPreviewTerminalState
     * 
     * Updates the given preview state taking into account the state of the constraint handler.
     */
    getPreviewTerminalState(me: mxMouseEvent): mxCellState;

    /**
     * Function: getPreviewPoints
     * 
     * Updates the given preview state taking into account the state of the constraint handler.
     * 
     * Parameters:
     * 
     * pt - <mxPoint> that contains the current pointer position.
     * me - Optional <mxMouseEvent> that contains the current event.
     */
    getPreviewPoints(pt: mxPoint, me?: mxMouseEvent): mxPoint[];

    /**
     * Function: isOutlineConnectEvent
     * 
     * Returns true if <outlineConnect> is true and the source of the event is the outline shape
     * or shift is pressed.
     */
    isOutlineConnectEvent(me: mxMouseEvent): boolean;

    /**
     * Function: updatePreviewState
     * 
     * Updates the given preview state taking into account the state of the constraint handler.
     */
    updatePreviewState(edge: mxCell, point: mxPoint, terminalState: mxCellState, me: mxMouseEvent, outline: boolean): void;

    /**
     * Function: mouseMove
     * 
     * Handles the event by updating the preview.
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     * 
     * Handles the event to applying the previewed changes on the edge by
     * using <moveLabel>, <connect> or <changePoints>.
     */
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Function: reset
     * 
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Function: setPreviewColor
     * 
     * Sets the color of the preview to the given value.
     */
    setPreviewColor(color: string): void;


    /**
     * Function: convertPoint
     * 
     * Converts the given point in-place from screen to unscaled, untranslated
     * graph coordinates and applies the grid. Returns the given, modified
     * point instance.
     * 
     * Parameters:
     * 
     * point - <mxPoint> to be converted.
     * gridEnabled - Boolean that specifies if the grid should be applied.
     */
    convertPoint(point: mxPoint, gridEnabled: boolean): void;

    /**
     * Function: moveLabel
     * 
     * Changes the coordinates for the label of the given edge.
     * 
     * Parameters:
     * 
     * edge - <mxCell> that represents the edge.
     * x - Integer that specifies the x-coordinate of the new location.
     * y - Integer that specifies the y-coordinate of the new location.
     */
    moveLabel(edgeState: mxCellState, x: number, y: number): void;

    /**
     * Function: connect
     * 
     * Changes the terminal or terminal point of the given edge in the graph
     * model.
     * 
     * Parameters:
     * 
     * edge - <mxCell> that represents the edge to be reconnected.
     * terminal - <mxCell> that represents the new terminal.
     * isSource - Boolean indicating if the new terminal is the source or
     * target terminal.
     * isClone - Boolean indicating if the new connection should be a clone of
     * the old edge.
     * me - <mxMouseEvent> that contains the mouse up event.
     */
    connect(edge: mxCell, terminal: mxCell, isSource: boolean, isClone: boolean, me: mxMouseEvent): mxCell;

    /**
     * Function: changeTerminalPoint
     * 
     * Changes the terminal point of the given edge.
     */
    changeTerminalPoint(edge: mxCell, point: mxPoint, isSource: boolean, clone: boolean): mxCell;

    /**
     * Function: changePoints
     * 
     * Changes the control points of the given edge in the graph model.
     */
    changePoints(edge: mxCell, points: mxPoint[], clone: boolean): mxCell;

    /**
     * Function: addPoint
     * 
     * Adds a control point for the given state and event.
     */
    addPoint(state: mxCellState, evt: Event): void;

    /**
     * Function: addPointAt
     * 
     * Adds a control point at the given point.
     */
    addPointAt(state: mxCellState, x: number, y: number): void;

    /**
     * Function: removePoint
     * 
     * Removes the control point at the given index from the given state.
     */
    removePoint(state: mxCellState, index: number): void;

    /**
     * Function: getHandleFillColor
     * 
     * Returns the fillcolor for the handle at the given index.
     */
    getHandleFillColor(index: number): string;

    /**
     * Function: redraw
     * 
     * Redraws the preview, and the bends- and label control points.
     */
    redraw(): void;

    /**
     * Function: redrawHandles
     * 
     * Redraws the handles.
     */
    redrawHandles(): void;

    /**
     * Function: hideHandles
     * 
     * Shortcut to <hideSizers>.
     */
    setHandlesVisible(visible: boolean): void;

    /**
     * Function: redrawInnerBends
     * 
     * Updates and redraws the inner bends.
     * 
     * Parameters:
     * 
     * p0 - <mxPoint> that represents the location of the first point.
     * pe - <mxPoint> that represents the location of the last point.
     */
    redrawInnerBends(p0: mxPoint, pe: mxPoint): void;

    /**
     * Function: checkLabelHandle
     * 
     * Checks if the label handle intersects the given bounds and moves it if it
     * intersects.
     */
    checkLabelHandle(b: mxRectangle): void;

    /**
     * Function: drawPreview
     * 
     * Redraws the preview.
     */
    drawPreview(): void;

    /**
     * Function: refresh
     * 
     * Refreshes the bends of this handler.
     */
    refresh(): void;

    /**
     * Function: destroyBends
     * 
     * Destroys all elements in <bends>.
     */
    destroyBends(bends: mxShape[]): void;

    /**
     * Function: destroy
     * 
     * Destroys the handler and all its resources and DOM nodes. This does
     * normally not need to be called as handlers are destroyed automatically
     * when the corresponding cell is deselected.
     */
    destroy(): void;
  }
}
