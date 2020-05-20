// Type definitions for topo 3.0
// Project: https://github.com/hapijs/topo#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = Topo;

/**
 * The Topo object is the container for topologically sorting a list of nodes with non-circular interdependencies.
 */
declare class Topo<TNode = any, TGroup = string> {
    /**
     * An array of the topologically sorted nodes. This list is renewed upon each call to `topo.add()`.
     */
    nodes: TNode[];

    /**
     * Specifies an additional node or list of nodes to be topologically sorted.
     *
     * @param nodes a mixed value or array of mixed values to be added as nodes to the topologically sorted list.
     * @param options optional sorting information about the `nodes`:
     * - `group` - a string naming the group to which `nodes` should be assigned. The group name `'?'` is reserved.
     * - `before` - a string or array of strings specifying the groups that `nodes` must precede in the topological sort.
     * - `after` - a string or array of strings specifying the groups that `nodes` must succeed in the topological sort.
     * - `sort` - a numerical value used to sort items when performing a `topo.merge()`.
     * @returns an array of the topologically sorted nodes.
     */
    add(
        nodes: TNode | TNode[],
        options?: {
            group?: TGroup;
            before?: TGroup | TGroup[];
            after?: TGroup | TGroup[];
            sort?: number;
        }
    ): TNode[];

    /**
     * Merges another `Topo` object into the current object.
     * If the order in which items have been added to each list matters, use the `sort` option in `topo.add()`
     * with an incrementing value providing an absolute sort order among all items added to either object.
     *
     * @param others the other object or array of objects to be merged into the current one. `null` values are ignored.
     * @returns an array of the topologically sorted nodes. Will throw if a dependency error is found as a result of the combined items.
     */
    merge(others: Topo<TNode, TGroup> | Array<Topo<TNode, TGroup>>): TNode[];
}
