declare module goog {
    function require(name: 'goog.ui.CheckboxRenderer'): typeof goog.ui.CheckboxRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Checkbox}s.  Extends the superclass
     * to support checkbox states:
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class CheckboxRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the ARIA role to be applied to checkboxes.
         * @return {goog.a11y.aria.Role} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role;
        
        /**
         * Updates the appearance of the control in response to a checkbox state
         * change.
         * @param {Element} element Checkbox element.
         * @param {goog.ui.Checkbox.State} state Updated checkbox state.
         */
        setCheckboxState(element: Element, state: goog.ui.Checkbox.State): void;
        
        /**
         * Takes a single {@link goog.ui.Checkbox.State}, and returns the
         * corresponding CSS class name.
         * @param {goog.ui.Checkbox.State} state Checkbox state.
         * @return {string} CSS class representing the given state.
         * @protected
         */
        getClassForCheckboxState(state: goog.ui.Checkbox.State): string;
    }
}
