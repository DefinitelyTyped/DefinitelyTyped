// Type definitions for @lerna/package-graph 4.0
// Project: https://github.com/lerna/lerna/tree/main/core/package-graph
// Definitions by: DonMahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Package } from '@lerna/package';
import npa = require('npm-package-arg');

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
export class PackageGraphNode {
    constructor(pkg: Package);
    name: string;
    get location(): string;
    get pkg(): Package;
    get prereleaseId(): string;
    get version(): string;
    localDependencies: Map<string, npa.Result>;
    localDependents: Map<string, PackageGraphNode>;
    externalDependencies: Map<string, npa.Result>;
    /**
     * Determine if the Node satisfies a resolved semver range.
     * @see https://github.com/npm/npm-package-arg#result-object
     *
     * @param resolved npm-package-arg Result object
     */
    satisfies(result: Pick<npa.Result, 'gitCommittish' | 'gitRange' | 'fetchSpec'>): boolean;

    /**
     * Returns a string representation of this node (its name)
     */
    toString(): string;
}
export type GraphType = 'allDependencies' | 'dependencies';
export type NodeProperties = 'localDependencies' | 'localDependents';
export class PackageGraph extends Map {
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
