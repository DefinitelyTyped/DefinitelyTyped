// Type definitions for @lerna/collect-updates x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: donmahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function collectPackages(packages: any, { isCandidate = () => true, onInclude, excludeDependents }: any): any;

export function collectUpdates(filteredPackages: any, packageGraph: any, execOpts: any, commandOptions: any): any;

export function getPackagesForOption(option: any): any;

