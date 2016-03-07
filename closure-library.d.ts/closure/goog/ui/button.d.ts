declare module goog {
    function require(name: 'goog.ui.Button'): typeof goog.ui.Button;
    function require(name: 'goog.ui.Button.Side'): typeof goog.ui.Button.Side;
}

declare module goog.ui {

    /**
     * A button control, rendered as a native browser button by default.
     *
     * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
     *     structure to display as the button's caption (if any).
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the button; defaults to {@link goog.ui.NativeButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Button extends goog.ui.Control {
        constructor(opt_content?: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Returns the value associated with the button.
         * @return {*} Button value (undefined if none).
         */
        getValue(): any;
        
        /**
         * Sets the value associated with the button, and updates its DOM.
         * @param {*} value New button value.
         */
        setValue(value: any): void;
        
        /**
         * Sets the value associated with the button.  Unlike {@link #setValue},
         * doesn't update the button's DOM.  Considered protected; to be called only
         * by renderer code during element decoration.
         * @param {*} value New button value.
         * @protected
         */
        setValueInternal(value: any): void;
        
        /**
         * Returns the tooltip for the button.
         * @return {string|undefined} Tooltip text (undefined if none).
         */
        getTooltip(): string|void;
        
        /**
         * Sets the tooltip for the button, and updates its DOM.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;
        
        /**
         * Sets the tooltip for the button.  Unlike {@link #setTooltip}, doesn't update
         * the button's DOM.  Considered protected; to be called only by renderer code
         * during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltipInternal(tooltip: string): void;
        
        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjancent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         */
        setCollapsed(sides: number): void;
        
        /**
         * Attempts to handle a keyboard event; returns true if the event was handled,
         * false otherwise.  If the button is enabled and the Enter/Space key was
         * pressed, handles the event by dispatching an {@code ACTION} event,
         * and returns true. Overrides {@link goog.ui.Control#handleKeyEventInternal}.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         * @protected
         * @override
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
    }
}

declare module goog.ui.Button {

    /**
     * Constants for button sides, see {@link goog.ui.Button.prototype.setCollapsed}
     * for details. Aliased from goog.ui.ButtonSide to support legacy users without
     * creating a circular dependency in {@link goog.ui.ButtonRenderer}.
     * @enum {number}
     * @deprecated use {@link goog.ui.ButtonSide} instead.
     */
    export import Side = goog.ui.ButtonSide;
}
