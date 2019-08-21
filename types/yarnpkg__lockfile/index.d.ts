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

interface SuccessLockFileResult {
  type: 'success' | 'merge';
  object: LockFileObject;
}

interface ConflictLockFileResult {
  type: 'conflict';
  object: {};
}

export type ParseResult = SuccessLockFileResult | ConflictLockFileResult;

export function parse(file: string, fileLoc?: string): ParseResult;
export function stringify(
  json: any,
  noHeader?: boolean,
  enableVersions?: boolean,
): string;
