/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxGraphView
 *
 * Extends <mxEventSource> to implement a view for a graph. This class is in
 * charge of computing the absolute coordinates for the relative child
 * geometries, the points for perimeters and edge styles and keeping them
 * cached in <mxCellStates> for faster retrieval. The states are updated
 * whenever the model or the view state (translate, scale) changes. The scale
 * and translate are honoured in the bounds.
 *
 * Event: mxEvent.UNDO
 *
 * Fires after the root was changed in <setCurrentRoot>. The <code>edit</code>
 * property contains the <mxUndoableEdit> which contains the
 * <mxCurrentRootChange>.
 *
 * Event: mxEvent.SCALE_AND_TRANSLATE
 *
 * Fires after the scale and translate have been changed in <scaleAndTranslate>.
 * The <code>scale</code>, <code>previousScale</code>, <code>translate</code>
 * and <code>previousTranslate</code> properties contain the new and previous
 * scale and translate, respectively.
 *
 * Event: mxEvent.SCALE
 *
 * Fires after the scale was changed in <setScale>. The <code>scale</code> and
 * <code>previousScale</code> properties contain the new and previous scale.
 *
 * Event: mxEvent.TRANSLATE
 *
 * Fires after the translate was changed in <setTranslate>. The
 * <code>translate</code> and <code>previousTranslate</code> properties contain
 * the new and previous value for translate.
 *
 * Event: mxEvent.DOWN and mxEvent.UP
 *
 * Fire if the current root is changed by executing an <mxCurrentRootChange>.
 * The event name depends on the location of the root in the cell hierarchy
 * with respect to the current root. The <code>root</code> and
 * <code>previous</code> properties contain the new and previous root,
 * respectively.
 *
 * Constructor: mxGraphView
 *
 * Constructs a new view for the given <mxGraph>.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */

declare namespace mxgraph {
  export class mxGraphView extends mxEventSource {
    constructor(graph: mxGraph);

    /**
     *
     */
    EMPTY_POINT: mxPoint;

    /**
     * Variable: doneResource
     *
     * Specifies the resource key for the status message after a long operation.
     * If the resource for this key does not exist then the value is used as
     * the status message. Default is 'done'.
     */
    doneResource: 'done' | '';

    /**
     * Function: updatingDocumentResource
     *
     * Specifies the resource key for the status message while the document is
     * being updated. If the resource for this key does not exist then the
     * value is used as the status message. Default is 'updatingDocument'.
     */
    updatingDocumentResource: 'updatingDocument' | '';

    /**
     * Variable: allowEval
     *
     * Specifies if string values in cell styles should be evaluated using
     * <mxUtils.eval>. This will only be used if the string values can't be mapped
     * to objects using <mxStyleRegistry>. Default is false. NOTE: Enabling this
     * switch carries a possible security risk.
     */
    allowEval: boolean;

    /**
     * Variable: captureDocumentGesture
     *
     * Specifies if a gesture should be captured when it goes outside of the
     * graph container. Default is true.
     */
    captureDocumentGesture: boolean;

    /**
     * Variable: optimizeVmlReflows
     *
     * Specifies if the <canvas> should be hidden while rendering in IE8 standards
     * mode and quirks mode. This will significantly improve rendering performance.
     * Default is true.
     */
    optimizeVmlReflows: boolean;

    /**
     * Variable: rendering
     *
     * Specifies if shapes should be created, updated and destroyed using the
     * methods of <mxCellRenderer> in <graph>. Default is true.
     */
    rendering: boolean;

    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: currentRoot
     *
     * <mxCell> that acts as the root of the displayed cell hierarchy.
     */
    currentRoot: mxCell;

    /**
     * Variable: graphBounds
     *
     * <mxRectangle> that caches the scales, translated bounds of the current view.
     */
    graphBounds: mxRectangle;

    /**
     * Variable: scale
     *
     * Specifies the scale. Default is 1 (100%).
     */
    scale: number;

    /**
     * Variable: translate
     *
     * <mxPoint> that specifies the current translation. Default is a new
     * empty <mxPoint>.
     */
    translate: mxPoint;

