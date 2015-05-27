/// <reference path="configstore.d.ts" />

import cs = require('configstore');

var value: any;
var key: string;
var num: number;
var bool: any;
var object:Object;

cs.set(key, value);
value = cs.get(key);
cs.del(key);

object = cs.all;
cs.all = object;
num = cs.size;
key = cs.path;