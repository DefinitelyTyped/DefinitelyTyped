/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
export declare function getNextOrder(collection: {
    order: number;
}[]): number;
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
export declare function reindex(collection: {
    order: number;
    columns?: {
        order: number;
    }[];
    controls?: {
        order: number;
    }[];
}[]): void;
//# sourceMappingURL=funcs.d.ts.map