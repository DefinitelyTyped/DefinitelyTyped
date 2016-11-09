/// <reference path="./deep-diff.d.ts" />

import _deepDiff = require('deep-diff');
var diff = _deepDiff.diff;

var lhs = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};

var rhs = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};

var differences: deepDiff.Diff<string | Object>[] = diff(lhs, rhs);

console.log(differences);


// --------------------------

var observableDiff = _deepDiff.observableDiff;
var applyChange = _deepDiff.applyChange;

var lhs = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};

var rhs = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};

observableDiff<string | Object>(lhs, rhs, function (d) {
    // Apply all changes except those to the 'name' property...
    if (d.path.length !== 1 || d.path.join('.') !== 'name') {
        applyChange(lhs, rhs, d);
    }
});
