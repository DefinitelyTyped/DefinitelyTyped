/// <reference path="jsesc.d.ts" />

import jsesc = require('jsesc');
import Opts = jsesc.Opts;

// ---- ---- ---- ---- ---- ---- ----

var num: number;
var str: string;
var bool: boolean;
var opts: Opts;
var opts: Opts;

// ---- ---- ---- ---- ---- ---- ----

str = jsesc.version;

// ---- ---- ---- ---- ---- ---- ----

opts = {
	quotes: str
};
opts = {
	wrap: bool
};
opts = {
	es6: bool
};
opts = {
	escapeEverything: bool
};
opts = {
	compact: bool
};
opts = {
	indent: str
};
opts = {
	json: bool
};

// ---- ---- ---- ---- ---- ---- ----

str = jsesc(str);
str = jsesc(str, opts);
