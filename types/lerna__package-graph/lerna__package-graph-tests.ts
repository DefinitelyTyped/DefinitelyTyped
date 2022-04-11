import { PackageGraph, PackageGraphNode } from '@lerna/package-graph';

new PackageGraph([]);

const testGraph: PackageGraph = new PackageGraph([], 'allDependencies', false);
const testNode: PackageGraphNode = testGraph.get('test-package');
testGraph.prune(testNode);
