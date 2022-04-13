import { PackageGraphNode } from "./package-graph-node";

export class CyclicPackageGraphNode extends Map {
    constructor();
    name: string;
    localDependencies: Map<string, PackageGraphNode | CyclicPackageGraphNode>;
    localDependents: Map<string, PackageGraphNode | CyclicPackageGraphNode>;
    get isCycle(): boolean;
    toString(): string;
    /**
     * Flattens a CyclicPackageGraphNode (which can have multiple level of cycles).
     */
    flatten(): PackageGraphNode[];
    /**
     * Checks if a given node is contained in this cycle (or in a nested one)
     *
     * @param name The name of the package to search in this cycle
     */
    contains(name: string): boolean;
    /**
     * Adds a graph node, or a nested cycle, to this group.
     *
     * @param node node to insert
     */
    insert(node: PackageGraphNode | CyclicPackageGraphNode): void;
    /**
     * Remove pointers to candidate node from internal collections.
     * @param candidateNode instance to unlink
     */
    unlink(candidateNode: PackageGraphNode | CyclicPackageGraphNode): void;
}
