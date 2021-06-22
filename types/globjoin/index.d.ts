// Type definitions for globjoin 0.1
// Project: https://github.com/amobiz/globjoin
// Definitions by: Gareth Jones <https://github.com/g-rath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Joins paths and globs.
 *
 * Like Node's {@link https://nodejs.org/api/path.html#path_path_join_path1_path2 path.join()}
 * that join all arguments together and normalize the resulting path,
 * globjoin takes arbitrary number of paths and/or arrays of paths,
 * join them together and take care of negative globs.
 *
 * @param globs
 *
 * @return the result glob, or array of globs if any of the paths/globs are array.
 */
declare function globjoin(...globs: string[]): string;
declare function globjoin(...globs: Array<string | string[]>): string[];

export = globjoin;
