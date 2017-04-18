declare module goog {
    function require(name: 'goog.ui.ToolbarMenuButton'): typeof goog.ui.ToolbarMenuButton;
}

declare module goog.ui {

    /**
     * A menu button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
     *     render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class ToolbarMenuButton extends goog.ui.MenuButton {
        constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
