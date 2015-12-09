/// <reference path="minimist.d.ts" />

import minimist = require('minimist');
import Opts = minimist.Opts;

var num: string;
var str: string;
var strArr: string[];
var args: string[];
var obj: minimist.ParsedArgs;
var opts: Opts;
var arg: any;

opts.string = str;
opts.string = strArr;
opts.boolean = true;
opts.boolean = str;
opts.boolean = strArr;
opts.alias = {
	foo: strArr
};
opts.default = {
	foo: str
};
opts.default = {
	foo: num
};
opts.unknown = (arg: string) => {
	if(/xyz/.test(arg)){
		return true;
	}
	
	return false;
};
opts.stopEarly = true;
opts['--'] = true;

obj = minimist();
obj = minimist(strArr);
obj = minimist(strArr, opts);
var remainingArgCount = obj._.length;

arg = obj['foo'];
