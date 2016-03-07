declare module goog {
    function require(name: 'goog.ui.AnimatedZippy'): typeof goog.ui.AnimatedZippy;
}

declare module goog.ui {

    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     *
     * @param {Element|string|null} header Header element, either element
     *     reference, string id or null if no header exists.
     * @param {Element|string} content Content element, either element reference or
     *     string id.
     * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
     *     false.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
     * @constructor
     * @extends {goog.ui.Zippy}
     */
    class AnimatedZippy extends goog.ui.Zippy {
        constructor(header: Element|string|void, content: Element|string, opt_expanded?: boolean, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Duration of expand/collapse animation, in milliseconds.
         * @type {number}
         */
        animationDuration: number;
        
        /**
         * Acceleration function for expand/collapse animation.
         * @type {!Function}
         */
        animationAcceleration: Function;
        
        /**
         * @return {boolean} Whether the zippy is in the process of being expanded or
         *     collapsed.
         */
        isBusy(): boolean;
        
        /**
         * Sets expanded state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @override
         */
        setExpanded(expanded: boolean): void;
    }
}
