/// <reference path="string_score.d.ts" />

import string_score = require('string_score');

var a = 'abc';
var b = 'xyz';

console.log(a.score(b).toString());
