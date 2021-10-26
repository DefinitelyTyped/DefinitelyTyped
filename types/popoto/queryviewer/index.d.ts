import { Link, Node } from '../provider';

export namespace QueryViewer {
    const containerId: string;
    const QUERY_STARTER: string;
    const CHOOSE_LABEL: string;

    /**
     * Create the query viewer area.
     */
    function createQueryArea(): void;

    /**
     * Update all the elements displayed on the query viewer based on current graph.
     */
    function updateQuery(): void;

    function generateConstraintData(links: Link[], nodes: Node[]): any[];

    function generateData(links: Link[], nodes: Node[]): any[];

    function mouseOverSpan(): void;

    function rightClickSpan(): void;

    function clickSpan(): void;

    function mouseOutSpan(): void;
}
