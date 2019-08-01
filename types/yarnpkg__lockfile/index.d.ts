// Type definitions for parse-package-name 1.1
// Project: https://github.com/yarnpkg/yarn/tree/master/packages/lockfile
// Definitions by: Eric Wang <https://github.com/fa93hws>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Dependency {
  [packageName: string]: string;
}

interface FirstLevelDependency {
  version: string;
  resolved?: string;
  dependencies?: Dependency;
}

interface LockFileObject {
  [packageName: string]: FirstLevelDependency;
}

export = parse;

declare function parse(file: string): { object: LockFileObject };
