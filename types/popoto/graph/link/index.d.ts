export interface Link {
    /**
     * Defines the different type of link.
     * RELATION is a relation link between two nodes.
     * VALUE is a link between a generic node and a value.
     */
    LinkTypes: Readonly<{
        RELATION: 0
        VALUE: 1
        SEGMENT: 2
    }>;

    /**
     * Offset added to text displayed on links.
     */
    TEXT_DY: number;

    /**
     * Define whether or not to display path markers.
     */
    SHOW_MARKER: boolean;

    // ID of the g element in SVG graph containing all the link elements.
    gID: string;

    /**
     * Function to call to update the links after modification in the model.
     * This function will update the graph with all removed, modified or added links using d3.js mechanisms.
     */
    updateLinks: () => void;

    /**
     * Update the links element with data coming from dataModel.links.
     */
    updateData: () => void;

    /**
     * Clean links elements removed from the list.
     */
    removeElements: (exitingData: SVGGElement[]) => void;

    /**
     * Create new elements.
     */
    addNewElements: (enteringData: SVGGElement[]) => void;

    /**
     * Update all the elements (new + modified)
     */
    updateElements: () => void;

    /**
     * Function called when mouse is over the link.
     * This function is used to change the CSS class on hover of the link and query viewer element.
     *
     * TODO try to introduce event instead of directly access query spans here. This could be used in future extensions.
     */
    mouseOverLink: () => void;

    /**
     * Function called when mouse goes out of the link.
     * This function is used to reinitialize the CSS class of the link and query viewer element.
     */
    mouseOutLink: () => void;

    // Delete all related nodes from this link
    clickLink: () => void;
}
