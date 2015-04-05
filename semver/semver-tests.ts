/// <reference path="semver.d.ts" />

var obj:Object;
var bool:boolean;
var num:number;
var str:string;
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

str = mod.valid(str, loose);
str = mod.inc(str, str, loose);

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

// Ranges
str = mod.validRange(str, loose);
bool = mod.satisfies(version, str, loose);
str = mod.maxSatisfying(versions, str, loose);
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
