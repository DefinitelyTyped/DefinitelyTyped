/// <reference path="escape-string-regexp.d.ts"/>

import escapeStringRegexp = require('escape-string-regexp');

var inputString: string = '^abc$';
var outputString: string;

outputString = escapeStringRegexp(inputString);
