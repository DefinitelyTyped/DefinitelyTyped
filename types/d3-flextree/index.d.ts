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

export type FlextreeOptionsChildren<Datum> = (data: FlextreeNode<Datum>) => Array<FlextreeNode<Datum>> | undefined;
export type FlextreeOptionsNodeSize<Datum> = [number, number] | ((node: FlextreeNode<Datum>) => [number, number]);
export type FlextreeOptionsSpacing<Datum> = number | ((node: FlextreeNode<Datum>, oNode: FlextreeNode<Datum>) => number);

export interface FlextreeOptions<Datum> {
    children: FlextreeOptionsChildren<Datum>;
    nodeSize: FlextreeOptionsNodeSize<Datum>;
    spacing: FlextreeOptionsSpacing<Datum>;
}

export interface FlextreeLayout<Datum> {
    (tree: unknown): unknown; // TODO
    nodeSize(): FlextreeOptionsNodeSize<Datum>;
    nodeSize(arg: FlextreeOptionsNodeSize<Datum>): this;
    spacing(): FlextreeOptionsSpacing<Datum>;
    spacing(arg: FlextreeOptionsSpacing<Datum>): this;
    children(): FlextreeOptionsChildren<Datum>;
    children(arg: FlextreeOptionsChildren<Datum>): this;
    hierarchy(treeData: unknown, children?: unknown): unknown; // TODO
    dump(tree: FlextreeNode<Datum>): string;
}

export interface FlextreeFactory<Datum> {
    (options: Partial<FlextreeOptions<Datum>>): FlextreeLayout<Datum>;
    version: string;
    flextree: unknown; // TODO: Function
}
