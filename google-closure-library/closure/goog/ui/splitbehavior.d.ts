declare module goog {
    function require(name: 'goog.ui.SplitBehavior'): typeof goog.ui.SplitBehavior;
    function require(name: 'goog.ui.SplitBehavior.DefaultHandlers'): typeof goog.ui.SplitBehavior.DefaultHandlers;
}

declare module goog.ui {

    /**
     * Creates a behavior for combining two controls. The behavior is triggered
     * by a given event type which applies the behavior handler.
     * Can be used to also render or decorate  the controls.
     * For a usage example see {@link goog.ui.ColorSplitBehavior}
     *
     * @param {goog.ui.Control} first A ui control.
     * @param {goog.ui.Control} second A ui control.
     * @param {function(goog.ui.Control,Event)=} opt_behaviorHandler A handler
     *     to apply for the behavior.
     * @param {string=} opt_eventType The event type triggering the
     *     handler.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.Disposable}
     */
    class SplitBehavior extends goog.Disposable {
        constructor(first: goog.ui.Control, second: goog.ui.Control, opt_behaviorHandler?: (arg0: goog.ui.Control, arg1: Event) => any, opt_eventType?: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Css class for elements rendered by this behavior.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * @return {Element} The element containing the controls.
         */
        getElement(): Element;
        
        /**
         * @return {function(goog.ui.Control,Event)} The behavior handler.
         */
        getBehaviorHandler(): (arg0: goog.ui.Control, arg1: Event) => any;
        
        /**
         * @return {string} The behavior event type.
         */
        getEventType(): string;
        
        /**
         * Sets the disposeControls flags.
         * @param {boolean} disposeFirst Whether to dispose the first control
         *     when dispose is called.
         * @param {boolean} disposeSecond Whether to dispose the second control
         *     when dispose is called.
         */
        setDisposeControls(disposeFirst: boolean, disposeSecond: boolean): void;
        
        /**
         * Sets the behavior handler.
         * @param {function(goog.ui.Control,Event)} behaviorHandler The behavior
         *     handler.
         */
        setHandler(behaviorHandler: (arg0: goog.ui.Control, arg1: Event) => any): void;
        
        /**
         * Sets the behavior event type.
         * @param {string} eventType The behavior event type.
         */
        setEventType(eventType: string): void;
        
        /**
         * Decorates an element and returns the behavior.
         * @param {Element} element An element to decorate.
         * @param {boolean=} opt_activate Whether to activate the behavior
         *     (default=true).
         * @return {!goog.ui.SplitBehavior} A split behavior.
         */
        decorate(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
        
        /**
         * Renders an element and returns the behavior.
         * @param {Element} element An element to decorate.
         * @param {boolean=} opt_activate Whether to activate the behavior
         *     (default=true).
         * @return {!goog.ui.SplitBehavior} A split behavior.
         */
        render(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
        
        /**
         * Activate or deactivate the behavior.
         * @param {boolean} activate Whether to activate or deactivate the behavior.
         */
        setActive(activate: boolean): void;
    }
}

declare module goog.ui.SplitBehavior {

    /**
     * An emum of split behavior handlers.
     * @enum {function(goog.ui.Control,Event)}
     */
    type DefaultHandlers = (arg0: goog.ui.Control, arg1: Event) => any;
    var DefaultHandlers: {
        NONE: DefaultHandlers;
        CAPTION: DefaultHandlers;
        VALUE: DefaultHandlers;
    };
}
