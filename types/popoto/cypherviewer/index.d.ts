export interface CypherViewer {
    containerId: string;
    MATCH: string;
    RETURN: string;
    WHERE: string;
    QueryElementTypes: Readonly<{
        KEYWORD: 0
        NODE: 1
        SEPERATOR: 2
        SOURCE: 3
        LINK: 4
        TARGET: 5
        RETURN: 6
        WHERE: 7
    }>;

    /**
     * Create the Cypher viewer area.
     *
     */
    createQueryArea: () => void;

    /**
     * Update all the elements displayed on the cypher viewer based on current graph.
     */
    updateQuery: () => void;

    /**
     * Generate the data from graph to use in cypher query viewer.
     * The returned data is a list of elements representing the current query.
     * Example:
     *
     * MATCH
     * (person:`Person`),
     * (person:`Person`)-[:`FOLLOWS`]->(person1:`Person`{`name`:\"Jessica Thompson\"}),
     * (person1:`Person`)-[:`REVIEWED`]->(movie5:`Movie`{`title`:\"The Replacements\"})
     * RETURN person
     *
     * @param links
     * @returns an array of generated data
     */
    generateData: (links: any[]) => Array<{ id: number, type: number, node: any }>;

    mouseOverSpan: () => void;
    mouseOutSpan: () => void;
    clickSpan: () => void;
    rightClickSpan: () => void;
}
