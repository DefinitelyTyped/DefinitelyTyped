/// <reference path="./diff.d.ts" />

import jsdiff = require('diff');

var one = 'beep boop';
var other = 'beep boob blah';

var diff = jsdiff.diffChars(one, other);

diff.forEach(function (part) {
    var mark = part.added ? '+' :
        part.removed ? '-' : ' ';
    console.log(mark + " " + part.value);
});
