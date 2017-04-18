declare module goog {
    function require(name: 'goog.ui.ToolbarColorMenuButton'): typeof goog.ui.ToolbarColorMenuButton;
}

declare module goog.ui {

    /**
     * A color menu button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
     *     should contain at least one {@link goog.ui.ColorPalette} if present.
     * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
     *     renderer used to render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.ColorMenuButton}
     */
    class ToolbarColorMenuButton extends goog.ui.ColorMenuButton {
        constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
