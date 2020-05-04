// Type definitions for @yarnpkg/lockfile 1.0.2
// Project: https://github.com/yarnpkg/yarn/tree/master/packages/lockfile
// Definitions by: Eric Wang <https://github.com/fa93hws> - rigwild <https://github.com/rigwild>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Dependency {
  [packageName: string]: string;
}

export interface FirstLevelDependency {
  version: string;
  resolved?: string;
  integrity?: string;
  dependencies?: Dependency;
}

export interface LockFileObject {
  [packageName: string]: FirstLevelDependency;
}

export function parse(
  file: string,
  fileLoc?: string
): { type: 'success' | 'merge'; object: LockFileObject } | { type: 'conflict'; object: {} };

export function stringify(
  json: LockFileObject,
  noHeader?: boolean,
  enableVersions?: boolean,
): string;
