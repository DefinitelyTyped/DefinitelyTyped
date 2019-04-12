/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxVertexHandler
 * 
 * Event handler for resizing cells. This handler is automatically created in
 * <mxGraph.createHandler>.
 * 
 * Constructor: mxVertexHandler
 * 
 * Constructs an event handler that allows to resize vertices
 * and groups.
 * 
 * Parameters:
 * 
 * state - <mxCellState> of the cell to be resized.
 */
declare namespace mxgraph {
  export class mxVertexHandler {
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
     * Variable: singleSizer
     * 
     * Specifies if only one sizer handle at the bottom, right corner should be
     * used. Default is false.
     */
    singleSizer: boolean;

    /**
     * Variable: index
     * 
     * Holds the index of the current handle.
     */
    index: number;

    /**
     * Variable: allowHandleBoundsCheck
     * 
     * Specifies if the bounds of handles should be used for hit-detection in IE or
     * if <tolerance> > 0. Default is true.
     */
    allowHandleBoundsCheck: boolean;

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
     * Variable: rotationEnabled
     * 
     * Specifies if a rotation handle should be visible. Default is false.
     */
    rotationEnabled: boolean;

    /**
     * Variable: parentHighlightEnabled
     * 
     * Specifies if the parent should be highlighted if a child cell is selected.
     * Default is false.
     */
    parentHighlightEnabled: boolean;

    /**
     * Variable: rotationRaster
     * 
     * Specifies if rotation steps should be "rasterized" depening on the distance
     * to the handle. Default is true.
     */
    rotationRaster: boolean;

    /**
     * Variable: rotationCursor
     * 
     * Specifies the cursor for the rotation handle. Default is 'crosshair'.
     */
    rotationCursor: number;

    /**
     * Variable: livePreview
     * 
     * Specifies if resize should change the cell in-place. This is an experimental
     * feature for non-touch devices. Default is false.
     */
    livePreview: boolean;

    /**
     * Variable: manageSizers
     * 
     * Specifies if sizers should be hidden and spaced if the vertex is small.
     * Default is false.
     */
    manageSizers: boolean;

    /**
     * Variable: constrainGroupByChildren
     * 
     * Specifies if the size of groups should be constrained by the children.
     * Default is false.
     */
    constrainGroupByChildren: boolean;

    /**
     * Variable: rotationHandleVSpacing
     * 
     * Vertical spacing for rotation icon. Default is -16.
     */
    rotationHandleVSpacing: number;

    /**
     * Variable: horizontalOffset
     * 
     * The horizontal offset for the handles. This is updated in <redrawHandles>
     * if <manageSizers> is true and the sizers are offset horizontally.
     */
    horizontalOffset: number;

    /**
     * Variable: verticalOffset
     * 
     * The horizontal offset for the handles. This is updated in <redrawHandles>
     * if <manageSizers> is true and the sizers are offset vertically.
     */
    verticalOffset: number;

    /**
     * Function: init
     * 
     * Initializes the shapes required for this vertex handler.
     */
    init(): void;

    /**
     * Function: isRotationHandleVisible
     * 
     * Returns true if the rotation handle should be showing.
     */
    isRotationHandleVisible(): boolean;

    /**
     * Function: isConstrainedEvent
     * 
     * Returns true if the aspect ratio if the cell should be maintained.
     */
    isConstrainedEvent(me: mxMouseEvent): boolean;

    /**
     * Function: isCenteredEvent
     * 
     * Returns true if the center of the vertex should be maintained during the resize.
     */
    isCenteredEvent(state: mxCellState, me: mxMouseEvent): boolean;

    /**
     * Function: createCustomHandles
     * 
     * Returns an array of custom handles. This implementation returns null.
     */
    createCustomHandles(): any[];

    /**
     * Function: updateMinBounds
     * 
     * Initializes the shapes required for this vertex handler.
     */
    updateMinBounds(): void;

    /**
     * Function: getSelectionBounds
     * 
     * Returns the mxRectangle that defines the bounds of the selection
     * border.
     */
    getSelectionBounds(state: mxCellState): mxRectangle;

    /**
     * Function: createParentHighlightShape
     * 
     * Creates the shape used to draw the selection border.
     */
    createParentHighlightShape(bounds: mxRectangle): mxRectangleShape;

    /**
     * Function: createSelectionShape
     * 
     * Creates the shape used to draw the selection border.
     */
    createSelectionShape(bounds: mxRectangle): mxRectangleShape;