    /**
     * Variable: states
     *
     * <mxDictionary> that maps from cell IDs to <mxCellStates>.
     */
    states: mxDictionary<mxCellState>;

    /**
     * Variable: updateStyle
     *
     * Specifies if the style should be updated in each validation step. If this
     * is false then the style is only updated if the state is created or if the
     * style of the cell was changed. Default is false.
     */
    updateStyle: boolean;

    /**
     * Variable: lastNode
     *
     * During validation, this contains the last DOM node that was processed.
     */
    lastNode: Element;

    /**
     * Variable: lastHtmlNode
     *
     * During validation, this contains the last HTML DOM node that was processed.
     */
    lastHtmlNode: HTMLElement;

    /**
     * Variable: lastForegroundNode
     *
     * During validation, this contains the last edge's DOM node that was processed.
     */
    lastForegroundNode: Element;

    /**
     * Variable: lastForegroundHtmlNode
     *
     * During validation, this contains the last edge HTML DOM node that was processed.
     */
    lastForegroundHtmlNode: HTMLElement;

    /**
     * Function: getGraphBounds
     *
     * Returns <graphBounds>.
     */
    getGraphBounds(): mxRectangle;

    /**
     * Function: setGraphBounds
     *
     * Sets <graphBounds>.
     */
    setGraphBounds(value: mxRectangle): void;

    /**
     * Function: getBounds
     *
     * Returns the union of all <mxCellStates> for the given array of <mxCells>.
     *
     * Parameters:
     *
     * cells - Array of <mxCells> whose bounds should be returned.
     */
    getBounds(cells: mxCell[]): mxRectangle;

    /**
     * Function: setCurrentRoot
     *
     * Sets and returns the current root and fires an <undo> event before
     * calling <mxGraph.sizeDidChange>.
     *
     * Parameters:
     *
     * root - <mxCell> that specifies the root of the displayed cell hierarchy.
     */
    setCurrentRoot(root: mxCell): mxCell;

    /**
     * Function: scaleAndTranslate
     *
     * Sets the scale and translation and fires a <scale> and <translate> event
     * before calling <revalidate> followed by <mxGraph.sizeDidChange>.
     *
     * Parameters:
     *
     * scale - Decimal value that specifies the new scale (1 is 100%).
     * dx - X-coordinate of the translation.
     * dy - Y-coordinate of the translation.
     */
    scaleAndTranslate(scale: number, dx: number, dy: number): void;

    /**
     * Function: getScale
     *
     * Returns the <scale>.
     */
    getScale(): number;

    /**
     * Function: setScale
     *
     * Sets the scale and fires a <scale> event before calling <revalidate> followed
     * by <mxGraph.sizeDidChange>.
     *
     * Parameters:
     *
     * value - Decimal value that specifies the new scale (1 is 100%).
     */
    setScale(value: number): void;

    /**
     * Function: getTranslate
     *
     * Returns the <translate>.
     */
    getTranslate(): mxPoint;

    /**
     * Function: setTranslate
     *
     * Sets the translation and fires a <translate> event before calling
     * <revalidate> followed by <mxGraph.sizeDidChange>. The translation is the
     * negative of the origin.
     *
     * Parameters:
     *
     * dx - X-coordinate of the translation.
     * dy - Y-coordinate of the translation.
     */
    setTranslate(dx: number, dy: number): void;

    /**
     * Function: viewStateChanged
     *
     * Invoked after <scale> and/or <translate> has changed.
     */
    viewStateChanged(): void;

    /**
     * Function: refresh
     *
     * Clears the view if <currentRoot> is not null and revalidates.
     */
    refresh(): void;

    /**
     * Function: revalidate
     *
     * Revalidates the complete view with all cell states.
     */
    revalidate(): void;

    /**
     * Function: clear
     *
     * Removes the state of the given cell and all descendants if the given
     * cell is not the current root.
     *
     * Parameters:
     *
     * cell - Optional <mxCell> for which the state should be removed. Default
     * is the root of the model.
     * force - Boolean indicating if the current root should be ignored for
     * recursion.
     */
    clear(cell: mxCell, force: boolean, recurse: boolean): void;

