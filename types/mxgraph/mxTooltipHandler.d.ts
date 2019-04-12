/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxTooltipHandler
 *
 * Graph event handler that displays tooltips. <mxGraph.getTooltip> is used to
 * get the tooltip for a cell or handle. This handler is built-into
 * <mxGraph.tooltipHandler> and enabled using <mxGraph.setTooltips>.
 *
 * Example:
 *
 * (code>
 * new mxTooltipHandler(graph);
 * (end)
 *
 * Constructor: mxTooltipHandler
 *
 * Constructs an event handler that displays tooltips with the specified
 * delay (in milliseconds). If no delay is specified then a default delay
 * of 500 ms (0.5 sec) is used.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 * delay - Optional delay in milliseconds.
 */
declare namespace mxgraph {
  export class mxTooltipHandler {

    constructor(graph: mxGraph, delay?: number);

    /**
     * Variable: zIndex
     *
     * Specifies the zIndex for the tooltip and its shadow. Default is 10005.
     */
    zIndex: number;

    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: delay
     *
     * Delay to show the tooltip in milliseconds. Default is 500.
     */
    delay: number;

    /**
     * Variable: ignoreTouchEvents
     *
     * Specifies if touch and pen events should be ignored. Default is true.
     */
    ignoreTouchEvents: boolean;

    /**
     * Variable: hideOnHover
     *
     * Specifies if the tooltip should be hidden if the mouse is moved over the
     * current cell. Default is false.
     */
    hideOnHover: boolean;

    /**
     * Variable: destroyed
     *
     * True if this handler was destroyed using <destroy>.
     */
    destroyed: boolean;

    /**
     * Variable: enabled
     *
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;

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
     */
    setEnabled(enabled: boolean): void;

    /**
     * Function: isHideOnHover
     *
     * Returns <hideOnHover>.
     */
    isHideOnHover(): boolean;

    /**
     * Function: setHideOnHover
     *
     * Sets <hideOnHover>.
     */
    setHideOnHover(value: boolean): void;

    /**
     * Function: init
     *
     * Initializes the DOM nodes required for this tooltip handler.
     */
    init(): void;

    /**
     * Function: getStateForEvent
     *
     * Returns the <mxCellState> to be used for showing a tooltip for this event.
     */
    getStateForEvent(me: mxMouseEvent): mxCellState;

    /**
     * Function: mouseDown
     *
     * Handles the event by initiating a rubberband selection. By consuming the
     * event all subsequent events of the gesture are redirected to this
     * handler.
     */
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseMove
     *
     * Handles the event by updating the rubberband selection.
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     *
     * Handles the event by resetting the tooltip timer or hiding the existing
     * tooltip.
     */
    mouseUp(sender: any, me: mxMouseEvent): void;


    /**
     * Function: resetTimer
     *
     * Resets the timer.
     */
    resetTimer(): void;

    /**
     * Function: reset
     *
     * Resets and/or restarts the timer to trigger the display of the tooltip.
     */
    reset(me: mxMouseEvent, restart: boolean, state: mxCellState): void;

    /**
     * Function: hide
     *
     * Hides the tooltip and resets the timer.
     */
    hide(): void;

    /**
     * Function: hideTooltip
     *
     * Hides the tooltip.
     */
    hideTooltip(): void;

    /**
     * Function: show
     *
     * Shows the tooltip for the specified cell and optional index at the
     * specified location (with a vertical offset of 10 pixels).
     */
    show(tip: string, x: number, y: number): void;

    /**
     * Function: destroy
     *
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;

  }
}