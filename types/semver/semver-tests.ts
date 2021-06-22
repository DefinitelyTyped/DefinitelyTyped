// As a node module:
import * as semver from 'semver';

semver.valid('1.2.3'); // $ExpectType string | null
semver.valid('a.b.c'); // $ExpectType string | null
semver.clean('  =v1.2.3   '); // $ExpectType string | null
semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3'); // $ExpectType boolean
semver.gt('1.2.3', '9.8.7'); // $ExpectType boolean
semver.lt('1.2.3', '9.8.7'); // $ExpectType boolean
semver.minVersion('>=1.0.0'); // $ExpectType SemVer | null
semver.valid(semver.coerce('v2')); // $ExpectType string | null
semver.valid(semver.coerce('42.6.7.9.3-alpha')); // $ExpectType string | null

// This module uses getters to lazily load only the parts of the package that are used.
// To use it with Webpack and other projects that need string literals as the argument to require(),
// load it this way:

// load the whole API at once in a single object
import semverPreload = require('semver/preload');
semverPreload.valid('1.2.3'); // $ExpectType string | null
semverPreload.valid('a.b.c'); // $ExpectType string | null
semverPreload.clean('  =v1.2.3   '); // $ExpectType string | null
semverPreload.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3'); // $ExpectType boolean
semverPreload.gt('1.2.3', '9.8.7'); // $ExpectType boolean
semverPreload.lt('1.2.3', '9.8.7'); // $ExpectType boolean
semverPreload.minVersion('>=1.0.0'); // $ExpectType SemVer | null
semverPreload.valid(semverPreload.coerce('v2')); // $ExpectType string | null
semverPreload.valid(semverPreload.coerce('42.6.7.9.3-alpha')); // $ExpectType string | null

// or just load the bits you need
// all of them listed here, just pick and choose what you want

// classes
import SemVer = require('semver/classes/semver');
import Comparator = require('semver/classes/comparator');
import Range = require('semver/classes/range');

// functions for working with versions
import semverParse = require('semver/functions/parse');
import semverValid = require('semver/functions/valid');
import semverClean = require('semver/functions/clean');
import semverInc = require('semver/functions/inc');
import semverDiff = require('semver/functions/diff');
import semverMajor = require('semver/functions/major');
import semverMinor = require('semver/functions/minor');
import semverPatch = require('semver/functions/patch');
import semverPrerelease = require('semver/functions/prerelease');
import semverCompare = require('semver/functions/compare');
import semverRcompare = require('semver/functions/rcompare');
import semverCompareLoose = require('semver/functions/compare-loose');
import semverCompareBuild = require('semver/functions/compare-build');
import semverSort = require('semver/functions/sort');
import semverRsort = require('semver/functions/rsort');

// low-level comparators between versions
import semverGt = require('semver/functions/gt');
import semverLt = require('semver/functions/lt');
import semverEq = require('semver/functions/eq');
import semverNeq = require('semver/functions/neq');
import semverGte = require('semver/functions/gte');
import semverLte = require('semver/functions/lte');
import semverCmp = require('semver/functions/cmp');
import semverCoerce = require('semver/functions/coerce');

// working with ranges
import semverSatisfies = require('semver/functions/satisfies');
import semverMaxSatisfying = require('semver/ranges/max-satisfying');
import semverMinSatisfying = require('semver/ranges/min-satisfying');
import semverToComparators = require('semver/ranges/to-comparators');
import semverMinVersion = require('semver/ranges/min-version');
import semverValidRange = require('semver/ranges/valid');
import semverOutside = require('semver/ranges/outside');
import semverGtr = require('semver/ranges/gtr');
import semverLtr = require('semver/ranges/ltr');
import semverIntersects = require('semver/ranges/intersects');

semverValid('1.2.3'); // $ExpectType string | null
semverValid('a.b.c'); // $ExpectType string | null
semverClean('  =v1.2.3   '); // $ExpectType string | null
semverSatisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3'); // $ExpectType boolean
semverGt('1.2.3', '9.8.7'); // $ExpectType boolean
semverLt('1.2.3', '9.8.7'); // $ExpectType boolean
semverMinVersion('>=1.0.0'); // $ExpectType SemVer | null
semverValid(semverCoerce('v2')); // $ExpectType string | null
semverValid(semverCoerce('42.6.7.9.3-alpha')); // $ExpectType string | null

// v6 tests

let bool: boolean;
let num: number;
// $ExpectType string
let str = String(Math.random());
// $ExpectType string | null
let strn: string | null = Math.random() < 0.5 ? null : str;
let diff: semver.ReleaseType | null;
const op: semver.Operator = '';
// declare const arr: any[];
// declare const exp: RegExp;
let strArr: ReadonlyArray<string> | null;
let prereleaseIdAttr: ReadonlyArray<string | number> | null;
let strNumArr: ReadonlyArray<string | number>;
declare const numArr: string[];
let comparatorResult: -1 | 0 | 1;
let versionsArr: Array<string | semver.SemVer>;

const v1 = '';
const v2 = '';
const version = '';
const versions: string[] = [];
const loose = true;
// $ExpectType SemVer | null
let sem: semver.SemVer | null = Math.random() < 0.5 ? new semver.SemVer(str, {}) : null;

// $ExpectType string | SemVer | null | undefined
const anyVersion = Math.random() < 0.5 ? undefined : Math.random() < 0.5 ? strn : sem;

