declare module goog {
    function require(name: 'goog.events.BrowserEvent'): typeof goog.events.BrowserEvent;
    function require(name: 'goog.events.BrowserEvent.MouseButton'): typeof goog.events.BrowserEvent.MouseButton;
}

declare module goog.events {

    /**
     * Accepts a browser event object and creates a patched, cross browser event
     * object.
     * The content of this object will not be initialized if no event object is
     * provided. If this is the case, init() needs to be invoked separately.
     * @param {Event=} opt_e Browser event object.
     * @param {EventTarget=} opt_currentTarget Current target for event.
     * @constructor
     * @extends {goog.events.Event}
     */
    class BrowserEvent extends goog.events.Event {
        constructor(opt_e?: Event, opt_currentTarget?: goog.globalEventTarget);
        
        /**
         * Static data for mapping mouse buttons.
         * @type {!Array<number>}
         */
        static IEButtonMap: Array<number>;
        
        /**
         * Accepts a browser event object and creates a patched, cross browser event
         * object.
         * @param {Event} e Browser event object.
         * @param {EventTarget=} opt_currentTarget Current target for event.
         */
        init(e: Event, opt_currentTarget?: goog.globalEventTarget): void;
        
        /**
         * Tests to see which button was pressed during the event. This is really only
         * useful in IE and Gecko browsers. And in IE, it's only useful for
         * mousedown/mouseup events, because click only fires for the left mouse button.
         *
         * Safari 2 only reports the left button being clicked, and uses the value '1'
         * instead of 0. Opera only reports a mousedown event for the middle button, and
         * no mouse events for the right button. Opera has default behavior for left and
         * middle click that can only be overridden via a configuration setting.
         *
         * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
         *
         * @param {goog.events.BrowserEvent.MouseButton} button The button
         *     to test for.
         * @return {boolean} True if button was pressed.
         */
        isButton(button: goog.events.BrowserEvent.MouseButton): boolean;
        
        /**
         * Whether this has an "action"-producing mouse button.
         *
         * By definition, this includes left-click on windows/linux, and left-click
         * without the ctrl key on Macs.
         *
         * @return {boolean} The result.
         */
        isMouseActionButton(): boolean;
        
        /**
         * @return {Event} The underlying browser event object.
         */
        getBrowserEvent(): Event;
    }
}

declare module goog.events.BrowserEvent {

    /**
     * Normalized button constants for the mouse.
     * @enum {number}
     */
    type MouseButton = number;
    var MouseButton: {
        LEFT: MouseButton;
        MIDDLE: MouseButton;
        RIGHT: MouseButton;
    };
}
