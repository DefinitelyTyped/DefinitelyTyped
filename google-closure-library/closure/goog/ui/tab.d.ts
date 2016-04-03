declare module goog {
    function require(name: 'goog.ui.Tab'): typeof goog.ui.Tab;
}

declare module goog.ui {

    /**
     * Tab control, designed to be hosted in a {@link goog.ui.TabBar}.  The tab's
     * DOM may be different based on the configuration of the containing tab bar,
     * so tabs should only be rendered or decorated as children of a tab bar.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the tab's caption (if any).
     * @param {goog.ui.TabRenderer=} opt_renderer Optional renderer used to render
     *     or decorate the tab.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Tab extends goog.ui.Control {
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.TabRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * @return {string|undefined} Tab tooltip text (if any).
         */
        getTooltip(): string|void;
        
        /**
         * Sets the tab tooltip text.  If the tab has already been rendered, updates
         * its tooltip.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;
        
        /**
         * Sets the tab tooltip text.  Considered protected; to be called only by the
         * renderer during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltipInternal(tooltip: string): void;
    }
}