sem = new semver.SemVer(str, { includePrerelease: false });
sem = new semver.SemVer(str, { loose: true });

sem = semver.parse(str);
strn = semver.valid(str);
strn = semver.clean(str);

strn = semver.valid(str, loose);
strn = semver.clean(str, loose);
strn = semver.inc(str, 'major', loose);
strn = semver.inc(str, 'premajor', loose);
strn = semver.inc(str, 'minor', loose);
strn = semver.inc(str, 'preminor', loose);
strn = semver.inc(str, 'patch', loose);
strn = semver.inc(str, 'prepatch', loose);
strn = semver.inc(str, 'prerelease', loose);
strn = semver.inc(str, 'prerelease', loose, 'alpha');
strn = semver.inc(str, 'prerelease', 'beta');
num = semver.major(str, loose);
num = semver.minor(str, loose);
num = semver.patch(str, loose);
prereleaseIdAttr = semver.prerelease(str, loose);

// Comparison
bool = semver.gt(v1, v2, loose);
bool = semver.gte(v1, v2, loose);
bool = semver.lt(v1, v2, loose);
bool = semver.lte(v1, v2, loose);
bool = semver.eq(v1, v2, loose);
bool = semver.neq(v1, v2, loose);
bool = semver.cmp(v1, op, v2, loose);
comparatorResult = semver.compare(v1, v2, loose);
comparatorResult = semver.rcompare(v1, v2, loose);
comparatorResult = semver.compareIdentifiers(str, str);
comparatorResult = semver.rcompareIdentifiers(str, str);
versionsArr = semver.sort(['', new semver.SemVer('')]);
versionsArr = semver.rsort(['', new semver.SemVer('')]);
diff = semver.diff(v1, v2, loose);

// Ranges
str = semver.validRange(str, loose);
bool = semver.satisfies(version, str, loose);
strn = semver.maxSatisfying(versions, str, loose);
strn = semver.minSatisfying(versions, str, loose);
bool = semver.gtr(version, str, loose);
bool = semver.ltr(version, str, loose);
bool = semver.outside(version, str, '<', loose);
bool = semver.intersects(str, str, loose);
sem = semver.minVersion(str, loose);
semver.simplifyRange(versions, '1.x'); // $ExpectType string | Range
semver.simplifyRange(versions, '1.0.0 || 1.0.1 || 1.0.2 || 1.0.3 || 1.0.4'); // $ExpectType string | Range
semver.simplifyRange(versions, new Range('1.0.0 || 1.0.1 || 1.0.2 || 1.0.3 || 1.0.4')); // $ExpectType string | Range
semver.simplifyRange(versions, '>=3.0.0 <3.1.0'); // $ExpectType string | Range
semver.simplifyRange(versions, '3.0.0 || 3.1 || 3.2 || 3.3'); // $ExpectType string | Range
semver.simplifyRange(versions, '1 || 2 || 3'); // $ExpectType string | Range
semver.simplifyRange(versions, '2.1 || 2.2 || 2.3'); // $ExpectType string | Range
semver.subset('1.x', '1.x'); // $ExpectType boolean
semver.subset(new Range('1.2.3'), new Range('1.2.3')); // $ExpectType boolean
semver.subset('^1.2.3-pre.0', '1.x', { includePrerelease: true }); // $ExpectType boolean
semver.subset('', ''); // $ExpectType boolean

// Coercion
sem = semver.coerce(str);

sem = semver.coerce(strn);
sem = semver.coerce(strn, { rtl: false });
sem = semver.coerce(strn, { rtl: true });

sem = semver.coerce(sem);
sem = semver.coerce(sem, { rtl: false });
sem = semver.coerce(sem, { rtl: true });

sem = semver.coerce(1);
sem = semver.coerce(2, { rtl: false });
sem = semver.coerce(3, { rtl: true });

sem = semver.coerce(anyVersion);
sem = semver.coerce(anyVersion, { rtl: false });
sem = semver.coerce(anyVersion, { rtl: true });

let ver = new semver.SemVer(str, bool);
str = ver.raw;
bool = ver.loose;
str = ver.format();
str = ver.inspect();
str = ver.toString();

num = ver.major;
num = ver.minor;
num = ver.patch;
str = ver.version;
strArr = ver.build;
strNumArr = ver.prerelease;
ver.prerelease = strNumArr;

comparatorResult = ver.compare(ver);
comparatorResult = ver.compareMain(ver);
comparatorResult = ver.comparePre(ver);
ver = ver.inc('major');
ver = ver.inc('premajor');
ver = ver.inc('minor');
ver = ver.inc('preminor');
ver = ver.inc('patch');
ver = ver.inc('prepatch');
ver = ver.inc('prerelease');
ver = ver.inc('prerelease', 'alpha');

const comp = new semver.Comparator(str, bool);
str = comp.toString();

ver = comp.semver;
str = comp.operator;
str = comp.value;
comp.parse(str);
bool = comp.test(ver);
bool = comp.intersects(new semver.Comparator(str));
bool = comp.intersects(new semver.Comparator(str), bool);

const range = new semver.Range(str, bool);
str = range.raw;
bool = range.loose;
str = range.format();
str = range.inspect();
str = range.toString();
bool = range.test(ver);
bool = range.intersects(new semver.Range(''));
bool = range.intersects(new semver.Range(''), bool);

const sets: ReadonlyArray<ReadonlyArray<semver.Comparator>> = range.set;

const lims: ReadonlyArray<semver.Comparator> = range.parseRange(str);
