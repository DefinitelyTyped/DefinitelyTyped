
import minimist = require('minimist');
import Opts = minimist.Opts;

interface CustomArgs {
	foo: boolean;
}

interface CustomArgs2 extends minimist.ParsedArgs {
	foo: boolean;
}

var num: string;
var str: string;
var strArr: string[];
var args: string[];
var obj: minimist.ParsedArgs;
var iobj: minimist.ParsedArgs & CustomArgs;
var eobj: CustomArgs2;
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
opts.alias = {
	foo: str
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
iobj = minimist<CustomArgs>();
iobj = minimist<CustomArgs>(strArr);
iobj = minimist<CustomArgs>(strArr, opts);
eobj = minimist<CustomArgs2>();
eobj = minimist<CustomArgs2>(strArr);
eobj = minimist<CustomArgs2>(strArr, opts);
var remainingArgCount = obj._.length;

arg = obj['foo'];

arg = iobj.foo;
remainingArgCount = iobj._.length;

arg = eobj.foo;
remainingArgCount = eobj._.length;