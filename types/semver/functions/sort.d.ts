import SemVer = require('../classes/semver');
import semver = require('../');

/**
 * Sorts an array of semver entries in ascending order using `compareBuild()`.
 */
declare function sort<T extends string | SemVer>(list: T[], optionsOrLoose?: boolean | semver.Options): T[];

export = sort;
