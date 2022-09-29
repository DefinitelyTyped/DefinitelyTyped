// Type definitions for @lerna/project 5.1
// Project: https://github.com/lerna/lerna/tree/main/utils/query-graph
// Definitions by: DonMahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Package } from '@lerna/package';
import { PackageGraphNode } from '@lerna/package-graph';

export interface QueryGraphConfig {
    /**
     * "dependencies" excludes devDependencies from graph
     */
    graphType?: 'allDependencies' | 'dependencies';
    /**
     * Whether or not to reject dependency cycles
     */
    rejectCycles?: boolean;
}
/**
 * A mutable PackageGraph used to query for next available packages.
 */
export class QueryGraph {
    /**
     * @param packages An array of Packages to build the list out of
     * @param [options]
     */
    static toposort(packages: Package[], options?: QueryGraphConfig): Package[];

    constructor(packages: Package[], options?: QueryGraphConfig);

    getAvailablePackages(): Package[];
    markAsTaken(name: string): void;
    markAsDone(candidateNode: PackageGraphNode): void;
}
export const toposort: typeof QueryGraph.toposort;
