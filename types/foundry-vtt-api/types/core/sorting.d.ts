declare class SortingHelpers {
    /**
     * Given a source object to sort, a target to sort relative to, and an Array of siblings in the container:
     * Determine the updated sort keys for the source object, or all siblings if a reindex is required.
     * Return an Array of updates to perform, it is up to the caller to dispatch these updates.
     * Each update is structured as:
     * {
     *   target: object,
     *   update: {sortKey: sortValue}
     * }
     *
     * @param source		The source object being sorted
     * @param target		The target object relative which to sort
     * @param siblings		The sorted Array of siblings which share the same sorted container
     * @param sortKey		The name of the data property within the source object which defines the sort key
     * @param sortBefore	Whether to sort before the target (if true) or after (if false)
     *
     * @returns				An Array of updates for the caller of the helper function to perform
     */
    static performIntegerSort(
        source: any,
        {
            target,
            siblings,
            sortKey,
            sortBefore,
        }: { target: any; siblings: any[]; sortKey: string; sortBefore: boolean },
    ): any[];
}
