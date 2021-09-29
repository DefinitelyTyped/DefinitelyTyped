/**
 * Base events class to handle custom events.
 * @class
 * @param {Array.<string>} [eventNames] - Event names that could be dispatched.
 */
export class Events {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(eventNames: any, sender: any);
    /**
     * Registered event names.
     * @protected
     * @type {Array.<string>}
     */
    protected _eventNames: Array<string>;
    _sender: any;
    /**
     * Stop propagation flag
     * @protected
     * @type {boolean}
     */
    protected _stopPropagation: boolean;
    _stampCache: {};
    __id: number;
    bindSender(sender: any): void;
    /**
     * Function that creates event object properties that would be dispatched.
     * @public
     * @param {Array.<string>} eventNames - Specified event names list.
     */
    public registerNames(eventNames: Array<string>): void;
    _getStamp(name: any, id: any, ogid: any): string;
    /**
     * Returns true if event callback has stamped.
     * @protected
     * @param {Object} name - Event identifier.
     * @param {Object} obj - Event callback.
     * @return {boolean} -
     */
    protected _stamp(name: any, obj: any): boolean;
    /**
     * Attach listener.
     * @public
     * @param {string} name - Event name to listen.
     * @param {eventCallback} callback - Event callback function.
     * @param {Object} sender - Event callback function owner.
     */
    public on(name: string, callback: any, sender: any, priority?: number): void;
    /**
     * Stop listening event name with specified callback function.
     * @public
     * @param {string} name - Event name.
     * @param {eventCallback} callback - Attached  event callback.
     */
    public off(name: string, callback: any): void;
    /**
     * Dispatch event.
     * @public
     * @param {Object} event - Event instance property that created by event name.
     * @param {Object} [obj] - Event object.
     */
    public dispatch(event: any, ...args: any[]): boolean;
    /**
     * Brakes events propagation.
     * @public
     */
    public stopPropagation(): void;
    /**
     * Removes all events.
     * @public
     */
    public clear(): void;
}
