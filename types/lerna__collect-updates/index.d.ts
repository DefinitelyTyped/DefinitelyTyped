// Type definitions for @lerna/collect-updates 5.1
// Project: https://github.com/lerna/lerna/tree/main/utils/collect-updates
// Definitions by: donmahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { ExecOpts } from '@lerna/child-process';
import { Package } from '@lerna/package';
import { PackageGraph } from '@lerna/package-graph';
import { PackageGraphNode } from '@lerna/package-graph/lib/package-graph-node';

export { collectPackages } from './lib/collect-packages';
export { getPackagesForOption } from './lib/get-packages-for-option';
export interface UpdateCollectorOptions {
    /**
     * The semver bump keyword (patch/minor/major) or explicit version used
     */
    bump?: string;
    /**
     * Whether or not to use a "nightly" range (`ref^..ref`) for commits
     */
    canary?: boolean;
    /**
     * A list of globs that match files/directories whose changes
     * should not be considered when identifying changed packages
     */
    ignoreChanges?: string[];
    /**
     * Whether or not to include the --first-parent flag when calling `git describe`
     * (awkwardly, pass `true` to _omit_ the flag, the default is to include it)
     */
    includeMergedTags?: boolean;
    /**
     * Which packages, if any, to always include
     *  Force all packages to be versioned with `true`, or pass a list of globs that match package names
     */
    forcePublish?: boolean;
    /**
     * Ref to use when querying git, defaults to most recent annotated tag
     */
    since?: string;
    conventionalCommits?: string;
    conventionalGraduate?: string;
    excludeDependents?: string;
}

/**
 * Create a list of graph nodes representing packages changed since the previous release, tagged or otherwise.
 * @param filteredPackages
 * @param packageGraph
 * @param execOpts
 * @param commandOptions
 */
export function collectUpdates(
    filteredPackages: Package[],
    packageGraph: PackageGraph,
    execOpts: ExecOpts,
    commandOptions: UpdateCollectorOptions,
): PackageGraphNode[];
