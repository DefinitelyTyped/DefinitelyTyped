import * as semver from "semver";

let bool: boolean;
let num: number;
let str = '';
let strn: string | null = '';
let diff: semver.ReleaseType | null;
const op: semver.Operator = '';
declare const arr: any[];
declare const exp: RegExp;
let strArr: string[] | null;
declare const numArr: string[];
let comparatorResult: -1 | 0 | 1;
let versionsArr: Array<string | semver.SemVer>;

const v1 = '';
const v2 = '';
const version = '';
const versions: string[] = [];
const loose = true;
let sem: semver.SemVer | null;

sem = semver.parse(str);
strn = semver.valid(str);
strn = semver.clean(str);

strn = semver.valid(str, loose);
strn = semver.clean(str, loose);
strn = semver.inc(str, "major", loose);
strn = semver.inc(str, "premajor", loose);
strn = semver.inc(str, "minor", loose);
strn = semver.inc(str, "preminor", loose);
strn = semver.inc(str, "patch", loose);
strn = semver.inc(str, "prepatch", loose);
strn = semver.inc(str, "prerelease", loose);
strn = semver.inc(str, "prerelease", loose, "alpha");
num = semver.major(str, loose);
num = semver.minor(str, loose);
num = semver.patch(str, loose);
strArr = semver.prerelease(str, loose);

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
str = semver.maxSatisfying(versions, str, loose);
str = semver.minSatisfying(versions, str, loose);
bool = semver.gtr(version, str, loose);
bool = semver.ltr(version, str, loose);
bool = semver.outside(version, str, '<', loose);
bool = semver.intersects(str, str, loose);

// Coercion
sem = semver.coerce(str);

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
strArr = ver.prerelease;

comparatorResult = ver.compare(ver);
comparatorResult = ver.compareMain(ver);
comparatorResult = ver.comparePre(ver);
ver = ver.inc("major");
ver = ver.inc("premajor");
ver = ver.inc("minor");
ver = ver.inc("preminor");
ver = ver.inc("patch");
ver = ver.inc("prepatch");
ver = ver.inc("prerelease");
ver = ver.inc("prerelease", "alpha");

const comp = new semver.Comparator(str, bool);
str = comp.toString();

ver = comp.semver;
str = comp.operator;
bool = comp.value;
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

let sets: semver.Comparator[][];
sets = range.set;

let lims: semver.Comparator[];
lims = range.parseRange(str);
