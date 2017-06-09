
import X = require('xregexp');
import XRegExp = X.XRegExp;
import TokenOpts = X.TokenOpts;

// --  --  --  --  --  --  --  --  --  --  --  --  --

var exp: RegExp;
var expArr: RegExp[];
var expArrArr: RegExp[][];
var chain: RegExp[];
var groupChain: { regex: RegExp; backref: string }[];
var groupChain1: { regex: RegExp; backref: number }[];
var regex: RegExp;
var value: any;
var str: string;
var scope: string;
var search: string;
var searchEx: RegExp;
var bool: boolean;
var strArr: string[];
var strArrArr: string[][];
var pattern: string;
var flags: string;
var right: string;
var left: string;
var sticky: boolean;
var pos: number;
var num: number;
var limit: number;
var obj: Object;
var matchArr: RegExpExecArray;
var options: TokenOpts;
var replacer: Function;

// --  --  --  --  --  --  --  --  --  --  --  --  --

regex = XRegExp(str);
regex = XRegExp(str, flags);
regex = XRegExp(regex);

str =  XRegExp.version;

// --  --  --  --  --  --  --  --  --  --  --  --  --

regex = X(str);
regex = X(str, flags);
regex = X(regex);

str =  X.version;

// --  --  --  --  --  --  --  --  --  --  --  --  --

XRegExp.addToken(regex, (arr, scope) => {
	matchArr = arr;
	str = scope;
	return str;
});

XRegExp.addToken(regex, (arr, scope) => {
	matchArr = arr;
	str = scope;
	return str;
}, options);

// --  --  --  --  --  --  --  --  --  --  --  --  --

regex = XRegExp.build(pattern, strArr, flags);
regex = XRegExp.build(pattern, strArr);
regex = XRegExp.cache(pattern);
regex = XRegExp.cache(pattern, flags);

str = XRegExp.escape(str);

matchArr = XRegExp.exec(str, regex, pos, sticky);
matchArr = XRegExp.exec(str, regex, pos);
matchArr = XRegExp.exec(str, regex);

// --  --  --  --  --  --  --  --  --  --  --  --  --

matchArr = XRegExp.forEach(str, regex, (match, index, input, regexp) => {
	exp = regexp;
	str = input;
	num = index;
	matchArr = match;
});

// --  --  --  --  --  --  --  --  --  --  --  --  --

regex = XRegExp.globalize(regex);

XRegExp.install(str);
XRegExp.install(obj);

bool = XRegExp.isInstalled(str);
bool = XRegExp.isRegExp(value);

strArr = XRegExp.match(str, regex);
strArr = XRegExp.match(str, regex, scope);
str = XRegExp.match(str, regex, "one");

strArr = XRegExp.matchChain(str, chain);
strArr = XRegExp.matchChain(str, groupChain);
strArr = XRegExp.matchChain(str, groupChain1);

// --  --  --  --  --  --  --  --  --  --  --  --  --

strArr = XRegExp.matchRecursive(str, left, right, flags, options);
strArr = XRegExp.matchRecursive(str, left, right, flags);
strArr = XRegExp.matchRecursive(str, left, right);

// --  --  --  --  --  --  --  --  --  --  --  --  --
str = XRegExp.replace(str, search, str, scope);
str = XRegExp.replace(str, search, str);
str = XRegExp.replace(str, search, replacer, scope);
str = XRegExp.replace(str, search, replacer);

str = XRegExp.replace(str, searchEx, str, scope);
str = XRegExp.replace(str, searchEx, str);
str = XRegExp.replace(str, searchEx, replacer, scope);
str = XRegExp.replace(str, searchEx, replacer);

// --  --  --  --  --  --  --  --  --  --  --  --  --
str = XRegExp.replaceEach(str, expArrArr);
str = XRegExp.replaceEach(str, strArrArr);
str = XRegExp.replaceEach(str, [[str, exp], [str, exp]]);

// --  --  --  --  --  --  --  --  --  --  --  --  --

strArr = XRegExp.split(str, search, limit);
strArr = XRegExp.split(str, search);
strArr = XRegExp.split(str, searchEx, limit);
strArr = XRegExp.split(str, searchEx);

// --  --  --  --  --  --  --  --  --  --  --  --  --

bool = XRegExp.test(str, regex, pos, bool);
bool = XRegExp.test(str, regex, pos);
bool = XRegExp.test(str, regex);

// --  --  --  --  --  --  --  --  --  --  --  --  --

XRegExp.uninstall(obj);
XRegExp.uninstall(str);

regex = XRegExp.union(strArr, flags);
regex = XRegExp.union(strArr);

// --  --  --  --  --  --  --  --  --  --  --  --  --