    /**
     * Function: invalidate
     *
     * Invalidates the state of the given cell, all its descendants and
     * connected edges.
     *
     * Parameters:
     *
     * cell - Optional <mxCell> to be invalidated. Default is the root of the
     * model.
     */
    invalidate(cell: mxCell, recurse: boolean, includeEdges: boolean);

    /**
     * Function: validate
     *
     * Calls <validateCell> and <validateCellState> and updates the <graphBounds>
     * using <getBoundingBox>. Finally the background is validated using
     * <validateBackground>.
     *
     * Parameters:
     *
     * cell - Optional <mxCell> to be used as the root of the validation.
     * Default is <currentRoot> or the root of the model.
     */
    validate(cell: mxCell): void;

    /**
     * Function: getEmptyBounds
     *
     * Returns the bounds for an empty graph. This returns a rectangle at
     * <translate> with the size of 0 x 0.
     */
    getEmptyBounds(): mxRectangle;

    /**
     * Function: getBoundingBox
     *
     * Returns the bounding box of the shape and the label for the given
     * <mxCellState> and its children if recurse is true.
     *
     * Parameters:
     *
     * state - <mxCellState> whose bounding box should be returned.
     * recurse - Optional boolean indicating if the children should be included.
     * Default is true.
     */
    getBoundingBox(state: mxCellState, recurse: boolean): mxRectangle;

    /**
     * Function: createBackgroundPageShape
     *
     * Creates and returns the shape used as the background page.
     *
     * Parameters:
     *
     * bounds - <mxRectangle> that represents the bounds of the shape.
     */
    createBackgroundPageShape(bounds: mxRectangle): mxRectangleShape;

    /**
     * Function: validateBackground
     *
     * Calls <validateBackgroundImage> and <validateBackgroundPage>.
     */
    validateBackground(): void;

    /**
     * Function: validateBackgroundImage
     *
     * Validates the background image.
     */
    validateBackgroundImage(): void;

    /**
     * Function: validateBackgroundPage
     *
     * Validates the background page.
     */
    validateBackgroundPage(): void;

    /**
     * Function: getBackgroundPageBounds
     *
     * Returns the bounds for the background page.
     */
    getBackgroundPageBounds(): mxRectangle;

    /**
     * Function: redrawBackgroundImage
     *
     * Updates the bounds and redraws the background image.
     *
     * Example:
     *
     * If the background image should not be scaled, this can be replaced with
     * the following.
     *
     * (code)
     * redrawBackground(backgroundImage, bg)
     * {
     *   backgroundImage.bounds.x = this.translate.x;
     *   backgroundImage.bounds.y = this.translate.y;
     *   backgroundImage.bounds.width = bg.width;
     *   backgroundImage.bounds.height = bg.height;
     *
     *   backgroundImage.redraw();
     * };
     * (end)
     *
     * Parameters:
     *
     * backgroundImage - <mxImageShape> that represents the background image.
     * bg - <mxImage> that specifies the image and its dimensions.
     */
    redrawBackgroundImage(backgroundImage: mxImageShape, bg: mxImage): void;

    /**
     * Function: validateCell
     *
     * Recursively creates the cell state for the given cell if visible is true and
     * the given cell is visible. If the cell is not visible but the state exists
     * then it is removed using <removeState>.
     *
     * Parameters:
     *
     * cell - <mxCell> whose <mxCellState> should be created.
     * visible - Optional boolean indicating if the cell should be visible. Default
     * is true.
     */
    validateCell(cell: mxCell, visible?: boolean): void;

    /**
     * Function: validateCellState
     *
     * Validates and repaints the <mxCellState> for the given <mxCell>.
     *
     * Parameters:
     *
     * cell - <mxCell> whose <mxCellState> should be validated.
     * recurse - Optional boolean indicating if the children of the cell should be
     * validated. Default is true.
     */
    validateCellState(cell: mxCell, recurse?: boolean): void;
    /**
     * Function: updateCellState
     *
     * Updates the given <mxCellState>.
     *
     * Parameters:
     *
     * state - <mxCellState> to be updated.
     */
    updateCellState(state: mxCellState): void;