    /**
     * Function: getSelectionColor
     * 
     * Returns <mxConstants.VERTEX_SELECTION_COLOR>.
     */
    getSelectionColor(): string;

    /**
     * Function: getSelectionStrokeWidth
     * 
     * Returns <mxConstants.VERTEX_SELECTION_STROKEWIDTH>.
     */
    getSelectionStrokeWidth(): number;

    /**
     * Function: isSelectionDashed
     * 
     * Returns <mxConstants.VERTEX_SELECTION_DASHED>.
     */
    isSelectionDashed(): boolean;

    /**
     * Function: createSizer
     * 
     * Creates a sizer handle for the specified cursor and index and returns
     * the new <mxRectangleShape> that represents the handle.
     */
    createSizer(cursor: string, index: number, size: number, fillColor: string): mxRectangleShape;

    /**
     * Function: isSizerVisible
     * 
     * Returns true if the sizer for the given index is visible.
     * This returns true for all given indices.
     */
    isSizerVisible(index: number): boolean;

    /**
     * Function: createSizerShape
     * 
     * Creates the shape used for the sizer handle for the specified bounds an
     * index. Only images and rectangles should be returned if support for HTML
     * labels with not foreign objects is required.
     */
    createSizerShape(bounds: mxRectangle, index: number, fillColor: string): mxRectangleShape;

    /**
     * Function: createBounds
     * 
     * Helper method to create an <mxRectangle> around the given centerpoint
     * with a width and height of 2*s or 6, if no s is given.
     */
    moveSizerTo(shape: mxRectangleShape, x: number, y: number): void;

    /**
     * Function: getHandleForEvent
     * 
     * Returns the index of the handle for the given event. This returns the index
     * of the sizer from where the event originated or <mxEvent.LABEL_INDEX>.
     */
    getHandleForEvent(me: mxMouseEvent): number;

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
     * Handles the event if a handle has been clicked. By consuming the
     * event all subsequent events of the gesture are redirected to this
     * handler.
     */
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Function: isLivePreviewBorder
     * 
     * Called if <livePreview> is enabled to check if a border should be painted.
     * This implementation returns true if the shape is transparent.
     */
    isLivePreviewBorder(): boolean;

    /**
     * Function: start
     * 
     * Starts the handling of the mouse gesture.
     */
    start(x: number, y: number, index: number): void;

    /**
     * Function: hideHandles
     * 
     * Shortcut to <hideSizers>.
     */
    setHandlesVisible(visible: boolean): void;

    /**
     * Function: hideSizers
     * 
     * Hides all sizers except.
     * 
     * Starts the handling of the mouse gesture.
     */
    hideSizers(): void;

    /**
     * Function: checkTolerance
     * 
     * Checks if the coordinates for the given event are within the
     * <mxGraph.tolerance>. If the event is a mouse event then the tolerance is
     * ignored.
     */
    checkTolerance(me: mxMouseEvent): void;

    /**
     * Function: updateHint
     * 
     * Hook for subclassers do show details while the handler is active.
     */
    updateHint(me: mxMouseEvent): void;

    /**
     * Function: removeHint
     * 
     * Hooks for subclassers to hide details when the handler gets inactive.
     */
    removeHint(): void;

    /**
     * Function: roundAngle
     * 
     * Hook for rounding the angle. This uses Math.round.
     */
    roundAngle(angle: number): number;

    /**
     * Function: roundLength
     * 
     * Hook for rounding the unscaled width or height. This uses Math.round.
     */
    roundLength(length: number): number;

    /**
     * Function: mouseMove
     * 
     * Handles the event by updating the preview.
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Function: rotateVertex
     * 
     * Rotates the vertex.
     */
    moveLabel(me: mxMouseEvent): void;

    /**
     * Function: rotateVertex
     * 
     * Rotates the vertex.
     */
    rotateVertex(me: mxMouseEvent): void;

    /**
     * Function: rotateVertex
     * 
     * Rotates the vertex.
     */
    resizeVertex(me: mxMouseEvent): void;

