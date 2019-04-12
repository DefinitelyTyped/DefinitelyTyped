/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxEventObject
 *
 * The mxEventObject is a wrapper for all properties of a single event.
 * Additionally, it also offers functions to consume the event and check if it
 * was consumed as follows:
 *
 * (code)
 * evt.consume();
 * INV: evt.isConsumed() == true
 * (end)
 *
 * Constructor: mxEventObject
 *
 * Constructs a new event object with the specified name. An optional
 * sequence of key, value pairs can be appended to define properties.
 *
 * Example:
 *
 * (code)
 * new mxEventObject("eventName", key1, val1, .., keyN, valN)
 * (end)
 */
declare namespace mxgraph {
  export class mxEventObject {
    constructor(name: string, ...args: any[]);

    /**
     * Variable: name
     *
     * Holds the name.
     */
    name: string;

    /**
     * Variable: properties
     *
     * Holds the properties as an associative array.
     */
    properties: any[];

    /**
     * Variable: consumed
     *
     * Holds the consumed state. Default is false.
     */
    consumed: boolean;

    /**
     * Function: getName
     *
     * Returns <name>.
     */
    getName(): string;

    /**
     * Function: getProperties
     *
     * Returns <properties>.
     */
    getProperties(): any[];

    /**
     * Function: getProperty
     *
     * Returns the property for the given key.
     */
    getProperty(key: string): any[];

    /**
     * Function: isConsumed
     *
     * Returns true if the event has been consumed.
     */
    isConsumed(): boolean;

    /**
     * Function: consume
     *
     * Consumes the event.
     */
    consume(): void;
  }
}