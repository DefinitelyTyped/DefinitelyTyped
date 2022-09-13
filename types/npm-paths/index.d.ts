// Type definitions for npm-paths 2.0
// Project: https://github.com/jonschlinkert/npm-paths
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmPaths;

declare function npmPaths(cwd?: string | { cwd: string }): string[];
