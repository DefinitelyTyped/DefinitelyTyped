import { HierarchyNode } from "d3-hierarchy";

export interface NodeExtents {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

/**
 * An extended version of `HierarchyNode<Datum>` from d3-hierarchy
 * which adds many properties useful in rendering.
 * Note that many of these fields will be meaningless until `layout`
 * is called on this tree.
 */
export interface FlextreeNode<Datum> extends HierarchyNode<Datum> {
    /** The computed *x*-coordinate of the node position. */
    get x(): number;
    /** The computed *y*-coordinate of the node position. */
    get y(): number;
    /** All of the nodes in this subtree (same as `descendants()`). */
    get nodes(): this[];
    /** Number of children of this node. */
    get numChildren(): number;
    /** Whether this node has any children. */
    get hasChildren(): boolean;
    /** Whether this node has no children. */
    get noChildren(): boolean;
    get root(): this | null | undefined;
    get firstChild(): this | null | undefined;
    get lastChild(): this | null | undefined;

    /** Size of this node (the values fetched by the `nodeSize` accessor) as a two-element array. */
    get size(): [number, number];
    get xSize(): number;
    get ySize(): number;
    spacing(oNode: this): number;
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
    /**
     * The minimum `top` and `left`, and the maximum `bottom` and
     * `right` values for all of the nodes in this subtree
     */
    get extents(): NodeExtents;
    get nodeExtents(): NodeExtents;
}

/**
 * Constructor argument of the `flextree()` factory function, specifying accessors.
 * The accessors can also be changed using chained methods once the returned object.
 * All parameters are optional.
 */
export interface FlextreeOptions<Datum> {
    /**
     * The way to access the children of a data node.
     *
     * The default when not specified is:
     * ```javascript
     * data => data.children
     * ```
     * Note that unlike the other accessors, this takes a *data* node
     * as an argument. This is used only in the creation of a hierarchy,
     * prior to computing the layout, by the `layout.hierarchy` method.
     */
    children: (data: Datum) => Datum[] | undefined;
    /**
     * A way to calculate the size of a node.
     * It can be specified as:
     * - a **two-element array** `[xSize, ySize]` which is applied as the fixed size for every node.
     * - a **function** which takes the hierarchy node as an argument, and returns a two-element array.
     *
     * The default when not specified is:
     * ```javascript
     * node => node.data.size
     * ```
     */
    nodeSize: [number, number] | ((node: HierarchyNode<Datum>) => [number, number]);
    /**
     * A way to calculate the size of a node.
     * It can be specified as:
     * - a **constant number** which is applied as the fixed spacing between every adjacent node.
     * - a **function** which takes two nodes, and returns the minimum allowable spacing between them.
     *
     * The default when not specified is `0`.
     */
    spacing: number | ((node: HierarchyNode<Datum>, oNode: HierarchyNode<Datum>) => number);
}

// Helper type to remove the need to explicitly declare get / set methods
export type FlextreeOptionsGetSet<Datum, TSelf> =
    & { [Property in keyof FlextreeOptions<Datum>]: () => FlextreeOptions<Datum>[Property] }
    & { [Property in keyof FlextreeOptions<Datum>]: (value: FlextreeOptions<Datum>[Property]) => TSelf };

export interface FlextreeLayout<Datum> extends FlextreeOptionsGetSet<Datum, FlextreeLayout<Datum>> {
    /**
     * Computes the layout of a *hierarchy* and turns every node into a `FlextreeNode<Datum>`.
     * Although the layout is defined in terms of *x* and *y*, these represent an
     * arbitrary coordinate system. For example, you can treat *x* as a radius
     * and *y* as an angle to produce a radial rather than Cartesian layout.
     */
    (tree: HierarchyNode<Datum>): FlextreeNode<Datum>;
    /**
     * Creates a new *hierarchy* from the data, using the `children` accessors
     * in effect when called. This is an enhanced version of the
     * [`d3.hierarchy`](https://github.com/d3/d3-hierarchy#hierarchy)
     * function, and produces a tree of instances of a class derived from
     * `d3.hierarchy`.
     */
    hierarchy(treeData: Datum, children?: (d: Datum) => Iterable<Datum> | null | undefined): FlextreeNode<Datum>;
    dump(tree: HierarchyNode<Datum>): string;
}

declare const flextree: {
    /**
     * Creates a new *layout* with the specified accessors. Any subset of
     * `children`, `nodeSize`, and `spacing` can be specified in the
     * argument object.
     */
    <Datum>(options: Partial<FlextreeOptions<Datum>>): FlextreeLayout<Datum>;
    /**
     * Outputs the version of the library.
     */
    readonly version: string;
};

export { flextree };
