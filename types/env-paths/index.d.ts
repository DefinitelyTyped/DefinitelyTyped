// Type definitions for env-paths 1.0
// Project: https://github.com/sindresorhus/env-paths
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = envPaths;

declare function envPaths(name: string, opts?: { suffix: string | boolean }): envPaths.Paths;

declare namespace envPaths {
  interface Paths {
    readonly data: string;
    readonly config: string;
    readonly cache: string;
    readonly log: string;
    readonly temp: string;
  }
}
