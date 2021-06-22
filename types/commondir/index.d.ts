// Type definitions for commondir 1.0
// Project: https://github.com/substack/node-commondir
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = commondir;

/**
 * Compute the closest common parent directory for an array absolutePaths.
 *
 * @see \`{@link https://github.com/substack/node-commondir#commondirabsolutepaths }\`
 */
declare function commondir(basedir: string, relativePaths: string[]): string;
/**
 * Compute the closest common parent directory for an array relativePaths which will be resolved for each dir in
 * relativePaths according to: path.resolve(basedir, dir).
 *
 * @see \`{@link https://github.com/substack/node-commondir#commondirbasedir-relativepaths }\`
 */
declare function commondir(absolutePaths: string[]): string;
