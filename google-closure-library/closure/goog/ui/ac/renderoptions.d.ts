declare module goog {
    function require(name: 'goog.ui.ac.RenderOptions'): typeof goog.ui.ac.RenderOptions;
}

declare module goog.ui.ac {

    /**
     * A simple class that contains options for rendering a set of autocomplete
     * matches.  Used as an optional argument in the callback from the matcher.
     * @constructor
     */
    class RenderOptions {
        constructor();
        
        /**
         * @param {boolean} flag The new value for the preserveHilited_ flag.
         */
        setPreserveHilited(flag: boolean): void;
        
        /**
         * @return {boolean} The value of the preserveHilited_ flag.
         */
        getPreserveHilited(): boolean;
        
        /**
         * @param {boolean} flag The new value for the autoHilite_ flag.
         */
        setAutoHilite(flag: boolean): void;
        
        /**
         * @return {boolean|undefined} The value of the autoHilite_ flag.
         */
        getAutoHilite(): boolean|void;
    }
}
