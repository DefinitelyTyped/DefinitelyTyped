// Type definitions for cached-path-relative 1.0
// Project: https://github.com/ashaffer/cached-path-relative
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Memoize the results of the path.relative function. path.relative can be an expensive operation
 * if it happens a lot, and its results shouldn't change for the same arguments.
 * Use it just like your normal path.relative, but it's memoized.
 */
declare function cachedPathRelative(from: string, to: string): string;

export = cachedPathRelative;
