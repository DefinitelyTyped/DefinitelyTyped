declare module goog {
    function require(name: 'goog.ui.ToolbarSelect'): typeof goog.ui.ToolbarSelect;
}

declare module goog.ui {

    /**
     * A select control for a toolbar.
     *
     * @param {goog.ui.ControlContent} caption Default caption or existing DOM
     *     structure to display as the button's caption when nothing is selected.
     * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
     *     render or decorate the control; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Select}
     */
    class ToolbarSelect extends goog.ui.Select {
        constructor(caption: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
