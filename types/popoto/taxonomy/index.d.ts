import { Node } from '../graph';

export namespace Taxonomy {
    export const containerId: string;

    /**
     * Create the taxonomy panel HTML elements.
     */
    export const createTaxonomyPanel: () => void;

    /**
     * Recursive function to flatten data content.
     */
    export const flattenChildren: (d: SVGGElement, vals: any[]) => void;

    /**
     * Updates the count number on a taxonomy.
     *
     * @param taxonomyData
     */
    export const updateCount: (taxonomyData: any[]) => void;

    /**
     * Recursively generate the taxonomy children elements.
     *
     * @param selection
     */
    export const addTaxonomyChildren: (selection: Element[]) => void;

    export let onClick: () => void;

    /**
     * Parse the list of label providers and return a list of data object containing only searchable labels.
     * @returns {Array}
     */
    export const generateTaxonomiesData: () => any[];

    /**
     * Add children providers data.
     * @param parentData
     * @param id
     */
    export const addChildrenData: (parentData: Node, id: number) => number;
}
