/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxPanningHandler
 * 
 * Event handler that pans and creates popupmenus. To use the left
 * mousebutton for panning without interfering with cell moving and
 * resizing, use <isUseLeftButton> and <isIgnoreCell>. For grid size
 * steps while panning, use <useGrid>. This handler is built-into
 * <mxGraph.panningHandler> and enabled using <mxGraph.setPanning>.
 * 
 * Constructor: mxPanningHandler
 * 
 * Constructs an event handler that creates a <mxPopupMenu>
 * and pans the graph.
 *
 * Event: mxEvent.PAN_START
 *
 * Fires when the panning handler changes its <active> state to true. The
 * <code>event</code> property contains the corresponding <mxMouseEvent>.
 *
 * Event: mxEvent.PAN
 *
 * Fires while handle is processing events. The <code>event</code> property contains
 * the corresponding <mxMouseEvent>.
 *
 * Event: mxEvent.PAN_END
 *
 * Fires when the panning handler changes its <active> state to false. The
 * <code>event</code> property contains the corresponding <mxMouseEvent>.
 */
declare namespace mxgraph {
  export class mxPanningHandler extends mxEventSource {
    constructor(graph: mxGraph);

    /**
     * Variable: graph
     * 
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: useLeftButtonForPanning
     * 
     * Specifies if panning should be active for the left mouse button.
     * Setting this to true may conflict with <mxRubberband>. Default is false.
     */
    useLeftButtonForPanning: boolean;

    /**
     * Variable: usePopupTrigger
     * 
     * Specifies if <mxEvent.isPopupTrigger> should also be used for panning.
     */
    usePopupTrigger: boolean;

    /**
     * Variable: ignoreCell
     * 
     * Specifies if panning should be active even if there is a cell under the
     * mousepointer. Default is false.
     */
    ignoreCell: boolean;

    /**
     * Variable: previewEnabled
     * 
     * Specifies if the panning should be previewed. Default is true.
     */
    previewEnabled: boolean;

    /**
     * Variable: useGrid
     * 
     * Specifies if the panning steps should be aligned to the grid size.
     * Default is false.
     */
    useGrid: boolean;

    /**
     * Variable: panningEnabled
     * 
     * Specifies if panning should be enabled. Default is true.
     */
    panningEnabled: boolean;

    /**
     * Variable: pinchEnabled
     * 
     * Specifies if pinch gestures should be handled as zoom. Default is true.
     */
    pinchEnabled: boolean;

    /**
     * Variable: maxScale
     * 
     * Specifies the maximum scale. Default is 8.
     */
    maxScale: number;

    /**
     * Variable: minScale
     * 
     * Specifies the minimum scale. Default is 0.01.
     */
    minScale: number;

    /**
     * Variable: dx
     * 
     * Holds the current horizontal offset.
     */
    dx: number;

    /**
     * Variable: dy
     * 
     * Holds the current vertical offset.
     */
    dy: number;

    /**
     * Variable: startX
     * 
     * Holds the x-coordinate of the start point.
     */
    startX: number;

    /**
     * Variable: startY
     * 
     * Holds the y-coordinate of the start point.
     */
    startY: number;

    /**
     * Function: isActive
     * 
     * Returns true if the handler is currently active.
     */
    isActive(): boolean;

    /**
     * Function: isPanningEnabled
     * 
     * Returns <panningEnabled>.
     */
    isPanningEnabled(): boolean;

    /**
     * Function: setPanningEnabled
     * 
     * Sets <panningEnabled>.
     */
    setPanningEnabled(value: boolean): void;

    /**
     * Function: isPinchEnabled
     * 
     * Returns <pinchEnabled>.
     */
    isPinchEnabled(): boolean;

    /**
     * Function: setPinchEnabled
     * 
     * Sets <pinchEnabled>.
     */
    setPinchEnabled(value: boolean): void;

    /**
     * Function: isPanningTrigger
     * 
     * Returns true if the given event is a panning trigger for the optional
     * given cell. This returns true if control-shift is pressed or if
     * <usePopupTrigger> is true and the event is a popup trigger.
     */
    isPanningTrigger(me: mxMouseEvent): boolean;

    /**
     * Function: isForcePanningEvent
     * 
     * Returns true if the given <mxMouseEvent> should start panning. This
     * implementation always returns true if <ignoreCell> is true or for
     * multi touch events.
     */
    isForcePanningEvent(me: mxMouseEvent): boolean;

    /**
     * Function: mouseDown
     * 
     * Handles the event by initiating the panning. By consuming the event all
     * subsequent events of the gesture are redirected to this handler.
     */
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Function: start
     * 
     * Starts panning at the given event.
     */
    start(me: mxMouseEvent): void;

    /**
     * Function: consumePanningTrigger
     * 
     * Consumes the given <mxMouseEvent> if it was a panning trigger in
     * <mouseDown>. The default is to invoke <mxMouseEvent.consume>. Note that this
     * will block any further event processing. If you haven't disabled built-in
     * context menus and require immediate selection of the cell on mouseDown in
     * Safari and/or on the Mac, then use the following code:
     * 
     * (code)
     * consumePanningTrigger(me)
     * {
     *   if (me.evt.preventDefault)
     *   {
     *     me.evt.preventDefault();
     *   }
     *   
     *   // Stops event processing in IE
     *   me.evt.returnValue = false;
     *   
     *   // Sets local consumed state
     *   if (!mxClient.IS_SF && !mxClient.IS_MAC)
     *   {
     *     me.consumed = true;
     *   }
     * };
     * (end)
     */
    consumePanningTrigger(me: mxMouseEvent): void;

    /**
     * Function: mouseMove
     * 
     * Handles the event by updating the panning on the graph.
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     * 
     * Handles the event by setting the translation on the view or showing the
     * popupmenu.
     */
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     * 
     * Handles the event by setting the translation on the view or showing the
     * popupmenu.
     */
    reset(): void;

    /**
     * Function: panGraph
     * 
     * Pans <graph> by the given amount.
     */
    panGraph(dx: number, dy: number): void;

    /**
     * Function: destroy
     * 
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
  }
}