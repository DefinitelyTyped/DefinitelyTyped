// Type definitions for lowest-common-ancestor 2.0
// Project: https://gitlab.com/sebdeckers/lowest-common-ancestor#README
// Definitions by: Cameron Hunter <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Finds the deepest shared file path.
 * The OS-dependent directory separator (e.g. `/` or `\`) is respected.
 *
 * @param filepaths Multiple relative or absolute file system paths.
 */
export function lowestCommonAncestor(...filepaths: string[]): string;
