/// <reference path='path-to-regexp.d.ts' />

import pathToRegexp = require('path-to-regexp');

var keys: string[] = [];
var re = pathToRegexp('/foo/:bar', keys);

re = pathToRegexp('/foo/:bar', keys, {
    sensitive: true,
    strict: false,
    end: true
});

re = pathToRegexp('/foo/:bar', keys, {
    sensitive: true
});