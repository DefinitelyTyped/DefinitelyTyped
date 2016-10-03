/// <reference path="semver.d.ts" />

var obj:Object;
var bool:boolean;
var num:number;
var str:string;
var diff:string;
var x:any = null;
var arr:any[];
var exp:RegExp;
var strArr:string[];
var numArr:string[];

var mod:typeof SemVerModule;

var v1:string, v2:string;
var version:string;
var versions:string[];
var loose:boolean;

str = mod.valid(str);
str = mod.clean(str);

str = mod.valid(str, loose);
str = mod.clean(str, loose);
str = mod.inc(str, str, loose);
num = mod.major(str, loose);
num = mod.minor(str, loose);
num = mod.patch(str, loose);
strArr = mod.prerelease(str, loose);

// Comparison
bool = mod.gt(v1, v2, loose);
bool = mod.gte(v1, v2, loose);
bool = mod.lt(v1, v2, loose);
bool = mod.lte(v1, v2, loose);
bool = mod.eq(v1, v2, loose);
bool = mod.neq(v1, v2, loose);
bool = mod.cmp(v1, x, v2, loose);
num = mod.compare(v1, v2, loose);
num = mod.rcompare(v1, v2, loose);
diff = mod.diff(v1, v2, loose);

// Ranges
str = mod.validRange(str, loose);
bool = mod.satisfies(version, str, loose);
str = mod.maxSatisfying(versions, str, loose);
str = mod.minSatisfying(versions, str, loose);
bool = mod.gtr(version, str, loose);
bool = mod.ltr(version, str, loose);
bool = mod.outside(version, str, str, loose);

var ver = new mod.SemVer(str, bool);
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
ver = ver.inc(str);


var comp = new SemVerModule.Comparator(str, bool);
str = comp.raw;
bool = comp.loose;
str = comp.format();
str = comp.inspect();
str = comp.toString();

ver = comp.semver;
str = comp.operator;
bool = comp.value;
comp.parse(str);
bool = comp.test(ver);


var range = new SemVerModule.Range(str, bool);
str = range.raw;
bool = range.loose;
str = range.format();
str = range.inspect();
str = range.toString();

bool = range.test(ver);

var sets:SemVerModule.Comparator[][];
sets = range.set;

var lims:SemVerModule.Comparator[];
lims = range.parseRange(str);

/**
 * Test Static version
 */
var semver: SemVerStatic = semver;
var testString: string;
var testNumber: number;
var testBoolean: boolean;

testString = semver.SEMVER_SPEC_VERSION;

testString = semver.valid('v1.0.0');
testString = semver.clean(' =v1.0.0 ');
testString = semver.valid('v1.0.0', true);
testString = semver.clean(' =v1.0.0 ', true);
testString = semver.inc('v1.0.0', 'major');
testString = semver.inc('v1.0.0', 'major', true);
testNumber = semver.major('v1.0.0');
testNumber = semver.major('v1.0.0', true);
testNumber = semver.minor('v1.0.0');
testNumber = semver.minor('v1.0.0', true);
testNumber = semver.patch('v1.0.0');
testNumber = semver.patch('v1.0.0', true);

testBoolean = semver.gt('v1.0.0', 'v2.0.0');
testBoolean = semver.gt('v1.0.0', 'v2.0.0', true);
testBoolean = semver.gte('v1.0.0', 'v2.0.0');
testBoolean = semver.gte('v1.0.0', 'v2.0.0', true);
testBoolean = semver.lt('v1.0.0', 'v2.0.0');
testBoolean = semver.lt('v1.0.0', 'v2.0.0', true);
testBoolean = semver.lte('v1.0.0', 'v2.0.0');
testBoolean = semver.lte('v1.0.0', 'v2.0.0', true);
testBoolean = semver.eq('v1.0.0', 'v2.0.0');
testBoolean = semver.eq('v1.0.0', 'v2.0.0', true);
testBoolean = semver.neq('v1.0.0', 'v2.0.0');
testBoolean = semver.neq('v1.0.0', 'v2.0.0', true);
testBoolean = semver.cmp('v1.0.0', '===', 'v2.0.0');
testBoolean = semver.cmp('v1.0.0', '!==', 'v2.0.0', true);
testNumber = semver.compare('v1.0.0', 'v2.0.0');
testNumber = semver.compare('v1.0.0', 'v2.0.0', true);
testNumber = semver.rcompare('v1.0.0', 'v2.0.0');
testNumber = semver.rcompare('v1.0.0', 'v2.0.0', true);
testString = semver.diff('v1.0.0', 'v2.0.0');
testString = semver.diff('v1.0.0', 'v2.0.0', true);

testString = semver.validRange('^1.0.0');
testString = semver.validRange('^1.0.0', true);
testBoolean = semver.satisfies('v1.0.0', '^1.0.0');
testBoolean = semver.satisfies('v1.0.0', '^1.0.0', true);
testString = semver.maxSatisfying(['v1.0.0', 'v2.0.0'], '^1.0.0');
testString = semver.maxSatisfying(['v1.0.0', 'v2.0.0'], '^1.0.0', true);
testBoolean = semver.gtr('v1.0.0', '^1.0.0');
testBoolean = semver.gtr('v1.0.0', '^1.0.0', true);
testBoolean = semver.ltr('v1.0.0', '^1.0.0');
testBoolean = semver.ltr('v1.0.0', '^1.0.0', true);
testBoolean = semver.outside('v1.0.0', '^1.0.0', '<');
testBoolean = semver.outside('v1.0.0', '^1.0.0', '>', true);