    /**
     * Function: isCellCollapsed
     *
     * Returns true if the children of the given cell should not be visible in the
     * view. This implementation uses <mxGraph.isCellVisible> but it can be
     * overidden to use a separate condition.
     */
    isCellCollapsed(cell: mxCell): boolean;

    /**
     * Function: updateVertexState
     *
     * Validates the given cell state.
     */
    updateVertexState(state: mxCellState, geo: mxGeometry): void;

    /**
     * Function: updateEdgeState
     *
     * Validates the given cell state.
     */
    updateEdgeState(state: mxCellState, geo: mxGeometry): void;

    /**
     * Function: updateVertexLabelOffset
     *
     * Updates the absoluteOffset of the given vertex cell state. This takes
     * into account the label position styles.
     *
     * Parameters:
     *
     * state - <mxCellState> whose absolute offset should be updated.
     */
    updateVertexLabelOffset(state: mxCellState): void;

    /**
     * Function: resetValidationState
     *
     * Resets the current validation state.
     */
    resetValidationState(): void;

    /**
     * Function: stateValidated
     *
     * Invoked when a state has been processed in <validatePoints>. This is used
     * to update the order of the DOM nodes of the shape.
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the cell state.
     */
    stateValidated(state: mxCellState): void;

    /**
     * Function: updateFixedTerminalPoints
     *
     * Sets the initial absolute terminal points in the given state before the edge
     * style is computed.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose initial terminal points should be updated.
     * source - <mxCellState> which represents the source terminal.
     * target - <mxCellState> which represents the target terminal.
     */
    updateFixedTerminalPoints(edge: mxCellState, source: mxCellState, target: mxCellState): void;

    /**
     * Function: updateFixedTerminalPoint
     *
     * Sets the fixed source or target terminal point on the given edge.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose terminal point should be updated.
     * terminal - <mxCellState> which represents the actual terminal.
     * source - Boolean that specifies if the terminal is the source.
     * constraint - <mxConnectionConstraint> that specifies the connection.
     */
    updateFixedTerminalPoint(edge: mxCellState, terminal: mxCellState, source: boolean, constraint: mxConnectionConstraint): void;

    /**
     * Function: getFixedTerminalPoint
     *
     * Returns the fixed source or target terminal point for the given edge.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose terminal point should be returned.
     * terminal - <mxCellState> which represents the actual terminal.
     * source - Boolean that specifies if the terminal is the source.
     * constraint - <mxConnectionConstraint> that specifies the connection.
     */
    getFixedTerminalPoint(edge: mxCellState, terminal: mxCellState, source: boolean, constraint: mxConnectionConstraint): void;

    /**
     * Function: updateBoundsFromStencil
     *
     * Updates the bounds of the given cell state to reflect the bounds of the stencil
     * if it has a fixed aspect and returns the previous bounds as an <mxRectangle> if
     * the bounds have been modified or null otherwise.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose bounds should be updated.
     */
    updateBoundsFromStencil(state: mxCellState): mxRectangle;

    /**
     * Function: updatePoints
     *
     * Updates the absolute points in the given state using the specified array
     * of <mxPoints> as the relative points.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose absolute points should be updated.
     * points - Array of <mxPoints> that constitute the relative points.
     * source - <mxCellState> that represents the source terminal.
     * target - <mxCellState> that represents the target terminal.
     */
    updatePoints(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): void;

    /**
     * Function: transformControlPoint
     *
     * Transforms the given control point to an absolute point.
     */
    transformControlPoint(state: mxCellState, pt: mxPoint): mxPoint;

    /**
     * Function: isLoopStyleEnabled
     *
     * Returns true if the given edge should be routed with <mxGraph.defaultLoopStyle>
     * or the <mxConstants.STYLE_LOOP> defined for the given edge. This implementation
     * returns true if the given edge is a loop and does not
     */
    isLoopStyleEnabled(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): boolean;

    /**
     * Function: getEdgeStyle
     *
     * Returns the edge style function to be used to render the given edge state.
     */
    getEdgeStyle(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): any;

