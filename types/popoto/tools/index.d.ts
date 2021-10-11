export namespace Tools {
    export const CENTER_GRAPH: boolean;
    export const RESET_GRAPH: boolean;
    export const SAVE_GRAPH: boolean;
    export const TOGGLE_TAXONOMY: boolean;
    export const TOGGLE_FULL_SCREEN: boolean;
    export const TOGGLE_VIEW_RELATION: boolean;
    export const TOGGLE_FIT_TEXT: boolean;

    /**
     * Reset the graph to display the root node only.
     */
    export const reset: () => void;

    /**
     * Reset zoom and center the view on svg center.
     */
    export const center: () => void;

    /**
     * Show, hide taxonomy panel.
     */
    export const toggleTaxonomy: () => void;

    /**
     * Enable, disable text fitting on nodes.
     */
    export const toggleFitText: () => void;

    /**
     * Show, hide relation donuts.
     */
    export const toggleViewRelation: () => void;

    export const toggleFullScreen: () => void;
}
