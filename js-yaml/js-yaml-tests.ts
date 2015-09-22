/// <reference path="js-yaml.d.ts" />

import yaml = require('js-yaml');
import LoadOptions = yaml.LoadOptions;
import DumpOptions = yaml.DumpOptions;

var bool: boolean;
var num: number;
var str: string;
var obj: Object;
var value: any;

var loadOpts: LoadOptions;
var dumpOpts: DumpOptions;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

yaml.FAILSAFE_SCHEMA;
yaml.JSON_SCHEMA;
yaml.CORE_SCHEMA;
yaml.DEFAULT_SAFE_SCHEMA;
yaml.DEFAULT_FULL_SCHEMA;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

loadOpts = {
	filename: str
};
loadOpts = {
	strict: bool
};
loadOpts = {
	schema: bool
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

dumpOpts = {
	indent: num
};
dumpOpts = {
	skipInvalid: bool
};
dumpOpts = {
	flowLevel: num
};
dumpOpts = {
	styles: obj
};
dumpOpts = {
	schema: value
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

value = yaml.safeLoad(str);
value = yaml.safeLoad(str, loadOpts);

value = yaml.load(str);
value = yaml.load(str, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

value = yaml.safeLoadAll(str, (doc) => {
	value = doc;
});
value = yaml.safeLoadAll(str, (doc) => {
	value = doc;
}, loadOpts);

value = yaml.loadAll(str, (doc) => {
	value = doc;
});
value = yaml.loadAll(str, (doc) => {
	value = doc;
}, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

value = yaml.safeDump(str);
value = yaml.safeDump(str, dumpOpts);

value = yaml.dump(str);
value = yaml.dump(str, dumpOpts);
