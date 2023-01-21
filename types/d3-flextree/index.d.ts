// Type definitions for d3-flextree 2.1
// Project: https://github.com/klortho/d3-flextree
// Definitions by: Matteo Gallesio <https://github.com/m-gallesio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import { HierarchyNode } from "d3-hierarchy";

export interface NodeExtents {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface FlextreeNode<Datum> extends HierarchyNode<Datum> {
    get size(): [number, number];
    spacing(oNode: this): number;
    get nodes(): this[];
    get xSize(): number;
    get ySize(): number;
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
    get root(): this | null | undefined;
    get numChildren(): number;
    get hasChildren(): boolean;
    get noChildren(): boolean;
    get firstChild(): this | null | undefined;
    get lastChild(): this | null | undefined;
    get extents(): NodeExtents;
    get nodeExtents(): NodeExtents;
}

export interface FlextreeOptions<Datum> {
    children: (data: HierarchyNode<Datum>) => Array<HierarchyNode<Datum>> | undefined;
    nodeSize: [number, number] | ((node: HierarchyNode<Datum>) => [number, number]);
    spacing: number | ((node: HierarchyNode<Datum>, oNode: HierarchyNode<Datum>) => number);
}

// Helper type to remove the need to explicitly declare get / set methods
export type FlextreeOptionsGetSet<Datum, TSelf> =
    & { [Property in keyof FlextreeOptions<Datum>]: () => FlextreeOptions<Datum>[Property]; }
    & { [Property in keyof FlextreeOptions<Datum>]: (value: FlextreeOptions<Datum>[Property]) => TSelf; };

export interface FlextreeLayout<Datum> extends FlextreeOptionsGetSet<Datum, FlextreeLayout<Datum>> {
    (tree: HierarchyNode<Datum>): HierarchyNode<Datum>;
    hierarchy(treeData: unknown, children?: unknown): unknown; // TODO
    dump(tree: HierarchyNode<Datum>): string;
}

declare const flextree: {
    <Datum>(options: Partial<FlextreeOptions<Datum>>): FlextreeLayout<Datum>;
    version: string;
};

export { flextree };
