// Type definitions for parse-package-name 1.1
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
  [packageName: string]: FirstLevelDependency;
}

export function parse(file: string): { object: LockFileObject };
export function stringify(json: { object: LockFileObject }): string;
