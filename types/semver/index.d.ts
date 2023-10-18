// re-exports for index file

// functions for working with versions
import semverParse = require("./functions/parse");
import semverValid = require("./functions/valid");
import semverClean = require("./functions/clean");
import semverInc = require("./functions/inc");
import semverDiff = require("./functions/diff");
import semverMajor = require("./functions/major");
import semverMinor = require("./functions/minor");
import semverPatch = require("./functions/patch");
import semverPrerelease = require("./functions/prerelease");
import semverCompare = require("./functions/compare");
import semverRcompare = require("./functions/rcompare");
import semverCompareLoose = require("./functions/compare-loose");
import semverCompareBuild = require("./functions/compare-build");
import semverSort = require("./functions/sort");
import semverRsort = require("./functions/rsort");

export {
    semverClean as clean,
    semverCompare as compare,
    semverCompareBuild as compareBuild,
    semverCompareLoose as compareLoose,
    semverDiff as diff,
    semverInc as inc,
    semverMajor as major,
    semverMinor as minor,
    semverParse as parse,
    semverPatch as patch,
    semverPrerelease as prerelease,
    semverRcompare as rcompare,
    semverRsort as rsort,
    semverSort as sort,
    semverValid as valid,
};

// low-level comparators between versions
import semverGt = require("./functions/gt");
import semverLt = require("./functions/lt");
import semverEq = require("./functions/eq");
import semverNeq = require("./functions/neq");
import semverGte = require("./functions/gte");
import semverLte = require("./functions/lte");
import semverCmp = require("./functions/cmp");
import semverCoerce = require("./functions/coerce");

export {
    semverCmp as cmp,
    semverCoerce as coerce,
    semverEq as eq,
    semverGt as gt,
    semverGte as gte,
    semverLt as lt,
    semverLte as lte,
    semverNeq as neq,
};

// working with ranges
import semverSatisfies = require("./functions/satisfies");
import semverMaxSatisfying = require("./ranges/max-satisfying");
import semverMinSatisfying = require("./ranges/min-satisfying");
import semverToComparators = require("./ranges/to-comparators");
import semverMinVersion = require("./ranges/min-version");
import semverValidRange = require("./ranges/valid");
import semverOutside = require("./ranges/outside");
import semverGtr = require("./ranges/gtr");
import semverLtr = require("./ranges/ltr");
import semverIntersects = require("./ranges/intersects");
import simplify = require("./ranges/simplify");
import rangeSubset = require("./ranges/subset");

export {
    rangeSubset as subset,
    semverGtr as gtr,
    semverIntersects as intersects,
    semverLtr as ltr,
    semverMaxSatisfying as maxSatisfying,
    semverMinSatisfying as minSatisfying,
    semverMinVersion as minVersion,
    semverOutside as outside,
    semverSatisfies as satisfies,
    semverToComparators as toComparators,
    semverValidRange as validRange,
    simplify as simplifyRange,
};

// classes
import SemVer = require("./classes/semver");
import Range = require("./classes/range");
import Comparator = require("./classes/comparator");

export { Comparator, Range, SemVer };

// internals
import identifiers = require("./internals/identifiers");
export import compareIdentifiers = identifiers.compareIdentifiers;
export import rcompareIdentifiers = identifiers.rcompareIdentifiers;

export const SEMVER_SPEC_VERSION: "2.0.0";

export const RELEASE_TYPES: ReleaseType[];

export type ReleaseType = "major" | "premajor" | "minor" | "preminor" | "patch" | "prepatch" | "prerelease";

export interface Options {
    loose?: boolean | undefined;
}

export interface RangeOptions extends Options {
    includePrerelease?: boolean | undefined;
}
export interface CoerceOptions extends Options {
    /**
     * Used by `coerce()` to coerce from right to left.
     *
     * @default false
     *
     * @example
     * coerce('1.2.3.4', { rtl: true });
     * // => SemVer { version: '2.3.4', ... }
     *
     * @since 6.2.0
     */
    rtl?: boolean | undefined;
}

export type Operator = "===" | "!==" | "" | "=" | "==" | "!=" | ">" | ">=" | "<" | "<=";
