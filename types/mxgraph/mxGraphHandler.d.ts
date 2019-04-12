/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxGraphHandler
 * 
 * Graph event handler that handles selection. Individual cells are handled
 * separately using <mxVertexHandler> or one of the edge handlers. These
 * handlers are created using <mxGraph.createHandler> in
 * <mxGraphSelectionModel.cellAdded>.
 * 
 * To avoid the container to scroll a moved cell into view, set
 * <scrollAfterMove> to false.
 * 
 * Constructor: mxGraphHandler
 * 
 * Constructs an event handler that creates handles for the
 * selection cells.
 * 
 * Parameters:
 * 
 * graph - Reference to the enclosing <mxGraph>.
 */

declare namespace mxgraph {
  export class mxGraphHandler {
    constructor(graph: mxGraph);

    /**
     * Variable: graph
     * 
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: maxCells
     * 
     * Defines the maximum number of cells to paint subhandles
     * for. Default is 50 for Firefox and 20 for IE. Set this
     * to 0 if you want an unlimited number of handles to be
     * displayed. This is only recommended if the number of
     * cells in the graph is limited to a small number, eg.
     * 500.
     */
    maxCells: number;

    /**
     * Variable: enabled
     * 
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;

    /**
     * Variable: highlightEnabled
     * 
     * Specifies if drop targets under the mouse should be enabled. Default is
     * true.
     */
    highlightEnabled: boolean;

    /**
     * Variable: cloneEnabled
     * 
     * Specifies if cloning by control-drag is enabled. Default is true.
     */
    cloneEnabled: boolean;

    /**
     * Variable: moveEnabled
     * 
     * Specifies if moving is enabled. Default is true.
     */
    moveEnabled: boolean;

    /**
     * Variable: guidesEnabled
     * 
     * Specifies if other cells should be used for snapping the right, center or
     * left side of the current selection. Default is false.
     */
    guidesEnabled: boolean;

    /**
     * Variable: guide
     * 
     * Holds the <mxGuide> instance that is used for alignment.
     */
    guide: mxGuide;

    /**
     * Variable: currentDx
     * 
     * Stores the x-coordinate of the current mouse move.
     */
    currentDx: number;

    /**
     * Variable: currentDy
     * 
     * Stores the y-coordinate of the current mouse move.
     */
    currentDy: number;

    /**
     * Variable: updateCursor
     * 
     * Specifies if a move cursor should be shown if the mouse is over a movable
     * cell. Default is true.
     */
    updateCursor: boolean;

    /**
     * Variable: selectEnabled
     * 
     * Specifies if selecting is enabled. Default is true.
     */
    selectEnabled: boolean;

    /**
     * Variable: removeCellsFromParent
     * 
     * Specifies if cells may be moved out of their parents. Default is true.
     */
    removeCellsFromParent: boolean;

    /**
     * Variable: connectOnDrop
     * 
     * Specifies if drop events are interpreted as new connections if no other
     * drop action is defined. Default is false.
     */
    connectOnDrop: boolean;

    /**
     * Variable: scrollOnMove
     * 
     * Specifies if the view should be scrolled so that a moved cell is
     * visible. Default is true.
     */
    scrollOnMove: boolean;

    /**
     * Variable: minimumSize
     * 
     * Specifies the minimum number of pixels for the width and height of a
     * selection border. Default is 6.
     */
    minimumSize: number;

    /**
     * Variable: previewColor
     * 
     * Specifies the color of the preview shape. Default is black.
     */
    previewColor: string;

    /**
     * Variable: htmlPreview
     * 
     * Specifies if the graph container should be used for preview. If this is used
     * then drop target detection relies entirely on <mxGraph.getCellAt> because
     * the HTML preview does not "let events through". Default is false.
     */
    htmlPreview: boolean;

    /**
     * Variable: shape
     * 
     * Reference to the <mxShape> that represents the preview.
     */
    shape: mxShape;

    /**
     * Variable: scaleGrid
     * 
     * Specifies if the grid should be scaled. Default is false.
     */
    scaleGrid: boolean;

    /**
     * Variable: rotationEnabled
     * 
     * Specifies if the bounding box should allow for rotation. Default is true.
     */
    rotationEnabled: boolean;

    /**
     * Function: isEnabled
     * 
     * Returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Function: setEnabled
     * 
     * Sets <enabled>.
     */
    setEnabled(value: boolean): void;

    /**
     * Function: isCloneEnabled
     * 
     * Returns <cloneEnabled>.
     */
    isCloneEnabled(): boolean;

    /**
     * Function: setCloneEnabled
     * 
     * Sets <cloneEnabled>.
     * 
     * Parameters:
     * 
     * value - Boolean that specifies the new clone enabled state.
     */
    setCloneEnabled(value: boolean): void;

    /**
     * Function: isMoveEnabled
     * 
     * Returns <moveEnabled>.
     */
    isMoveEnabled(): boolean;

    /**
     * Function: setMoveEnabled
     * 
     * Sets <moveEnabled>.
     */
    setMoveEnabled(value: boolean): void;

    /**
     * Function: isSelectEnabled
     * 
     * Returns <selectEnabled>.
     */
    isSelectEnabled(): boolean;

    /**
     * Function: setSelectEnabled
     * 
     * Sets <selectEnabled>.
     */
    setSelectEnabled(value: boolean): void;

