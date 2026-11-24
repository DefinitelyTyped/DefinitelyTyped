import Range = require("../classes/range");
import SemVer = require("../classes/semver");
import semver = require("../index");

/**
 * Return the lowest version that can possibly match the given range.
 */
declare function minVersion(range: string | Range, optionsOrLoose?: boolean | semver.RangeOptions): SemVer | null;

export = minVersion;