    /**
     * Function: updateFloatingTerminalPoints
     *
     * Updates the terminal points in the given state after the edge style was
     * computed for the edge.
     *
     * Parameters:
     *
     * state - <mxCellState> whose terminal points should be updated.
     * source - <mxCellState> that represents the source terminal.
     * target - <mxCellState> that represents the target terminal.
     */
    updateFloatingTerminalPoints(state: mxCellState, source: mxCellState, target: mxCellState): void;

    /**
     * Function: updateFloatingTerminalPoint
     *
     * Updates the absolute terminal point in the given state for the given
     * start and end state, where start is the source if source is true.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose terminal point should be updated.
     * start - <mxCellState> for the terminal on "this" side of the edge.
     * end - <mxCellState> for the terminal on the other side of the edge.
     * source - Boolean indicating if start is the source terminal state.
     */
    updateFloatingTerminalPoint(edge: mxCellState, start: mxCellState, end: mxCellState, source: boolean): void;

    /**
     * Function: getFloatingTerminalPoint
     *
     * Returns the floating terminal point for the given edge, start and end
     * state, where start is the source if source is true.
     *
     * Parameters:
     *
     * edge - <mxCellState> whose terminal point should be returned.
     * start - <mxCellState> for the terminal on "this" side of the edge.
     * end - <mxCellState> for the terminal on the other side of the edge.
     * source - Boolean indicating if start is the source terminal state.
     */
    getFloatingTerminalPoint(edge: mxCellState, start: mxCellState, end: mxCellState, source: boolean): mxPoint;

    /**
     * Function: getTerminalPort
     *
     * Returns an <mxCellState> that represents the source or target terminal or
     * port for the given edge.
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the state of the edge.
     * terminal - <mxCellState> that represents the terminal.
     * source - Boolean indicating if the given terminal is the source terminal.
     */
    getTerminalPort(state: mxCellState, terminal: mxCellState, source: boolean): mxCellState;

    /**
     * Function: getPerimeterPoint
     *
     * Returns an <mxPoint> that defines the location of the intersection point between
     * the perimeter and the line between the center of the shape and the given point.
     *
     * Parameters:
     *
     * terminal - <mxCellState> for the source or target terminal.
     * next - <mxPoint> that lies outside of the given terminal.
     * orthogonal - Boolean that specifies if the orthogonal projection onto
     * the perimeter should be returned. If this is false then the intersection
     * of the perimeter and the line between the next and the center point is
     * returned.
     * border - Optional border between the perimeter and the shape.
     */
    getPerimeterPoint(terminal: mxCellState, next: mxPoint, orthogonal: boolean, border: number): mxPoint;

    /**
     * Function: getRoutingCenterX
     *
     * Returns the x-coordinate of the center point for automatic routing.
     */
    getRoutingCenterX(state: mxCellState): number

    /**
     * Function: getRoutingCenterY
     *
     * Returns the y-coordinate of the center point for automatic routing.
     */
    getRoutingCenterY(state: mxCellState): number

    /**
     * Function: getPerimeterBounds
     *
     * Returns the perimeter bounds for the given terminal, edge pair as an
     * <mxRectangle>.
     *
     * If you have a model where each terminal has a relative child that should
     * act as the graphical endpoint for a connection from/to the terminal, then
     * this method can be replaced as follows:
     *
     * (code)
     * var oldGetPerimeterBounds = getPerimeterBounds;
     * getPerimeterBounds(terminal, edge, isSource)
     * {
     *   var model = this.graph.getModel();
     *   var childCount = model.getChildCount(terminal.cell);
     *
     *   if (childCount > 0)
     *   {
     *     var child = model.getChildAt(terminal.cell, 0);
     *     var geo = model.getGeometry(child);
     *
     *     if (geo != null &&
     *         geo.relative)
     *     {
     *       var state = this.getState(child);
     *
     *       if (state != null)
     *       {
     *         terminal = state;
     *       }
     *     }
     *   }
     *
     *   return oldGetPerimeterBounds.apply(this, arguments);
     * };
     * (end)
     *
     * Parameters:
     *
     * terminal - <mxCellState> that represents the terminal.
     * border - Number that adds a border between the shape and the perimeter.
     */
    getPerimeterBounds(terminal: mxCellState, border: number): mxRectangle;

