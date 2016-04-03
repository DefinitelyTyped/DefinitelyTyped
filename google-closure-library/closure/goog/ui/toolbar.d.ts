declare module goog {
    function require(name: 'goog.ui.Toolbar'): typeof goog.ui.Toolbar;
}

declare module goog.ui {

    /**
     * A toolbar class, implemented as a {@link goog.ui.Container} that defaults to
     * having a horizontal orientation and {@link goog.ui.ToolbarRenderer} as its
     * renderer.
     * @param {goog.ui.ToolbarRenderer=} opt_renderer Renderer used to render or
     *     decorate the toolbar; defaults to {@link goog.ui.ToolbarRenderer}.
     * @param {?goog.ui.Container.Orientation=} opt_orientation Toolbar orientation;
     *     defaults to {@code HORIZONTAL}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Container}
     */
    class Toolbar extends goog.ui.Container {
        constructor(opt_renderer?: goog.ui.ToolbarRenderer, opt_orientation?: goog.ui.Container.Orientation, opt_domHelper?: goog.dom.DomHelper);
    }
}
