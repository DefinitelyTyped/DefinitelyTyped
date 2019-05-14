// Type definitions for semver-truncate 1.1
// Project: https://github.com/sindresorhus/semver-truncate#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = semverTruncate;

declare function semverTruncate(version: string, type: 'patch' | 'minor' | 'major'): string;
