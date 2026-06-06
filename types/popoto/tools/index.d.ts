export namespace Tools {
    const CENTER_GRAPH: boolean;
    const RESET_GRAPH: boolean;
    const SAVE_GRAPH: boolean;
    const TOGGLE_TAXONOMY: boolean;
    const TOGGLE_FULL_SCREEN: boolean;
    const TOGGLE_VIEW_RELATION: boolean;
    const TOGGLE_FIT_TEXT: boolean;

    /**
     * Reset the graph to display the root node only.
     */
    function reset(): void;

    /**
     * Reset zoom and center the view on svg center.
     */
    function center(): void;

    /**
     * Show, hide taxonomy panel.
     */
    function toggleTaxonomy(): void;

    /**
     * Enable, disable text fitting on nodes.
     */
    function toggleFitText(): void;

    /**
     * Show, hide relation donuts.
     */
    function toggleViewRelation(): void;

    function toggleFullScreen(): void;
}
