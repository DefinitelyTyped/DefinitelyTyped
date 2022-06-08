// Type definitions for @lerna/package-graph 5.1
// Project: https://github.com/lerna/lerna/tree/main/core/package-graph
// Definitions by: DonMahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Package } from '@lerna/package';
import { CyclicPackageGraphNode } from './lib/cyclic-package-graph-node';
import { PackageGraphNode } from './lib/package-graph-node';

export type GraphType = 'allDependencies' | 'dependencies';
export type NodeProperties = 'localDependencies' | 'localDependents';
declare class PackageGraph extends Map {
    constructor(packages: Package[], graphType?: GraphType, forceLocal?: boolean);
    get rawPackageList(): Package[];
    get(name: string): PackageGraphNode;

    /**
     * Takes a list of Packages and returns a list of those same Packages with any Packages
     * they depend on. i.e if packageA depended on packageB `graph.addDependencies([packageA])`
     * would return [packageA, packageB].
     */
    addDependencies(filteredPackages: Package[]): Package[];
    /**
     * Takes a list of Packages and returns a list of those same Packages with any Packages
     * that depend on them. i.e if packageC depended on packageD `graph.addDependents([packageD])`
     * would return [packageD, packageC].
     * @param filteredPackages The packages to include dependents for.
     */
    addDependents(filteredPackages: Package[]): Package[];
    /**
     * Extends a list of packages by traversing on a given property, which must refer to a
     * `PackageGraphNode` property that is a collection of `PackageGraphNode`s.
     * Returns input packages with any additional packages found by traversing `nodeProp`.
     */
    extendList(packageList: Package[], nodeProp: NodeProperties): Package[];
    /**
     * Returns the cycles of this graph. If two cycles share some elements, they will
     * be returned as a single cycle.
     *
     * @param rejectCycles Whether or not to reject cycles
     */
    collapseCycles(rejectCycles: boolean): Set<CyclicPackageGraphNode>;
    /**
     * Remove all candidate nodes.
     * @param candidates
     */
    prune(...candidates: PackageGraphNode[]): void;

    /**
     * Delete by value (instead of key), as well as removing pointers
     * to itself in the other node's internal collections.
     * @param candidateNode instance to remove
     */
    remove(candidateNode: PackageGraphNode): void;
}
export { PackageGraph, PackageGraphNode };
