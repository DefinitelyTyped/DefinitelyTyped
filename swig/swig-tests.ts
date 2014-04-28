/// <reference path="swig.d.ts" />

import swig = require('swig');

var value: any;
var str: string;
var num: number;
var bool: boolean;

var opts: swig.Options = {
	allowErrors: bool,
	autoescape: bool,
	cache: bool,
	encoding: str,
	filters: value,
	root: str,
	tags: value,
	extensions: value,
	tzOffset: num
};

swig.init(opts);
value = swig.compileFile(str);
value = swig.compile(str);
value = swig.compile(str, opts);