    /**
     * Function: isRemoveCellsFromParent
     * 
     * Returns <removeCellsFromParent>.
     */
    isRemoveCellsFromParent(): boolean;

    /**
     * Function: setRemoveCellsFromParent
     * 
     * Sets <removeCellsFromParent>.
     */
    setRemoveCellsFromParent(value: boolean): void;

    /**
     * Function: getInitialCellForEvent
     * 
     * Hook to return initial cell for the given event.
     */
    getInitialCellForEvent(me: mxMouseEvent): mxCell;

    /**
     * Function: isDelayedSelection
     * 
     * Hook to return true for delayed selections.
     */
    isDelayedSelection(cell: mxCell, me: mxMouseEvent): boolean;

    /**
     * Function: consumeMouseEvent
     * 
     * Consumes the given mouse event. NOTE: This may be used to enable click
     * events for links in labels on iOS as follows as consuming the initial
     * touchStart disables firing the subsequent click evnent on the link.
     * 
     * <code>
     * consumeMouseEvent(evtName, me)
     * {
     *   var source = mxEvent.getSource(me.getEvent());
     *   
     *   if (!mxEvent.isTouchEvent(me.getEvent()) || source.nodeName != 'A')
     *   {
     *     me.consume();
     *   }
     * }
     * </code>
     */
    consumeMouseEvent(evtName: string, me: mxMouseEvent): void;

    /**
     * Function: mouseDown
     * 
     * Handles the event by selecing the given cell and creating a handle for
     * it. By consuming the event all subsequent events of the gesture are
     * redirected to this handler.
     */
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Function: getGuideStates
     * 
     * Creates an array of cell states which should be used as guides.
     */
    getGuideStates(): mxCellState[];

    /**
     * Function: getCells
     * 
     * Returns the cells to be modified by this handler. This implementation
     * returns all selection cells that are movable, or the given initial cell if
     * the given cell is not selected and movable. This handles the case of moving
     * unselectable or unselected cells.
     * 
     * Parameters:
     * 
     * initialCell - <mxCell> that triggered this handler.
     */
    getCells(initialCell: mxCell): mxCell[];

    /**
     * Function: getPreviewBounds
     * 
     * Returns the <mxRectangle> used as the preview bounds for
     * moving the given cells.
     */
    getPreviewBounds(cells: mxCell[]): mxRectangle;

    /**
     * Function: getBoundingBox
     * 
     * Returns the union of the <mxCellStates> for the given array of <mxCells>.
     * For vertices, this method uses the bounding box of the corresponding shape
     * if one exists. The bounding box of the corresponding text label and all
     * controls and overlays are ignored. See also: <mxGraphView.getBounds> and
     * <mxGraph.getBoundingBox>.
     *
     * Parameters:
     *
     * cells - Array of <mxCells> whose bounding box should be returned.
     */
    getBoundingBox(cells: mxCell[]): mxRectangle;

    /**
     * Function: createPreviewShape
     * 
     * Creates the shape used to draw the preview for the given bounds.
     */
    createPreviewShape(bounds: mxRectangle): mxRectangleShape;

    /**
     * Function: start
     * 
     * Starts the handling of the mouse gesture.
     */
    start(cell: mxCell, x: number, y: number): void;

    /**
     * Function: useGuidesForEvent
     * 
     * Returns true if the guides should be used for the given <mxMouseEvent>.
     * This implementation returns <mxGuide.isEnabledForEvent>.
     */
    useGuidesForEvent(me: mxMouseEvent): boolean;


    /**
     * Function: snap
     * 
     * Snaps the given vector to the grid and returns the given mxPoint instance.
     */
    snap(vector: mxPoint): mxPoint;

    /**
     * Function: getDelta
     * 
     * Returns an <mxPoint> that represents the vector for moving the cells
     * for the given <mxMouseEvent>.
     */
    getDelta(me: mxMouseEvent): mxPoint;

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
     * Function: roundLength
     * 
     * Hook for rounding the unscaled vector. This uses Math.round.
     */
    roundLength(length: number): number;

    /**
     * Function: mouseMove
     * 
     * Handles the event by highlighting possible drop targets and updating the
     * preview.
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Function: updatePreviewShape
     * 
     * Updates the bounds of the preview shape.
     */
    updatePreviewShape(): void;

    /**
     * Function: setHighlightColor
     * 
     * Sets the color of the rectangle used to highlight drop targets.
     * 
     * Parameters:
     * 
     * color - String that represents the new highlight color.
     */
    setHighlightColor(color: string): void;

    /**
     * Function: mouseUp
     * 
     * Handles the event by applying the changes to the selection cells.
     */
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Function: selectDelayed
     * 
     * Implements the delayed selection for the given mouse event.
     */
    selectDelayed(me: mxMouseEvent): void;

    /**
     * Function: reset
     * 
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Function: shouldRemoveCellsFromParent
     * 
     * Returns true if the given cells should be removed from the parent for the specified
     * mousereleased event.
     */
    shouldRemoveCellsFromParent(parent: mxCell, cells: mxCell[], evt: Event): boolean;

    /**
     * Function: moveCells
     * 
     * Moves the given cells by the specified amount.
     */
    moveCells(cells: mxCell[], dx: number, dy: number, clone: boolean, target: mxCell, evt: Event): void;

    /**
     * Function: destroyShapes
     * 
     * Destroy the preview and highlight shapes.
     */
    destroyShapes(): void;

    /**
     * Function: destroy
     * 
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
  }
}