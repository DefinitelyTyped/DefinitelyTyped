import vinyl = require("vinyl");
import minimatch = require("minimatch");

interface StatFilterCondition {
    isDirectory?: boolean | undefined;
    isFile?: boolean | undefined;
}

/**
 * Does a vinyl file match a condition? This function checks the condition on the file.path of the vinyl-fs file passed to it.
 *
 * Condition can be a boolean, a function, a regular expression, a glob string (or array of glob strings), or a stat filter object.
 */
declare function gulpMatch(file: vinyl, condition: gulpMatch.MatchCondition, options?: minimatch.IOptions): boolean;

declare namespace gulpMatch {
    type MatchCondition = boolean | ((fs: vinyl) => boolean) | RegExp | string | string[] | StatFilterCondition;
}

export = gulpMatch;
