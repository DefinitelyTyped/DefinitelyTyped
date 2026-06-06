/**
 * Finds the deepest shared file path.
 * The OS-dependent directory separator (e.g. `/` or `\`) is respected.
 *
 * @param filepaths Multiple relative or absolute file system paths.
 */
export function lowestCommonAncestor(...filepaths: string[]): string;
