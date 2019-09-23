// Type definitions for parse-package-name 1.1
// Project: https://github.com/yarnpkg/yarn/tree/master/packages/lockfile
// Definitions by: Eric Wang <https://github.com/fa93hws>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parse;

declare namespace parse {
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
}

declare function parse(file: string): { object: parse.LockFileObject };
