/// <reference path="./micromatch.d.ts"/>
import mm = require('micromatch');

var result: string[];
var boolResult: boolean;
var regExpResult: RegExp;

// Usage.
result = mm(['a.js', 'b.md', 'c.txt'], '*.{js,txt}');

// Multiple patterns.
result = mm(['a.md', 'b.js', 'c.txt', 'd.json'], ['*.md', '*.txt']);

// "isMatch" method.
boolResult = mm.isMatch('.verb.md', '*.md');
boolResult = mm.isMatch('.verb.md', '*.md', {dot: true});
boolResult = mm.isMatch('*.md', {dot: true})('.verb.md');

// "contains" method.
boolResult = mm.contains('a/b/c', 'a/b');
boolResult = mm.contains('a/b/c', 'a/b', {dot: true});

// "matcher" method.
var isMatch = mm.matcher('*.md');

// "filter" method.
var fn = mm.filter('*.md');
var fn = mm.filter('*.md', {dot: true});

// "any" method.
boolResult = mm.any('abc', ['!*z']);
boolResult = mm.any('abc', 'a*');
boolResult = mm.any('abc', 'a*', {dot: true});

// "expand" method.
mm.expand('*.js');
mm.expand('*.js', {dot: true});

// "makeRe" method.
regExpResult = mm.makeRe('*.js');
regExpResult = mm.makeRe('*.js', {dot: true});