    /**
     * Function: getPerimeterFunction
     *
     * Returns the perimeter function for the given state.
     */
    getPerimeterFunction(state: mxCellState): any;

    /**
     * Function: getNextPoint
     *
     * Returns the nearest point in the list of absolute points or the center
     * of the opposite terminal.
     *
     * Parameters:
     *
     * edge - <mxCellState> that represents the edge.
     * opposite - <mxCellState> that represents the opposite terminal.
     * source - Boolean indicating if the next point for the source or target
     * should be returned.
     */
    getNextPoint(edge: mxCellState, opposite: mxCellState, source: boolean): mxPoint;

    /**
     * Function: getVisibleTerminal
     *
     * Returns the nearest ancestor terminal that is visible. The edge appears
     * to be connected to this terminal on the display. The result of this method
     * is cached in <mxCellState.getVisibleTerminalState>.
     *
     * Parameters:
     *
     * edge - <mxCell> whose visible terminal should be returned.
     * source - Boolean that specifies if the source or target terminal
     * should be returned.
     */
    getVisibleTerminal(edge: mxCell, source: boolean): mxCell;

    /**
     * Function: updateEdgeBounds
     *
     * Updates the given state using the bounding box of t
     * he absolute points.
     * Also updates <mxCellState.terminalDistance>, <mxCellState.length> and
     * <mxCellState.segments>.
     *
     * Parameters:
     *
     * state - <mxCellState> whose bounds should be updated.
     */
    updateEdgeBounds(state: mxCellState): void;

    /**
     * Function: getPoint
     *
     * Returns the absolute point on the edge for the given relative
     * <mxGeometry> as an <mxPoint>. The edge is represented by the given
     * <mxCellState>.
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the state of the parent edge.
     * geometry - <mxGeometry> that represents the relative location.
     */
    getPoint(state: mxCellState, geometry: mxGeometry): mxPoint;

    /**
     * Function: getRelativePoint
     *
     * Gets the relative point that describes the given, absolute label
     * position for the given edge state.
     *
     * Parameters:
     *
     * state - <mxCellState> that represents the state of the parent edge.
     * x - Specifies the x-coordinate of the absolute label location.
     * y - Specifies the y-coordinate of the absolute label location.
     */
    getRelativePoint(edgeState: mxCellState, x: number, y: number): mxPoint;

    /**
     * Function: updateEdgeLabelOffset
     *
     * Updates <mxCellState.absoluteOffset> for the given state. The absolute
     * offset is normally used for the position of the edge label. Is is
     * calculated from the geometry as an absolute offset from the center
     * between the two endpoints if the geometry is absolute, or as the
     * relative distance between the center along the line and the absolute
     * orthogonal distance if the geometry is relative.
     *
     * Parameters:
     *
     * state - <mxCellState> whose absolute offset should be updated.
     */
    updateEdgeLabelOffset(state: mxCellState): void;

    /**
     * Function: getState
     *
     * Returns the <mxCellState> for the given cell. If create is true, then
     * the state is created if it does not yet exist.
     *
     * Parameters:
     *
     * cell - <mxCell> for which the <mxCellState> should be returned.
     * create - Optional boolean indicating if a new state should be created
     * if it does not yet exist. Default is false.
     */
    getState(cell: mxCell, create?: boolean): mxCellState;

    /**
     * Function: isRendering
     *
     * Returns <rendering>.
     */
    isRendering(): boolean;

    /**
     * Function: setRendering
     *
     * Sets <rendering>.
     */
    setRendering(value: boolean): void

    /**
     * Function: isAllowEval
     *
     * Returns <allowEval>.
     */
    isAllowEval(): boolean;

    /**
     * Function: setAllowEval
     *
     * Sets <allowEval>.
     */
    setAllowEval(value: boolean): void;

