/// <reference path="optimist.d.ts" />

import optimist = require('optimist');

var fn: Function;
var str: string;
var value: any;
var num: number;
var bool: boolean;
var strArr: string[];

var argv: optimist.Argv;
var opt: optimist.Optimist;

argv = opt.argv;
argv = opt.argv;
argv = optimist(strArr).argv;

opt = optimist(strArr).default(str, value);
opt = optimist(strArr).default({});

opt = optimist(strArr).boolean(str);
opt = optimist(strArr).boolean(strArr);

opt = optimist(strArr).string(str);
opt = optimist(strArr).string(strArr);

opt = opt.wrap(num);

opt.help();
opt.showHelp(fn);

opt = opt.usage(str);

opt = opt.demand(str);
opt = opt.demand(num);
opt = opt.demand(strArr);

opt = opt.alias(str, str);

opt = opt.describe(str, str);

opt = opt.options(str, Object);

opt.check(fn);
opt = opt.parse(strArr);
