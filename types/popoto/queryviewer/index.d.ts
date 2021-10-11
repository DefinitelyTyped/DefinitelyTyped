import { Link, Node } from '../provider';

export namespace QueryViewer {
    export const containerId: string;
    export const QUERY_STARTER: string;
    export const CHOOSE_LABEL: string;

    /**
     * Create the query viewer area.
     */
    export const createQueryArea: () => void;

    /**
     * Update all the elements displayed on the query viewer based on current graph.
     */
    export const updateQuery: () => void;

    export const generateConstraintData: (links: Link[], nodes: Node[]) => any[];

    export const generateData: (links: Link[], nodes: Node[]) => any[];

    /**
     *
     */
    export const mouseOverSpan: () => void;

    export const rightClickSpan: () => void;

    export const clickSpan: () => void;

    /**
     *
     */
    export const mouseOutSpan: () => void;
}
