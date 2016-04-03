declare module goog {
    function require(name: 'goog.ui.Separator'): typeof goog.ui.Separator;
}

declare module goog.ui {

    /**
     * Class representing a separator.  Although it extends {@link goog.ui.Control},
     * the Separator class doesn't allocate any event handlers, nor does it change
     * its appearance on mouseover, etc.
     * @param {goog.ui.MenuSeparatorRenderer=} opt_renderer Renderer to render or
     *    decorate the separator; defaults to {@link goog.ui.MenuSeparatorRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *    document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Separator extends goog.ui.Control {
        constructor(opt_renderer?: goog.ui.MenuSeparatorRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
