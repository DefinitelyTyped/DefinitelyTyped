import { Package } from '@lerna/package';
import { PackageGraphNode } from '@lerna/package-graph';
import { QueryGraph, toposort } from '@lerna/query-graph';

const graph: QueryGraph = new QueryGraph([]);
const graphNode: PackageGraphNode = new PackageGraphNode(Package.lazy('./'));
graph.markAsDone(graphNode);

toposort([], { graphType: 'allDependencies' });
