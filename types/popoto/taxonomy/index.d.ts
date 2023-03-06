import { Node } from '../graph';

export namespace Taxonomy {
    const containerId: string;

    /**
     * Create the taxonomy panel HTML elements.
     */
    function createTaxonomyPanel(): void;

    /**
     * Recursive function to flatten data content.
     */
    function flattenChildren(d: SVGGElement, vals: any[]): void;

    /**
     * Updates the count number on a taxonomy.
     *
     * @param taxonomyData
     */
    function updateCount(taxonomyData: any[]): void;

    /**
     * Recursively generate the taxonomy children elements.
     *
     * @param selection
     */
    function addTaxonomyChildren(selection: Element[]): void;

    function onClick(): void;

    /**
     * Parse the list of label providers and return a list of data object containing only searchable labels.
     * @returns Array
     */
    function generateTaxonomiesData(): any[];

    /**
     * Add children providers data.
     * @param parentData
     * @param id
     */
    function addChildrenData(parentData: Node, id: number): number;
}
