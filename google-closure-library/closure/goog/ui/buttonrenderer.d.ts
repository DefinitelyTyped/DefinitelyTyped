declare module goog {
    function require(name: 'goog.ui.ButtonRenderer'): typeof goog.ui.ButtonRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
     * the following button-specific API methods:
     * <ul>
     *   <li>{@code getValue} - returns the button element's value
     *   <li>{@code setValue} - updates the button element to reflect its new value
     *   <li>{@code getTooltip} - returns the button element's tooltip text
     *   <li>{@code setTooltip} - updates the button element's tooltip text
     *   <li>{@code setCollapsed} - removes one or both of the button element's
     *       borders
     * </ul>
     * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
     * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class ButtonRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the ARIA role to be applied to buttons.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role|void;
        
        /**
         * Updates the button's ARIA (accessibility) state if the button is being
         * treated as a checkbox. Also makes sure that attributes which aren't
         * supported by buttons aren't being added.
         * @param {Element} element Element whose ARIA state is to be updated.
         * @param {goog.ui.Component.State} state Component state being enabled or
         *     disabled.
         * @param {boolean} enable Whether the state is being enabled or disabled.
         * @protected
         * @override
         */
        updateAriaState(element: Element, state: goog.ui.Component.State, enable: boolean): void;
        
        /**
         * Takes a button's root element, and returns the value associated with it.
         * No-op in the base class.
         * @param {Element} element The button's root element.
         * @return {string|undefined} The button's value (undefined if none).
         */
        getValue(element: Element): string|void;
        
        /**
         * Takes a button's root element and a value, and updates the element to reflect
         * the new value.  No-op in the base class.
         * @param {Element} element The button's root element.
         * @param {string} value New value.
         */
        setValue(element: Element, value: string): void;
        
        /**
         * Takes a button's root element, and returns its tooltip text.
         * @param {Element} element The button's root element.
         * @return {string|undefined} The tooltip text.
         */
        getTooltip(element: Element): string|void;
        
        /**
         * Takes a button's root element and a tooltip string, and updates the element
         * with the new tooltip.
         * @param {Element} element The button's root element.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltip(element: Element, tooltip: string): void;
        
        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjacent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {goog.ui.Button} button Button to update.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         * @protected
         */
        setCollapsed(button: goog.ui.Button, sides: number): void;
    }
}
