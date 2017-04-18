declare module goog {
    function require(name: 'goog.debug.FpsDisplay'): typeof goog.debug.FpsDisplay;
}

declare module goog.debug {

    /**
     * Displays frames per seconds that the window this component is
     * rendered in is animating at.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper An optional dom helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class FpsDisplay extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * CSS class for the FPS display.
         */
        static CSS: any;
        
        /**
         * The number of samples per FPS report.
         */
        static SAMPLES: any;
        
        /**
         * @return {number} The average frames per second.
         */
        getFps(): number;
    }
}

declare module goog.debug.FpsDisplay {

    /**
     * @param {Element} elem An element to hold the FPS count.
     * @constructor
     * @private
     */
    interface FpsAnimation_ {
        
        /**
         * @param {number} now The current time.
         */
        onAnimationFrame(now: number): void;
    }
}
