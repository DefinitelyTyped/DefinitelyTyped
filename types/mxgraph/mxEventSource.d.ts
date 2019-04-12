/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxEventSource
 *
 * Base class for objects that dispatch named events. To create a subclass that
 * inherits from mxEventSource, the following code is used.
 *
 * (code)
 * function MyClass() { };
 *
 * MyClass.prototype = new mxEventSource();
 * MyClass.prototype.constructor = MyClass;
 * (end)
 *
 * Known Subclasses:
 *
 * <mxGraphModel>, <mxGraph>, <mxGraphView>, <mxEditor>, <mxCellOverlay>,
 * <mxToolbar>, <mxWindow>
 * 
 * Constructor: mxEventSource
 *
 * Constructs a new event source.
 */

declare namespace mxgraph {
  export class mxEventSource {

    constructor(eventSource: any);

    /**
     * Variable: eventListeners
     *
     * Holds the event names and associated listeners in an array. The array
     * contains the event name followed by the respective listener for each
     * registered listener.
     */
    eventListeners: any[];

    /**
     * Variable: eventsEnabled
     *
     * Specifies if events can be fired. Default is true.
     */
    eventsEnabled: boolean;

    /**
     * Variable: eventSource
     *
     * Optional source for events. Default is null.
     */
    eventSource: any;

    /**
     * Function: isEventsEnabled
     * 
     * Returns <eventsEnabled>.
     */
    isEventsEnabled(): boolean;

    /**
     * Function: setEventsEnabled
     * 
     * Sets <eventsEnabled>.
     */
    setEventsEnabled(value: boolean): void;

    /**
     * Function: getEventSource
     * 
     * Returns <eventSource>.
     */
    getEventSource(): any;

    /**
     * Function: setEventSource
     * 
     * Sets <eventSource>.
     */
    setEventSource(value: any)

    /**
     * Function: addListener
     *
     * Binds the specified function to the given event name. If no event name
     * is given, then the listener is registered for all events.
     * 
     * The parameters of the listener are the sender and an <mxEventObject>.
     */
    addListener(name: string, funct: (...args: any[]) => any);

    /**
     * Function: removeListener
     *
     * Removes all occurrences of the given listener from <eventListeners>.
     */
    removeListener(funct: (...args: any[]) => any);

    /**
     * Function: fireEvent
     *
     * Dispatches the given event to the listeners which are registered for
     * the event. The sender argument is optional. The current execution scope
     * ("this") is used for the listener invocation (see <mxUtils.bind>).
     *
     * Example:
     *
     * (code)
     * fireEvent(new mxEventObject("eventName", key1, val1, .., keyN, valN))
     * (end)
     * 
     * Parameters:
     *
     * evt - <mxEventObject> that represents the event.
     * sender - Optional sender to be passed to the listener. Default value is
     * the return value of <getEventSource>.
     */
    fireEvent(evt: mxEventObject, sender: any);

  }
}
