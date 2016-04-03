declare module goog {
    function require(name: 'goog.ui.ToolbarSeparator'): typeof goog.ui.ToolbarSeparator;
}

declare module goog.ui {

    /**
     * A separator control for a toolbar.
     *
     * @param {goog.ui.ToolbarSeparatorRenderer=} opt_renderer Renderer to render or
     *    decorate the separator; defaults to
     *     {@link goog.ui.ToolbarSeparatorRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *    document interaction.
     * @constructor
     * @extends {goog.ui.Separator}
     * @final
     */
    class ToolbarSeparator extends goog.ui.Separator {
        constructor(opt_renderer?: goog.ui.ToolbarSeparatorRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
