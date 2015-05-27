/// <reference path="mime.d.ts" />

import mime = require('mime');

var str: string;
var obj: Object;

str = mime.lookup(str);
str = mime.extension(str);
mime.load(str);
mime.define(obj);

str = mime.charsets.lookup(str);
