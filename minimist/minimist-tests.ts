/// <reference path="minimist.d.ts" />

import minimist = require('minimist');
import Opts = minimist.Opts;

var num: string;
var str: string;
var strArr: string[];
var args: string[];
var obj: Object;
var opts: Opts;

opts.string = strArr;
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

obj = minimist();
obj = minimist(strArr);
obj = minimist(strArr, opts);
