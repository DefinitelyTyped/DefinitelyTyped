declare module goog {
    function require(name: 'goog.ui.HoverCard'): typeof goog.ui.HoverCard;
    function require(name: 'goog.ui.HoverCard.EventType'): typeof goog.ui.HoverCard.EventType;
    function require(name: 'goog.ui.HoverCard.TriggerEvent'): typeof goog.ui.HoverCard.TriggerEvent;
}

declare module goog.ui {

    /**
     * Create a hover card object.  Hover cards extend tooltips in that they don't
     * have to be manually attached to each element that can cause them to display.
     * Instead, you can create a function that gets called when the mouse goes over
     * any element on your page, and returns whether or not the hovercard should be
     * shown for that element.
     *
     * Alternatively, you can define a map of tag names to the attribute name each
     * tag should have for that tag to trigger the hover card.  See example below.
     *
     * Hovercards can also be triggered manually by calling
     * {@code triggerForElement}, shown without a delay by calling
     * {@code showForElement}, or triggered over other elements by calling
     * {@code attach}.  For the latter two cases, the application is responsible
     * for calling {@code detach} when finished.
     *
     * HoverCard objects fire a TRIGGER event when the mouse moves over an element
     * that can trigger a hovercard, and BEFORE_SHOW when the hovercard is
     * about to be shown.  Clients can respond to these events and can prevent the
     * hovercard from being triggered or shown.
     *
     * @param {Function|Object} isAnchor Function that returns true if a given
     *     element should trigger the hovercard.  Alternatively, it can be a map of
     *     tag names to the attribute that the tag should have in order to trigger
     *     the hovercard, e.g., {A: 'href'} for all links.  Tag names must be all
     *     upper case; attribute names are case insensitive.
     * @param {boolean=} opt_checkDescendants Use false for a performance gain if
     *     you are sure that none of your triggering elements have child elements.
     *     Default is true.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper to use for
     *     creating and rendering the hovercard element.
     * @param {Document=} opt_triggeringDocument Optional document to use in place
     *     of the one included in the DomHelper for finding triggering elements.
     *     Defaults to the document included in the DomHelper.
     * @constructor
     * @extends {goog.ui.AdvancedTooltip}
     */
    class HoverCard extends goog.ui.AdvancedTooltip {
        constructor(isAnchor: Function|Object, opt_checkDescendants?: boolean, opt_domHelper?: goog.dom.DomHelper, opt_triggeringDocument?: Document);
        
        /**
         * Triggers the hovercard to show after a delay.
         * @param {Element} anchorElement Element that is triggering the hovercard.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display
         *     hovercard.
         * @param {Object=} opt_data Data to pass to the onTrigger event.
         */
        triggerForElement(anchorElement: Element, opt_pos?: goog.positioning.AbstractPosition, opt_data?: Object): void;
        
        /**
         * Called when an element triggers the hovercard.  This will return false
         * if an event handler sets preventDefault to true, which will prevent
         * the hovercard from being shown.
         * @param {!goog.ui.HoverCard.TriggerEvent} triggerEvent Event object to use
         *     for trigger event.
         * @return {boolean} Whether hovercard should be shown or cancelled.
         * @protected
         */
        onTrigger(triggerEvent: goog.ui.HoverCard.TriggerEvent): boolean;
        
        /**
         * Abort pending hovercard showing, if any.
         */
        cancelTrigger(): void;
        
        /**
         * This method gets called when we detect that a trigger event will not lead
         * to the hovercard being shown.
         * @protected
         */
        onCancelTrigger(): void;
        
        /**
         * Gets the DOM element that triggered the current hovercard.  Note that in
         * the TRIGGER or CANCEL_TRIGGER events, the current hovercard's anchor may not
         * be the one that caused the event, so use the event's anchor property instead.
         * @return {Element} Object that caused the currently displayed hovercard (or
         *     pending hovercard if none is displayed) to be triggered.
         */
        getAnchorElement(): Element;
        
        /**
         * This mouse over event is only received if the anchor is already attached.
         * If it was attached manually, then it may need to be triggered.
         * @param {goog.events.BrowserEvent} event Mouse over event.
         * @override
         */
        handleMouseOver(event: goog.events.BrowserEvent): void;
        
        /**
         * If the mouse moves out of the trigger while we're being triggered, then
         * cancel it.
         * @param {goog.events.BrowserEvent} event Mouse out or blur event.
         * @override
         */
        handleMouseOutAndBlur(event: goog.events.BrowserEvent): void;
        
        /**
         * Called by timer from mouse over handler. If this is called and the hovercard
         * is not shown for whatever reason, then send a cancel trigger event.
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         * @override
         */
        maybeShow(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
        
        /**
         * Sets the max number of levels to search up the dom if checking descendants.
         * @param {number} maxSearchSteps Maximum number of levels to search up the
         *     dom if checking descendants.
         */
        setMaxSearchSteps(maxSearchSteps: number): void;
    }
}

declare module goog.ui.HoverCard {

    /**
     * Enum for event type fired by HoverCard.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        TRIGGER: EventType;
        CANCEL_TRIGGER: EventType;
        BEFORE_SHOW: EventType;
        SHOW: EventType;
        BEFORE_HIDE: EventType;
        HIDE: EventType;
    };

    /**
     * Create a trigger event for specified anchor and optional data.
     * @param {goog.ui.HoverCard.EventType} type Event type.
     * @param {goog.ui.HoverCard} target Hovercard that is triggering the event.
     * @param {Element} anchor Element that triggered event.
     * @param {Object=} opt_data Optional data to be available in the TRIGGER event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class TriggerEvent extends goog.events.Event {
        constructor(type: goog.ui.HoverCard.EventType, target: goog.ui.HoverCard, anchor: Element, opt_data?: Object);
    }
}
