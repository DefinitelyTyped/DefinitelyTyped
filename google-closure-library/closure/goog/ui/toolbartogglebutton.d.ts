declare module goog {
    function require(name: 'goog.ui.ToolbarToggleButton'): typeof goog.ui.ToolbarToggleButton;
}

declare module goog.ui {

    /**
     * A toggle button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
     *     to render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.ToggleButton}
     */
    class ToolbarToggleButton extends goog.ui.ToggleButton {
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ToolbarButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