    /**
     * Function: updateLivePreview
     * 
     * Repaints the live preview.
     */
    updateLivePreview(me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     * 
     * Handles the event by applying the changes to the geometry.
     */
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Function: rotateCell
     * 
     * Rotates the given cell to the given rotation.
     */
    isRecursiveResize(state: mxCellState, me: mxMouseEvent): boolean;

    /**
     * Function: rotateClick
     * 
     * Hook for subclassers to implement a single click on the rotation handle.
     * This code is executed as part of the model transaction. This implementation
     * is empty.
     */
    rotateClick(): void;

    /**
     * Function: rotateCell
     * 
     * Rotates the given cell and its children by the given angle in degrees.
     * 
     * Parameters:
     * 
     * cell - <mxCell> to be rotated.
     * angle - Angle in degrees.
     */
    rotateCell(cell: mxCell, angle: number, parent: mxCell): void;

    /**
     * Function: reset
     * 
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Function: resizeCell
     * 
     * Uses the given vector to change the bounds of the given cell
     * in the graph using <mxGraph.resizeCell>.
     */
    resizeCell(cell: mxCell, dx: number, dy: number, index: number, gridEnabled: boolean, constrained: boolean, recurse: boolean): void;

    /**
     * Function: moveChildren
     * 
     * Moves the children of the given cell by the given vector.
     */
    moveChildren(cell: mxCell, dx: number, dy: number): void;

    /**
     * Function: union
     * 
     * Returns the union of the given bounds and location for the specified
     * handle index.
     * 
     * To override this to limit the size of vertex via a minWidth/-Height style,
     * the following code can be used.
     * 
     * (code)
     * var vertexHandlerUnion = union;
     * union(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
     * {
     *   var result = vertexHandlerUnion.apply(this, arguments);
     *   
     *   result.width = Math.max(result.width, mxUtils.getNumber(this.state.style, 'minWidth', 0));
     *   result.height = Math.max(result.height, mxUtils.getNumber(this.state.style, 'minHeight', 0));
     *   
     *   return result;
     * };
     * (end)
     * 
     * The minWidth/-Height style can then be used as follows:
     * 
     * (code)
     * graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'minWidth=100;minHeight=100;');
     * (end)
     * 
     * To override this to update the height for a wrapped text if the width of a vertex is
     * changed, the following can be used.
     * 
     * (code)
     * var mxVertexHandlerUnion = union;
     * union(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
     * {
     *   var result = mxVertexHandlerUnion.apply(this, arguments);
     *   var s = this.state;
     *   
     *   if (this.graph.isHtmlLabel(s.cell) && (index == 3 || index == 4) &&
     *       s.text != null && s.style[mxConstants.STYLE_WHITE_SPACE] == 'wrap')
     *   {
     *     var label = this.graph.getLabel(s.cell);
     *     var fontSize = mxUtils.getNumber(s.style, mxConstants.STYLE_FONTSIZE, mxConstants.DEFAULT_FONTSIZE);
     *     var ww = result.width / s.view.scale - s.text.spacingRight - s.text.spacingLeft
     *     
     *     result.height = mxUtils.getSizeForString(label, fontSize, s.style[mxConstants.STYLE_FONTFAMILY], ww).height;
     *   }
     *   
     *   return result;
     * };
     * (end)
     */
    union(bounds: mxRectangle, dx: number, dy: number, index: number, gridEnabled: boolean, scale: number, tr: Element, constrained: boolean, centered: boolean): void;

    /**
     * Function: redraw
     * 
     * Redraws the handles and the preview.
     */
    redraw(): void;

    /**
     * Returns the padding to be used for drawing handles for the current <bounds>.
     */
    getHandlePadding(): mxPoint;

    /**
     * Function: redrawHandles
     * 
     * Redraws the handles. To hide certain handles the following code can be used.
     * 
     * (code)
     * redrawHandles()
     * {
     *   mxVertexHandlerRedrawHandles.apply(this, arguments);
     *   
     *   if (this.sizers != null && this.sizers.length > 7)
     *   {
     *     this.sizers[1].node.style.display = 'none';
     *     this.sizers[6].node.style.display = 'none';
     *   }
     * };
     * (end)
     */
    redrawHandles(): void;

    /**
     * Function: getRotationHandlePosition
     * 
     * Returns an <mxPoint> that defines the rotation handle position.
     */
    getRotationHandlePosition(): mxPoint;

    /**
     * Function: updateParentHighlight
     * 
     * Updates the highlight of the parent if <parentHighlightEnabled> is true.
     */
    updateParentHighlight(): void;

    /**
     * Function: drawPreview
     * 
     * Redraws the preview.
     */
    drawPreview(): void;

    /**
     * Function: destroy
     * 
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
  }
}