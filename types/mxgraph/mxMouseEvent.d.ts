/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxMouseEvent
 *
 * Base class for all mouse events in mxGraph. A listener for this event should
 * implement the following methods:
 *
 * (code)
 * graph.addMouseListener(
 * {
 *   mouseDown: function(sender, evt)
 *   {
 *     mxLog.debug('mouseDown');
 *   },
 *   mouseMove: function(sender, evt)
 *   {
 *     mxLog.debug('mouseMove');
 *   },
 *   mouseUp: function(sender, evt)
 *   {
 *     mxLog.debug('mouseUp');
 *   }
 * });
 * (end)
 *
 * Constructor: mxMouseEvent
 *
 * Constructs a new event object for the given arguments.
 *
 * Parameters:
 *
 * evt - Native mouse event.
 * state - Optional <mxCellState> under the mouse.
 *
 */
declare namespace mxgraph {
  export class mxMouseEvent {
    constructor(evt: Event, state: mxCellState);

    /**
     * Variable: consumed
     *
     * Holds the consumed state of this event.
     */
    consumed: boolean;

    /**
     * Variable: evt
     *
     * Holds the inner event object.
     */
    evt: Event;

    /**
     * Variable: graphX
     *
     * Holds the x-coordinate of the event in the graph. This value is set in
     * <mxGraph.fireMouseEvent>.
     */
    graphX: number;

    /**
     * Variable: graphY
     *
     * Holds the y-coordinate of the event in the graph. This value is set in
     * <mxGraph.fireMouseEvent>.
     */
    graphY: number;

    /**
     * Variable: state
     *
     * Holds the optional <mxCellState> associated with this event.
     */
    state: mxCellState;

    /**
     * Variable: sourceState
     *
     * Holds the <mxCellState> that was passed to the constructor. This can be
     * different from <state> depending on the result of <mxGraph.getEventState>.
     */
    sourceState: mxCellState;

    /**
     * Function: getEvent
     *
     * Returns <evt>.
     */
    getEvent(): Event

    /**
     * Function: getSource
     *
     * Returns the target DOM element using <mxEvent.getSource> for <evt>.
     */
    getSource(): Element;

    /**
     * Function: isSource
     *
     * Returns true if the given <mxShape> is the source of <evt>.
     */
    isSource(shape: mxShape): boolean;

    /**
     * Function: getX
     *
     * Returns <evt.clientX>.
     */
    getX(): number;

    /**
     * Function: getY
     *
     * Returns <evt.clientY>.
     */
    getY(): number;

    /**
     * Function: getGraphX
     *
     * Returns <graphX>.
     */
    getGraphX(): number;

    /**
     * Function: getGraphY
     *
     * Returns <graphY>.
     */
    getGraphY(): number;

    /**
     * Function: getState
     *
     * Returns <state>.
     */
    getState(): mxCellState;

    /**
     * Function: getCell
     *
     * Returns the <mxCell> in <state> is not null.
     */
    getCell(): mxCell;

    /**
     * Function: isPopupTrigger
     *
     * Returns true if the event is a popup trigger.
     */
    isPopupTrigger(): boolean;

    /**
     * Function: isConsumed
     *
     * Returns <consumed>.
     */
    isConsumed(): boolean;

    /**
     * Function: consume
     *
     * Sets <consumed> to true and invokes preventDefault on the native event
     * if such a method is defined. This is used mainly to avoid the cursor from
     * being changed to a text cursor in Webkit. You can use the preventDefault
     * flag to disable this functionality.
     *
     * Parameters:
     *
     * preventDefault - Specifies if the native event should be canceled. Default
     * is true.
     */
    consume(preventDefault: boolean): void;
  }
}