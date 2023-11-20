import cytoscape = require("cytoscape");

declare const navigator: cytoscape.Ext;

export = navigator;
export as namespace navigator;

declare namespace navigator {
    interface Options {
        /**
         * Container element.
         * Supported strings: an element id selector (like "#someId"), or a className selector (like ".someClassName"). Otherwise an element will be created by the library.
         * Default: false
         */
        container?: string | boolean;
        /**
         * Frames per second.
         * Set false to update graph pan only on drag end.
         * Set to 0 to update graph instantly.
         * Set a number (e.g. 60) to update graph not more than N times per second.
         * Default: 0
         */
        viewLiveFramerate?: number | boolean;
        /**
         * Double click delay in milliseconds.
         * Default: 200
         */
        dblClickDelay?: number;
        /**
         * Flag to destroy the container on plugin destroy.
         * Default: true
         */
        removeCustomContainer?: boolean;
        /**
         * Rerender delay in milliseconds.
         * Default: 500
         */
        rerenderDelay?: number;
    }

    interface Nav {
        /**
         * Remove the navigator and clean up.
         */
        destroy: () => void;
    }
}

declare global {
    namespace cytoscape {
        interface Core {
            /*
             * Set up the navigator according to the given options.
             */
            navigator: (options?: navigator.Options) => navigator.Nav;
        }
    }
}
