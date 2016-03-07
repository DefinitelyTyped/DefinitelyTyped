declare module goog {
    function require(name: 'goog.events.ActionHandler'): typeof goog.events.ActionHandler;
    function require(name: 'goog.events.ActionEvent'): typeof goog.events.ActionEvent;
    function require(name: 'goog.events.BeforeActionEvent'): typeof goog.events.BeforeActionEvent;
    function require(name: 'goog.events.ActionHandler.EventType'): typeof goog.events.ActionHandler.EventType;
}

declare module goog.events {

    /**
     * A wrapper around an element that you want to listen to ACTION events on.
     * @param {Element|Document} element The element or document to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class ActionHandler extends goog.events.EventTarget {
        constructor(element: Element|Document);
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class ActionEvent extends goog.events.BrowserEvent {
        constructor(browserEvent: goog.events.BrowserEvent);
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
     * event. BEFOREACTION gives a chance to the application so the keyboard focus
     * can be restored back, if required.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class BeforeActionEvent extends goog.events.BrowserEvent {
        constructor(browserEvent: goog.events.BrowserEvent);
    }
}

declare module goog.events.ActionHandler {

    /**
     * Enum type for the events fired by the action handler
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        ACTION: EventType;
        BEFOREACTION: EventType;
    };
}
