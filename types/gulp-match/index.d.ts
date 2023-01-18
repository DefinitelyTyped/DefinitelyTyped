// Type definitions for gulp-match 1.1
// Project: https://github.com/robrich/gulp-match
// Definitions by: Christophe Coevoet <https://github.com/stof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import vinyl = require('vinyl');
import minimatch = require("minimatch");

interface StatFilterCondition {
    isDirectory?: boolean | undefined;
    isFile?: boolean | undefined;
}

type MatchCondition = boolean | ((fs: vinyl) => boolean) | RegExp | string | string[] | StatFilterCondition;

/**
 * Does a vinyl file match a condition? This function checks the condition on the file.path of the vinyl-fs file passed to it.
 *
 * Condition can be a boolean, a function, a regular expression, a glob string (or array of glob strings), or a stat filter object.
 */
declare function gulpMatch(file: vinyl, condition: MatchCondition, options?: minimatch.IOptions): boolean;

export = gulpMatch;
