import { PackageGraphNode } from '@lerna/package-graph/lib/package-graph-node';

export interface PackageCollectorOptions {
    /**
     * By default, all nodes passed in are candidates
     */
    isCandidate?: (node: PackageGraphNode, name: string) => boolean;
    onInclude?: (name: string) => void;
    excludeDependents?: boolean;
}
/**
 * Build a list of graph nodes, possibly including dependents, using predicate if available.
 */
export function collectPackages(packages: PackageGraphNode, options: PackageCollectorOptions): PackageGraphNode[];
