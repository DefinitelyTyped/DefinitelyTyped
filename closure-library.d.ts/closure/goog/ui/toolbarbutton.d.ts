declare module goog {
    function require(name: 'goog.ui.ToolbarButton'): typeof goog.ui.ToolbarButton;
}

declare module goog.ui {

    /**
     * A button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
     *     render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Button}
     */
    class ToolbarButton extends goog.ui.Button {
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
