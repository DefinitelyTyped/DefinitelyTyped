import * as semver from "semver";

let obj: {};
let bool: boolean;
let num: number;
let str: string;
let diff: semver.ReleaseType;
let x: any = null;
let arr: any[];
let exp: RegExp;
let strArr: string[];
let numArr: string[];

let v1: string;
let v2: string;
let version: string;
let versions: string[];
let loose: boolean;

str = semver.valid(str);
str = semver.clean(str);

str = semver.valid(str, loose);
str = semver.clean(str, loose);
str = semver.inc(str, "major", loose);
str = semver.inc(str, "premajor", loose);
str = semver.inc(str, "minor", loose);
str = semver.inc(str, "preminor", loose);
str = semver.inc(str, "patch", loose);
str = semver.inc(str, "prepatch", loose);
str = semver.inc(str, "prerelease", loose);
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
bool = semver.cmp(v1, x, v2, loose);
num = semver.compare(v1, v2, loose);
num = semver.rcompare(v1, v2, loose);
diff = semver.diff(v1, v2, loose);

// Ranges
str = semver.validRange(str, loose);
bool = semver.satisfies(version, str, loose);
str = semver.maxSatisfying(versions, str, loose);
str = semver.minSatisfying(versions, str, loose);
bool = semver.gtr(version, str, loose);
bool = semver.ltr(version, str, loose);
bool = semver.outside(version, str, str, loose);

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

num = ver.compare(ver);
num = ver.compareMain(ver);
num = ver.comparePre(ver);
ver = ver.inc("major");
ver = ver.inc("premajor");
ver = ver.inc("minor");
ver = ver.inc("preminor");
ver = ver.inc("patch");
ver = ver.inc("prepatch");
ver = ver.inc("prerelease");

const comp = new semver.Comparator(str, bool);
str = comp.toString();

ver = comp.semver;
str = comp.operator;
bool = comp.value;
comp.parse(str);
bool = comp.test(ver);

const range = new semver.Range(str, bool);
str = range.raw;
bool = range.loose;
str = range.format();
str = range.inspect();
str = range.toString();

bool = range.test(ver);

let sets: semver.Comparator[][];
sets = range.set;

let lims: semver.Comparator[];
lims = range.parseRange(str);