    /**
     * Function: getStates
     *
     * Returns <states>.
     */
    getStates(): mxDictionary<mxCellState>;

    /**
     * Function: setStates
     *
     * Sets <states>.
     */
    setStates(value: mxDictionary<mxCellState>): void;

    /**
     * Function: getCellStates
     *
     * Returns the <mxCellStates> for the given array of <mxCells>. The array
     * contains all states that are not null, that is, the returned array may
     * have less elements than the given array. If no argument is given, then
     * this returns <states>.
     */
    getCellStates(cells: mxCell[]): mxCellState[];

    /**
     * Function: removeState
     *
     * Removes and returns the <mxCellState> for the given cell.
     *
     * Parameters:
     *
     * cell - <mxCell> for which the <mxCellState> should be removed.
     */
    removeState(cell: mxCell): mxCellState;

    /**
     * Function: createState
     *
     * Creates and returns an <mxCellState> for the given cell and initializes
     * it using <mxCellRenderer.initialize>.
     *
     * Parameters:
     *
     * cell - <mxCell> for which a new <mxCellState> should be created.
     */
    createState(cell: mxCell): mxCellState;

    /**
     * Function: getCanvas
     *
     * Returns the DOM node that contains the background-, draw- and
     * overlay- and decoratorpanes.
     */
    getCanvas(): Element;

    /**
     * Function: getBackgroundPane
     *
     * Returns the DOM node that represents the background layer.
     */
    getBackgroundPane(): Element;

    /**
     * Function: getDrawPane
     *
     * Returns the DOM node that represents the main drawing layer.
     */
    getDrawPane(): Element;

    /**
     * Function: getOverlayPane
     *
     * Returns the DOM node that represents the layer above the drawing layer.
     */
    getOverlayPane(): Element;

    /**
     * Function: getDecoratorPane
     *
     * Returns the DOM node that represents the topmost drawing layer.
     */
    getDecoratorPane(): Element;

    /**
     * Function: isContainerEvent
     *
     * Returns true if the event origin is one of the drawing panes or
     * containers of the view.
     */
    isContainerEvent(evt: Event): boolean;

    /**
     * Function: isScrollEvent
     *
     * Returns true if the event origin is one of the scrollbars of the
     * container in IE. Such events are ignored.
     */
    isScrollEvent(evt: Event): boolean;

    /**
     * Function: init
     *
     * Initializes the graph event dispatch loop for the specified container
     * and invokes <create> to create the required DOM nodes for the display.
     */
    init(): void;

    /**
     * Function: installListeners
     *
     * Installs the required listeners in the container.
     */
    installListeners(): void;

    /**
     * Function: create
     *
     * Creates the DOM nodes for the HTML display.
     */
    createHtml(): void;

    /**
     * Function: updateHtmlCanvasSize
     *
     * Updates the size of the HTML canvas.
     */
    updateHtmlCanvasSize(width: number, height: number): void;

    /**
     * Function: createHtmlPane
     *
     * Creates and returns a drawing pane in HTML (DIV).
     */
    createHtmlPane(width: number, height: number): Element;

    /**
     * Function: create
     *
     * Creates the DOM nodes for the VML display.
     */
    createVml(): Element

    /**
     * Function: createVmlPane
     *
     * Creates a drawing pane in VML (group).
     */
    createVmlPane(width: number, height: number): Element;

    /**
     * Function: create
     *
     * Creates and returns the DOM nodes for the SVG display.
     */
    createSvg(): Element;

    /**
     * Function: updateContainerStyle
     *
     * Updates the style of the container after installing the SVG DOM elements.
     */
    updateContainerStyle(container: Element): void;

    /**
     * Function: destroy
     *
     * Destroys the view and all its resources.
     */
    destroy(): void;

  }

  /**
   * Class: mxCurrentRootChange
   *
   * Action to change the current root in a view.
   *
   * Constructor: mxCurrentRootChange
   *
   * Constructs a change of the current root in the given view.
   */
  export class mxCurrentRootChange {
    constructor(view: mxGraphView, root: mxCell);

    /**
     * Function: execute
     *
     * Changes the current root of the view.
     */
    execute();
  }
}