import { PackageGraphNode } from '@lerna/package-graph/lib/package-graph-node';

export function collectDependents(nodes: Set<PackageGraphNode>): Set<PackageGraphNode>;
