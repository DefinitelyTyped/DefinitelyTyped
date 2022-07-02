import { ExecOpts } from '@lerna/child-process';
import { collectUpdates, UpdateCollectorOptions } from '@lerna/collect-updates';
import { Package } from '@lerna/package';
import { PackageGraph } from '@lerna/package-graph';

const testPackages: Package[] = [];
const testPackageGraph: PackageGraph = new PackageGraph(testPackages);
const testExecOpts: ExecOpts = { cwd: './' };
const testCollectorOpts: UpdateCollectorOptions = {};

collectUpdates(testPackages, testPackageGraph, testExecOpts, testCollectorOpts);
