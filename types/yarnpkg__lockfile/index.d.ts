// Type definitions for @yarnpkg/lockfile 1.1
// Project: https://github.com/yarnpkg/yarn/tree/master/packages/lockfile
// Definitions by: Eric Wang <https://github.com/fa93hws>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Dependency {
  [packageName: string]: string;
}

export interface FirstLevelDependency {
  version: string;
  resolved?: string;
  dependencies?: Dependency;
}

export interface LockFileObject {
  [packageName: string]: FirstLevelDependency | {};
}

export type ParseResult = { type: 'success' | 'merge'; object: LockFileObject } | { type: 'conflict'; object: {} };

export function parse(file: string, fileLoc?: string): ParseResult;
export function stringify(
  json: any,
  noHeader?: boolean,
  enableVersions?: boolean,
): string;
