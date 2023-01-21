/**
 * Typescript definition tests for d3-flextree module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import { flextree } from "d3-flextree";

// $ExpectType { <Datum>(options: Partial<FlextreeOptions<Datum>>): FlextreeLayout<Datum>; version: string; }
flextree;

// $ExpectType string
flextree.version;

interface Dummy {
    dummy?: any;
}

// $ExpectType FlextreeLayout<Dummy>
const f = flextree<Dummy>({});

// $ExpectType (data: HierarchyNode<Dummy>) => HierarchyNode<Dummy>[] | undefined
f.children();

// $ExpectType [number, number] | ((node: HierarchyNode<Dummy>) => [number, number])
f.nodeSize();

// $ExpectType (treeData: unknown, children?: unknown) => unknown
f.hierarchy;

// $ExpectType (tree: HierarchyNode<Dummy>) => string
f.dump;
